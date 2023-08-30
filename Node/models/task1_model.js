const database = require('../config/DataBase')
class UserInfo{
    constructor(name = "", email = ""){
        this.name = name;
        this.email = email;
    }
    async savedata(){
        const date = new Date();
        const c_date = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
        const sql = `INSERT INTO new_table (name, email, created_date) VALUES ('${this.name}', '${this.email}', '${c_date}')`
        const [newuser, _] = await database.execute(sql)
        return newuser; 
    }
    async getalldata(){
        const sql = 'SELECT * FROM new_table';
        const [alldata, _] = await database.execute(sql)
        return alldata;
    }
    async getiddata(id){
        const sql = `SELECT * FROM new_table WHERE id = ${id}`;
        const [alldata, _] = await database.execute(sql)
        return alldata;
    }
}
module.exports = UserInfo;