import { TimestampEntities } from 'src/generics/timestamp.entities';
export declare class UserEntity extends TimestampEntities {
    id: number;
    email: string;
    firstname: string;
    lastname: string;
    role: string;
    password: string;
    salt: string;
}
