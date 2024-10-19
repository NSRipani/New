class MongoManager {
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
    readAll = async (filter) => {
        try {
            const all = await this.model.find(filter, "-__v").lean();
            return all;
        } catch (error) {
            throw error;
        }
    };
    paginate = async (filter, opts) => {
        // paginate va a devolver los documentos paginados
        try {
            opts.lean = true
            // el segundo parametro del paginate NO ES SOLO PARA PAGINAR
            // es para configuraciones en general
            // por eso es aqui donde es necesario definir tmb "lean", ordenar, popular (si la hago manual), etc ,etc
            const all = await this.model.paginate(filter, opts)
            return all
        } catch (error) {
            throw error
        }
    }
    read = async (id) => {
        try {
            const one = await this.model.findOne({ _id: id});
            return one;
        } catch (error) {
            throw error;
        }
    };
    update = async (id, data) => {
        try {
        const opts = { new: true };
            //para devolver el objeto luego de la modifiacion
            const one = await this.model.findOneAndUpdate({_id: id}, data, opts);
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

export default MongoManager;