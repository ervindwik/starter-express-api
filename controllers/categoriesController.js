const categoriesService = require("../services/categoriesService");

// ------------------------- Handle Create Category ------------------------- //

const handleCreateCategory = async (req, res) => {
    
    const { category_name,category_desc } = req.body;

    const { status, status_code, message, data} = await categoriesService.handleCreateCategory({
        category_name,
        category_desc
    });

    res.status(status_code).send({
        status: status,
        message: message,
        data: data,
    });
};
// ------------------------- End handle Create Category ------------------------- //


// ------------------------- Handle Get All Categories ------------------------- //

const handleGetAllCategories = async (req, res) => {
    
    const { status, status_code, message, data} = await categoriesService.handleGetAllCategories();

    res.status(status_code).send({
        status: status,
        message: message,
        data: data,
    });
};

// ------------------------- End Handle Get All Categories ------------------------- //


// ------------------------- Handle Get Category By Id ------------------------- //

const handleGetCategoryById = async (req, res) => {
    
    const { id } = req.params;

    const { status, status_code, message, data} = await categoriesService.handleGetCategoryById({ id });

    res.status(status_code).send({
        status: status,
        message: message,
        data: data,
    });
};

// ------------------------- End Handle Get Category By Id ------------------------- //


// ------------------------- Handle Update Categories ------------------------- //

const handleUpdateCategories = async (req, res, next) => {

    const { id } = req.params;
    const { category_name,category_desc } = req.body;

    const { status, status_code, message, data} = await categoriesService.handleUpdateCategories({
        id,
        category_name,
        category_desc
    });

    res.status(status_code).send({
        status: status,
        message: message,
        data: data,
    });

};


// ------------------------- End Handle Update Categories ------------------------- //


// ------------------------- Handle Delete  Categories ------------------------- //

const handleDeleteCategories = async (req, res, next) => {
    const { id } = req.params;

    const { status, status_code, message, data } = await categoriesService.handleDeleteCategories({ id });

    res.status(status_code).send({
        status: status,
        message: message,
        data: data,
    });
}


// ------------------------- End Handle Delete Categories ------------------------- //


module.exports = { 
    handleCreateCategory,
    handleUpdateCategories, 
    handleGetAllCategories, 
    handleGetCategoryById, 
    handleDeleteCategories
};

