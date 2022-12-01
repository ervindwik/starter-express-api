const express = require("express");
const bodyParser = require("body-parser");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");
const cors = require("cors");
const path = require("path");
const uploadFile = require("./utils/fileUpload");


const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

// ------------------------- Public File Access ------------------------- //

app.use("/public/files", express.static(path.join(__dirname, "/storages")));

// ------------------------- End Public File Access ------------------------- //



// ------------------------- Import Controllers ------------------------- //

const authController = require("./controllers/authController");

const usersController = require("./controllers/usersController");

const coursesController = require("./controllers/coursesController");

const categoriesController = require("./controllers/categoriesController");

const modulesController = require("./controllers/modulesController");

const transactionController = require("./controllers/transactionController");

// const transactionsController = require("./controllers/transactionsController");
// ------------------------- End Import Controllers ------------------------- //



// ------------------------- Import middlewares ------------------------- //
const middleware = require("./middlewares/auth");
// ------------------------- End Import middlewares ------------------------- //



// ------------------------- Define Routes ------------------------- //

// ------------------------- Auth ------------------------- //

app.post("/v1/auth/register", authController.handleRegister);
app.post("/v1/auth/login", authController.handleLogin);
app.post("/v1/auth/login-google", authController.loginGoogle);
app.get("/v1/auth/me", middleware.authenticate, authController.handleCurrentUser);

// ------------------------- End Auth ------------------------- //



// ------------------------- User System (complete users info) ------------------------- //

app.get("/v1/users", usersController.handleGetAllUsers);
app.get("/v1/users/:id", usersController.handleGetUserById);
app.put("/v1/users/update/:id", middleware.authenticate, uploadFile.single("picture"), usersController.handleUpdateUsers);
app.post("/v1/users/create", middleware.authenticate, uploadFile.single("picture"), usersController.handleCreateUser);
app.delete("/v1/users/delete/:id", middleware.authenticate, usersController.handleDeleteUsers);
app.get("/v1/users/:id/roles", usersController.handleGetUserByRoleName);
app.put("/v1/users/changePassword/:id", middleware.authenticate, usersController.handleUserChangePassword);
app.get("/v1/users/comparePassword/:id", middleware.authenticate, usersController.handleUserComparePassword);
app.delete("/v1/users/:id/courses", middleware.authenticate, usersController.handleGetCourseByUserId);

// ------------------------- End User System ------------------------- //



// ------------------------- Courses System ------------------------- //

app.get("/v1/courses", coursesController.handleGetAllCourses);
app.post("/v1/courses/create", middleware.authenticate, uploadFile.single("picture"), coursesController.handleCreateCourse);
app.get("/v1/courses/:id", middleware.authenticate, coursesController.handleGetCourseById);
app.get("/v1/courses/getByCategory_name/:category_name", coursesController.handleGetCourseByCategoryName);
app.put("/v1/courses/update/:id", middleware.authenticate, uploadFile.single("picture"), coursesController.handleUpdateCourseById);
app.delete("/v1/courses/delete/:id", middleware.authenticate, coursesController.handleDeleteCourseById);
app.get("/v1/courses/user_id/:user_id", middleware.authenticate, coursesController.handleGetCourseByUserId);
app.get("/v1/courses/created_at/:createdAt", middleware.authenticate, coursesController.handleGetCourseByCreatedAt);

// ------------------------- End Courses System ------------------------- //


// ------------------------- Category System ------------------------- //

app.get("/v1/categories", categoriesController.handleGetAllCategories);
app.get("/v1/categories/:id", categoriesController.handleGetCategoryById);
app.post("/v1/categories/create",middleware.authenticate, categoriesController.handleCreateCategory);
app.put("/v1/categories/update/:id",middleware.authenticate, categoriesController.handleUpdateCategories);
app.delete("/v1/categories/delete/:id",middleware.authenticate, categoriesController.handleDeleteCategories);

// ------------------------- End Category System ------------------------- //



// ------------------------- Module System ------------------------- //

app.get("/v1/modules",middleware.authenticate, modulesController.handleGetAllModules);
app.get("/v1/module/:id",middleware.authenticate, modulesController.handleGetModuleById);
app.get("/v1/module/course/:course_id",middleware.authenticate, modulesController.handleGetModuleByCourseId);
app.post("/v1/module/create",middleware.authenticate, uploadFile.fields([{name: "module_file"}]),modulesController.handleCreateModule);
app.put("/v1/module/update/:id",middleware.authenticate,uploadFile.fields([{name: "module_file"}]), modulesController.handleUpdateModuleById);
app.delete("/v1/module/delete/:id",middleware.authenticate, modulesController.handleDeleteModuleById);

// ------------------------- End Module System ------------------------- //




// ------------------------- Transaction System ------------------------- //

app.get("/v1/transactions", middleware.authenticate, transactionController.handleGetAllTransaction);
app.get("/v1/transactions/user/:user_id", middleware.authenticate, transactionController.handleGetTransactionByUserId);
app.get("/v1/transactions/:id", middleware.authenticate, transactionController.handleGetTransactionById);
app.get("/v1/transactions/all-data/:id", middleware.authenticate, transactionController.handleGetAllDataTransactionById);
app.post("/v1/transactions/create", middleware.authenticate, transactionController.handleCreateTransaction);
app.delete("/v1/transactions/delete/:id", middleware.authenticate, transactionController.handleDeleteTransactionById);
app.put("/v1/updateTransaction/:id", middleware.authenticate, transactionController.handleUpdateTransaction);

// ------------------------- End Transaction System ------------------------- //


// API Documentation
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(process.env.PORT || 3000, function(){
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
  });