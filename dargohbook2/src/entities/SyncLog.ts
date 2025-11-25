import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
} from 'typeorm';

@Entity('sync_logs')
export class SyncLogEntity {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column({ type: 'int', default: 0 })
  totalBooks!: number;

  @Column({ type: 'int', default: 0 })
  newBooks!: number;

  @Column({ type: 'int', default: 0 })
  updatedBooks!: number;

  @Column({ type: 'varchar', length: 50 })
  status!: 'success' | 'failed';

  @Column({ type: 'text', nullable: true })
  errorMessage!: string | null;

  @Column({ type: 'int', default: 0 })
  durationMs!: number;

  @CreateDateColumn({ name: 'created_at' })
  createdAt!: Date;
}
