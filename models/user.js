const {DataTypes} = require ('sequelize');


const User = sequelize.define('User',{

    id : {
        type : DataTypes.INTEGER,
        autoIncrement : true,
        primaryKey : true,
    },
    email : {
        type : DataTypes.STRING,
        allowNull : false,
    },
    fullname : {
        type : DataTypes.STRING,
        allowNull : false,
    },
    password : {
        type : DataTypes.STRING,
        allowNull : false,
    },
    telephone : {
        type : DataTypes.STRING,
        allowNull : false,
    },

});


module.exports = User;