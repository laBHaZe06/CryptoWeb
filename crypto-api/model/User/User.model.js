const { DataTypes } = require('sequelize');
const Sequelize = require('sequelize');

module.exports = {
    users
};

function users(sequelize)
{
    const attributes = {
        id:{type:Sequelize.INTEGER,autoIncrement:true,allowNull:false,primaryKey:true},
        username: { type: DataTypes.STRING, allowNull: true },
        email: { type: Sequelize.STRING, allowNull: false },
        password: { type: Sequelize.STRING, allowNull: false },
        role: { type: DataTypes.STRING, allowNull: false },
        access_token: { type: DataTypes.STRING, allowNull: true },
        google_token: { type: DataTypes.STRING, allowNull: true },
        createdAt: { type: DataTypes.DATE, allowNull: true },
        updatedAt: { type: DataTypes.DATE, allowNull: true },
    };
    const options = {
        // disable default timestamp fields (createdAt and updatedAt)   
        timestamps: true,
    };

    return sequelize.define('Users', attributes, options);
}