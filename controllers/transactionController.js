const TransactionService = require("../services/transactionService");
const transactionService = require("../services/transactionService");


// ------------------------- Handle Create Transaction ------------------------- //

const handleCreateTransaction = async (req, res) => {
    const { course_id, is_success } = req.body;

    const user_id = req.user.id;

    const { status, status_code, message, data} = await transactionService.handleCreateTransaction({
        user_id,
        course_id,
        is_success,
    });

    res.status(status_code).send({
        status: status,
        message: message,
        data: data,
    });
};
// ------------------------- End handle Create Transaction ------------------------- //


// ------------------------- Handle Get All Transaction ------------------------- //

const handleGetAllTransaction = async (req, res) => {
    
    const { status, status_code, message, data} = await transactionService.handleGetAllTransaction();

    res.status(status_code).send({
        status: status,
        message: message,
        data: data,
    });
};

// ------------------------- End Handle Get All Transaction ------------------------- //


// ------------------------- Handle Get Transaction By Id ------------------------- //

const handleGetTransactionById = async (req, res) => {
    
    const { id } = req.params;

    const { status, status_code, message, data} = await transactionService.handleGetTransactionById({ id });

    res.status(status_code).send({
        status: status,
        message: message,
        data: data,
    });
};

// ------------------------- End Handle Get Transaction By Id ------------------------- //

// ------------------------- Handle Get Transaction By User Id ------------------------- //

const handleGetTransactionByUserId = async (req, res) => {
    
    const { user_id } = req.params;

    const { status, status_code, message, data} = await transactionService.handleGetTransactionByUserId({ user_id });

    res.status(status_code).send({
        status: status,
        message: message,
        data: data,
    });
};

// ------------------------- End Handle Get Transaction By User Id ------------------------- //


//  ------------------------- Handle Update Courses ------------------------- //

const handleUpdateTransaction = async (req, res, next) => {

    const { id } = req.params;
    const { is_success } = req.body;

    const { status, status_code, message, data} = await transactionService.handleUpdateTransaction({
        id,
        is_success,
    });

    res.status(status_code).send({
        status: status,
        message: message,
        data: data,
    });
};


// ------------------------- End Handle Update Courses ------------------------- //


// ------------------------- Handle Delete Transaction ------------------------- //

const handleDeleteTransactionById = async (req, res, next) => {
    const { id } = req.params;

    const { status, status_code, message, data } = await transactionService.handleDeleteTransaction({ id });

    res.status(status_code).send({
        status: status,
        message: message,
        data: data,
    });
}


// ------------------------- End Handle Delete Courses ------------------------- //

// ------------------------- Handle Get All Data Transaction ------------------------- //

const handleGetAllDataTransactionById = async (req, res) => {
    
    const { id } = req.params;

    const { status, status_code, message, data} = await transactionService.handleGetAllDataTransactionById({ id });

    res.status(status_code).send({
        status: status,
        message: message,
        data: data,
    });
};

// ------------------------- End Handle Get All Data Transaction ------------------------- //

module.exports = { 
    handleCreateTransaction,
    handleDeleteTransactionById,
    handleGetAllTransaction,
    handleGetTransactionById,
    handleGetTransactionByUserId,
    handleUpdateTransaction,
    handleGetAllDataTransactionById
};

