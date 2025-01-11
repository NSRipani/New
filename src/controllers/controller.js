export default class Controllers {
    constructor(service) {
        this.service = service;
    }
    async create(req, res, next) {
        try {
            const response = await this.service.create(req.body);
            res.status(201).json(response);
        } catch (error) {
            throw new Error(error);
        }
    }

    async findAll(req, res, next) {
        try {
            const response = await this.service.findAll();
            res.status(200).json(response);
        } catch (error) {
            throw new Error(error);
        }
    }

    async paginate(req, res, next) {
        try {
            const { page = 1, limit = 10, sort = {}, ...filter } = req.query;

            const response = await this.service.paginate(
                filter, 
                parseInt(page), 
                parseInt(limit), 
                JSON.parse(sort)
            );

            res.status(200).json(response);
        } catch (error) {
            next(error);
        }
    }

    async findAllByCategory(req, res, next) {
        try {
            const { category } = req.params
            const response = await this.service.findByCategory(category);
            res.status(200).json(response);
        } catch (error) {
            throw new Error(error);
        }
    }
    async findAllByRole(req, res, next) {
        try {
            const { role } = req.params
            const response = await this.service.findAllByRole(role);
            res.status(200).json(response);
        } catch (error) {
            throw new Error(error);
        }
    }
    async getById(req, res, next) {
        try {
            const { id } = req.params;
            const response = await this.service.getById(id);
            if (!response) {
                return res.status(404).json({ message: "Documento no encontrado" });
            }
            res.json(response);
        } catch (error) {
            throw new Error(error);
        }
    }
    async findUserByEmail(req, res, next) {
        try {
            const { email } = req.params;
            const response = await this.service.findUserByEmail(email);
            if (!response) {
                return res.status(404).json({ message: "Documento no encontrado" });
            }
            res.json(response);
        } catch (error) {
            throw new Error(error);
        }
    }

    async update(req, res, next) {
        try {
            const { id } = req.params;
            const response = await this.service.update(id, req.body);
            if (!response) {
                return res.status(404).json({ message: "Documento no encontrado" });
            }
            res.status(200).json(response);
        } catch (error) {
            throw new Error(error);        
        }
    }
    async delete(req, res, next) {
        try {
            const { id } = req.params;
            const response = await this.service.deleteCart(id);
            if (!response) {
                return res.status(404).json({ message: "Documento no encontrado" });
            }
            res.status(200).json(response);
        } catch (error) {
            throw new Error(error);
        }
    }
    // async generateAndSaveTicket (req, res) {
    //     try {
    //         // const { id } = req.params
    //         const response = await this.service.saveTicket();
    //         if (response) res.status(200).json({ message: 'Ticket generated and saved successfully' });
    //     } catch (error) {
    //         res.status(500).json({ message: 'Error generating ticket', error });
    //     }
    // };
}
