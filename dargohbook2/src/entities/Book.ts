import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  Index,
} from 'typeorm';

@Entity('books')
export class BookEntity {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column({ name: 'external_id', unique: true })
  @Index()
  externalId!: string;

  @Column()
  @Index()
  name!: string;

  @Column()
  sku!: string;

  @Column({ nullable: true })
  barcode!: string;

  @Column({ name: 'retail_price', type: 'decimal', precision: 12, scale: 2, default: 0 })
  retailPrice!: number;

  @Column({ name: 'supply_price', type: 'decimal', precision: 12, scale: 2, default: 0 })
  supplyPrice!: number;

  @Column({ type: 'text', nullable: true })
  description!: string;

  @Column({ type: 'int', default: 0 })
  @Index()
  quantity!: number;

  @Column({ name: 'supplier_name', nullable: true })
  supplierName!: string;

  @Column({ name: 'shop_name', nullable: true })
  shopName!: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt!: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt!: Date;

  @Column({ name: 'synced_at', type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  syncedAt!: Date;
}
