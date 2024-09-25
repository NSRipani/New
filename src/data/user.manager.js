import fs from "fs";
import crypto from "crypto";

class UsersManager {
  constructor(path) {
    this.path = path;
    this.init();
  }

  init() {
    const exist = fs.existsSync(this.path);
    if (!exist) {
      fs.writeFileSync(this.path, JSON.stringify([]));
      console.log("file created");
    } else {
      console.log("file already exists");
    }
  }

  async read(role) {
    try {
      const data = await fs.promises.readFile(this.path, "utf-8");
      let parseData = JSON.parse(data);
      if (role) {
        parseData = parseData.filter((user) => user.role === role)
      }
      return parseData
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async readOne(id) {
    try {
      const allUsers = await this.read();
      const oneUsers = allUsers.find((user) => user.id === id)
      return oneUsers
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async create(userData) {
    try {
      userData.id = crypto.randomBytes(12).toString("hex");
      const allUsers = await this.read();
      allUsers.push(userData);
      // const stringAll = JSON.stringify(allUsers, null, 2)
      await fs.promises.writeFile(this.path, JSON.stringify(allUsers, null, 2));
      return userData.id; // return userData.id;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async update(id, newData) {
    try {
      const allUsers = await this.read();
      const index = allUsers.findIndex(user => user.id === id);

      if (index === -1) {
        return null
      }

      allUsers[index] = { ...allUsers[index], ...newData };
      await fs.promises.writeFile(this.path, JSON.stringify(allUsers, null, 2));
      return allUsers[index];
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async destroy(id) {
    try {
      const allUsers = await this.read();
      const index = allUsers.findIndex(user => user.id === id);

      if (index === -1) {
        return null
      }

      allUsers.splice(index, 1);
      await fs.promises.writeFile(this.path, JSON.stringify(allUsers, null, 2));
      return { message: "User deleted successfully" };
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}

const usersManager = new UsersManager("src/data/file/users.json");
export default usersManager;
