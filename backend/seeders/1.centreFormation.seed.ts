import { Factory, Seeder } from 'typeorm-seeding'
import { Connection } from 'typeorm'


export default class CreateCentreFormation implements Seeder {
    public async run(factory: Factory, connection: Connection): Promise<any> {
        //---for postgreSQL
        // await connection.query(`INSERT INTO "CentreFormation"  ("nomCentreFormation")  VALUES ('Professionnel (Fianarantsoa)')`)
        // await connection.query(`INSERT INTO "CentreFormation"  ("nomCentreFormation")  VALUES ('Informatique Générale (Fianarantsoa)')`)
        // await connection.query(`INSERT INTO "CentreFormation"  ("nomCentreFormation")  VALUES ('Informatique Générale (Toliara)')`)

        // table pour les déclencheurs 
        // await connection.query(
        //     `CREATE TABLE IF NOT EXISTS centreformation_audit (
        //      id SERIAL PRIMARY KEY,
        //      operation_type VARCHAR(20) NOT NULL,
        //      nomCentreFormation VARCHAR(50) NOT NULL,
        //      old_nomCentreFormation VARCHAR(50) DEFAULT NULL,
        //      createdAt DATE DEFAULT NULL,
        //      userId INT NOT NULL,
        //      FOREIGN KEY (userId) REFERENCES "user" (id)
        //     );`
        // );

        // //creation de la fonction à utiliser pour le trigger d'insertion
        // await connection.query(`
        //     CREATE OR REPLACE FUNCTION ajout_centreFormation ()
        //     RETURNS trigger AS
        //     $$
        //         DECLARE
        //         BEGIN
        //             IF TRUE THEN
        //                 INSERT INTO 
        //                 centreformation_audit(operation_type, nomCentreFormation, userId, createdAt)
        //                 VALUES('ajout', NEW.nomCentreFormation, '1', NOW());
        //             END IF;
        //             RETURN NEW;
        //         END;
        //     $$ LANGUAGE 'plpgsql';
        // `)

        // //creation de la fonction à utiliser pour le trigger de modification
        // await connection.query(`
        //     CREATE OR REPLACE FUNCTION modification_centreFormation ()
        //     RETURNS trigger AS
        //     $$
        //         DECLARE
        //         BEGIN
        //             IF TRUE THEN
        //                 INSERT INTO 
        //                 centreformation_audit(operation_type, nomCentreFormation, old_nomCentreFormation, userId, createdAt)
        //                 VALUES('modification', NEW.nomCentreFormation, OLD.nomCentreFormation, '1', NOW());
        //             END IF;
        //             RETURN NEW;
        //         END;
        //     $$ LANGUAGE 'plpgsql';
        // `)

        // //creation de la fonction à utiliser pour le trigger de suppression
        // await connection.query(`
        //     CREATE OR REPLACE FUNCTION suppression_centreFormation ()
        //     RETURNS trigger AS
        //     $$
        //         DECLARE
        //         BEGIN
        //             IF TRUE THEN
        //                 INSERT INTO 
        //                 centreformation_audit(operation_type, nomCentreFormation, userId, createdAt)
        //                 VALUES('suppression', OLD.nomCentreFormation, '1', NOW());
        //             END IF;
        //             RETURN NEW;
        //         END;
        //     $$ LANGUAGE 'plpgsql';
        // `)

        // // création du triggers lors d'une insertion ou déclencheurs
        // await connection.query(`
        //     CREATE TRIGGER before_centreformation_insert
        //     BEFORE INSERT ON "CentreFormation" 
        //     FOR EACH ROW EXECUTE PROCEDURE ajout_centreFormation()
        // `)

        // // création du triggers lors d'une modification ou déclencheurs
        // await connection.query(`
        //     CREATE TRIGGER before_centreformation_update
        //     BEFORE UPDATE ON "CentreFormation" 
        //     FOR EACH ROW EXECUTE PROCEDURE modification_centreFormation() 
        // `)

        // // création du triggers lors d'une suppression ou déclencheurs
        // await connection.query(`
        //     CREATE TRIGGER before_centreformation_delete
        //     BEFORE DELETE ON "CentreFormation" 
        //     FOR EACH ROW EXECUTE PROCEDURE suppression_centreFormation()
        // `)
        // await connection.query(`
        //  REVOKE ALL ON centreformation_audit FROM '*'@'localhost';
        //  `)

        //---for mysql use
        await connection.query(`INSERT INTO centreformation  (nomCentreFormation)  VALUES ('Professionnel (Fianarantsoa)')`)
        await connection.query(`INSERT INTO centreformation  (nomCentreFormation)  VALUES ('Informatique Générale (Fianarantsoa)')`)
        await connection.query(`INSERT INTO centreformation  (nomCentreFormation)  VALUES ('Informatique Générale (Toliara)')`)

        // table pour les déclencheurs 
        await connection.query(
            `CREATE TABLE IF NOT EXISTS centreformation_audit (
             id INT AUTO_INCREMENT PRIMARY KEY,
             operation_type VARCHAR(20) NOT NULL,
             nomCentreFormation VARCHAR(50) NOT NULL,
             old_nomCentreFormation VARCHAR(50) DEFAULT NULL,
             createdAt DATETIME DEFAULT NULL,
             userId INT NOT NULL,
             FOREIGN KEY (userId) REFERENCES user(id)
             );`
        );

        // création du triggers lors d'une insertion ou déclencheurs
        await connection.query(`
             CREATE TRIGGER before_centreformation_insert
             BEFORE INSERT ON centreformation 
             FOR EACH ROW
                 INSERT INTO centreformation_audit
                 SET operation_type = 'ajout',
                 nomCentreFormation = NEW.nomCentreFormation,
                 userId = '1',
                 createdAt = NOW();
         `)

        // création du triggers lors d'une modification ou déclencheurs
        await connection.query(`
             CREATE TRIGGER before_centreformation_update
             BEFORE UPDATE ON centreformation 
             FOR EACH ROW
                 INSERT INTO centreformation_audit
                 SET operation_type = 'modification',
                 nomCentreFormation = NEW.nomCentreFormation,
                 old_nomCentreFormation = OLD.nomCentreFormation,
                 userId = '1',
                 createdAt = NOW();
         `)

        // création du triggers lors d'une suppression ou déclencheurs
        await connection.query(`
             CREATE TRIGGER before_centreformation_delete
             BEFORE DELETE ON centreformation 
             FOR EACH ROW
                 INSERT INTO centreformation_audit
                 SET operation_type = 'suppression',
                 nomCentreFormation = OLD.nomCentreFormation,
                 userId = '1',
                 createdAt = NOW();
         `)
        // await connection.query(`
        //  REVOKE ALL ON centreformation_audit FROM '*'@'localhost';
        // `)

    }
}