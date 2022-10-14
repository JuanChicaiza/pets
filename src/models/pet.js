import { DataTypes, Model } from 'sequelize';
import sequelize from '../conf/sequelize.js';
import Type from './type.js';
import Breed from './breed.js';
import State from './state.js';
import Client from './client.js';

class Pet extends Model{}

Pet.init({
    id:{
        type:DataTypes.UUID,
        primaryKey:true,
        defaultValue: DataTypes.UUIDV4
    },
    name:{
        type:DataTypes.STRING,
        allowNull:false        
    },
    description:{
        type:DataTypes.STRING,
        allowNull:false
    },
    image:{
        type:DataTypes.STRING,
        defaultValue:"default.png"
    }
},
{
    sequelize,
    modelName: 'Pet',
    freezeTableName: true,    
    tableName: 'pets',
    timestamps: true,  
    createdAt: true,  
    updatedAt: 'updateTimestamp'
})

Type.hasMany(Pet,{
    foreignKey: {        
        allowNull: false
    },
    onDelete: 'RESTRICT',
    onUpdate: 'RESTRICT'
})

Breed.hasMany(Pet,{
    foreignKey: {        
        allowNull: false
    },
    onDelete: 'RESTRICT',
    onUpdate: 'RESTRICT'
})

State.hasMany(Pet,{
    foreignKey: {        
        allowNull: false
    },
    onDelete: 'RESTRICT',
    onUpdate: 'RESTRICT'
})

Client.hasMany(Pet,{
    foreignKey: {        
        allowNull: true
    },
    onDelete: 'RESTRICT',
    onUpdate: 'RESTRICT'
})

//Pet.sync({force:true})

export default Pet