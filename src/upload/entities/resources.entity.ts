import { BaseEntity, Column, CreateDateColumn, Entity, Index, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({
  name: 'resources'
})
export class ResourcesEntity extends BaseEntity {
  @PrimaryGeneratedColumn({
    type: 'int',
  })
  id: number;

  @Index()
  @Column({
    type: 'smallint',
    default: 1    // 0 - unkeep, 1 - keep
  })
  is_keep: number

  @Column({
    type: 'smallint',
    default: 0    // 0 - image, 1 - video, 2 - file
  })
  type: number

  @Index()
  @Column({
    type: 'text',
    default: ''
  })
  storage: string

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}