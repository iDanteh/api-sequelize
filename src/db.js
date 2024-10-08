import pg from 'pg';

export const pool = new pg.Pool({
    user: 'postgres',
    host: '192.168.1.78',
    database: 'test',
    password: '190622',
    port: 5432,
});

// pool.query('SELECT NOW()').then(result => {
//     console.log(result);
// });