const connection = require('../database/connections.js');

module.exports = {
    async create(request, response){
        try {
            const {
                rua,
                num,
                local,
                tamanho,
                proprietario,
                situacao,
                inicio,
                anotacao,
            } = request.body;
    
            await connection('imoveis').insert({
                rua,
                num,
                local,
                tamanho,
                proprietario,
                situacao,
                inicio,
                anotacao,
            });
    
            return response.json('Sucess!');
        } catch (error) {
            return response.json(error);
        }
    },

    async list(request, response){
        try {
            const imoveis = await connection('imoveis').select('*');
            return response.json(imoveis);
        } catch (error) {
            return response.json(error);
        }
    },

    async getImovel(request, response){
        try {
            const {id} = request.body;
            const imovel = await connection('imoveis').select('*').where('id', id).first();
            return response.json(imovel);
        } catch (error) {
            return response.json(error);
        }
    },

    async cobrancas(request, response){
        try {
            const mes = request.body.mes;
            const id_imoveis_pendentes = await connection('registros').select('id_imovel').where('mes', mes);  
            const imoveis = [];
            id_imoveis_pendentes.map(async (id) => {
                const imovel = await connection('imoveis').select('*').where('id', id.id_imovel);
                imoveis.push(imovel[0]);
            });
            return response.json(imoveis);
        } catch (error) {
            return response.json(error);
        }
    },

    async update(request, response){
        try {
            const {id, campo, novoValor} = request.body;
            await connection('imoveis').select('*').where('id', id).first().update(campo, novoValor);
            return response.json("Sucess!");
        } catch (error) {
            return response.json(error);
        }
    },

    async delete(request, response){
        try {
            const id = request.body.id;
            await connection('imoveis').select('*').where('id', id).first().del();
            return response.json("Sucess!");
        } catch (error) {
            return response.json(error);
        }
    }
}