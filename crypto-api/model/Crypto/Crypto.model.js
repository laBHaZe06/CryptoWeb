const { DataTypes } = require('sequelize');

module.exports = {
    crypto
};

function crypto(sequelize)
{
    // modèle crypto avec pair: BTC/USDT, rank: 0 ou 1 ou [...], isDefault: true ou false
    const attributes = {
        pair: { type: DataTypes.STRING, allowNull: false },
        rank: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0 },
        isDefault: { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: false },
    };
    // pas de created at ou de uptaded at
    const options = {
        timestamps: false
    };

    return sequelize.define('Crypto', attributes, options);
}