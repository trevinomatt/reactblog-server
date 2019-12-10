import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  Index,
  UpdateDateColumn,
  CreateDateColumn,
  OneToOne,
  JoinColumn,
  ManyToOne,
  getRepository
} from 'typeorm';
import User from './User';
import DataLoader from 'dataloader';
import { normalize } from '../lib/utils';

/** Created with TypeORM  **/
@Entity('reactlog_configs', {
  synchronize: true
})
export default class ReactlogConfig {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column('timestampz')
  @CreateDateColumn()
  created_at!: Date;

  @Column('timestamptz')
  @UpdateDateColumn()
  updated_at!: Date;

  @Column({ length: 255, nullable: true })
  title!: string;

  @Column({ length: 255, nullable: true })
  logo_image!: string;

  @OneToOne(type => User, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'fk_user_id' })
  user!: User;

  @Column('uuid')
  fk_user_id!: string;
}

export const createReactlogConfigLoader = () =>
  new DataLoader<string, ReactlogConfig>(async userIds => {
    const repo = getRepository(ReactlogConfig);
    const configs = await repo
      .createQueryBuilder('reactlog_configs')
      .where('fk_user_id IN (:...userIds)', { userIds })
      .getMany();
    const normalized = normalize(configs, config => config.fk_user_id);
    return userIds.map(id => normalized[id]);
  });
