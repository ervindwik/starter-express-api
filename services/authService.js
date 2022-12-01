const usersRepository = require("../repositories/usersRepository");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { JWT } = require("../lib/const");
const { OAuth2Client } = require("google-auth-library");

const SALT_ROUND = 10;

class AuthService {

    // ------------------------- Auth Register ------------------------- //

    static async handleRegister({ name, email, username, password , role_name}) {

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
            const hashedPassword = await bcrypt.hash(password, SALT_ROUND);
            const createdUser = await usersRepository.createNewUser({
                name,
                email,
                username,
                password: hashedPassword,
                role_name:"peserta"
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

    // ------------------------- End Auth Register ------------------------- //



    // ------------------------- Auth Login ------------------------- //
    static async handleLogin ({ username, password}) {
        
        // ------------------------- Payload Validation ------------------------- //
        
        if(!username){
            return {
                status: false,
                status_code: 400,
                message: "Username wajib diisi",
                data : {
                    login_user: null,
                },
            };
        }
        
        if(!password){
            return {
            status: false,
            status_code: 400,
            message: "Password wajib diisi",
            data : {
                login_user: null,
            },
            };
        }else if(password.length < 8){
            return {
                status: false,
                status_code: 400,
                message: "Password minimal 8 karakter",
                data : {
                    login_user: null,
                },
            };
        }

        // Flow Login
        // 1. Get data user sesuai dengan request email
        const getUser = await usersRepository.getUserByUsername({username});
    
        if (!getUser){
            return{
                status: false,
                status_code: 404,
                message: "Username belum terdaftar",
                data: {
                    user: null,
                },
            };
        }else{
            
            const isPasswordMatch = await bcrypt.compare(password, getUser.password);
    
            // 2. Bandingkan password user dengan password di database
            if (isPasswordMatch) {
                const token = jwt.sign ({
                    id : getUser.id,
                    username : getUser.username,
                }, 
                JWT.SECRET,
                {
                expiresIn: JWT.EXPIRED,
                });
            
            // 3. Kasih response berhasil login
            return{
                status: true,
                status_code: 201,
                message: "User berhasil login",
                data: {
                    token,
                },
            };
            }else{
                return{
                    status: false,
                    status_code: 400,
                    message: "Password salah",
                    data:{
                        user: null,
                    },
                };
            }
        }
    }
    // ------------------------- End Auth Login ------------------------- //

    static async loginGoogle({ google_credential: googleCredential }) {
        try {
            // Get google user credential
            const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);
        
            const userInfo = await client.verifyIdToken({
                idToken: googleCredential,
                audience: process.env.GOOGLE_CLIENT_ID,
            });
        
            const { email, name } = userInfo.payload;
        
            const getUserByEmail = await usersRepository.getByEmail({ email });
        
            if (!getUserByEmail) {
                await usersRepository.create({
                name,
                email,
                });
            }
        
            const token = jwt.sign(
                {
                id: getUserByEmail.id,
                email: getUserByEmail.email,
                },
                JWT.SECRET,
                {
                expiresIn: JWT.EXPIRED,
                }
            );
        
            return {
                status: true,
                status_code: 200,
                message: "User berhasil login",
                data: {
                token,
                },
            };
            } catch (err) {
            return {
                status: false,
                status_code: 500,
                message: err.message,
                data: {
                registered_user: null,
                },
            };
            }
        }
    
};

module.exports = AuthService;