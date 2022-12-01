const categoriesRepository = require("../repositories/categoriesRepository");

class CategoriesService {
    // ------------------------- Handle Get All Categories ------------------------- //

    static async handleGetAllCategories() {

        const handleGetAllCategories = await categoriesRepository.handleGetAllCategories();

        return {
            status: true,
            status_code: 200,
            message: "Berhasil mendapatkan semua data categories",
            data: {
                get_all_categories: handleGetAllCategories,
            },
        };
    };

    // ------------------------- End Handle Get All Categories ------------------------- //


    // ------------------------- Handle Create Category ------------------------- //

    static async handleCreateCategory({ category_name,category_desc }) {

        // ------------------------- Payload Validation ------------------------- //

        if (!category_name) {
            return {
                status: false,
                status_code: 400,
                message: "Nama category wajib diisi!",
                data: {
                    registered_user: null,
                },
            };
        }

        const getCategoryByCategoryName = await categoriesRepository.getCategoryByCategoryName({ category_name });

        if (getCategoryByCategoryName) {
            return {
                status: false,
                status_code: 400,
                message: "Nama Category sudah terdaftar!",
                data: {
                    registered_category: null,
                },
            };
        } else {
            const createdCategory = await categoriesRepository.handleCreateCategory({
                category_name,
                category_desc
            });

            return {
                status: true,
                status_code: 201,
                message: "Berhasil mendaftarkan category!",
                data: {
                    registered_category: createdCategory,
                },
            };
        }
    }

    // ------------------------- End Create Category ------------------------- //


    // ------------------------- Handle Get Category By Id ------------------------- //

    static async handleGetCategoryById({ id }) {
        const handleGetCategoryById = await categoriesRepository.handleGetCategoryById({ id });

        return {
            status: true,
            status_code: 200,
            message: "Berhasil mendapatkan data category berdasarkan id",
            data: {
                category_by_id: handleGetCategoryById,
            },
        };
    };

    // ------------------------- End Handle Get Category By Id ------------------------- //


    // ------------------------- Handle Update Categories ------------------------- //

    static async handleUpdateCategories({ id, category_name, category_desc }) {

        const getCategoryById = await categoriesRepository.handleGetCategoryById({ id });

        if (getCategoryById.id == id ) {
            const updatedCategory = await categoriesRepository.handleUpdateCategories({
                id,
                category_name,
                category_desc
            });
    
            return {
                status: true,
                status_code: 200,
                message: "Category berhasil di update",
                data: {
                    updated_category: updatedCategory,
                },
            };
        } else {
            return {
                status: false,
                status_code: 401,
                message: "Resource Unauthorized",
                data: {
                    updated_category: null,
                },
            };
        }
    };

    // ------------------------- End Handle Update Categories ------------------------- //


    // ------------------------- Handle Delete Categories ------------------------- //

    static async handleDeleteCategories({ id }) {

        const handleGetCategoryById = await categoriesRepository.handleGetCategoryById({ id });

        if (handleGetCategoryById.id == id) {

            const deletedCategories = await categoriesRepository.handleDeleteCategories({ id });

            return {
                status: true,
                status_code: 200,
                message: "Category berhasil di hapus",
                data: {
                    deleted_categories: deletedCategories,
                },
            };
        } else {
            return {
                status: true,
                status_code: 401,
                message: "Resource Unauthorized",
                data: {
                    deleted_categories: null,
                },
            };
        }
    }

    // ------------------------- End Handle Delete Categories ------------------------- //


}

module.exports = CategoriesService;