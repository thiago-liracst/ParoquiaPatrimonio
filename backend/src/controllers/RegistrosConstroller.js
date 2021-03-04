const connection = require('../database/connections');

module.exports = {
    async create(request, response){
        try {
            const {
                id_imovel,
                ano,
                mes,
                talao,
                anotacao
            } = request.body;
    
            await connection('registros').insert({
                id_imovel,
                ano,
                mes,
                talao,
                anotacao
            });
    
            return response.json("Sucess!");
        } catch (error) {
            return response.json(error);
        }
        
    },

    async list(request, response){
        try {
            const registros = await connection('registros').select('*');
            return response.json(registros);
        } catch (error) {
            return response.json(error);
        }
    },

    async listSpecific(request, response){
        try {
            const id_imovel = request.body.id_imovel;
            const registros = await connection('registros').select('*').where('id_imovel', id_imovel);
            return response.json(registros);
        } catch (error) {
            return response.json(error);
        }
    },

    async addAnot(request, response){
        try {
            const {id, anot} = request.body;
            await connection('registros').select('*').where('id', id).first().update('anotacao', anot);
            return response.json("Sucess!");
        } catch (error) {
            return response.json(error);
        }
    },

    async delete(request, response){
        try {
            const id = request.body.id;
            await connection('registros').select('*').where('id', id).first().del();
            return response.json("Sucess!");
        } catch (error) {
            return response.json(error);
        }
    },

    async registro(request, response){
        try {
            const {id_registro} = request.body;
            const registro = await connection('registros').select('*').where('id', id_registro).first();
            return response.json(registro);
        } catch (error) {
            return response.json(error);
        }
    }
}