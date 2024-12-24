import datasource from '../typeorm.config'

async function main() {
    console.log("drop tables")
    await datasource.initialize();

    const specialTables = ['typeorm_metadata', 'migrations'];

    const queryRunner = datasource.createQueryRunner();
    const result = await queryRunner.query(
        "SELECT table_name FROM information_schema.tables where table_schema='public'",
    );

    const tables = result as [{ table_name: string }];
    for (const table of tables) {
        if (specialTables.indexOf(table.table_name) === -1) {
            console.log('DROP TABLE ', table.table_name);
            await queryRunner.dropTable(table.table_name);
        }
    }

    for (const specialTable of specialTables) {
        if (
            tables.find((table) => table.table_name === specialTable) !== undefined
        ) {
            console.log('DROP TABLE ', specialTable);
            await queryRunner.dropTable(specialTable);
        }
    }

    return;
}

main().catch((err)=>{
    console.log(err);
    process.exit(1);
}).finally(()=>{
    process.exit(0);
});
