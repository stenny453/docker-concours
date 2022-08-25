import { Factory, Seeder } from 'typeorm-seeding';
import { Connection } from 'typeorm';
export default class CreateDroits implements Seeder {
    run(factory: Factory, connection: Connection): Promise<any>;
}
