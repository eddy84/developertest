import {DataSource} from "typeorm";
import {Client} from "../entities/Client";

export async function initDatabase()
{

    const datasource = new DataSource({
        type: 'postgres',
        host: process.env.DATABASE_HOST,
        port: parseInt(process.env.DATABASE_PORT ?? ''),
        database: process.env.DATABASE_NAME,
        username: process.env.DATABASE_USER,
        password: process.env.DATABASE_PASSWORD,
        entities: [Client],
        migrations: [],
    });

    await datasource.initialize();
    return datasource;
}
