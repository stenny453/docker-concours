import { Factory, Seeder } from 'typeorm-seeding'
import { Connection } from 'typeorm'


export default class CreateParametres implements Seeder {
    public async run(factory: Factory, connection: Connection): Promise<any> {
        //---for postgreSQL use
        // await connection.query(`INSERT INTO "Parametres"  ("anneeUniv", "dateOuvertureInscription", "dateFermetureInscription", "numCpteENI") 
        //  VALUES (
        //     '2022',
        //     '2022-09-11 00:00:00',
        //     '2022-09-10 00:00:00',
        //     '54654319849461'
        //  )`)


        // table pour les déclencheurs 
        // await connection.query(
        //     `CREATE TABLE IF NOT EXISTS parametres_audit (
        //     id SERIAL PRIMARY KEY,
        //     operation_type VARCHAR(20) NOT NULL,
        //     anneeUniv VARCHAR(50) NOT NULL,
        //     dateOuvertureInscription  DATE NOT NULL,
        //     dateFermetureInscription  DATE NOT NULL,
        //     numCpteENI VARCHAR(50) NOT NULL,
        //     old_anneeUniv VARCHAR(50) DEFAULT NULL,
        //     old_dateOuvertureInscription  DATE DEFAULT NULL,
        //     old_dateFermetureInscription  DATE DEFAULT NULL,
        //     old_numCpteENI VARCHAR(50) DEFAULT NULL,            
        //     createdAt DATE DEFAULT NULL,
        //     userId INT NOT NULL,
        //     FOREIGN KEY (userId) REFERENCES "user" (id)
        //     );`
        // );

        // //creation de la fonction à utiliser pour le trigger d'insertion
        // await connection.query(`
        //     CREATE OR REPLACE FUNCTION ajout_parametres ()
        //     RETURNS trigger AS
        //     $$
        //         DECLARE
        //         BEGIN
        //             IF TRUE THEN
        //                 INSERT INTO 
        //                 parametres_audit(operation_type, anneeUniv, dateOuvertureInscription, dateFermetureInscription, numCpteENI, userId, createdAt)
        //                 VALUES('ajout', NEW.anneeUniv, NEW.dateOuvertureInscription, NEW.dateFermetureInscription, NEW.numCpteENI, '1', NOW());
        //             END IF;
        //             RETURN NEW;
        //         END;
        //     $$ LANGUAGE 'plpgsql';
        // `)

        // //modification de la fonction à utiliser pour le trigger de modification
        // await connection.query(`
        //     CREATE OR REPLACE FUNCTION modification_parametres ()
        //     RETURNS trigger AS
        //     $$
        //         DECLARE
        //         BEGIN
        //             IF TRUE THEN
        //                 INSERT INTO 
        //                 parametres_audit(operation_type, anneeUniv, dateOuvertureInscription, dateFermetureInscription, numCpteENI, old_anneeUniv, old_dateOuvertureInscription, old_dateFermetureInscription, old_numCpteENI, userId, createdAt)
        //                 VALUES('modification', NEW.anneeUniv, NEW.dateOuvertureInscription, NEW.dateFermetureInscription, NEW.numCpteENI, OLD.anneeUniv, OLD.dateOuvertureInscription, OLD.numCpteENI, '1', NOW());
        //             END IF;
        //             RETURN NEW;
        //         END;
        //     $$ LANGUAGE 'plpgsql';
        // `)

        // //suppression de la fonction à utiliser pour le trigger de suppression
        // await connection.query(`
        //     CREATE OR REPLACE FUNCTION suppression_parametres ()
        //     RETURNS trigger AS
        //     $$
        //         DECLARE
        //         BEGIN
        //             IF TRUE THEN
        //                 INSERT INTO 
        //                 parametres_audit(operation_type, anneeUniv, dateOuvertureInscription, dateFermetureInscription, numCpteENI, userId, createdAt)
        //                 VALUES('ajout', OLD.anneeUniv, OLD.dateOuvertureInscription, OLD.dateFermetureInscription, OLD.numCpteENI, '1', NOW());
        //             END IF;
        //             RETURN NEW;
        //         END;
        //     $$ LANGUAGE 'plpgsql';
        // `)

        // // création du triggers lors d'une insertion ou déclencheurs
        // await connection.query(`
        //     CREATE TRIGGER before_parametres_insert
        //     BEFORE INSERT ON "Parametres" 
        //     FOR EACH ROW EXECUTE PROCEDURE ajout_parametres();
        // `)

        // // création du triggers lors d'une modification ou déclencheurs
        // await connection.query(`
        //     CREATE TRIGGER before_parametres_update
        //     BEFORE UPDATE ON "Parametres" 
        //     FOR EACH ROW EXECUTE PROCEDURE modification_parametres();
        // `)

        // // création du triggers lors d'une suppression ou déclencheurs
        // await connection.query(`
        //     CREATE TRIGGER before_parametres_delete
        //     BEFORE DELETE ON "Parametres" 
        //     FOR EACH ROW EXECUTE PROCEDURE suppression_parametres();
        // `)

        //---for mysql use
        await connection.query(`INSERT INTO parametres  (anneeUniv, dateOuvertureInscription, dateFermetureInscription, numCpteENI) 
         VALUES (
            '2022',
            '2022-09-11 00:00:00',
            '2022-09-10 00:00:00',
            '54654319849461'
         )`)


        // table pour les déclencheurs 
        await connection.query(
            `CREATE TABLE IF NOT EXISTS parametres_audit (
            id INT AUTO_INCREMENT PRIMARY KEY,
            operation_type VARCHAR(20) NOT NULL,
            anneeUniv VARCHAR(50) NOT NULL,
            dateOuvertureInscription  DATETIME NOT NULL,
            dateFermetureInscription  DATETIME NOT NULL,
            numCpteENI VARCHAR(50) NOT NULL,
            old_anneeUniv VARCHAR(50) DEFAULT NULL,
            old_dateOuvertureInscription  DATETIME DEFAULT NULL,
            old_dateFermetureInscription  DATETIME DEFAULT NULL,
            old_numCpteENI VARCHAR(50) DEFAULT NULL,            
            createdAt DATETIME DEFAULT NULL,
            userId INT NOT NULL,
            FOREIGN KEY (userId) REFERENCES user (id)
            );`
        );

        // création du triggers lors d'une insertion ou déclencheurs
        await connection.query(`
            CREATE TRIGGER before_parametres_insert
            BEFORE INSERT ON parametres 
            FOR EACH ROW
                INSERT INTO parametres_audit
                SET operation_type = 'ajout',
                anneeUniv = NEW.anneeUniv,
                dateOuvertureInscription = NEW.dateOuvertureInscription,
                dateFermetureInscription = NEW.dateFermetureInscription,
                numCpteENI = NEW.numCpteENI,
                userId = '1',
                createdAt = NOW();
        `)

        // création du triggers lors d'une modification ou déclencheurs
        await connection.query(`
            CREATE TRIGGER before_parametres_update
            BEFORE UPDATE ON parametres 
            FOR EACH ROW
                INSERT INTO parametres_audit
                SET operation_type = 'modification',
                anneeUniv = NEW.anneeUniv,
                dateOuvertureInscription = NEW.dateOuvertureInscription,
                dateFermetureInscription = NEW.dateFermetureInscription,
                numCpteENI = NEW.numCpteENI,
                old_anneeUniv = OLD.anneeUniv,
                old_dateOuvertureInscription = OLD.dateOuvertureInscription,
                old_dateFermetureInscription = OLD.dateFermetureInscription,
                old_numCpteENI = OLD.numCpteENI,
                userId = '1',
                createdAt = NOW();
        `)

        // création du triggers lors d'une suppression ou déclencheurs
        await connection.query(`
            CREATE TRIGGER before_parametres_delete
            BEFORE DELETE ON parametres 
            FOR EACH ROW
                INSERT INTO parametres_audit
                SET operation_type = 'suppression',
               anneeUniv = OLD.anneeUniv,
                dateOuvertureInscription = OLD.dateOuvertureInscription,
                dateFermetureInscription = OLD.dateFermetureInscription,
                numCpteENI = OLD.numCpteENI,
                userId = '1',
                createdAt = NOW();

        `)

    }
}