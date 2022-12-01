const { Modules } = require("../models");
const { Op, QueryTypes } = require("sequelize");
const { sequelize } = require("../models/index.js");

class ModulesRepository {
  // ------------------------- Handle Get All Modules ------------------------- //

  static async handleGetAllModules(){

   
    const handleGetAllModules = await Modules.findAll();

    return handleGetAllModules;
  };

  // ------------------------- End Handle Get All Modules ------------------------- //
 
  
  // ------------------------- Handle Get Module By Id ------------------------- //

  static async handleGetModuleById({ id }){
    const handleGetModuleById = await Modules.findOne({
        where: { id }
    });

    return handleGetModuleById;
}
  // ------------------------- End Handle Get Module By Id ------------------------- //

  

  // ------------------------- Handle Create Module  ------------------------- //
  
  static async handleCreateModule({ module_name, module_text, module_file, course_id}) {
      const handleCreateModule = Modules.create({
          module_name,
          module_text,
          module_file,
          course_id
      });

      return handleCreateModule;
  };
  
  // ------------------------- End Create Module  ------------------------- //

  // ------------------------- Update Module  ------------------------- //
  
  static async handleUpdateModule({ id, module_name, module_text, module_file }) {

      const updatedModule = await Modules.update({
        module_name,
        module_text,
        module_file,
      }, {
          where: { id },
      });

      return updatedModule;
      
  };

  // ------------------------- End Update Module  ------------------------- //

  // ------------------------- Handle Delete Module ------------------------- //

  static async handleDeleteModule({ id }) {
      
      const deletedModule = await Modules.destroy({ where: { id } });

      return deletedModule;
  }

  // ------------------------- End Handle Delete Moduls ------------------------- //

   // ------------------------- Handle Get All Data Module  ------------------------- //

   static async handleGetModuleByCourseId({ course_id }) {
      
    return await sequelize.query(`SELECT m.*, c.* from  "Courses" as c
    join "Modules" m on m.course_id = c.id
    WHERE m.course_id = :course_id`,{
        type: QueryTypes.SELECT,
        replacements: {
            course_id:course_id,
        }
    });
};

// ------------------------- End Get All Data Module ------------------------- //
}

module.exports = ModulesRepository;