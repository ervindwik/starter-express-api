const usersRepository = require("../repositories/usersRepository");
const cloudinary = require("../cloudinary/cloudinary");
const bcrypt = require("bcrypt");
const UsersRepository = require("../repositories/usersRepository");

const SALT_ROUND = 10;

class UsersService {

    // ------------------------- Handle Get All Users ------------------------- //

    static async handleGetAllUsers() {

        const handleGetAllUsers = await usersRepository.handleGetAllUsers();

        return {
            status: true,
            status_code: 200,
            message: "Berhasil mendapatkan semua data users",
            data: {
                get_all_users: handleGetAllUsers,
            },
        };
    };

    // ------------------------- End Handle Get All Users ------------------------- //


    // ------------------------- Handle Get User By Id ------------------------- //

    static async handleGetUserById({ id }) {
        const handleGetUserById = await usersRepository.handleGetUserById({ id });

        return {
            status: true,
            status_code: 200,
            message: "Berhasil mendapatkan data user berdasarkan id",
            data: {
                user_by_id: handleGetUserById,
            },
        };
    };

    // ------------------------- End Handle Get User By Id ------------------------- //

    // ------------------------- Auth CreateUser ------------------------- //

    static async handleCreateUser({ name, email, username, password, role_name, position, picture,about}) {

        // ------------------------- Payload Validation ------------------------- //

        if (!name) {
            return {
                status: false,
                status_code: 400,
                message: "Nama wajib diisi!",
                data: {
                    registered_user: null,
                },
            };
        }

        if (!email) {
            return {
                status: false,
                status_code: 400,
                message: "Email wajib diisi!",
                data: {
                    registered_user: null,
                },
            };
        }

        if (!username) {
            return {
                status: false,
                status_code: 400,
                message: "Username wajib diisi!",
                data: {
                    registered_user: null,
                },
            };
        }
        if (!role_name) {
            return {
                status: false,
                status_code: 400,
                message: "Nama Role wajib diisi!",
                data: {
                    registered_user: null,
                },
            };
        }

        if (!password) {
            return {
                status: false,
                status_code: 400,
                message: "Password wajib diisi!",
                data: {
                    registered_user: null,
                },
            };
        } else if ( password.length < 8 ) {
            return {
                status: false,
                status_code: 400,
                message: "Password minimal 8 karakter!",
                data: {
                    registered_user: null,
                },
            };
        }

        const getUserByEmail = await usersRepository.getUserByEmail({ email });
        const getUserByUsername = await usersRepository.getUserByUsername({username});

        if (getUserByEmail) {
            return {
                status: false,
                status_code: 400,
                message: "Email sudah digunakan!",
                data: {
                    registered_user: null,
                },
            };
        }
        else if (getUserByUsername){
            return {
                status: false,
                status_code: 400,
                message: "Username sudah digunakan!",
                data: {
                    registered_user: null,
                },
            }
        } else {
            
            let pictures = "";
            const fileBase64 = picture.buffer.toString("base64");
            const file = `data:${picture.mimetype};base64,${fileBase64}`;
            const cloudinaryPicture = await cloudinary.uploader.upload(file);
            pictures = cloudinaryPicture.url;
            
            const hashedPassword = await bcrypt.hash(password, SALT_ROUND);
            const createdUser = await usersRepository.createNewUserForAdmin({
                name,
                email,
                username,
                password: hashedPassword,
                role_name,
                position,
                picture:pictures,
                about

            });

            return {
                status: true,
                status_code: 201,
                message: "Berhasil mendaftarkan user!",
                data: {
                    registered_user: createdUser,
                },
            };
        }
    }

    // ------------------------- End Auth CreateUser ------------------------- //


    // ------------------------- Handle Update Users ------------------------- //

    static async handleUpdateUsers({ id, name, username, email, position, about, picture }) {

        const getUserById = await usersRepository.handleGetUserById({ id });

        if (getUserById.id == id ) {

            let pictures = "";

            if (picture) {
                const fileBase64 = picture.buffer.toString("base64");
                const file = `data:${picture.mimetype};base64,${fileBase64}`;
                const cloudinaryPicture = await cloudinary.uploader.upload(file);
                pictures = cloudinaryPicture.url;
            } else {
                pictures = getUserById.picture;
            }
            

            const updatedUser = await usersRepository.handleUpdateUsers({
                id,
                name,
                username,
                email,
                position,
                about,
                picture: pictures
            });
    
            return {
                status: true,
                status_code: 200,
                message: "User berhasil melengkapi info akun!",
                data: {
                    updated_user: updatedUser,
                },
            };
        } else {
            return {
                status: false,
                status_code: 401,
                message: "Resource Unauthorized",
                data: {
                    updated_user: null,
                },
            };
        }
    };

    // ------------------------- End Handle Update Users ------------------------- //



    // ------------------------- Handle Delete Users ------------------------- //

    static async handleDeleteUsers({ id }) {

        const handleGetUserById = await usersRepository.handleGetUserById({ id });

        if (handleGetUserById.id == id) {

            const deletedUsers = await usersRepository.handleDeleteUsers({ id });

            return {
                status: true,
                status_code: 200,
                message: "User berhasil di hapus",
                data: {
                    deleted_users: deletedUsers,
                },
            };
        } else {
            return {
                status: true,
                status_code: 401,
                message: "Resource Unauthorized",
                data: {
                    deleted_users: null,
                },
            };
        }
    }

    // ------------------------- End Handle Delete Users ------------------------- //



    // ------------------------- Handle Get Product By role name ------------------------- //

    static async handleGetUserByRoleName({ id, role_name }) {
        try {
            const handleGetUserByRoleName = await usersRepository.handleUserByRoleName({ id, role_name });

            return {
                status: true,
                status_code: 200,
                message: "Success Get User By Role Id",
                data: {
                    user_role_id: handleGetUserByRoleName,
                },
            };
        } catch (err) {
            return {
                status: false,
                status_code: 500,
                message: err.message,
                data: {
                    user_role_id: null,
                },
            };
        };
    };

    // ------------------------- End Handle Get Product By User Id ------------------------- //

    // ------------------------- Handle Get Product By role name ------------------------- //

    static async handleUserChangePassword({id, password}) {
        
        const getUserById = await UsersRepository.handleGetUserById({ id });

        if (getUserById.id == id) {
            const hashedPassword = await bcrypt.hash(password, SALT_ROUND);
            let newPass = hashedPassword;
            
            let newPassword = {
                password: newPass ? newPass : getUserById.password,
            };
    
            const updatePassword = await usersRepository.handleUserChangePassword({
                id,
                password:hashedPassword
            });

            return {
                status: true,
                status_code:200,
                message: newPassword,
                data: {
                    updated_password_user: updatePassword,
                },
            }
        }else {
            return{
                status: false,
                status_code: 401,
                message: "Data Undifined",
                data: {
                    updated_password_user: null,
                },
            };
        }
    };

    // ------------------------- End Handle Get Product By User Id ------------------------- //

        // ------------------------- Handle Get User By Id ------------------------- //

        static async handleGetUserComparePassword({ id, password }) {
            const checkData = await usersRepository.handleGetUserById({ id });
            if (!checkData){
                return {
                    status: false,
                    status_code: 300,
                    message: "User doesn't exist"
                }
            } else {
                const passwordMatch = await bcrypt.compare(password, checkData.password);
                if (!passwordMatch){
                    return {
                        status: false,
                        status_code: 300,
                        message: "Password not Match"
                    }
                } else {
                    return {
                        status: true,
                        status_code: 200,
                        message: "Password Match"
                    }
                }
            }
        };
    
        // ------------------------- End Handle Get User By Id ------------------------- //

        static async handleGetCourseByUserId({ id }) {
            try {
                const handleGetCourseByUserId = await usersRepository.handleGetCourseByUserId({ id });
    
                return {
                    status: true,
                    status_code: 200,
                    message: "Success Get Course By User Id",
                    data: {
                        course_user_id: handleGetCourseByUserId,
                    },
                };
            } catch (err) {
                return {
                    status: false,
                    status_code: 500,
                    message: err.message,
                    data: {
                        course_user_id: null,
                    },
                };
            };
        };

};

module.exports = UsersService;