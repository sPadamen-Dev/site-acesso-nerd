module.exports = {
    "development": {
      "username": "root",
      "password": "",
      "database": "acesso_nerd_db_dev",
      "host": "127.0.0.1",
      "dialect": "mysql",
      "timezone": "-03:00"

    },
    "test": {
      "username": "root",
      "password": null,
      "database": "acesso_nerd_db_test",
      "host": "127.0.0.1",
      "dialect": "mysql",
      "define":{
        underscored: true
      }
    },
    "production": {
      "username": "root",
      "password": null,
      "database": "database_production",
      "host": "127.0.0.1",
      "dialect": "mysql",
      "define":{
        underscored: true
      }
    }
  }