"use strict";

const Todo = use("App/Models/Todo");

class TodoController {
  async store({ request, response, auth }) {
    const { description } = request.only(["description"]);
    const loggedUser = await auth.getUser();
    const todo = await Todo.create({ description, user_id: loggedUser.id });

    return response.status(201).send(todo);
  }

  async index({ auth }) {
    const loggedUser = await auth.getUser();
    const todos = await Todo.findBy("user_id", loggedUser.id);

    return todos;
  }
}

module.exports = TodoController;
