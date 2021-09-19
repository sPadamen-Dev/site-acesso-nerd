module.exports = (sequelize, DataType) => {
    const Administrator = sequelize.define('Administrator', {
        id_admin:{
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        user: DataType.STRING,
        name: DataType.STRING,
        cpf: DataType.STRING,
        email: DataType.STRING,
        imgPath: DataType.STRING,
        password: DataType.STRING,
        status: DataType.CHAR(1)
    },{
        tableName: 'administrators'
    })

    return Administrator
}
