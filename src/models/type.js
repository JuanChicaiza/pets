import { DataTypes, Model } from 'sequelize';
import sequelize from '../conf/sequelize.js';

class Type extends Model{}

Type.init({
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
    modelName: 'Type',
    freezeTableName: true,    
    tableName: 'type',
    timestamps: true,  
    createdAt: true,  
    updatedAt: 'updateTimestamp'
})

//Type.sync({force:true})

export default Type