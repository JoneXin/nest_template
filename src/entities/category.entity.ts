import { Column, Model, Table } from 'sequelize-typescript';

@Table({
    tableName: 'category',
    freezeTableName: true,
})
export class CategoryEntity extends Model<CategoryEntity> {
    @Column
    uid: number;

    @Column({ type: 'varchar' })
    type: string;

    @Column({ type: 'varchar' })
    parent_type: string;

    @Column({ type: 'text' })
    desc: string;
}
