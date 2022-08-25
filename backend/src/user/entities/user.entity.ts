import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { UserRoleEnum } from 'src/enums/user-role.enum';
import { TimestampEntities } from 'src/generics/timestamp.entities';

@Entity('user')
export class UserEntity extends TimestampEntities {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    unique: true,
  })
  email: string;

  @Column()
  firstname: string;

  @Column()
  lastname: string;

  @Column({
    type: 'enum',
    enum: UserRoleEnum,
    default: UserRoleEnum.SECRETARY,
  })
  role: string;

  @Column()
  password: string;

  @Column()
  salt: string;
}
