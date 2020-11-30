module.exports = (sequelize, DataTypes) => {
    const Pokemon = sequelize.define('Pokemon', {
        id: {
            type: DataTypes.NUMBER,
            primaryKey: true,
            autoIncrement: true
        },
        tipo: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        treinador: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        nivel: {
            type: DataTypes.NUMBER
        }
    }, {
        timestamps: false
    });

    return Pokemon;
}

