# Init Database
dilakukan untuk init database diawal/ mengubah tabel database

1. npx sequelize db:create (membuat database di terminal vs code jangan di buat di pg admin)
2. npx sequelize-cli model:generate --name Users --attributes name:string,username:string,email:string,password:string,position:string,picture:string,about:string,googleId:string,registeredVia:string,role_id:string
3. npx sequelize-cli model:generate --name Roles --attributes role_name:string
4. npx sequelize-cli model:generate --name Courses --attributes course_name:string,description:string,price:string,picture:string,video:string,course_viewer:string,course_status:string,category_id:string,user_id:string,role_id:string,token_transaction:string,review_id:string

5. npx sequelize-cli model:generate --name Categories --attributes category_name:string,sub_category_id:string

6. npx sequelize-cli model:generate --name Sub_Categories --attributes sub_category_name:string

7. npx sequelize db:migrate