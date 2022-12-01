# be-comdev
This service builds on top of the NodeJS framework. be-comdev is a part of Comdev Institute project that provides a server-side for Comdev Insitute project. 

## Requeriments
Project ini membutuhkan beberapa stack yang digunakan yaitu:
- Install Node  >= v19.0.0
- Install DBeaver/TablePlus and PostgreSQL

## Installations
### On-Premises
Create file . env at be-comdev
You need to configure the .env file manually : 
```
PORT= 1500

# Database Credential
DB_USERNAME=your_db_username
DB_PASSWORD=your_db_password
DB_NAME=your_db_name
DB_HOST=your_db_host
DB_DIALECT=your_db_dialect

# Google Credential
GOOGLE_CLIENT_ID=your_google_client_id

# JWT
JWT_SECRET=your_jwt_secret
JWT_EXPIRED=your_jwt_expired

sesuaikan settingan DBeaver/TablePlus untuk db_username dan db_password, db_host, dan PORT: 5432.
``` 

## Running Project
```
langkah-langkah access file:
1. lakukan perintah npm install di terminal ( recommended use terminal on vscode)
2. untuk run lakukan perintah di terminal : npm run dev
```


## API Listing V1 (Version 1)
### List Endpoints
Local Run localhost:1500
Public Run : https://comdev-institute.herokuapp.com
Dokumentasi API (SwaggerAPI) : https://comdev-institute.herokuapp.com/api-docs/
``` example consume API for Register User :  https://comdev-institute.herokuapp.com/v1/auth.register ``` 

```
 ``` Auth Systems ```
 1.  Register User              : /v1/auth/register     : METHOD = POST
 2.  Login User                 : /v1/auth/login        : METHOD = GET
 3.  Login User with Google     : /v1/auth/login-google : METHOD = POST
 3.  Current User               : /v1/auth/me           : METHOD = GET
```

```
 ``` Users Systems ```
 1. Update User         : /v1/users/update/:id  : METHOD = PUT
 2. Delete User         : /v1/users/delete/:id  : METHOD = DELETE
 3. View All Users      : /v1/users             : METHOD = GET
 4. View User By ID     : /v1/users/:id         : METHOD = GET
 5. View Users By Role  : /v1/users/:id/roles   : METHOD = GET
```

```
 ``` Roles Systems ```
 1. Create Role     : /v1/roles/create      : METHOD = POST
 2. Update Role     : /v1/roles/update/:id  : METHOD = PUT
 3. Delete Role     : /v1/roles/delete/:id  : METHOD = DELETE
 4. View All Roles  : /v1/roles             : METHOD = GET
 5. View Role By ID : /v1/roles/:id         : METHOD = GET
```

```
 ``` Courses Systems ```
 1. Create Course               : /v1/courses/create                : METHOD = POST
 2. Update Course               : /v1/courses/update/:id            : METHOD = PUT
 3. Delete Course               : /v1/courses/delete/:id            : METHOD = DELETE
 4. View All Courses            : /v1/courses                       : METHOD = GET
 5. View Course By ID           : /v1/courses/:id                   : METHOD = GET
 6. View Course By User ID      : /v1/courses/user_id/:user_id      : METHOD = GET
 7. View Course By createdAt    : /v1/courses/created_at/:createdAt : METHOD = GET
```

```
 ``` Categories Systems ```
 1. Create Category     : /v1/categories/create     : METHOD = POST
 2. Update Category     : /v1/categories/update/:id : METHOD = PUT
 3. Delete Category     : /v1/categories/delete/:id : METHOD = DELETE
 4. View All Categories : /v1/categories            : METHOD = GET
 5. View Category By ID : /v1/categories/:id        : METHOD = GET
```

```
 ``` Sub_Categories Systems ```
 1. Create SubCategory      : /v1/sub_categories/create     : METHOD = POST
 2. Update SubCategory      : /v1/sub_categories/update/:id : METHOD = PUT
 3. Delete SubCategory      : /v1/sub_categories/delete/:id : METHOD = DELETE
 4. View All SubCategories  : /v1/sub_categories            : METHOD = GET
 5. View SubCategory By ID  : /v1/sub_categories/:id        : METHOD = GET
```


```

### Deploy it in 7 seconds: 

[![Deploy to Cyclic](https://deploy.cyclic.app/button.svg)](https://deploy.cyclic.app/)

