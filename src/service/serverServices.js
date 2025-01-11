import Tickets from "../dao/models/ticket.model.js";

export default class Services {
    constructor(dao) {
        this.dao = dao;
    }
    async create(obj) {
        try {
            const response = await this.dao.create(obj);
            if (!response) throw new Error("Error create");
            return response;
        } catch (error) {
            throw new Error(error);
        }
    }
    async findAll() {
        try {
            const response = await this.dao.find();
            if (!response) throw new Error("Error in the search");
            return response;
        } catch (error) {
            throw error;
        }
    }

    async paginate(filter = {}, page = 1, limit = 10, sort = {}) {
        try {
            const options = {
                page,
                limit,
                sort, // Para especificar un orden (por ejemplo, { price: -1 })
            };

            const response = await this.dao.paginate(filter, options);
            if (!response) throw new Error("Error en la paginación");
            return response;
        } catch (error) {
            throw new Error(error);
        }
    }

    async findByCategory (category) {
        try {
            const response = await this.dao.findByCategory(category); //findByCategory dao.mongo
            if (!response) throw new Error(`No results for role: ${category}`);
            return response;
        } catch (error) {
            throw error;
        }
    }
    async findAllByRole (role) {
        try {
            const response = await this.dao.find(role);
            if (!response) throw new Error(`No results for role: ${role}`);
            return response;
        } catch (error) {
            throw error;
        }
    }
    async getById(id) {
        try {
            const response = await this.dao.findById(id);
            return response;
        } catch (error) {
            throw error;
        }
    }
    async findUserByEmail(email) {
        try {
            return await this.dao.findByEmail(email); // apunta al dao.user.js
        } catch (error) {
            throw new Error(error);
        }
    };
    async update(id, obj) {
        try {
            const response = await this.dao.update(id, obj);
            if (!response) throw new Error("Error update");
            return response;
        } catch (error) {
            throw new Error(error);
        }
    }
    async delete(id) {
        try {
            const response = await this.dao.delete(id);
            if (!response) throw new Error("Error delete");
            return response;
        } catch (error) {
            throw new Error(error);
        }
    }
    async order(id){
        try {
            const response = await this.dao.aggregation(id)
            return response
        } catch (error) {
            throw new Error(error);
        }
    }
    
}

