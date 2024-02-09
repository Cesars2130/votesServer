require("dotenv").config()
const db = require("../configs/db.config")
class Session{
    constructor({id_session,topPlayer,secondPlayer,thirdPlayer,fourthPlayer,fifthPlayer,createdAt,updateAt,deletedAt,deleted}){
        this.id_session = id_session;
        this.topPlayer = topPlayer;
        this.secondPlayer = secondPlayer;
        this.thirdPlayer = thirdPlayer;
        this.fourthPlayer = fourthPlayer;
        this.fifthPlayer = fifthPlayer;
        this.createdAt = createdAt;
        this.updateAt = updateAt;
        this.deletedAt = deletedAt;
        this.deleted = deleted;
    }

    async save(){
        const connection = await db.createConnection()

        const createdAt = new Date()
        const [result] = await connection.execute("INSERT INTO session (topPlayer,secondPlayer,thirdPlayer,forthPlayer,fifthPlayer,created_at) VALUES (?,?,?,?,?)",[this.nombre,this.correo,this.password,createdAt])
        
        connection.end()

        if(result.insertId == 0){
            throw new Error("No se pudo guardar el usuario")
        }
        this.id_usuario = result.insertId
    }


    //no le se
    static async getAll(){
        const connection = await db.createConnection()
        const [users] = await connection.execute("SELECT * FROM session")
        connection.end();
        return users
    }
    

}
module.exports = Usuario