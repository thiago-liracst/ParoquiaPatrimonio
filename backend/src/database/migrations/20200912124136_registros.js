
exports.up = function(knex) {
    return knex.schema.createTable('registros', function(table) {
        table.increments(),
        table.decimal('id_imovel').notNullable();
        table.foreign('id_imovel').references('id').inTable('imoveis');
        table.decimal('ano').notNullable();
        table.decimal('mes').notNullable();
        table.string('talao').notNullable();
        table.string('anotacao');
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('registros');
};
