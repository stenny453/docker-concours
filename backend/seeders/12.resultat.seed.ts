import { Factory, Seeder } from 'typeorm-seeding'
import { Connection } from 'typeorm'


export default class CreateResultats implements Seeder {
    public async run(factory: Factory, connection: Connection): Promise<any> {
        //---for postgreSQL use
        // await connection.query(`INSERT INTO "Resultat"  ("libelleResultat")  VALUES ('Admis')`)
        // await connection.query(`INSERT INTO "Resultat"  ("libelleResultat")  VALUES ('En attente')`)
        // await connection.query(`INSERT INTO "Resultat"  ("libelleResultat")  VALUES ('Refusé')`)


        // table pour les déclencheurs 
        // await connection.query(
        //     `CREATE TABLE IF NOT EXISTS resultat_audit (
        //     id SERIAL PRIMARY KEY,
        //     operation_type VARCHAR(20) NOT NULL,
        //     libelleResultat VARCHAR(50) NOT NULL,
        //     old_libelleResultat VARCHAR(50) DEFAULT NULL,
        //     createdAt DATE DEFAULT NULL,
        //     userId INT NOT NULL,
        //     FOREIGN KEY (userId) REFERENCES "user" (id)
        //     );`
        // );

        // //creation de la fonction à utiliser pour le trigger d'insertion
        // await connection.query(`
        //     CREATE OR REPLACE FUNCTION ajout_resultat ()
        //     RETURNS trigger AS
        //     $$
        //         DECLARE
        //         BEGIN
        //             IF TRUE THEN
        //                 INSERT INTO 
        //                 resultat_audit(operation_type, libelleResultat, userId, createdAt)
        //                 VALUES('ajout', NEW.libelleResultat, '1', NOW());
        //             END IF;
        //             RETURN NEW;
        //         END;
        //     $$ LANGUAGE 'plpgsql';
        // `)

        // //creation de la fonction à utiliser pour le trigger de modification
        // await connection.query(`
        //     CREATE OR REPLACE FUNCTION modification_resultat ()
        //     RETURNS trigger AS
        //     $$
        //         DECLARE
        //         BEGIN
        //             IF TRUE THEN
        //                 INSERT INTO 
        //                 resultat_audit(operation_type, libelleResultat, old_libelleResultat, userId, createdAt)
        //                 VALUES('modification', NEW.libelleResultat, OLD.old_libelleResultat, '1', NOW());
        //             END IF;
        //             RETURN NEW;
        //         END;
        //     $$ LANGUAGE 'plpgsql';
        // `)

        // //creation de la fonction à utiliser pour le trigger de suppression
        // await connection.query(`
        //     CREATE OR REPLACE FUNCTION suppression_resultat ()
        //     RETURNS trigger AS
        //     $$
        //         DECLARE
        //         BEGIN
        //             IF TRUE THEN
        //                 INSERT INTO 
        //                 resultat_audit(operation_type, libelleResultat, userId, createdAt)
        //                 VALUES('suppression', OLD.libelleResultat, '1', NOW());
        //             END IF;
        //             RETURN NEW;
        //         END;
        //     $$ LANGUAGE 'plpgsql';
        // `)

        // // création du triggers lors d'une insertion ou déclencheurs
        // await connection.query(`
        //     CREATE TRIGGER before_resultat_insert
        //     BEFORE INSERT ON "Resultat" 
        //     FOR EACH ROW EXECUTE PROCEDURE ajout_resultat();
        // `)

        // // création du triggers lors d'une modification ou déclencheurs
        // await connection.query(`
        //     CREATE TRIGGER before_resultat_update
        //     BEFORE UPDATE ON "Resultat" 
        //     FOR EACH ROW EXECUTE PROCEDURE modification_resultat();
        // `)

        // // création du triggers lors d'une suppression ou déclencheurs
        // await connection.query(`
        //     CREATE TRIGGER before_resultat_delete
        //     BEFORE DELETE ON "Resultat" 
        //     FOR EACH ROW EXECUTE PROCEDURE suppression_resultat();

        // `)

        //---for mysql use
        await connection.query(`INSERT INTO resultat  (libelleResultat)  VALUES ('Admis')`)
        await connection.query(`INSERT INTO resultat  (libelleResultat)  VALUES ('En attente')`)
        await connection.query(`INSERT INTO resultat  (libelleResultat)  VALUES ('Refusé')`)


        // table pour les déclencheurs 
        await connection.query(
            `CREATE TABLE IF NOT EXISTS resultat_audit (
            id INT AUTO_INCREMENT PRIMARY KEY,
            operation_type VARCHAR(20) NOT NULL,
            libelleResultat VARCHAR(50) NOT NULL,
            old_libelleResultat VARCHAR(50) DEFAULT NULL,
            createdAt DATETIME DEFAULT NULL,
            userId INT NOT NULL,
            FOREIGN KEY (userId) REFERENCES user (id)
            );`
        );

        // création du triggers lors d'une insertion ou déclencheurs
        await connection.query(`
            CREATE TRIGGER before_resultat_insert
            BEFORE INSERT ON resultat 
            FOR EACH ROW
                INSERT INTO resultat_audit
                SET operation_type = 'ajout',
                libelleResultat = NEW.libelleResultat,
                userId = '1',
                createdAt = NOW();
        `)

        // création du triggers lors d'une modification ou déclencheurs
        await connection.query(`
            CREATE TRIGGER before_resultat_update
            BEFORE UPDATE ON resultat 
            FOR EACH ROW
                INSERT INTO resultat_audit
                SET operation_type = 'modification',
                libelleResultat = NEW.libelleResultat,
                old_libelleResultat = OLD.libelleResultat,
                userId = '1',
                createdAt = NOW();
        `)

        // création du triggers lors d'une suppression ou déclencheurs
        await connection.query(`
            CREATE TRIGGER before_resultat_delete
            BEFORE DELETE ON resultat 
            FOR EACH ROW
                INSERT INTO resultat_audit
                SET operation_type = 'suppression',
               libelleResultat = OLD.libelleResultat,
                userId = '1',
                createdAt = NOW();
        `)

    }
}