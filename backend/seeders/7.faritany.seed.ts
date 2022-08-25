import { Factory, Seeder } from 'typeorm-seeding'
import { Connection } from 'typeorm'


export default class CreateFaritany implements Seeder {
    public async run(factory: Factory, connection: Connection): Promise<any> {
        //for postgreSQL use
        // await connection.query(`INSERT INTO "Faritany"  ("nomFaritany")  VALUES ('Diana')`)
        // await connection.query(`INSERT INTO "Faritany"  ("nomFaritany")  VALUES ('Sava')`)
        // await connection.query(`INSERT INTO "Faritany"  ("nomFaritany")  VALUES ('Itasy')`)
        // await connection.query(`INSERT INTO "Faritany"  ("nomFaritany")  VALUES ('Analamanga')`)
        // await connection.query(`INSERT INTO "Faritany"  ("nomFaritany")  VALUES ('Vakinakaratra')`)
        // await connection.query(`INSERT INTO "Faritany"  ("nomFaritany")  VALUES ('Bongolava')`)
        // await connection.query(`INSERT INTO "Faritany"  ("nomFaritany")  VALUES ('Sofia')`)
        // await connection.query(`INSERT INTO "Faritany" ("nomFaritany")  VALUES ('Boeny')`)
        // await connection.query(`INSERT INTO "Faritany" ("nomFaritany")  VALUES ('Betsiboka')`)
        // await connection.query(`INSERT INTO "Faritany" ("nomFaritany")  VALUES ('Melaky')`)
        // await connection.query(`INSERT INTO "Faritany" ("nomFaritany")  VALUES ('Alaotra Mangoro')`)
        // await connection.query(`INSERT INTO "Faritany" ("nomFaritany")  VALUES ('Antsinanana')`)
        // await connection.query(`INSERT INTO "Faritany" ("nomFaritany")  VALUES ('Analanjirofo')`)
        // await connection.query(`INSERT INTO "Faritany" ("nomFaritany")  VALUES (E'Amoron\\'i Mania')`)
        // await connection.query(`INSERT INTO "Faritany" ("nomFaritany")  VALUES ('Matsiatra Ambony')`)
        // await connection.query(`INSERT INTO "Faritany" ("nomFaritany")  VALUES ('Vatovavy')`)
        // await connection.query(`INSERT INTO "Faritany" ("nomFaritany")  VALUES ('Fitovinany')`)
        // await connection.query(`INSERT INTO "Faritany" ("nomFaritany")  VALUES ('Atsimo Antsinanana')`)
        // await connection.query(`INSERT INTO "Faritany" ("nomFaritany")  VALUES ('Ihorombe')`)
        // await connection.query(`INSERT INTO "Faritany" ("nomFaritany")  VALUES ('Menabe')`)
        // await connection.query(`INSERT INTO "Faritany" ("nomFaritany")  VALUES ('Atsimo Andrefana')`)
        // await connection.query(`INSERT INTO "Faritany" ("nomFaritany")  VALUES ('Androy')`)
        // await connection.query(`INSERT INTO "Faritany" ("nomFaritany")  VALUES ('Anosy')`)

        // table pour les déclencheurs 
        // await connection.query(
        //     `CREATE TABLE IF NOT EXISTS faritany_audit (
        //         id SERIAL PRIMARY KEY,
        //         operation_type VARCHAR(20) NOT NULL,
        //         nomFaritany VARCHAR(50) NOT NULL,
        //         old_nomFaritany VARCHAR(50) DEFAULT NULL,
        //         createdAt DATE DEFAULT NULL,
        //         userId INT NOT NULL,
        //         FOREIGN KEY (userId) REFERENCES "user" (id)
        //     );`
        // );

        // //creation de la fonction à utiliser pour le trigger d'insertion
        // await connection.query(`
        //     CREATE OR REPLACE FUNCTION ajout_faritany ()
        //     RETURNS trigger AS
        //     $$
        //         DECLARE
        //         BEGIN
        //             IF TRUE THEN
        //                 INSERT INTO 
        //                 faritany_audit(operation_type, nomFaritany, userId, createdAt)
        //                 VALUES('ajout', NEW.nomFaritany, '1', NOW());
        //             END IF;
        //             RETURN NEW;
        //         END;
        //     $$ LANGUAGE 'plpgsql';
        // `)

        // //creation de la fonction à utiliser pour le trigger de modification
        // await connection.query(`
        //     CREATE OR REPLACE FUNCTION modification_faritany ()
        //     RETURNS trigger AS
        //     $$
        //         DECLARE
        //         BEGIN
        //             IF TRUE THEN
        //                 INSERT INTO 
        //                 faritany_audit(operation_type, nomFaritany, old_nomFaritany, userId, createdAt)
        //                 VALUES('modification', NEW.nomFaritany, OLD.nomFaritany '1', NOW());
        //             END IF;
        //             RETURN NEW;
        //         END;
        //     $$ LANGUAGE 'plpgsql';
        // `)

        // //creation de la fonction à utiliser pour le trigger de suppression
        // await connection.query(`
        //     CREATE OR REPLACE FUNCTION suppression_faritany ()
        //     RETURNS trigger AS
        //     $$
        //         DECLARE
        //         BEGIN
        //             IF TRUE THEN
        //                 INSERT INTO 
        //                 faritany_audit(operation_type, nomFaritany, userId, createdAt)
        //                 VALUES('ajout', OLD.nomFaritany, '1', NOW());
        //             END IF;
        //             RETURN NEW;
        //         END;
        //     $$ LANGUAGE 'plpgsql';
        // `)

        // // création du triggers lors d'une insertion ou déclencheurs
        // await connection.query(`
        //     CREATE TRIGGER before_faritany_insert
        //     BEFORE INSERT ON "Faritany" 
        //     FOR EACH ROW EXECUTE PROCEDURE ajout_faritany();
        // `)

        // // création du triggers lors d'une modification ou déclencheurs
        // await connection.query(`
        //     CREATE TRIGGER before_faritany_update
        //     BEFORE UPDATE ON "Faritany" 
        //     FOR EACH ROW EXECUTE PROCEDURE modification_faritany();
        // `)

        // // création du triggers lors d'une suppression ou déclencheurs
        // await connection.query(`
        //     CREATE TRIGGER before_faritany_delete
        //     BEFORE DELETE ON "Faritany" 
        //     FOR EACH ROW EXECUTE PROCEDURE suppression_faritany();

        // `)


        //---for mysql use
        await connection.query(`INSERT INTO faritany  (nomFaritany)  VALUES ('Diana')`)
        await connection.query(`INSERT INTO faritany  (nomFaritany)  VALUES ('Sava')`)
        await connection.query(`INSERT INTO faritany  (nomFaritany)  VALUES ('Itasy')`)
        await connection.query(`INSERT INTO faritany  (nomFaritany)  VALUES ('Analamanga')`)
        await connection.query(`INSERT INTO faritany  (nomFaritany)  VALUES ('Vakinakaratra')`)
        await connection.query(`INSERT INTO faritany  (nomFaritany)  VALUES ('Bongolava')`)
        await connection.query(`INSERT INTO faritany  (nomFaritany)  VALUES ('Sofia')`)
        await connection.query(`INSERT INTO faritany (nomFaritany)  VALUES ('Boeny')`)
        await connection.query(`INSERT INTO faritany (nomFaritany)  VALUES ('Betsiboka')`)
        await connection.query(`INSERT INTO faritany (nomFaritany)  VALUES ('Melaky')`)
        await connection.query(`INSERT INTO faritany (nomFaritany)  VALUES ('Alaotra Mangoro')`)
        await connection.query(`INSERT INTO faritany (nomFaritany)  VALUES ('Antsinanana')`)
        await connection.query(`INSERT INTO faritany (nomFaritany)  VALUES ('Analanjirofo')`)
        await connection.query(`INSERT INTO faritany (nomFaritany)  VALUES ('Amoron\\'i Mania')`)
        await connection.query(`INSERT INTO faritany (nomFaritany)  VALUES ('Matsiatra Ambony')`)
        await connection.query(`INSERT INTO faritany (nomFaritany)  VALUES ('Vatovavy')`)
        await connection.query(`INSERT INTO faritany (nomFaritany)  VALUES ('Fitovinany')`)
        await connection.query(`INSERT INTO faritany (nomFaritany)  VALUES ('Atsimo Antsinanana')`)
        await connection.query(`INSERT INTO faritany (nomFaritany)  VALUES ('Ihorombe')`)
        await connection.query(`INSERT INTO faritany (nomFaritany)  VALUES ('Menabe')`)
        await connection.query(`INSERT INTO faritany (nomFaritany)  VALUES ('Atsimo Andrefana')`)
        await connection.query(`INSERT INTO faritany (nomFaritany)  VALUES ('Androy')`)
        await connection.query(`INSERT INTO faritany (nomFaritany)  VALUES ('Anosy')`)

        // table pour les déclencheurs 
        await connection.query(
            `CREATE TABLE IF NOT EXISTS faritany_audit (
            id INT AUTO_INCREMENT PRIMARY KEY,
            operation_type VARCHAR(20) NOT NULL,
            nomFaritany VARCHAR(50) NOT NULL,
            old_nomFaritany VARCHAR(50) DEFAULT NULL,
            createdAt DATETIME DEFAULT NULL,
            userId INT NOT NULL,
            FOREIGN KEY (userId) REFERENCES user (id)
            );`
        );

        // création du triggers lors d'une insertion ou déclencheurs
        await connection.query(`
            CREATE TRIGGER before_faritany_insert
            BEFORE INSERT ON faritany 
            FOR EACH ROW
                INSERT INTO faritany_audit
                SET operation_type = 'ajout',
                nomFaritany = NEW.nomFaritany,
                userId = '1',
                createdAt = NOW();
        `)

        // création du triggers lors d'une modification ou déclencheurs
        await connection.query(`
            CREATE TRIGGER before_faritany_update
            BEFORE UPDATE ON faritany 
            FOR EACH ROW
                INSERT INTO faritany_audit
                SET operation_type = 'modification',
                nomFaritany = NEW.nomFaritany,
                old_nomFaritany = OLD.nomFaritany,
                userId = '1',
                createdAt = NOW();
        `)

        // création du triggers lors d'une suppression ou déclencheurs
        await connection.query(`
            CREATE TRIGGER before_faritany_delete
            BEFORE DELETE ON faritany 
            FOR EACH ROW
                INSERT INTO faritany_audit
                SET operation_type = 'suppression',
                nomFaritany = OLD.nomFaritany,
                userId = '1',
                createdAt = NOW();
        `)
    }
}