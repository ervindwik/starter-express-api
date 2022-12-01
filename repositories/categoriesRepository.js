const { Categories } = require("../models");

class CategoriesRepository {
    // ------------------------- Handle Get All Categories ------------------------- //

    static async handleGetAllCategories(){
        const handleGetAllCategories = await Categories.findAll();

        return handleGetAllCategories;
    };

    // ------------------------- End Handle Get All Categories ------------------------- //

    
    // ------------------------- Get Category By  Category Name  ------------------------- //

    static async getCategoryByCategoryName({ category_name }) {
        const getCategoryName = await Categories.findOne({
            where: {
                category_name: category_name
            }
        });

        return getCategoryName;
    };

    // ------------------------- End Get Category By Category Name  ------------------------- //
    

    // ------------------------- End Handle Get Category By Id ------------------------- //

    static async handleGetCategoryById({ id }){
        const handleGetCategoryById = await Categories.findOne({
            where: { id }
        });

        return handleGetCategoryById;
    }

    // ------------------------- End Handle Get Category By Id ------------------------- //

    // ------------------------- Create Category  ------------------------- //
    
    static async handleCreateCategory({ category_name,category_desc }) {
        const handleCreateCategory = Categories.create({
            category_name,
            category_desc
        });

        return handleCreateCategory;
    };
    
    // ------------------------- End Create Category  ------------------------- //

    // ------------------------- Update Category  ------------------------- //
    
    static async handleUpdateCategories({ id, category_name,category_desc,sub_category_id }) {

        const updatedCategory = await Categories.update({
            category_name,
            category_desc,
            sub_category_id
        }, {
            where: { id },
        });

        return updatedCategory;
        
    };

    // ------------------------- End Update Category  ------------------------- //

    // ------------------------- Handle Delete Categories ------------------------- //

    static async handleDeleteCategories({ id }) {
        
        const deletedCategories = await Categories.destroy({ where: { id } });

        return deletedCategories;
    }

    // ------------------------- End Handle Delete Categories ------------------------- //
}

module.exports = CategoriesRepository;