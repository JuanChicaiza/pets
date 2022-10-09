import { DataTypes, Model } from 'sequelize';
import sequelize from '../conf/sequelize.js';

class State extends Model{}

State.init({
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement:true
    },
    name:{
        type:DataTypes.STRING,
        allowNull:false
    }
},
{
    sequelize,
    modelName: 'State',
    freezeTableName: true,    
    tableName: 'state',
    timestamps: true,  
    createdAt: true,  
    updatedAt: 'updateTimestamp'
})

//State.sync({force:true})

export default State