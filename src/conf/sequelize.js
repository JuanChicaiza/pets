import { Sequelize } from "sequelize";

const sequelize = new Sequelize('postgres://postgres:Suckit591591@localhost:5432/pets',{
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
      },
      //logging:false,
      dialectOptions:{
        useUTC:false,
        timezone:'America/Bogota'
      },
      timezone:'America/Bogota'
})

export default sequelize;