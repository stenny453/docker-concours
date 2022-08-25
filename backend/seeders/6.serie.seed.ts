import { Factory, Seeder } from 'typeorm-seeding'
import { Connection } from 'typeorm'
import { Serie } from '../src/serie/entities/serie.entity'


export default class CreateSeries implements Seeder {
    public async run(factory: Factory, connection: Connection): Promise<any> {
        //---for postgreSQL use
        // await connection.query(`INSERT INTO "Serie"  ("libelleSerie")  VALUES ('C')`)
        // await connection.query(`INSERT INTO "Serie"  ("libelleSerie")  VALUES ('D')`)
        // await connection.query(`INSERT INTO "Serie"  ("libelleSerie")  VALUES ('S')`)
        // await connection.query(`INSERT INTO "Serie"  ("libelleSerie")  VALUES ('TGC')`)
        // await connection.query(`INSERT INTO "Serie"  ("libelleSerie")  VALUES ('TGI')`)
        // await connection.query(`INSERT INTO "Serie"  ("libelleSerie")  VALUES ('DAMB')`)
        // await connection.query(`INSERT INTO "Serie"  ("libelleSerie")  VALUES ('TAMB')`)
        // await connection.query(`INSERT INTO "Serie"  ("libelleSerie")  VALUES ('EN')`)
        // await connection.query(`INSERT INTO "Serie"  ("libelleSerie")  VALUES ('TMEL')`)
        // await connection.query(`INSERT INTO "Serie"  ("libelleSerie")  VALUES ('TPFM')`)
        // await connection.query(`INSERT INTO "Serie"  ("libelleSerie")  VALUES ('TFFI')`)
        // await connection.query(`INSERT INTO "Serie"  ("libelleSerie")  VALUES ('TMA')`)
        // await connection.query(`INSERT INTO "Serie"  ("libelleSerie")  VALUES ('MEMA')`)
        // await connection.query(`INSERT INTO "Serie"  ("libelleSerie")  VALUES ('TMF')`)
        // await connection.query(`INSERT INTO "Serie"  ("libelleSerie")  VALUES ('TOM')`)
        // await connection.query(`INSERT INTO "Serie"  ("libelleSerie")  VALUES ('TCNB')`)


        // table pour les déclencheurs 
        // await connection.query(
        //     `CREATE TABLE IF NOT EXISTS serie_audit (
        //     id SERIAL PRIMARY KEY,
        //     operation_type VARCHAR(20) NOT NULL,
        //     libelleSerie VARCHAR(50) NOT NULL,
        //     old_libelleSerie VARCHAR(50) DEFAULT NULL,
        //     createdAt DATE DEFAULT NULL,
        //     userId INT NOT NULL,
        //     FOREIGN KEY (userId) REFERENCES "user" (id)
        //     );`
        // );

        // //creation de la fonction à utiliser pour le trigger d'insertion
        // await connection.query(`
        //     CREATE OR REPLACE FUNCTION ajout_serie ()
        //     RETURNS trigger AS
        //     $$
        //         DECLARE
        //         BEGIN
        //             IF TRUE THEN
        //                 INSERT INTO 
        //                 serie_audit(operation_type, libelleSerie, userId, createdAt)
        //                 VALUES('ajout', NEW.libelleSerie, '1', NOW());
        //             END IF;
        //             RETURN NEW;
        //         END;
        //     $$ LANGUAGE 'plpgsql';
        // `)

        // //creation de la fonction à utiliser pour le trigger de modification
        // await connection.query(`
        //     CREATE OR REPLACE FUNCTION modification_serie ()
        //     RETURNS trigger AS
        //     $$
        //         DECLARE
        //         BEGIN
        //             IF TRUE THEN
        //                 INSERT INTO 
        //                 serie_audit(operation_type, libelleSerie, old_libelleSerie, userId, createdAt)
        //                 VALUES('modification', NEW.libelleSerie, OLD.libelleSerie, '1', NOW());
        //             END IF;
        //             RETURN NEW;
        //         END;
        //     $$ LANGUAGE 'plpgsql';
        // `)

        // //creation de la fonction à utiliser pour le trigger de supression
        // await connection.query(`
        //     CREATE OR REPLACE FUNCTION suppression_serie ()
        //     RETURNS trigger AS
        //     $$
        //         DECLARE
        //         BEGIN
        //             IF TRUE THEN
        //                 INSERT INTO 
        //                 serie_audit(operation_type, libelleSerie, userId, createdAt)
        //                 VALUES('ajout', OLD.libelleSerie, '1', NOW());
        //             END IF;
        //             RETURN NEW;
        //         END;
        //     $$ LANGUAGE 'plpgsql';
        // `)

        // // création du triggers lors d'une insertion ou déclencheurs
        // await connection.query(`
        //     CREATE TRIGGER before_serie_insert
        //     BEFORE INSERT ON "Serie" 
        //     FOR EACH ROW EXECUTE PROCEDURE ajout_serie();
        // `)

        // // création du triggers lors d'une modification ou déclencheurs
        // await connection.query(`
        //     CREATE TRIGGER before_serie_update
        //     BEFORE UPDATE ON "Serie" 
        //     FOR EACH ROW EXECUTE PROCEDURE modification_serie();
        // `)

        // // création du triggers lors d'une suppression ou déclencheurs
        // await connection.query(`
        //     CREATE TRIGGER before_serie_delete
        //     BEFORE DELETE ON "Serie" 
        //     FOR EACH ROW EXECUTE PROCEDURE suppression_serie();

        // `)

        //---for mysql use
        await connection.query(`INSERT INTO serie  (libelleSerie)  VALUES ('C')`)
        await connection.query(`INSERT INTO serie  (libelleSerie)  VALUES ('D')`)
        await connection.query(`INSERT INTO serie  (libelleSerie)  VALUES ('Tech')`)


        // table pour les déclencheurs 
        await connection.query(
            `CREATE TABLE IF NOT EXISTS serie_audit (
            id INT AUTO_INCREMENT PRIMARY KEY,
            operation_type VARCHAR(20) NOT NULL,
            libelleSerie VARCHAR(50) NOT NULL,
            old_libelleSerie VARCHAR(50) DEFAULT NULL,
            createdAt DATETIME DEFAULT NULL,
            userId INT NOT NULL,
            FOREIGN KEY (userId) REFERENCES user (id)
            );`
        );

        // création du triggers lors d'une insertion ou déclencheurs
        await connection.query(`
            CREATE TRIGGER before_serie_insert
            BEFORE INSERT ON serie 
            FOR EACH ROW
                INSERT INTO serie_audit
                SET operation_type = 'ajout',
                libelleSerie = NEW.libelleSerie,
                userId = '1',
                createdAt = NOW();
        `)

        // création du triggers lors d'une modification ou déclencheurs
        await connection.query(`
            CREATE TRIGGER before_serie_update
            BEFORE UPDATE ON serie 
            FOR EACH ROW
                INSERT INTO serie_audit
                SET operation_type = 'modification',
                libelleSerie = NEW.libelleSerie,
                old_libelleSerie = OLD.libelleSerie,
                userId = '1',
                createdAt = NOW();
        `)

        // création du triggers lors d'une suppression ou déclencheurs
        await connection.query(`
            CREATE TRIGGER before_serie_delete
            BEFORE DELETE ON serie 
            FOR EACH ROW
                INSERT INTO serie_audit
                SET operation_type = 'suppression',
                libelleSerie = OLD.libelleSerie,
                userId = '1',
                createdAt = NOW();

        `)
    }
}