import {Entity} from 'typeorm'
import { Student } from './student.entity';

@Entity()
export class Mentor extends Student {}