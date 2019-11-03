"use strict";

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use("Route");

Route.post("/authenticate", "AuthController.store");

Route.post("/users", "UserController.store");

Route.group(() => {
  Route.get("/todos", "TodoController.index");
  Route.post("/todos", "TodoController.store");
}).middleware(["auth"]);
