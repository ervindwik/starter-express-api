const transactionRepository = require("../repositories/transactionRepository");
const coursesRepository = require("../repositories/coursesRepository");

class TransactionService {
    // ------------------------- Handle Get All Transaction ------------------------- //

    static async handleGetAllTransaction() {

        const handleGetAllTransaction = await transactionRepository.handleGetAllTransaction();

        return {
            status: true,
            status_code: 200,
            message: "Success Get All Transaction",
            data: {
                get_all_transaction: handleGetAllTransaction,
            },
        };
    };

    // ------------------------- End Handle Get All Transaction ------------------------- //

    // ------------------------- Handle Create Transaction ------------------------- //

    static async handleCreateTransaction({ user_id, course_id, is_success}) {

        if(!user_id){
            return {
                status: false,
                status_code: 400,
                message: "User Id tidak ditemukan",
                data: {
                    create_transaction: null,
                },
            };
        }
        if(!course_id){
            return {
                status: false,
                status_code: 400,
                message: "Course Id tidak ditemukan!",
                data: {
                    create_transaction: null,
                },
            };
        }
        const handleCreateTransaction = await transactionRepository.handleCreateTransaction({
            user_id,
            course_id,
            is_success:false,
        });

        return {
            status: true,
            status_code: 201,
            message: "Success Add Transaction",
            data: {
                create_transaction: handleCreateTransaction,
            },
        };
    }

    // ------------------------- End Create Transaction ------------------------- //


    // ------------------------- Handle Get transaction By Id ------------------------- //

    static async handleGetTransactionById({ id }) {
        const handleGetTransactionById = await transactionRepository.handleGetTransactionById({ id });

        return {
            status: true,
            status_code: 200,
            message: "Success Get Transaction By ID",
            data: {
                transaction_by_id: handleGetTransactionById,
            },
        };
    };

    // ------------------------- End Handle Get Transaction By Id ------------------------- //

    // ------------------------- Handle Get Transaction By User Id ------------------------- //

    static async handleGetTransactionByUserId({ user_id }) {
        const handleGetTransactionByUserId = await transactionRepository.getTransactionByUserId({ user_id });

        return {
            status: true,
            status_code: 200,
            message: "Success Get Transaction By User",
            data: {
                transaction_by_user_id: handleGetTransactionByUserId,
            },
        };
    };

    //  ------------------------- End Handle Get Transaction By User Id ------------------------- //


    // ------------------------- Handle Update Transaction ------------------------- //

    static async handleUpdateTransaction({ id, is_success }) {

        const getTransactionById = await transactionRepository.handleGetTransactionById({ id })

        if (!getTransactionById.id == id){
            return{
                status: false,
                status_code: 300,
                message: "cannot update Transaction",
            }
        }
        else {
            const updateTransaction = await transactionRepository.handleUpdateTransaction({
                id,
                is_success: true,
            });

            return {
                status: true,
                status_code: 200,
                message: "Success Update Transaction",
                data: {
                    updated_transaction: updateTransaction,
                }
            };
        }
    };

    // ------------------------- End Handle Update Courses ------------------------- //


    // ------------------------- Handle Delete Transaction ------------------------- //

    static async handleDeleteTransaction({ id }) {

        const handleGetTransactionById = await transactionRepository.handleGetTransactionById({ id });

        if (handleGetTransactionById.id == id) {

            const deletedTransaction = await transactionRepository.handleDeleteTransaction({ id });

            return {
                status: true,
                status_code: 200,
                message: "Success Delete Transaction",
                data: {
                    deleted_transaction: deletedTransaction,
                },
            };
        } else {
            return {
                status: true,
                status_code: 401,
                message: "Resource Unauthorized",
                data: {
                    deleted_transaction: null,
                },
            };
        }
    }

    // ------------------------- End Handle Delete Transaction ------------------------- //

    // ------------------------- Handle Get Course By Id ------------------------- //

    static async handleGetAllDataTransactionById({ id }) {
        const handleGetAllDataTransactionById = await transactionRepository.handleGetAllDataTransactionById({ id });

        return {
            status: true,
            status_code: 200,
            message: "Berhasil mendapatkan semua data transaksi berdasarkan id",
            data: {
                all_data_transaction_by_id: handleGetAllDataTransactionById,
            },
        };
    };

    // ------------------------- End Handle Get Course By Id ------------------------- //

}

module.exports = TransactionService;