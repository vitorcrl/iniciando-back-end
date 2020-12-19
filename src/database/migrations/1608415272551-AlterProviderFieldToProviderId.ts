import {MigrationInterface, QueryRunner, TableColumn, TableForeignKey} from "typeorm";

export default class AlterProviderFieldToProviderId1608415272551 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('appointments', 'provider');
    await queryRunner.addColumn('appointments', new TableColumn({
        name:'provider_id',
        type:'uuid',
        isNullable:true,
    }),
    ); 
    await queryRunner.createForeignKey('appointments', new TableForeignKey({
        name:'AppointmentProvider',
        columnNames:['provider_id'],
        referencedColumnNames:['id'],
        referencedTableName: 'users',
        onDelete:'SET NULL',
        onUpdate:'CASCADE',
    }))
    }
    //cascade estrategia de alteracoes em futuros cancelamentos 
    public async down(queryRunner: QueryRunner): Promise<void> {
     await queryRunner.dropForeignKey('appointments', 'AppointmentsProvider');

     await queryRunner.dropColumn('appointments', 'provider_id');

     await queryRunner.addColumn('appointments', new TableColumn);


    }

}
