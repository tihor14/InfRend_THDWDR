import { AppDataSource } from "../data-source";
import { User } from "../entity/User";
import { Repository } from 'typeorm';
import { Request, Response } from 'express';

export class Controller {
    repository = AppDataSource.getRepository(User);

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
            // TODO
        } catch (err) {
            this.handleError(res, err);
        }
    };

    //Create the entity specified in request body
    create = async (req, res) => {
        try {
            // TODO
        } catch (err) {
            this.handleError(res, err);
        }
    };

    //Update the entity specified in request body, if it already exists (otherwise response 404)
    update = async (req, res) => {
        try {
            // TODO
        } catch (err) {
            this.handleError(res, err);
        }
    };

    //Delete the entity with the id specified as part of the request route, if it already exists (otherwise response 404)
    delete = async (req, res) => {
        try {
            // TODO
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