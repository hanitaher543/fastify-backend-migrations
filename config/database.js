const {Sequelize} = require ('sequelize');

const sequelize = new Sequelize ('dbhanitest', 'postgres', 'postgres', {
    host : 'localhost',
    dialect : 'postgres',
});

module.exports = sequelize;