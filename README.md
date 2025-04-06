![GitHub stars](https://img.shields.io/github/stars/pushpa-raj-dangi/Ng17Dotnet8RoleBaseAuthJWT?style=social)
![GitHub forks](https://img.shields.io/github/forks/pushpa-raj-dangi/Ng17Dotnet8RoleBaseAuthJWT?style=social)

### Introduction
Ng17Dotnet8RoleBasedAuthJWT is a project that demonstrates how to implement role-based authentication and authorization in a .NET 8 web application using <b>JSON Web Tokens (JWT)</b>.<br/> This project combines an Angular front-end (Angular 17) with a .NET 8 back-end to provide a complete solution for secure web application development.

### Features
<hr/>
Role-based Authentication: Secure routes and endpoints based on user roles.<br/>
JWT Authentication: Secure authentication mechanism using JSON Web Tokens.<br/>
Angular 17 Front-End: Modern front-end framework for building user interfaces.<br/>
.NET 8 Back-End: Powerful and scalable server-side framework.

### Technologies
+ **Frontend:** Angular 17<br/>
+ **Backend:** .NET 8, ASP.NET Core<br/>
+ **Authentication:** JWT (JSON Web Tokens)<br/>
+ **Database:** SQL Lite (Entity Framework Core)<br/>
+ **API Documentation:** Swagger<br/>

**Prerequisites**<br/>
Node.js and npm (for Angular)<br/>
.NET 8 SDK<br/>
SQL Server (or any other supported database)<br/>
Visual Studio Code or any other preferred code editor<br/>

### Video Tutorials
[![.NET 8 and Angular 18 Full Course ](https://img.youtube.com/vi/onDirBCVed8/0.jpg)](https://www.youtube.com/watch?v=onDirBCVed8)

### Tutorial Time Line
+ 0:00 Introduction
+ 0:26 Download And Install .NET 8 SDK 
+ 1:20 Download And Install Vs Code
+ 1:54 Vs Code Extension Setup
+ 3:15 Download And Install Node 
+ 4:15 Create Dotnet 8 Web API Project 
+ 5:10 Install Nuget Packages
+ 6:43 One Dark Pro Theme Setup Vs Code
+ 7:23 Create User Model Class
+ 7:48 DataContext Setup
+ 8:34 Add Db Context Service Container
+ 9:23 Setup JWT Setting in appsettting
+ 10:40 Setup Authentication and Authorization
+ 11:18 Add Jwt Authentication
+ 18:30 Create Initial Migrations
+ 20:20 Create AccountController
+ 24:18 Implement Register Endpoint
+ 31:43 Insert Role Data using sql query
+ 32:37 Test Register Endpoint
+ 34:20 Implement Login Endpoint
+ 38:03 Generate JWT Token
+ 41:43 Add Roles in claims
+ 44:24 Test Login Endpoint
+ 45:18 Implement Get Detail of current loggedin user
+ 50:29 Implement Get Method for returning list of users
+ 52:29 Create RolesController
+ 54:06 Implement CreateRole Endpoint
+ 57:15 Test Create Role Endpoint
+ 57:45 Implement GetRoles For Returning all available roles
+ 1:00:01 Test GeRoles Endpoint in swagger
+ 1:00:22 Implement Delete Roles Endpoint
+ 1:02:22 Test Delete Roles Endpoint Swagger
+ 1:04:47 Give Role Based Access (Authorize(Roles="Admin"))
+ 1:05:25 Test Get Roles Endpoint in swagger
+ 1:08:02 Implement Assign Role Endpoint to assign role to user
+ 1:11:45 Test Asign Role Endpoint
+ 1:13:03 Create Angular Project For Frontend using angular cli
+ 1:14:00 Clean up unwanted things from frontend app
+ 1:14:25 Install Angular Material in angular 17
+ 1:14:50 Install Tailwindcss In angular 17 
+ 1:17:25 Generate Login component
+ 1:18:35 Design Navbar and Homepage using mat toolbar
+ 1:29:50 Install google font in angular 17
+ 1:32:18 Design Login Form  using formsmodule reactive forms and MatInput fields
+ 1:43:16 Implement Login Functionality in angular 17 client
+ 1:43:30 Generate Auth Services and Generate environments in angular 17
+ 1:44:40 Implement Login in Auth Services
+ 1:50:21 Remove NullInjectError angular 17 by adding httpclient module in app config
+ 1:50:50 Enable CORS in .net 8 web api
+ 1:52:20 Test Login in angular frontend and display toast notification after successfully login
+ 1:55:20 Display Current Login User in homepage
+ 1:57:20 Install jwtdecode in angular 17
+ 1:59:57 Dynamically render login register link in navbar and display current logged in user detail
+ 2:10:20 Implement Logout method in angular and display toast
+ 2:11:53 Implement Register in client angular project
+ 2:28:10 Create Role Service and implement roles endpoint
+ 2:29:50 Create new user with roles
+ 2:32:06 Implement Custom Password and confirm password validation
+ 2:40:05 Implement Profile Detail of current login user in detail page
+ 2:47:50 Implement Auth Interceptor  for send  bearer authorization token in header
+ 2:49:55 ProvideClientWithInterceptor in app config
+ 2:51:02 Implement AuthGuard For protected route with canactive
+ 2:53:34 Implement RoleGuard and Fetch all list of users form backend
+ 2:59:06 Test Role Guard in angular client
+ 2:59:51 Display List of users with their roles in client using tailwindcss design
+ 3:03:17  Implement Role Management / Role CRUD and assign role
+ 3:05:56 Create Role/ Parent Child Component communication with input and output Decorators
+ 3:13:11 Display List of roles in client project
+ 3:16:55 Implement Delete Role In angular client
+ 3:18:48 Implement Assign Role In angular client
+ 3:23:36 Implement Forget Password by sending mailtrap email 
+ 3:23:45 Create Mailtrap Account
+ 3:24:12 Setup New Mailtrap Forget Password Template
+ 3:25:22 Create Forgot password DTO in API project
+ 3:25:40 Implement Forgot Password Endpoint in .net web api
+ 3:35:55 Implement Forgot Password client angular17 
+ 3:48:50 Implement Reset Password  in web api .net 8
+ 3:53:50 Implement Reset Password  in angular project
+ 4:00:00 Implement Change Password in client project
+ 4:03:40 Implement Change Password Endpoint in .net
+ 4:10:24 Test Change Password in angular template
+ 4:11:22 Implement JWT Refresh Token In .net 8 web api and angular 17

## Clone Application

``` bash
git clone https://github.com/pushpa-raj-dangi/Ng17Dotnet8RoleBaseAuthJWT.git
```
## Run API Application

``` bash
cd Ng17Dotnet8RoleBaseAuthJWT/API/
dotnet watch run
```
## Run Client Application
``` bash
cd Ng17Dotnet8RoleBaseAuthJWT/client/
npm install
ng serve
 
 
