import { postgresPool } from "../database.js";

class UserController {
  async createUser(request, response) {
    try {
      const { name, surname } = request.body;
      const newPerson = await postgresPool.query(
        `INSERT INTO person (name, surname) values ($1, $2) RETURNING *`,
        [name, surname]
      );
      response.status(200).json(newPerson.rows);
    } catch (error) {
      response.status(500).json(error);
    }
  }

  async getAllUsers(request, response) {
    try {
      const users = await postgresPool.query(`SELECT * FROM person`);
      response.status(200).json(users.rows);
    } catch (error) {
      response.status(500).json(error);
    }
  }

  async getOneUser(request, response) {
    try {
      const id = request.params.id;
      const user = await postgresPool.query(
        `SELECT * FROM person where id = $1`,
        [id]
      );
      response.status(200).json(user.rows[0]);
    } catch (error) {
      response.status(500).json(error);
    }
  }

  async updateUser(request, response) {
    try {
      const { id, name, surname } = request.body;
      const user = await postgresPool.query(
        `UPDATE person set name = $1, surname = $2 id = $3 RETURNING *`,
        [name, surname, id]
      );
      response.status(200).json(user.rows[0]);
    } catch (error) {
      response.status(500).json(error);
    }
  }

  async deleteUser(request, response) {
    try {
      const id = request.params.id;
      const user = await postgresPool.query(
        `DELETE FROM person where id = $1`,
        [id]
      );
      response.status(200).json(user.rows[0]);
    } catch (error) {
      response.status(500).json(error);
    }
  }
}

export const userController = new UserController();
