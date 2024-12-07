export default class Controllers {
    constructor(service) {
        this.service = service;
    }

    async getAll(req, res, next) {
        try {
            const response = await this.service.getAll();
            res.status(200).json(response);
        } catch (error) {
            this.handleError(error, res, next);
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
            this.handleError(error, res, next);
        }
    }
    async getByEmail(req, res, next) {
        try {
            const { email } = req.params;
            const response = await this.service.getUserByEmail(email);
            if (!response) {
                return res.status(404).json({ message: "Documento no encontrado" });
            }
            res.json(response);
        } catch (error) {
            this.handleError(error, res, next);
        }
    }
    async create(req, res, next) {
        try {
            const response = await this.service.create(req.body);
            res.status(201).json(response);
        } catch (error) {
            this.handleError(error, res, next);
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
            this.handleError(error, res, next);
        }
    }
    async delete(req, res, next) {
        try {
            const { id } = req.params;
            const response = await this.service.delete(id);
            if (!response) {
                return res.status(404).json({ message: "Documento no encontrado" });
            }
            res.status(200).json(response);
        } catch (error) {
            this.handleError(error, res, next);
        }
    }
}