import {Column, Entity} from 'typeorm'
import { User } from './abstractuser.entity';

@Entity()
export class Manager extends User {

  @Column({nullable: true})
  mentors: number[]; // one-to-many
}