import knex from 'knex';
import path from 'path';

const connection = knex({
    client: 'sqlite3',
    connection: {
        filename: path.resolve(__dirname, 'database.sqlite') // (__dirname é uma variável global que retorna o diretorio do arquivo que etá sendo utilizado)
    },
    useNullAsDefault: true,
});

export default connection;

// Migrations = Histórico do banco de dados
