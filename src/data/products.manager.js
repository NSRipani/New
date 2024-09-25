import fs from "fs";
import crypto from "crypto";

class ProductsManager {
  constructor(path) {
    this.path = path
    this.init(); 
  }

  init() {
    try {
      const exist = fs.existsSync(this.path);
      if (!exist) {
        fs.writeFileSync(this.path, JSON.stringify([]));

        console.log("file created" + this.path);
      } else {
        console.log("file already exists:" + this.path);
      }
    } catch (error) {
      console.error("Error accessing the file:", error);
    }
  }

  async read(category) {
    try {
      const data = await fs.promises.readFile(this.path, "utf-8");
      let parseData = JSON.parse(data);
      if (category) {
        parseData = parseData.filter((prod) => prod.category === category)
      }
      return parseData;
    } catch (error) {
      console.log("Error reading the file:", error); 
      throw error; 
    }
  }

  async readOne(id) {
    try {
      const all = await this.read(); 
      const one = all.find((each) => each.id === id);
      return one; 
    } catch (error) {
      console.log(error);
      throw error; 
    }
  }

  async create(data) {
    try {
      data.id = crypto.randomBytes(12).toString("hex");
      const all = await this.read(); 
      all.push(data);
      const stringAll = JSON.stringify(all, null, 2); 
      await fs.promises.writeFile(this.path, stringAll);
      return data.id;
    } catch (error) {
      console.log(error); 
      throw error; 
    }
  }
  async update(id, newData) {
    try {
      const all = await this.read();
      const index = all.findIndex((each) => each.id === id); 

      if (index === -1) {
        return null
      }

      all[index] = { ...all[index], ...newData }; 
      const stringAll = JSON.stringify(all, null, 2);
      await fs.promises.writeFile(this.path, stringAll); 
      return all[index];
    } catch (error) {
      console.log(error); 
      throw error; 
    }
  }

  async destroy(id) {
    try {
      const all = await this.read();
      const index = all.findIndex((each) => each.id === id); 

      if (index === -1) {
        return null 
      }

      all.splice(index, 1);
      const stringAll = JSON.stringify(all, null, 2);
      await fs.promises.writeFile(this.path, stringAll);
      return { message: "Product deleted successfully" };
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}

const productsManager = new ProductsManager("src/data/file/products.json");//
export default productsManager; // Exporta la instancia para su uso en otros módulos
