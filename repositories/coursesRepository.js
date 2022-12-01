const { Courses } = require("../models");
const { Op, QueryTypes } = require("sequelize");
const { sequelize } = require("../models/index.js");

class CoursesRepository {
  // ------------------------- Handle Get All Courses ------------------------- //

    static async handleGetAllCourses(){
        const handleGetAllCourses = await Courses.findAll();

        return handleGetAllCourses;
    };

    // ------------------------- End Handle Get All Courses ------------------------- //
 
    // ------------------------- Get Course By  Course Name  ------------------------- //

    static async getCourseByCourseName({ course_name }) {
      const getCourseName = await Courses.findOne({
          where: {
              course_name: course_name
          }
      });

      return getCourseName;
    };

  // ------------------------- End Get Course By Course Name  ------------------------- //
  

  // ------------------------- End Handle Get Course By Id ------------------------- //

  static async handleGetCourseById({ id }){
      const handleGetCourseById = await Courses.findOne({
          where: { id }
      });

      return handleGetCourseById;
  }

  // ------------------------- End Handle Get Course By Id ------------------------- //

  // ------------------------- End Handle Get Course By User Id ------------------------- //

  static async handleGetCourseByUserId({ user_id }){
    return await sequelize.query(`select c.*, c2.category_name 
    from public."Categories" as c2
    join "Courses" c ON c.category_id  = c2.id 
    where c.user_id  = :user_id`,{
        type: QueryTypes.SELECT,
        replacements: {
            user_id:user_id,
        }
    });
  }

  // ------------------------- End Handle Get Course By User Id ------------------------- //



  // ------------------------- End Handle Get Course By Created At ------------------------- //

  static async handleGetCourseByCreatedAt({ createdAt }){
      const handleGetCourseByCreatedAt = await Courses.findOne({
          where: { createdAt }
      });

      return handleGetCourseByCreatedAt;
  }

  // ------------------------- End Handle Get Course By Created At ------------------------- //
  

  // ------------------------- Create course  ------------------------- //
  
  static async handleCreateCourse({ course_name, description, picture,price,course_status, user_id, category_id}) {
      const handleCreateCourse = Courses.create({
          course_name,
          description,
          picture,
          price,
          course_status,
          user_id,
          category_id
      });

      return handleCreateCourse;
  };
  
  // ------------------------- End Create Course  ------------------------- //

  // ------------------------- Update Course  ------------------------- //
  
  static async handleUpdateCourses({ id, course_name, description, picture,price, user_id, category_id }) {

      const updatedCourse = await Courses.update({
        course_name,
        description,
        picture,
        price,
        user_id,
        category_id
      }, {
          where: { id },
      });

      return updatedCourse;
      
  };

  // ------------------------- End Update Course  ------------------------- //

  // ------------------------- Handle Delete Courses ------------------------- //

  static async handleDeleteCourses({ id }) {
      
      const deletedCourses = await Courses.destroy({ where: { id } });

      return deletedCourses;
  }

  // ------------------------- End Handle Delete Courses ------------------------- //

  // ------------------------- Handle Get Course By Category Name ------------------------- //

  static async handleGetCourseByCategoryName({ category_name }) {
      
    return await sequelize.query(`select c.*, c2.category_name, u.name 
    from public."Categories" as c2
    join "Courses" c ON c.category_id  = c2.id 
    join "Users" u ON u.id = c.user_id 
    where c2.category_name  = :category_name`,{
        type: QueryTypes.SELECT,
        replacements: {
            category_name:category_name,
        }
    });
};

// ------------------------- End Handle Get Course By Category Name ------------------------- //
}

module.exports = CoursesRepository;