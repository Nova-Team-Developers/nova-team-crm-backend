import { Entity, OneToMany} from 'typeorm'
import { User } from './abstractuser.entity';
import { Mentor } from './mentor.entity';

@Entity()
export class Manager extends User {

  @OneToMany(() => Mentor, mentor => mentor.manager)
  mentors: Mentor[];
}