const { Transaction } = require("../models");
const { Op, QueryTypes } = require("sequelize");
const { sequelize } = require("../models/index.js");

class TransactionRepository {
  // ------------------------- Handle Get All Transactions ------------------------- //

    static async handleGetAllTransaction(){
        const handleGetAllTransaction = await Transaction.findAll();

        return handleGetAllTransaction;
    };

    // ------------------------- End Handle Get All Transactions ------------------------- //
 
    // ------------------------- Get Transaction By  User Id  ------------------------- //

    static async getTransactionByUserId({ user_id }) {
      const getTransactionUserId = await Transaction.findOne({
          where: {
              user_id:user_id
          }
      });

      return getTransactionUserId;
    };

  // ------------------------- End Get Transaction By User Id  ------------------------- //
  

  // ------------------------- End Handle Get Transaction By Id ------------------------- //

  static async handleGetTransactionById({ id }){
      const handleGetTransactionById = await Transaction.findOne({
          where: { id }
      });

      return handleGetTransactionById;
  }

  // ------------------------- End Handle Get Transaction By Id ------------------------- //


  // ------------------------- Create Transaction  ------------------------- //
  
  static async handleCreateTransaction({ user_id, course_id, is_success}) {
      const handleCreateTransaction = Transaction.create({
          user_id,
          course_id,
          is_success,
      });

      return handleCreateTransaction; 
  };
  
  // ------------------------- End Create Transaction  ------------------------- //

      // ------------------------- Update Transaction  ------------------------- //
    
      static async handleUpdateTransaction({ id, is_success }) {

          const updatedTransaction = await Transaction.update({
            id,
            is_success,
          }, {
              where: { id },
          });

          return updatedTransaction;
        
      };

      // ------------------------- End Update Transaction  ------------------------- //

  // ------------------------- Handle Delete Transactions ------------------------- //

  static async handleDeleteTransaction({ id }) {
      
      const deletedTransaction = await Transaction.destroy({ where: { id } });

      return deletedTransaction;
  }

  // ------------------------- End Handle Delete Transactions ------------------------- //

    // ------------------------- End Handle Get All Data Transaction by Id ------------------------- //

    static async handleGetAllDataTransactionById({ id }){
        return await sequelize.query(`select T.*, U.name as "Nama Pembeli", U.username,U.email,C.course_name, CAST(C.price AS int),(select U.name from "Users" U where U.id = C.user_id) as "Nama Pengajar" from public."Courses" as C 
        join "Transactions" T  ON T.course_id  = C.id  
        JOiN "Users" U ON U.id = T.user_id
        where T.id = :id`,{
            type: QueryTypes.SELECT,
            replacements: {
                id:id,
            }
        });
    }
  
    // ------------------------- End Handle Get All Data Transaction by Id ------------------------- //

}

module.exports = TransactionRepository;