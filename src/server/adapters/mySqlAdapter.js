const { Sequelize, Model, DataTypes } = require('sequelize');
const { uuid } = require('uuidv4');

class Message extends Model {}
class User extends Model {}

module.exports = class MySqlAdapter {
    constructor(){
        this._sequelize = new Sequelize('olegmysqldb', 'olegka79', 'Qazwsx1!', {
            host: 'db4free.net',
            port: '3306',
            dialect: 'mysql',
            define: {
                timestamps: false       
            }
          });

          Message.init({
            message_id: {
                type: DataTypes.CHAR(36),
                allowNull: false,
                unique: true,
                primaryKey: true      
            },
            user_id: {
                type: DataTypes.BIGINT,
                allowNull: false
            },
            timestamp: {
                type: DataTypes.TIME,
                allowNull: false
            },
            text: {
                type: DataTypes.TEXT,
                allowNull: false
            }
        },{
            sequelize: this._sequelize,
            modelName: "Message",
            tableName:"messages"
        });

        User.init({
            user_id: {
                type: DataTypes.BIGINT,
                allowNull: false,
                unique: true,
                primaryKey: true
            },
            user_name: {
                type: DataTypes.TEXT,
                allowNull: false
            },
            avatar: {
                type: DataTypes.BLOB
            }
        },{
            sequelize: this._sequelize,
            modelName: "User",
            tableName:"users"
        });

        User.hasMany(Message, {foreignKey: 'user_id'});
        Message.belongsTo(User, {foreignKey: 'user_id'});
    }

    async getOrCreateUser(username) {
        const userQueryRes = await User.findOne({where:{user_name: username}});
        if(!userQueryRes) {
            const userAddRes = await User.upsert({user_name: username});
            return userAddRes[0]['null']; // I don't know how to get back created user id in "more elegant" way

        } else {
            return userQueryRes.user_id;
        }
    }

    async getLastMessages(count) {
        const queryRes = await (await Message.findAll({order:[['timestamp','DESC']], limit: count, include:[{
            model: User,
            attributes: ['user_name']
        }]})).reverse();
        return queryRes;
    } 

    async postMessage(userId, message) {
        var msg = {
            message_id:uuid(),
            timestamp: new Date(Date.now()),
            user_id:userId,
            text: message
        };
        await Message.upsert(msg);
        return msg;
    }

    




// TEST STUFF

    async testConnection() {
        try {
            await this._sequelize.authenticate();
            console.log('Connection has been established successfully.');
          } catch (error) {
            console.error('Unable to connect to the database:', error);
          }

    }

    async testGetData() {
        try {
            let res = await Message.findAll();
            for(let r of res) {
                console.log(r);
            }
        }
        catch(e) {
            console.error('Unable to connect to the database:', e);
        }
        
    }

    async testAddData(userId, message) {
        try {
            //await this.init();
            var message = {
                message_id:uuid(),
                timestamp: new Date(Date.now()),
                user_id:userId,
                text: message
    
            };
            await Message.upsert(message);

            //await this._sequelize.query(`insert into MESSAGES('message_id','timestamp','user_id','text') VALUES(${message.message_id},${message.timestamp},${message.user_id},'${message.text}')`);
        }
        catch(error) {
            console.error('Unable to connect to the database:', error);

        }
        
    }


}

