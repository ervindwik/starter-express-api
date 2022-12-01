const usersService = require("../services/usersService");


// ------------------------- Handle Get All Users ------------------------- //

const handleGetAllUsers = async (req, res) => {
    
    const { status, status_code, message, data} = await usersService.handleGetAllUsers();

    res.status(status_code).send({
        status: status,
        message: message,
        data: data,
    });
};

// ------------------------- End Handle Get All Users ------------------------- //



// ------------------------- Handle Get User By Id ------------------------- //

const handleGetUserById = async (req, res) => {
    
    const { id } = req.params;

    const { status, status_code, message, data} = await usersService.handleGetUserById({ id });

    res.status(status_code).send({
        status: status,
        message: message,
        data: data,
    });
};

// ------------------------- End Handle Get User By Id ------------------------- //



// ------------------------- Handle Update Users ------------------------- //

const handleUpdateUsers = async (req, res, next) => {

    const { id } = req.params;
    const { name, username, email, position, about } = req.body;

    const { status, status_code, message, data} = await usersService.handleUpdateUsers({
        id,
        name,
        username,
        email,
        position,
        about,
        picture: req.file,
    });

    res.status(status_code).send({
        status: status,
        message: message,
        data: data,
    });

};

// ------------------------- End Handle Update Users ------------------------- //


// ------------------------- Handle Delete  Users ------------------------- //

const handleDeleteUsers = async (req, res, next) => {
    const { id } = req.params;

    const { status, status_code, message, data } = await usersService.handleDeleteUsers({ id });

    res.status(status_code).send({
        status: status,
        message: message,
        data: data,
    });
}


// ------------------------- End Handle Delete Users ------------------------- //



// ------------------------- Handle Get Product By User Id ------------------------- //

const handleGetUserByRoleName = async (req, res, next) => {

    const { id } = req.params;

    const { role_name } = req.query;

    const { status, status_code, message, data } =
        await usersService.handleGetUserByRoleName({ id, role_name });

    res.status(status_code).send({
        status: status,
        message: message,
        data: data,
    });
};

// ------------------------- End Handle Get Product By User Id ------------------------- //

// ------------------------- Handle Get Product By User Id ------------------------- //

const handleUserChangePassword = async (req, res, next) => {

    const { id } = req.params;

    const { password } = req.body;

    const { status, status_code, message, data } =
        await usersService.handleUserChangePassword({ id, password });

    res.status(status_code).send({
        status: status,
        message: message,
        data: data,
    });
};

// ------------------------- End Handle Get Product By User Id ------------------------- //

// ------------------------- Handle Create User ------------------------- //

const handleCreateUser = async (req, res) => {
    const { name, email, username, password, role_name, position,about } = req.body;

    const { status, status_code, message, data} = await usersService.handleCreateUser({
        name,
        email,
        username,
        password,
        role_name,
        position,
        picture:req.file,
        about
    });

    res.status(status_code).send({
        status: status,
        message: message,
        data: data,
    });
};

// ------------------------- End Handle Create User ------------------------- //

// ------------------------- Handle Get User Compare Password ------------------------- //

const handleUserComparePassword = async (req, res, next) => {

    const { id } = req.params;

    const { password } = req.body;

    const { status, status_code, message, data } =
        await usersService.handleGetUserComparePassword({ id, password });

    res.status(status_code).send({
        status: status,
        message: message,
        data: data,
    });
};



// ------------------------- End Handle Get User Compare Password ------------------------- //

const handleGetCourseByUserId = async (req, res, next) => {

    const { id } = req.params;

    const { status, status_code, message, data } =
        await usersService.handleGetCourseByUserId({ id });

    res.status(status_code).send({
        status: status,
        message: message,
        data: data,
    });
};

module.exports = { 
    handleUpdateUsers, 
    handleGetAllUsers, 
    handleGetUserById, 
    handleDeleteUsers,
    handleGetUserByRoleName,
    handleUserChangePassword,
    handleUserComparePassword,
    handleGetCourseByUserId,
    handleCreateUser,
};