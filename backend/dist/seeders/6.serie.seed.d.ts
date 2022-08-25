import { Factory, Seeder } from 'typeorm-seeding';
import { Connection } from 'typeorm';
export default class CreateSeries implements Seeder {
    run(factory: Factory, connection: Connection): Promise<any>;
}
