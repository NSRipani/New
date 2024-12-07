class MongoDao {
    constructor(model) {
        this.model = model;
    }
    // Crear usuario
    create = async (data) => {
        try {
            const one = await this.model.create(data);
            return one;
        } catch (error) {
            throw error;
        }
    };
    // Leer todos los usuarios
    readAll = async () => {
        try {
            const all = await this.model.find({})
            return all;
        } catch (error) {
            throw error;
        }
    };

    // Leer por ID
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
            return await this.model.findOne({ email: email });
        } catch (error) {
            throw new Error(`Error buscando usuario por email: ${error.message}`);
        }
    }

    // Actualizar por ID
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
    
    // Eliminar por ID
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