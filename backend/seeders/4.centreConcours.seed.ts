import { Factory, Seeder } from 'typeorm-seeding'
import { Connection } from 'typeorm'


export default class CreateCentreConcours implements Seeder {
    public async run(factory: Factory, connection: Connection): Promise<any> {
        //--for postgreSQL use
        // await connection.query(`INSERT INTO "CentreConcours"  ("nomCentre")  VALUES ('Antananarivo')`)
        // await connection.query(`INSERT INTO "CentreConcours"  ("nomCentre")  VALUES ('Fianarantsoa')`)
        // await connection.query(`INSERT INTO "CentreConcours"  ("nomCentre")  VALUES ('Toamasina')`)
        // await connection.query(`INSERT INTO "CentreConcours"  ("nomCentre")  VALUES ('Diego')`)
        // await connection.query(`INSERT INTO "CentreConcours"  ("nomCentre")  VALUES ('Toliara')`)
        // await connection.query(`INSERT INTO "CentreConcours"  ("nomCentre")  VALUES ('Mahajanga')`)

        // table pour les déclencheurs 
        // await connection.query(
        //     `CREATE TABLE IF NOT EXISTS centreconcours_audit (
        //      id SERIAL PRIMARY KEY,
        //      operation_type VARCHAR(20) NOT NULL,
        //      nomCentre VARCHAR(50) NOT NULL,
        //      old_nomCentre VARCHAR(50) DEFAULT NULL,
        //      createdAt DATE DEFAULT NULL,
        //      userId INT NOT NULL,
        //      FOREIGN KEY (userId) REFERENCES "user" (id)
        //      );`
        // );

        // //creation de la fonction à utiliser pour le trigger d'insertion
        // await connection.query(`
        //     CREATE OR REPLACE FUNCTION ajout_centreConcours ()
        //     RETURNS trigger AS
        //     $$
        //         DECLARE
        //         BEGIN
        //             IF TRUE THEN
        //                 INSERT INTO 
        //                 parametres_audit(operation_type, nomCentre, userId, createdAt)
        //                 VALUES('ajout', NEW.nomCentre, '1', NOW());
        //             END IF;
        //             RETURN NEW;
        //         END;
        //     $$ LANGUAGE 'plpgsql';
        // `)

        // //creation de la fonction à utiliser pour le trigger de modification
        // await connection.query(`
        //     CREATE OR REPLACE FUNCTION modification_centreConcours ()
        //     RETURNS trigger AS
        //     $$
        //         DECLARE
        //         BEGIN
        //             IF TRUE THEN
        //                 INSERT INTO 
        //                 parametres_audit(operation_type, nomCentre, old_nomCentre, userId, createdAt)
        //                 VALUES('ajout', NEW.nomCentre, OLD.nomCentre '1', NOW());
        //             END IF;
        //             RETURN NEW;
        //         END;
        //     $$ LANGUAGE 'plpgsql';
        // `)

        // //creation de la fonction à utiliser pour le trigger de suppression
        // await connection.query(`
        //     CREATE OR REPLACE FUNCTION suppression_centreConcours ()
        //     RETURNS trigger AS
        //     $$
        //         DECLARE
        //         BEGIN
        //             IF TRUE THEN
        //                 INSERT INTO 
        //                 parametres_audit(operation_type, nomCentre, userId, createdAt)
        //                 VALUES('ajout', OLD.nomCentre, '1', NOW());
        //             END IF;
        //             RETURN NEW;
        //         END;
        //     $$ LANGUAGE 'plpgsql';
        // `)

        // // création du triggers lors d'une insertion ou déclencheurs
        // await connection.query(`
        //      CREATE TRIGGER before_centreconcours_insert
        //      BEFORE INSERT ON "CentreConcours" 
        //      FOR EACH ROW EXECUTE PROCEDURE ajout_centreConcours();
        //  `)

        // // création du triggers lors d'une modification ou déclencheurs
        // await connection.query(`
        //      CREATE TRIGGER before_centreconcours_update
        //      BEFORE UPDATE ON "CentreConcours" 
        //      FOR EACH ROW EXECUTE PROCEDURE modification_centreConcours();
        //  `)

        // // création du triggers lors d'une suppression ou déclencheurs
        // await connection.query(`
        //      CREATE TRIGGER before_centreconcours_delete
        //      BEFORE DELETE ON "CentreConcours" 
        //      FOR EACH ROW EXECUTE PROCEDURE suppression_centreConcours();
        //  `)

        //---for mysql use
        await connection.query(`INSERT INTO centreconcours  (nomCentre)  VALUES ('Antananarivo')`)
        await connection.query(`INSERT INTO centreconcours  (nomCentre)  VALUES ('Fianarantsoa')`)
        await connection.query(`INSERT INTO centreconcours  (nomCentre)  VALUES ('Toamasina')`)
        await connection.query(`INSERT INTO centreconcours  (nomCentre)  VALUES ('Diego')`)
        await connection.query(`INSERT INTO centreconcours  (nomCentre)  VALUES ('Toliara')`)
        await connection.query(`INSERT INTO centreconcours  (nomCentre)  VALUES ('Mahajanga')`)

        // table pour les déclencheurs 
        await connection.query(
            `CREATE TABLE IF NOT EXISTS centreconcours_audit (
             id INT AUTO_INCREMENT PRIMARY KEY,
             operation_type VARCHAR(20) NOT NULL,
             nomCentre VARCHAR(50) NOT NULL,
             old_nomCentre VARCHAR(50) DEFAULT NULL,
             createdAt DATETIME DEFAULT NULL,
             userId INT NOT NULL,
             FOREIGN KEY (userId) REFERENCES user(id)
             );`
        );

        // création du triggers lors d'une insertion ou déclencheurs
        await connection.query(`
             CREATE TRIGGER before_centreconcours_insert
             BEFORE INSERT ON centreconcours 
             FOR EACH ROW
                 INSERT INTO centreconcours_audit
                 SET operation_type = 'ajout',
                 nomCentre = NEW.nomCentre,
                 userId = '1',
                 createdAt = NOW();
         `)

        // création du triggers lors d'une modification ou déclencheurs
        await connection.query(`
             CREATE TRIGGER before_centreconcours_update
             BEFORE UPDATE ON centreconcours 
             FOR EACH ROW
                 INSERT INTO centreconcours_audit
                 SET operation_type = 'modification',
                 nomCentre = NEW.nomCentre,
                 old_nomCentre = OLD.nomCentre,
                 userId = '1',
                 createdAt = NOW();
         `)

        // création du triggers lors d'une suppression ou déclencheurs
        await connection.query(`
             CREATE TRIGGER before_centreconcours_delete
             BEFORE DELETE ON centreconcours 
             FOR EACH ROW
                 INSERT INTO centreconcours_audit
                 SET operation_type = 'suppression',
                 nomCentre = OLD.nomCentre,
                 userId = '1',
                 createdAt = NOW();
 
         `)
        // await connection.query(`
        //  REVOKE ALL ON centreconcours_audit FROM '*'@'localhost';
        //  `)

    }
}