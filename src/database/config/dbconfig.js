module.exports = {
    "development": {
      "username": "new",
      "password": "New@1920*",
      "database": "acesso_nerd_db_dev",
      "host": "127.0.0.1",
      "dialect": "mysql",

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