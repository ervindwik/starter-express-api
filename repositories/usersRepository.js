const { Users, Roles, Courses } = require("../models");

class UsersRepository {


    // ------------------------- Handle Get All Users ------------------------- //

    static async handleGetAllUsers(){
        const handleGetAllUsers = await Users.findAll();

        return handleGetAllUsers;
    };

    // ------------------------- End Handle Get All Users ------------------------- //


    // ------------------------- End Handle Get User By Id ------------------------- //

    static async handleGetUserById({ id }){
        const handleGetUserById = await Users.findOne({
            where: { id }
        });

        return handleGetUserById;
    }

    // ------------------------- End Handle Get User By Id ------------------------- //



    // ------------------------- Get User By Email  ------------------------- //

    static async getUserByEmail({ email }) {
        const getUserEmail = await Users.findOne({
            where: {
                email: email
            }
        });

        return getUserEmail;
    };

    // ------------------------- End Get User By Email  ------------------------- //

    // ------------------------- Get User By Username  ------------------------- //

    static async getUserByUsername({ username }) {
        const getUserUsername = await Users.findOne({
            where: {
                username: username
            }
        });

        return getUserUsername;
    };

    // ------------------------- End Get User By Username  ------------------------- //


    // ------------------------- Register User  ------------------------- //
    
    static async createNewUser({ name, email, username, password, role_name }) {
        const createdUser = Users.create({
            name,
            username,
            email,
            password,
            role_name
        });

        return createdUser;
    };
    
    // ------------------------- End Register User  ------------------------- //


    // ------------------------- Create User for Admin ------------------------- //
    
    static async createNewUserForAdmin({ name, email, username, password, role_name, position, picture,about }) {
        const createNewUserForAdmin = Users.create({
            name,
            username,
            email,
            password,
            role_name,
            position,
            picture,
            about
        });

        return createNewUserForAdmin;
    };
    
    // ------------------------- End Create User for Admin  ------------------------- //


    
    // ------------------------- Update User (Complete Account Info)  ------------------------- //
    
    static async handleUpdateUsers({ id, name, username, email, position, about, picture, role_name }) {

        const updatedUser = await Users.update({
            name,
            username,
            email,
            position,
            about,
            picture,
            role_name
        }, {
            where: { id },
        });

        return updatedUser;
        
    };

    // ------------------------- End Update User (Complete Account Info)  ------------------------- //


    // ------------------------- Handle Delete Users ------------------------- //

    static async handleDeleteUsers({ id }) {
        
        const deletedUsers = await Users.destroy({ where: { id } });

        return deletedUsers;
    }

    // ------------------------- End Handle Delete Users ------------------------- //


    
    // ------------------------- Handle Get Product By User Id ------------------------- //

    static async handleUserByRoleName({ id, role_name }){

        const query = {
            where: {}
        }

        if (id) {
            query.where = { ...query.where, role_name: id }
        }

        if (role_name) {
            query.where = { ...query.where, role_name }
        }

        const handleGetUserByRoleName = await Users.findAll(query);

        return handleGetUserByRoleName;
    }

    // ------------------------- End Handle Get Product By User Id ------------------------- //

    // ------------------------- Handle Get User Change Password ------------------------- //

    static async handleUserChangePassword({ id, password }){

        const changePassword = await Users.update({
            password
        }, {
            where: { id },
        });

        return changePassword;
    }

    // ------------------------- End Handle Get User Change Password ------------------------- //

        // ------------------------- Handle Get User Change Password ------------------------- //

        static async handleUserComparePassword({ id, password }){

            const comparePassword = await Users.findOne({
                where: { id, password },
            });
    
            return comparePassword;
        }
    
        // ------------------------- End Handle Get User Change Password ------------------------- //

        // ------------------------- Handle Get Product By User Id ------------------------- //

    static async handleGetCourseByUserId({ id }){

        const query = {
            where: {}
        }

        if (id) {
            query.where = { ...query.where, user_id: id }
        }

        const handleGetProductByUserId = await Courses.findAll(query);

        return handleGetProductByUserId;
    }

    // ------------------------- End Handle Get Product By User Id ------------------------- //

};

module.exports = UsersRepository;