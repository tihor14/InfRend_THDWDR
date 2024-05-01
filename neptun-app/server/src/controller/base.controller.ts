import { AppDataSource } from "../data-source";
import { User } from "../entity/User";
import { Repository } from 'typeorm';
import { Request, Response } from 'express';

export abstract class Controller {
    repository: Repository<any>;

    //Get all entities from the given repository (of given type)
    getAll = async (req, res) => {
        try {
            const entities = await this.repository.find();
            res.json(entities);
        } catch (err) {
            this.handleError(res, err);
        }
    };

    //Get all entities from the given repository with filter criteria given as query params
    getAllFiltered = async (req, res) => {
        try {
            const filterParams = req.query;
            const entities = await this.repository.find({
                where: filterParams
            });
            res.json(entities);
        } catch (err) {
            this.handleError(res, err);
        }
    };
    
    //Get one entity by id, given as part of the requested route
    getOne = async (req, res) => {
        try {
            const id = req.params.id;
            const entity = await this.repository.findOneBy({ id: id });

            if (!entity) {
                return this.handleError(res, null, 404, 'Entity is not found.');
            }

            res.json(entity);
        } catch (err) {
            this.handleError(res, err);
        }
    };

    //Create the entity specified in request body
    create = async (req, res) => {
        try {
            const entity = this.repository.create(req.body as object);
            delete entity.id;

            const entityInserted = await this.repository.save(entity);
            res.json(entityInserted);
        } catch (err) {
            this.handleError(res, err);
        }
    };

    //Update the entity specified in request body, if it already exists (otherwise response 404)
    update = async (req, res) => {
        try {
            const entity = this.repository.create(req.body as object);

            const currentEntity = await this.repository.findOneBy({ id: entity.id });
            if (!currentEntity) {
                return this.handleError(res, null, 404, 'Entity is not found.');
            }

            await this.repository.save(entity);
            res.json(entity);
        } catch (err) {
            this.handleError(res, err);
        }
    };

    //Delete the entity with the id specified as part of the request route, if it already exists (otherwise response 404)
    delete = async (req, res) => {
        try {
            const id = req.params.id;
            const entity = await this.repository.findOneBy({ id: id });
            if (!entity) {
                return this.handleError(res, null, 404, 'Entity is not found.');
            }

            await this.repository.remove(entity);
            res.send();
        } catch (err) {
            this.handleError(res, err);
        }
    };

    //Universal error handler, sends back status and error message
    handleError = (res, err, status = 500, message = 'Internal server error') => {
        if (err) {
            console.error(err);
        }

        res.status(status).json({ error: message });
    };
}