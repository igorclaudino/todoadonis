"use strict";

const User = use("App/Models/User");

class UserController {
  async store({ request, response }) {
    const { email, password } = request.only(["email", "password"]);

    const user = await User.create({ email, password });

    return response.status(201).send(user);
  }
}

module.exports = UserController;
