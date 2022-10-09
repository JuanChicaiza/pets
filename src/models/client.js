import { DataTypes, Model } from 'sequelize';
import sequelize from '../conf/sequelize.js';

class Client extends Model{}

Client.init({
    id:{
        type:DataTypes.UUIDV4,
        primaryKey:true,
        defaultValue: DataTypes.UUIDV4
    },
    documentType:{
        type:DataTypes.STRING,
        allowNull:false
    },
    documentId:{
        type:DataTypes.STRING,
        allowNull:false
    },    
    name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    address:{
        type:DataTypes.STRING,
        allowNull:false
    },
    phone:{
        type:DataTypes.STRING,
        allowNull:false
    }
},
{
    sequelize,
    modelName: 'Client',
    freezeTableName: true,    
    tableName: 'clients',
    timestamps: true,  
    createdAt: true,  
    updatedAt: 'updateTimestamp'
}
)

Client.sync({force:true})

export default Client;