const authService = require("../services/authService");

// ------------------------- Auth Register ------------------------- //

const handleRegister = async (req, res) => {
    const { name, email, username, password, role_name } = req.body;

    const { status, status_code, message, data} = await authService.handleRegister({
        name,
        email,
        username,
        password,
        role_name
    });

    res.status(status_code).send({
        status: status,
        message: message,
        data: data,
    });
};

// ------------------------- End Auth Register ------------------------- //

// ------------------------- Auth Login ------------------------- //

const handleLogin = async (req, res) => {
    const {username, password} = req.body;

    const {status, status_code, message, data} = await authService.handleLogin({
        username,
        password,
    });

    res.status(status_code).send({
        status : status,
        message: message,
        data : data,
    });
};

// ------------------------- End Auth Login ------------------------- //

const loginGoogle = async (req, res) => {
    const { google_credential } = req.body;

    const { status, status_code, message, data } = await authService.loginGoogle({
        google_credential,
    });

    res.status(status_code).send({
        status: status,
        message: message,
        data: data,
    });
};


// ------------------------- Auth Current User ------------------------- //

const handleCurrentUser = async (req, res) => {
    
    const currentUser = req.user;

    res.status(200).send({
        status: true,
        message: "Get current user success.",
        data: {
            user: currentUser,
        },
    });
}

// ------------------------- End Auth Current User ------------------------- //


module.exports = { handleRegister, handleLogin, handleCurrentUser, loginGoogle };