
exports.up = function(knex) {
  return knex.schema.createTable('imoveis', function(table) {
      table.increments();
      table.string('rua').notNullable();
      table.string('num').notNullable();
      table.string('local');
      table.string('tamanho');
      table.string('proprietario').notNullable();
      table.string('situacao').notNullable();
      table.string('inicio').notNullable();
      table.string('anotacao');
  })
};

exports.down = function(knex) {
    return knex.schema.dropTable('apoiadores');
};
