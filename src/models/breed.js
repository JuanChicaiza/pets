import { DataTypes, Model } from 'sequelize';
import sequelize from '../conf/sequelize.js';
import Type from './type.js';

class Breed extends Model{}

Breed.init({
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement:true
    },
    name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    description:{
        type:DataTypes.TEXT,
        allowNull:false                
    }
},
{
    sequelize,
    modelName: 'Breed',
    freezeTableName: true,    
    tableName: 'breed',
    timestamps: true,  
    createdAt: true,  
    updatedAt: 'updateTimestamp'
})

Type.hasMany(Breed,{
    foreignKey: {        
        allowNull: false
    },
    onDelete: 'RESTRICT',
    onUpdate: 'RESTRICT'
})


//Breed.sync({force:true})

export default Breed