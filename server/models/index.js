/*jshint node:true, esversion:6*/
'use strict';

var Sequelize = require('sequelize');
// var crypto = require('crypto');

var db = new Sequelize('postgres://localhost:5432/nobo', {
    logging: false
});

db.define('client', {
    firstName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    lastName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            isEmail: true
        }
    },
    phone: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
            len: [10, 10]
        }
    },
    solde: {
      type: Sequelize.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    stripe: {
      type : Sequelize.STRING
    },
    comments: {
      type : Sequelize.TEXT
    }
});

db.define('majordome', {
    firstName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    lastName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            isEmail: true
        }
    },
    phone: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
            len: [10, 10]
        }
    },
    stripe: {
      type : Sequelize.STRING
    }
});

db.define('orders', {
    orderId: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    clientName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    active: {
      type: Sequelize.BOOLEAN,
      defaultValue: true
    }
});

module.exports = db;
