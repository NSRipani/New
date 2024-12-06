class MongoDao {
    constructor(model) {
        this.model = model;
    }
    create = async (data) => {
        try {
            const one = await this.model.create(data);
            return one;
        } catch (error) {
            throw error;
        }
    };
    readAll = async () => {
        try {
            const all = await this.model.find()//, "-__v").lean();
            return all;
        } catch (error) {
            throw error;
        }
    };

    readById = async (id) => {
        try {
            const one = await this.model.findOne({ _id: id });
            return one;
        } catch (error) {
            throw error;
        }
    };
    // Método específico para encontrar usuario por email
    findByEmail = async (email) => {
        try {
            return await this.model.findOne({ email });
        } catch (error) {
            throw new Error(`Error buscando usuario por email: ${error.message}`);
        }
    }

    update = async (id, data) => {
        try {
            const opts = { new: true };
            //para devolver el objeto luego de la modifiacion
            const one = await this.model.findOneAndUpdate({ _id: id }, data, opts);
            return one;
        } catch (error) {
            throw error;
        }
    };
    destroy = async (id) => {
        try {
            const one = await this.model.findOneAndDelete({ _id: id });
            return one;
        } catch (error) {
            throw error;
        }
    };

}

export default MongoDao;