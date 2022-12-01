const modulesService = require("../services/modulesService");


// ------------------------- Handle Create Module ------------------------- //

const handleCreateModule = async (req, res) => {

    const { module_name, module_text,course_id} = req.body;

    const { status, status_code, message, data} = await modulesService.handleCreateModule({
        module_name,
        module_text,
        module_file: req.files,
        course_id
    });

    res.status(status_code).send({
        status: status,
        message: message,
        data: data,
    });
};
// ------------------------- End handle Create Module ------------------------- //


// ------------------------- Handle Get All Modules ------------------------- //

const handleGetAllModules = async (req, res) => {
    
    const { status, status_code, message, data} = await modulesService.handleGetAllModules();

    res.status(status_code).send({
        status: status,
        message: message,
        data: data,
    });
};

// ------------------------- End Handle Get All Modules ------------------------- //




// ------------------------- Handle Get Module By Id ------------------------- //

const handleGetModuleById = async (req, res) => {
    
    const { id } = req.params;

    const { status, status_code, message, data} = await modulesService.handleGetModuleById({ id });

    res.status(status_code).send({
        status: status,
        message: message,
        data: data,
    });
};

// ------------------------- End Handle Get Module By Id ------------------------- //




// ------------------------- Handle Update Modules ------------------------- //

const handleUpdateModuleById = async (req, res, next) => {

    const { id} = req.params;
    const { module_name, module_text} = req.body;

    const { status, status_code, message, data} = await modulesService.handleUpdateModules({
      id,
      module_name,
      module_text,
      module_file:req.file
    });

    res.status(status_code).send({
        status: status,
        message: message,
        data: data,
    });

};


// ------------------------- End Handle Update Modules ------------------------- //


// ------------------------- Handle Delete  Modules ------------------------- //

const handleDeleteModuleById = async (req, res, next) => {
    const { id } = req.params;

    const { status, status_code, message, data } = await modulesService.handleDeleteModules({ id });

    res.status(status_code).send({
        status: status,
        message: message,
        data: data,
    });
}


// ------------------------- End Handle Delete Moduls ------------------------- //

// ------------------------- Handle Get All Modules ------------------------- //

const handleGetModuleByCourseId = async (req, res) => {

    const { course_id } = req.params;
    
    const { status, status_code, message, data} = await modulesService.handleGetModuleByCourseId({course_id});

    res.status(status_code).send({
        status: status,
        message: message,
        data: data,
    });
};

// ------------------------- End Handle Get All Modules ------------------------- //


module.exports = { 
    handleCreateModule,
    handleUpdateModuleById, 
    handleGetAllModules, 
    handleGetModuleById, 
    handleDeleteModuleById,
    handleGetModuleByCourseId,
};

