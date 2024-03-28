import {Column, Entity, ManyToOne} from 'typeorm';
import {User} from './abstractuser.entity';
import {Manager} from './manager.entity';

@Entity()
export class Mentor extends User {
  @Column({nullable: true})
  projectIds: number;

  @ManyToOne(() => Manager, manager => manager.mentors)
  manager: Manager;
}
