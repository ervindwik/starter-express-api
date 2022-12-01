const modulesRepository = require("../repositories/modulesRepository");
const cloudinary = require("../cloudinary/cloudinary");


class ModulesService {
    // ------------------------- Handle Get All Modules ------------------------- //

    static async handleGetAllModules() {

        const handleGetAllModules = await modulesRepository.handleGetAllModules();

        return {
            status: true,
            status_code: 200,
            message: "Berhasil mendapatkan semua data modul",
            data: {
                get_all_moduls: handleGetAllModules,
            },
        };
    };

    // ------------------------- End Handle Get All Modules ------------------------- //

    
    // ------------------------- Handle Get Module By Id ------------------------- //

    static async handleGetModuleById({ id }) {
        const handleGetModuleById = await modulesRepository.handleGetModuleById({ id });

        return {
            status: true,
            status_code: 200,
            message: "Berhasil mendapatkan data modul berdasarkan id",
            data: {
                get_module_by_id: handleGetModuleById,
            },
        };
    };

    // ------------------------- End Handle Get Module By Id ------------------------- //

    // ------------------------- Handle Create Modul ------------------------- //

    static async handleCreateModule({  module_name, module_text, module_file, course_id}) {

        // ------------------------- Payload Validation ------------------------- //
        try {
            if (!module_name) {
                return {
                    status: false,
                    status_code: 400,
                    message: "Nama modul wajib diisi!",
                    data: {
                        registered_modul: null,
                    },
                };
            }
            if (!module_text) {
                return {
                    status: false,
                    status_code: 400,
                    message: "Text modul wajib diisi!",
                    data: {
                        registered_modul: null,
                    },
                };
            }

            if (!module_file) {
                return {
                    status: false,
                    status_code: 400,
                    message: "file modul wajib diisi!",
                    data: {
                        registered_modul: null,
                    },
                };
            }
                
            const files = [];
            
            await Promise.all(module_file.module_file.map(async (pct) => {
                const fileBase64 = pct.buffer.toString("base64");
                const file = `data:${pct.mimetype};base64,${fileBase64}`;
                const cloudinaryFile = await cloudinary.uploader.upload(file);
                files.push(cloudinaryFile.url);
            }));
            

            const handleCreateModule = await modulesRepository.handleCreateModule({
                module_name,
                module_text,
                module_file: files,
                course_id
            });
        
            return {
                status: true,
                status_code: 201,
                message: "Berhasil mendaftarkan modul!",
                data: {
                    registered_modul: handleCreateModule,
                },
            };
        }catch (err){
            return {
                status: false,
                status_code: 500,
                message: err.message,
                data: {
                    registered_modul: null,
                },
            };
        }
    }

    // ------------------------- End Create Module ------------------------- //



    // ------------------------- Handle Update Moduls ------------------------- //

    static async handleUpdateModules({ id, module_name, module_text, module_file}) {
        try{

        const getModuleById = await modulesRepository.handleGetModuleById({ id });
            
            if (getModuleById.id == id ) {

                let files = []; 


                if (files.module_file){
                    await Promise.all(module_file.module_file.map(async (pct) => {
                        const fileBase64 = pct.buffer.toString("base64");
                        const file = `data:${pct.mimetype};base64,${fileBase64}`;
                        const cloudinaryFile = await cloudinary.uploader.upload(file);
                        files.push(cloudinaryFile.url);
                    }));
                } else {
                    files = getModuleById.module_file;
                }   

                const updatedModule = await modulesRepository.handleUpdateModule({
                    id,
                    module_name,
                    module_text,
                    module_file:files, 
                });
    
                return {
                    status: true,
                    status_code: 200,
                    message: "Modul berhasil di update",
                    data: {
                        updated_module: updatedModule,
                    },
                };
            } else {
                return {
                    status: false,
                    status_code: 401,
                    message: "Resource Unauthorized",
                    data: {
                        updated_module: null,
                    },
                }; 
            }
        }catch(err){
            return {
                status: false,
                status_code: 401,
                message: "Resource Unauthorized",
                data: {
                    updated_module: null,
                },
            };  
        }
    };

    // ------------------------- End Handle Update Modules ------------------------- //


    // ------------------------- Handle Delete Moduls ------------------------- //

    static async handleDeleteModules({ id }) {

        const handleGetModuleById = await modulesRepository.handleGetModuleById({ id });

        if (handleGetModuleById.id == id) {

            const deletedModules = await modulesRepository.handleDeleteModule({ id });

            return {
                status: true,
                status_code: 200,
                message: "Module berhasil di hapus",
                data: {
                    deleted_modules: deletedModules,
                },
            };
        } else {
            return {
                status: true,
                status_code: 401,
                message: "Resource Unauthorized",
                data: {
                    deleted_modules: null,
                },
            };
        }
    }

    // ------------------------- End Handle Delete Modules ------------------------- //

    // ------------------------- Handle Get Modules By Course Id ------------------------- //

    static async handleGetModuleByCourseId({ course_id }) {
        const handleGetModuleByCourseId = await modulesRepository.handleGetModuleByCourseId({ course_id });

        return {
            status: true,
            status_code: 200,
            message: "Berhasil mendapatkan data module berdasarkan course id",
            data: {
                module_by_course_id: handleGetModuleByCourseId,
            },
        };
    };

    // ------------------------- End Handle  Modules By Course Id  ------------------------- //


}

module.exports = ModulesService;