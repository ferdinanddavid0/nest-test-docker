import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity()
export class Drivers {
  @PrimaryColumn()
  num: number;

  @Column()
  name: string;

  @Column()
  team: string;
}
