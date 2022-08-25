import { Factory, Seeder } from 'typeorm-seeding'
import { Connection } from 'typeorm'


export default class CreateDroits implements Seeder {
    public async run(factory: Factory, connection: Connection): Promise<any> {
        //---for postgreSQL use
        // await connection.query(`INSERT INTO "Droit"  ("droitConcours", "fraisScolaire", "parametresId", "typeCandidatCodeTypeCand")  
        // VALUES (
        //     '10000',
        //     '100000',
        //     '1',
        //     '1'
        // )`)
        // await connection.query(`INSERT INTO "Droit"  ("droitConcours", "fraisScolaire", "parametresId", "typeCandidatCodeTypeCand")  
        // VALUES (
        //     '70000',
        //     '700000',
        //     '1',
        //     '2'
        // )`)
        // await connection.query(`INSERT INTO "Droit"  ("droitConcours", "fraisScolaire", "parametresId", "typeCandidatCodeTypeCand")  
        // VALUES (
        //     '90000',
        //     '900000',
        //     '1',
        //     '3'
        // )`)

        // table pour les déclencheurs 
        // await connection.query(
        //     `CREATE TABLE IF NOT EXISTS droit_audit (
        //     id SERIAL PRIMARY KEY,
        //     operation_type VARCHAR(20) NOT NULL,
        //     droitConcours VARCHAR(50) NOT NULL,
        //     fraisScolaire VARCHAR(50) DEFAULT NULL,
        //     parametresId INT DEFAULT NULL,
        //     typeCandidatCodeTypeCand INT DEFAULT NULL,
        //     old_droitConcours VARCHAR(50) DEFAULT NULL,
        //     old_fraisScolaire VARCHAR(50) DEFAULT NULL,
        //     old_parametresId INT DEFAULT NULL,
        //     old_typeCandidatCodeTypeCand INT DEFAULT NULL,
        //     createdAt DATE DEFAULT NULL,
        //     userId INT NOT NULL,
        //     FOREIGN KEY (userId) REFERENCES "user" (id)
        //     );`
        // );

        // //creation de la fonction à utiliser pour le trigger d'insertion
        // await connection.query(`
        //     CREATE OR REPLACE FUNCTION ajout_droit ()
        //     RETURNS trigger AS
        //     $$
        //         DECLARE
        //         BEGIN
        //             IF TRUE THEN
        //                 INSERT INTO 
        //                 droit_audit(operation_type, droitConcours, fraisScolaire, parametresId, typeCandidatCodeTypeCand, userId, createdAt)
        //                 VALUES('ajout', NEW.droitConcours, NEW.fraisScolaire, NEW.parametresId, NEW.typeCandidatCodeTypeCand, '1', NOW());
        //             END IF;
        //             RETURN NEW;
        //         END;
        //     $$ LANGUAGE 'plpgsql';
        // `)

        // //creation de la fonction à utiliser pour le trigger de modification
        // await connection.query(`
        //     CREATE OR REPLACE FUNCTION modification_droit ()
        //     RETURNS trigger AS
        //     $$
        //         DECLARE
        //         BEGIN
        //             IF TRUE THEN
        //                 INSERT INTO 
        //                 droit_audit(operation_type, droitConcours, fraisScolaire, parametresId, typeCandidatCodeTypeCand, old_droitConcours, old_fraisScolaire, old_parametresId, old_typeCandidatCodeTypeCand, userId, createdAt)
        //                 VALUES('modification', NEW.droitConcours, NEW.fraisScolaire, NEW.parametresId, NEW.typeCandidatCodeTypeCand, OLD.droitConcours, OLD.fraisScolaire, OLD.typeCandidatCodeTypeCand, old_parametresId, OLD.parametresId,  '1', NOW());
        //             END IF;
        //             RETURN NEW;
        //         END;
        //     $$ LANGUAGE 'plpgsql';
        // `)

        // //creation de la fonction à utiliser pour le trigger de suppression
        // await connection.query(`
        //     CREATE OR REPLACE FUNCTION suppression_droit ()
        //     RETURNS trigger AS
        //     $$
        //         DECLARE
        //         BEGIN
        //             IF TRUE THEN
        //                 INSERT INTO 
        //                 droit_audit(operation_type, droitConcours, fraisScolaire, parametresId, typeCandidatCodeTypeCand, userId, createdAt)
        //                 VALUES('suppression', OLD.droitConcours, OLD.fraisScolaire, OLD.parametresId, OLD.typeCandidatCodeTypeCand, '1', NOW());
        //             END IF;
        //             RETURN NEW;
        //         END;
        //     $$ LANGUAGE 'plpgsql';
        // `)

        // // création du triggers lors d'une insertion ou déclencheurs
        // await connection.query(`
        //     CREATE TRIGGER before_droit_insert
        //     BEFORE INSERT ON "Droit" 
        //     FOR EACH ROW EXECUTE PROCEDURE ajout_droit();
        // `)

        // // création du triggers lors d'une modification ou déclencheurs
        // await connection.query(`
        //     CREATE TRIGGER before_droit_update
        //     BEFORE UPDATE ON "Droit" 
        //     FOR EACH ROW EXECUTE PROCEDURE modification_droit();
        // `)

        // // création du triggers lors d'une suppression ou déclencheurs
        // await connection.query(`
        //     CREATE TRIGGER before_droit_delete
        //     BEFORE DELETE ON "Droit" 
        //     FOR EACH ROW EXECUTE PROCEDURE suppression_droit();
        // `)


        //---for mysql use
        await connection.query(`INSERT INTO droit  (droitConcours, fraisScolaire, parametresId, typeCandidatCodeTypeCand)  
        VALUES (
            '10000',
            '100000',
            '1',
            '1'
        )`)
        await connection.query(`INSERT INTO droit  (droitConcours, fraisScolaire, parametresId, typeCandidatCodeTypeCand)  
        VALUES (
            '70000',
            '700000',
            '1',
            '2'
        )`)
        await connection.query(`INSERT INTO droit  (droitConcours, fraisScolaire, parametresId, typeCandidatCodeTypeCand)  
        VALUES (
            '90000',
            '900000',
            '1',
            '3'
        )`)

        // table pour les déclencheurs 
        await connection.query(
            `CREATE TABLE IF NOT EXISTS droit_audit (
            id INT AUTO_INCREMENT PRIMARY KEY,
            operation_type VARCHAR(20) NOT NULL,
            droitConcours VARCHAR(50) NOT NULL,
            fraisScolaire VARCHAR(50) DEFAULT NULL,
            parametresId INT(10) DEFAULT NULL,
            typeCandidatCodeTypeCand INT(10) DEFAULT NULL,
            old_droitConcours VARCHAR(50) DEFAULT NULL,
            old_fraisScolaire VARCHAR(50) DEFAULT NULL,
            old_parametresId INT(10) DEFAULT NULL,
            old_typeCandidatCodeTypeCand INT(10) DEFAULT NULL,
            createdAt DATETIME DEFAULT NULL,
            userId INT NOT NULL,
            FOREIGN KEY (userId) REFERENCES user (id)
            );`
        );

        // création du triggers lors d'une insertion ou déclencheurs
        await connection.query(`
            CREATE TRIGGER before_droit_insert
            BEFORE INSERT ON droit 
            FOR EACH ROW
                INSERT INTO droit_audit
                SET operation_type = 'ajout',
                droitConcours = NEW.droitConcours,
                fraisScolaire = NEW.fraisScolaire,
                parametresId = NEW.parametresId,
                typeCandidatCodeTypeCand = NEW.typeCandidatCodeTypeCand,
                userId = '1',
                createdAt = NOW();
        `)

        // création du triggers lors d'une modification ou déclencheurs
        await connection.query(`
            CREATE TRIGGER before_droit_update
            BEFORE UPDATE ON droit 
            FOR EACH ROW
                INSERT INTO droit_audit
                SET operation_type = 'modification',
                droitConcours = NEW.droitConcours,
                fraisScolaire = NEW.fraisScolaire,
                parametresId = NEW.parametresId,
                typeCandidatCodeTypeCand = NEW.typeCandidatCodeTypeCand,
                old_droitConcours = OLD.droitConcours,
                old_fraisScolaire = OLD.fraisScolaire,
                old_parametresId = OLD.parametresId,
                old_typeCandidatCodeTypeCand = OLD.typeCandidatCodeTypeCand,
                userId = '1',
                createdAt = NOW();
        `)

        // création du triggers lors d'une suppression ou déclencheurs
        await connection.query(`
            CREATE TRIGGER before_droit_delete
            BEFORE DELETE ON droit 
            FOR EACH ROW
                INSERT INTO droit_audit
                SET operation_type = 'suppression',
                droitConcours = OLD.droitConcours,
                fraisScolaire = OLD.fraisScolaire,
                parametresId = OLD.parametresId,
                typeCandidatCodeTypeCand = OLD.typeCandidatCodeTypeCand,
                userId = '1',
                createdAt = NOW();
        `)
    }
}