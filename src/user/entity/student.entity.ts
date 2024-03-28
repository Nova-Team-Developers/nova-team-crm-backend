import {Column, Entity} from 'typeorm';
import {User} from './abstractuser.entity';

@Entity()
export class Student extends User {
  @Column({nullable: true})
  projectIds: number;
}
