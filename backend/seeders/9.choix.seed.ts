import { Factory, Seeder } from 'typeorm-seeding'
import { Connection } from 'typeorm'

export default class CreateChoix implements Seeder {
    public async run(factory: Factory, connection: Connection): Promise<any> {
        // await connection.query(`INSERT INTO "Choix"  ("libelleChoix", "limiteAge", "limiteBacc", "nbPlaces", "nbListeAttente")  VALUES ('IG -  Fianarantsoa', '3', '2', '150', '50')`)
        // await connection.query(`INSERT INTO "Choix"  ("libelleChoix", "limiteAge", "limiteBacc", "nbPlaces", "nbListeAttente")  VALUES ('IG - Toliara', '3', '2', '150', '50')`)
        // await connection.query(`INSERT INTO "Choix"  ("libelleChoix", "limiteAge", "limiteBacc", "nbPlaces", "nbListeAttente")  VALUES ('PRO - Fianarantsoa ', '0', '0', '150', '20')`)

        // table pour les déclencheurs 
        // await connection.query(
        //     `CREATE TABLE IF NOT EXISTS choix_audit (
        //     id SERIAL PRIMARY KEY,
        //     operation_type VARCHAR(20) NOT NULL,
        //     libelleChoix VARCHAR(50) NOT NULL,
        //     old_libelleChoix VARCHAR(50) DEFAULT NULL,
        //     createdAt DATE DEFAULT NULL,
        //     limiteAge INT NOT NULL,
        //     old_limiteAge INT DEFAULT NULL,
        //     limiteBacc VARCHAR(50) NOT NULL,
        //     old_limiteBacc VARCHAR(50) DEFAULT NULL,
        //     nbPlaces INT DEFAULT NULL,
        //     old_nbPlaces INT DEFAULT NULL,
        //     nbListeAttente INT DEFAULT NULL,
        //     old_nbListeAttente INT DEFAULT NULL,
        //     userId INT NOT NULL,
        //     FOREIGN KEY (userId) REFERENCES "user" (id)
        //     );`);

        // //creation de la fonction à utiliser pour le trigger d'insertion
        // await connection.query(`
        //     CREATE OR REPLACE FUNCTION ajout_choix ()
        //     RETURNS trigger AS
        //     $$
        //         DECLARE
        //         BEGIN
        //             IF TRUE THEN
        //                 INSERT INTO 
        //                 choix_audit(operation_type, libelleChoix, limiteAge, limiteBacc, nbPlaces, userId, createdAt)
        //                 VALUES('ajout', NEW.libelleChoix, NEW.limiteAge, NEW.limiteBacc, NEW.nbPlaces, '1', NOW());
        //             END IF;
        //             RETURN NEW;
        //         END;
        //     $$ LANGUAGE 'plpgsql';
        // `)

        // //creation de la fonction à utiliser pour le trigger de modification
        // await connection.query(`
        //     CREATE OR REPLACE FUNCTION modification_choix ()
        //     RETURNS trigger AS
        //     $$
        //         DECLARE
        //         BEGIN
        //             IF TRUE THEN
        //                 INSERT INTO 
        //                 choix_audit(operation_type, libelleChoix, limiteAge, limiteBacc, nbPlaces, old_libelleChoix, old_limiteAge, old_limiteBacc, old_nbPlaces, old_nbListeAttente, userId, createdAt)
        //                 VALUES('modification', NEW.libelleChoix, NEW.limiteAge, NEW.limiteBacc, NEW.nbPlaces, OLD.libelleChoix, OLD.limiteAge, OLD.limiteBacc, OLD.nbPlaces, OLD.nbListeAttente, '1', NOW());
        //             END IF;
        //             RETURN NEW;
        //         END;
        //     $$ LANGUAGE 'plpgsql';
        // `)

        // //creation de la fonction à utiliser pour le trigger de suppression
        // await connection.query(`
        //     CREATE OR REPLACE FUNCTION suppression_choix ()
        //     RETURNS trigger AS
        //     $$
        //         DECLARE
        //         BEGIN
        //             IF TRUE THEN
        //                 INSERT INTO 
        //                 choix_audit(operation_type, libelleChoix, limiteAge, limiteBacc, nbPlaces, userId, createdAt)
        //                 VALUES('seuppression', OLD.libelleChoix, OLD.limiteAge, OLD.limiteBacc, OLD.nbPlaces, '1', NOW());
        //             END IF;
        //             RETURN NEW;
        //         END;
        //     $$ LANGUAGE 'plpgsql';
        // `)

        // // création du triggers lors d'une insertion ou déclencheurs
        // await connection.query(`
        //     CREATE TRIGGER before_choix_insert
        //     BEFORE INSERT ON "Choix" 
        //     FOR EACH ROW EXECUTE PROCEDURE ajout_choix();
        // `)

        // // création du triggers lors d'une modification ou déclencheurs
        // await connection.query(`
        //     CREATE TRIGGER before_choix_update
        //     BEFORE UPDATE ON "Choix" 
        //     FOR EACH ROW EXECUTE PROCEDURE modification_choix();
        // `)

        // // création du triggers lors d'une suppression ou déclencheurs
        // await connection.query(`
        //     CREATE TRIGGER before_choix_delete
        //     BEFORE DELETE ON "Choix" 
        //     FOR EACH ROW EXECUTE PROCEDURE suppression_choix();
        // `)
        
        //---for mysql use
        await connection.query(`INSERT INTO choix  (libelleChoix, limiteAge, limiteBacc, nbPlaces, nbListeAttente)  VALUES ('IG -  Fianarantsoa', '3', '2', '150', '50')`)
        await connection.query(`INSERT INTO choix  (libelleChoix, limiteAge, limiteBacc, nbPlaces, nbListeAttente)  VALUES ('IG - Toliara', '3', '2', '150', '50')`)
        await connection.query(`INSERT INTO choix  (libelleChoix, limiteAge, limiteBacc, nbPlaces, nbListeAttente)  VALUES ('PRO - Fianarantsoa ', '0', '0', '150', '20')`)

        // table pour les déclencheurs 
        await connection.query(
            `CREATE TABLE IF NOT EXISTS choix_audit (
            id INT AUTO_INCREMENT PRIMARY KEY,
            operation_type VARCHAR(20) NOT NULL,
            libelleChoix VARCHAR(50) NOT NULL,
            old_libelleChoix VARCHAR(50) DEFAULT NULL,
            createdAt DATETIME DEFAULT NULL,
            limiteAge INT NOT NULL,
            old_limiteAge INT DEFAULT NULL,
            limiteBacc VARCHAR(50) NOT NULL,
            old_limiteBacc VARCHAR(50) DEFAULT NULL,
            nbPlaces INT DEFAULT NULL,
            old_nbPlaces INT DEFAULT NULL,
            nbListeAttente INT DEFAULT NULL,
            old_nbListeAttente INT DEFAULT NULL,
            userId INT NOT NULL,
            FOREIGN KEY (userId) REFERENCES user (id)
            );`);

        // création du triggers lors d'une insertion ou déclencheurs
        await connection.query(`
            CREATE TRIGGER before_choix_insert
            BEFORE INSERT ON choix 
            FOR EACH ROW
                INSERT INTO choix_audit
                SET operation_type = 'ajout',
                libelleChoix = NEW.libelleChoix,
                limiteAge = NEW.limiteAge,
                limiteBacc = NEW.limiteBacc,
                nbPlaces = NEW.nbPlaces,
                userId = '1',
                createdAt = NOW()
        `)

        // création du triggers lors d'une modification ou déclencheurs
        await connection.query(`
            CREATE TRIGGER before_choix_update
            BEFORE UPDATE ON choix 
            FOR EACH ROW
                INSERT INTO choix_audit
                SET operation_type = 'modification',
                libelleChoix = NEW.libelleChoix,
                limiteAge = NEW.limiteAge,
                limiteBacc = NEW.limiteBacc,
                nbPlaces = NEW.nbPlaces,
                nbListeAttente = NEW.nbListeAttente,
                old_libelleChoix = OLD.libelleChoix,
                old_limiteAge = OLD.limiteAge,
                old_limiteBacc = OLD.limiteBacc,
                old_nbPlaces = OLD.nbPlaces,
                old_nbListeAttente = OLD.nbListeAttente,
                userId = '1',
                createdAt = NOW()
        `)

        // création du triggers lors d'une suppression ou déclencheurs
        await connection.query(`
            CREATE TRIGGER before_choix_delete
            BEFORE DELETE ON choix 
            FOR EACH ROW
                INSERT INTO choix_audit
                SET operation_type = 'suppression',
                libelleChoix = OLD.libelleChoix,
                limiteAge = OLD.limiteAge,
                limiteBacc = OLD.limiteBacc,
                nbPlaces = OLD.nbPlaces,
                userId = '1',
                createdAt = NOW()
        `)
    }   
}