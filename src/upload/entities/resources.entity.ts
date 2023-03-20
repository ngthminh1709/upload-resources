import { BaseEntity, Column, CreateDateColumn, Entity, Index, PrimaryColumn, UpdateDateColumn } from "typeorm";

@Entity({
  name: 'resources'
})
export class ResourcesEntity extends BaseEntity {
  @PrimaryColumn({
    type: 'int',
  })
  id: number;

  @Index()
  @Column({
    type: 'tinyint',
    default: 1    // 0 - unkeep, 1 - keep
  })
  is_keep: number

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