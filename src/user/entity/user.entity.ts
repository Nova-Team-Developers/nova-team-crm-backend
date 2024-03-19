import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm'

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  userId: number;

  @Column({
    type: 'varchar',
    unique: true
  })
  email: string;

  @Column('varchar')
  password: string;

  @Column('varchar')
  firstName: string;

  @Column({
    type: 'varchar',
    nullable: true
  })
  lastName: string;

  // @Column({default: ''})
  // role: string;

  @Column({
    type: 'date',
    nullable: true
  })
  birthdayDate: Date;

  @Column({
    type: 'varchar',
    unique: true,
    nullable: true
  })
  mobilePhone: string;

  @Column({
    type: 'varchar',
    nullable: true,
    unique: true
  })
  discord: string;

  @Column({
    type: 'varchar',
    nullable: true
  })
  avatar: string;

  @Column({
    type: 'text',
    nullable: true
  })
  description: string;

  @Column({nullable: true})
  github: string;

  @Column({nullable: true})
  projectIds: number;

}
