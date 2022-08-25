import { Factory, Seeder } from 'typeorm-seeding'
import { Connection } from 'typeorm'


export default class CreateTypeCandidat implements Seeder {
    public async run(factory: Factory, connection: Connection): Promise<any> {
        //---for postgreSQL use
        // await connection.query(`INSERT INTO "TypeCandidat"  ("libelleTypeCand")  VALUES ('Malagasy')`)
        // await connection.query(`INSERT INTO "TypeCandidat"  ("libelleTypeCand")  VALUES ('Militaire')`)
        // await connection.query(`INSERT INTO "TypeCandidat"  ("libelleTypeCand")  VALUES ('Etranger')`)

        // table pour les déclencheurs 
        // await connection.query(
        //     `CREATE TABLE IF NOT EXISTS typecandidat_audit (
        //     id SERIAL PRIMARY KEY,
        //     operation_type VARCHAR(20) NOT NULL,
        //     libelleTypeCand VARCHAR(50) NOT NULL,
        //     old_libelleTypeCand VARCHAR(50) DEFAULT NULL,
        //     createdAt DATE DEFAULT NULL,
        //     userId INT NOT NULL,
        //     FOREIGN KEY (userId) REFERENCES "user" (id)
        //     );`
        // );

        // //creation de la fonction à utiliser pour le trigger d'insertion
        // await connection.query(`
        //     CREATE OR REPLACE FUNCTION ajout_typeCandidat ()
        //     RETURNS trigger AS
        //     $$
        //         DECLARE
        //         BEGIN
        //             IF TRUE THEN
        //                 INSERT INTO 
        //                 parametres_audit(operation_type, libelleTypeCand, userId, createdAt)
        //                 VALUES('ajout', NEW.libelleTypeCand, '1', NOW());
        //             END IF;
        //             RETURN NEW;
        //         END;
        //     $$ LANGUAGE 'plpgsql';
        // `)

        // //creation de la fonction à utiliser pour le trigger de modification
        // await connection.query(`
        //     CREATE OR REPLACE FUNCTION modification_typeCandidat ()
        //     RETURNS trigger AS
        //     $$
        //         DECLARE
        //         BEGIN
        //             IF TRUE THEN
        //                 INSERT INTO 
        //                 parametres_audit(operation_type, libelleTypeCand, old_libelleTypeCand, userId, createdAt)
        //                 VALUES('ajout', NEW.libelleTypeCand, OLD.libelleTypeCand, '1', NOW());
        //             END IF;
        //             RETURN NEW;
        //         END;
        //     $$ LANGUAGE 'plpgsql';
        // `)

        // //creation de la fonction à utiliser pour le trigger de suppression
        // await connection.query(`
        //     CREATE OR REPLACE FUNCTION suppression_typeCandidat ()
        //     RETURNS trigger AS
        //     $$
        //         DECLARE
        //         BEGIN
        //             IF TRUE THEN
        //                 INSERT INTO 
        //                 parametres_audit(operation_type, libelleTypeCand, userId, createdAt)
        //                 VALUES('ajout', OLD.libelleTypeCand, '1', NOW());
        //             END IF;
        //             RETURN NEW;
        //         END;
        //     $$ LANGUAGE 'plpgsql';
        // `)

        // // création du triggers lors d'une insertion ou déclencheurs
        // await connection.query(`
        //     CREATE TRIGGER before_typecandidat_insert
        //     BEFORE INSERT ON "TypeCandidat" 
        //     FOR EACH ROW EXECUTE PROCEDURE ajout_typeCandidat();
        // `)

        // // création du triggers lors d'une modification ou déclencheurs
        // await connection.query(`
        //     CREATE TRIGGER before_typecandidat_update
        //     BEFORE UPDATE ON "TypeCandidat" 
        //     FOR EACH ROW EXECUTE PROCEDURE modification_typeCandidat();
        // `)

        // // création du triggers lors d'une suppression ou déclencheurs
        // await connection.query(`
        //     CREATE TRIGGER before_typecandidat_delete
        //     BEFORE DELETE ON "TypeCandidat" 
        //     FOR EACH ROW EXECUTE PROCEDURE suppression_typeCandidat();
        // `)

        //---for mysql use
        await connection.query(`INSERT INTO typecandidat  (libelleTypeCand)  VALUES ('Malagasy')`)
        await connection.query(`INSERT INTO typecandidat  (libelleTypeCand)  VALUES ('Militaire')`)
        await connection.query(`INSERT INTO typecandidat  (libelleTypeCand)  VALUES ('Etranger')`)

        // table pour les déclencheurs 
        await connection.query(
            `CREATE TABLE IF NOT EXISTS typecandidat_audit (
            id INT AUTO_INCREMENT PRIMARY KEY,
            operation_type VARCHAR(20) NOT NULL,
            libelleTypeCand VARCHAR(50) NOT NULL,
            old_libelleTypeCand VARCHAR(50) DEFAULT NULL,
            createdAt DATETIME DEFAULT NULL,
            userId INT NOT NULL,
            FOREIGN KEY (userId) REFERENCES user (id)
            );`
        );

        // création du triggers lors d'une insertion ou déclencheurs
        await connection.query(`
            CREATE TRIGGER before_typecandidat_insert
            BEFORE INSERT ON typecandidat 
            FOR EACH ROW
                INSERT INTO typecandidat_audit
                SET operation_type = 'ajout',
                libelleTypeCand = NEW.libelleTypeCand,
                userId = '1',
                createdAt = NOW();
        `)

        // création du triggers lors d'une modification ou déclencheurs
        await connection.query(`
            CREATE TRIGGER before_typecandidat_update
            BEFORE UPDATE ON typecandidat 
            FOR EACH ROW
                INSERT INTO typecandidat_audit
                SET operation_type = 'modification',
                libelleTypeCand = NEW.libelleTypeCand,
                old_libelleTypeCand = OLD.libelleTypeCand,
                userId = '1',
                createdAt = NOW();
        `)

        // création du triggers lors d'une suppression ou déclencheurs
        await connection.query(`
            CREATE TRIGGER before_typecandidat_delete
            BEFORE DELETE ON typecandidat 
            FOR EACH ROW
                INSERT INTO typecandidat_audit
                SET operation_type = 'suppression',
                libelleTypeCand = OLD.libelleTypeCand,
                userId = '1',
                createdAt = NOW();

        `)

    }
}