import { Factory, Seeder } from 'typeorm-seeding'
import { Connection } from 'typeorm'


export default class CreateEpreuves implements Seeder {
    public async run(factory: Factory, connection: Connection): Promise<any> {
        //---for postgreSQL use
        // await connection.query(`INSERT INTO "Epreuve"  ("libelleEpreuve", "coef", "duree", "dateEpreuve")  
        // VALUES (
        //     'Français',
        //     '2',
        //     '3',
        //     '2022-11-12 06:00:00'
        // )`)
        // await connection.query(`INSERT INTO "Epreuve"  ("libelleEpreuve", "coef", "duree", "dateEpreuve")  
        // VALUES (
        //     'Anglais',
        //     '2',
        //     '3',
        //     '2022-11-12 08:00:00'
        // )`)
        // await connection.query(`INSERT INTO "Epreuve"  ("libelleEpreuve", "coef", "duree", "dateEpreuve")  
        // VALUES (
        //     'Mathematiques',
        //     '4',
        //     '4',
        //     '2022-11-12 10:00:00'
        // )`)
        // await connection.query(`INSERT INTO "Epreuve"  ("libelleEpreuve", "coef", "duree", "dateEpreuve")  
        // VALUES (
        //     'Physiques',
        //     '4',
        //     '4',
        //     '2022-11-12 15:00:00'
        // )`)
        // await connection.query(`INSERT INTO "Epreuve"  ("libelleEpreuve", "coef", "duree", "dateEpreuve")  
        // VALUES (
        //     'Testes Psychotechniques',
        //     '4',
        //     '2',
        //     '2022-11-12 17:00:00'
        // )`)

        // table pour les déclencheurs 
        // await connection.query(
        //     `CREATE TABLE IF NOT EXISTS epreuve_audit (
        //         id SERIAL PRIMARY KEY,
        //         operation_type VARCHAR(20) NOT NULL,
        //         libelleEpreuve VARCHAR(50) NOT NULL,
        //         coef VARCHAR(50) NOT NULL,
        //         duree VARCHAR(50) NOT NULL,
        //         dateEpreuve DATE NOT NULL,
        //         old_libelleEpreuve VARCHAR(50) NOT NULL,
        //         old_coef VARCHAR(50) DEFAULT NULL,
        //         old_duree VARCHAR(50) DEFAULT NULL,
        //         old_dateEpreuve DATE DEFAULT NULL,
        //         createdAt DATE DEFAULT NULL,
        //         userId INT NOT NULL,
        //         FOREIGN KEY (userId) REFERENCES "user" (id)
        //     );`
        // );

        // //creation de la fonction à utiliser pour le trigger d'insertion
        // await connection.query(`
        //     CREATE OR REPLACE FUNCTION ajout_epreuve ()
        //     RETURNS trigger AS
        //     $$
        //         DECLARE
        //         BEGIN
        //             IF TRUE THEN
        //                 INSERT INTO 
        //                 choix_audit(operation_type, libelleEpreuve, coef, duree, dateEpreuve, userId, createdAt)
        //                 VALUES('ajout', NEW.libelleEpreuve, NEW.coef, NEW.duree, NEW.dateEpreuve, '1', NOW());
        //             END IF;
        //             RETURN NEW;
        //         END;
        //     $$ LANGUAGE 'plpgsql';
        // `)

        // //creation de la fonction à utiliser pour le trigger de modification
        // await connection.query(`
        //     CREATE OR REPLACE FUNCTION modification_epreuve ()
        //     RETURNS trigger AS
        //     $$
        //         DECLARE
        //         BEGIN
        //             IF TRUE THEN
        //                 INSERT INTO 
        //                 choix_audit(operation_type, libelleEpreuve, coef, duree, dateEpreuve, old_libelleEpreuve, old_coef, old_duree, old_dateEpreuve, userId, createdAt)
        //                 VALUES('modification', NEW.libelleEpreuve, NEW.coef, NEW.duree, NEW.dateEpreuve, OLD.libelleEpreuve, OLD.coef, OLD.duree, OLD.dateEpreuve, '1', NOW());
        //             END IF;
        //             RETURN NEW;
        //         END;
        //     $$ LANGUAGE 'plpgsql';
        // `)

        // //creation de la fonction à utiliser pour le trigger de suppression
        // await connection.query(`
        //     CREATE OR REPLACE FUNCTION suppression_epreuve ()
        //     RETURNS trigger AS
        //     $$
        //         DECLARE
        //         BEGIN
        //             IF TRUE THEN
        //                 INSERT INTO 
        //                 choix_audit(operation_type, libelleEpreuve, coef, duree, dateEpreuve, userId, createdAt)
        //                 VALUES('suprression', OLD.libelleEpreuve, OLD.coef, OLD.duree, OLD.dateEpreuve, '1', NOW());
        //             END IF;
        //             RETURN NEW;
        //         END;
        //     $$ LANGUAGE 'plpgsql';
        // `)
            
        // // création du triggers lors d'une insertion ou déclencheurs
        // await connection.query(`
        //     CREATE TRIGGER before_epreuve_insert
        //     BEFORE INSERT ON "Epreuve" 
        //     FOR EACH ROW EXECUTE PROCEDURE ajout_epreuve();
        // `)

        // // création du triggers lors d'une modification ou déclencheurs
        // await connection.query(`
        //     CREATE TRIGGER before_epreuve_update
        //     BEFORE UPDATE ON "Epreuve" 
        //     FOR EACH ROW EXECUTE PROCEDURE modification_epreuve();
        // `)

        // // création du triggers lors d'une suppression ou déclencheurs
        // await connection.query(`
        //     CREATE TRIGGER before_epreuve_delete
        //     BEFORE DELETE ON "Epreuve" 
        //     FOR EACH ROW EXECUTE PROCEDURE suppression_epreuve();
        // `)

        //---for mysql use
        await connection.query(`INSERT INTO epreuve  (libelleEpreuve, coef, duree, dateEpreuve)  
        VALUES (
            'Français',
            '2',
            '3',
            '2022-11-12 06:00:00'
        )`)
        await connection.query(`INSERT INTO epreuve  (libelleEpreuve, coef, duree, dateEpreuve)  
        VALUES (
            'Anglais',
            '2',
            '3',
            '2022-11-12 08:00:00'
        )`)
        await connection.query(`INSERT INTO epreuve  (libelleEpreuve, coef, duree, dateEpreuve)  
        VALUES (
            'Mathematiques',
            '4',
            '4',
            '2022-11-12 10:00:00'
        )`)
        await connection.query(`INSERT INTO epreuve  (libelleEpreuve, coef, duree, dateEpreuve)  
        VALUES (
            'Physiques',
            '4',
            '4',
            '2022-11-12 15:00:00'
        )`)
        await connection.query(`INSERT INTO epreuve  (libelleEpreuve, coef, duree, dateEpreuve)  
        VALUES (
            'Testes Psychotechniques',
            '4',
            '2',
            '2022-11-12 17:00:00'
        )`)

        // table pour les déclencheurs 
        await connection.query(
            `CREATE TABLE IF NOT EXISTS epreuve_audit (
            id INT AUTO_INCREMENT PRIMARY KEY,
            operation_type VARCHAR(20) NOT NULL,
            libelleEpreuve VARCHAR(50) NOT NULL,
            coef VARCHAR(50) NOT NULL,
            duree VARCHAR(50) NOT NULL,
            dateEpreuve DATETIME NOT NULL,
            old_libelleEpreuve VARCHAR(50) NOT NULL,
            old_coef VARCHAR(50) DEFAULT NULL,
            old_duree VARCHAR(50) DEFAULT NULL,
            old_dateEpreuve DATETIME DEFAULT NULL,
            createdAt DATETIME DEFAULT NULL,
            userId INT NOT NULL,
            FOREIGN KEY (userId) REFERENCES user (id)
            );`
        );

        // création du triggers lors d'une insertion ou déclencheurs
        await connection.query(`
            CREATE TRIGGER before_epreuve_insert
            BEFORE INSERT ON epreuve 
            FOR EACH ROW
                INSERT INTO epreuve_audit
                SET operation_type = 'ajout',
                libelleEpreuve = NEW.libelleEpreuve,
                coef = NEW.coef ,
                duree = NEW.duree,
                dateEpreuve = NEW.dateEpreuve,
                userId = '1',
                createdAt = NOW();
        `)

        // création du triggers lors d'une modification ou déclencheurs
        await connection.query(`
            CREATE TRIGGER before_epreuve_update
            BEFORE UPDATE ON epreuve 
            FOR EACH ROW
                INSERT INTO epreuve_audit
                SET operation_type = 'modification',
                libelleEpreuve = NEW.libelleEpreuve,
                coef = NEW.coef ,
                duree = NEW.duree,
                dateEpreuve = NEW.dateEpreuve,
                old_libelleEpreuve = OLD.libelleEpreuve,
                old_coef = OLD.coef ,
                old_duree = OLD.duree,
                old_dateEpreuve = OLD.dateEpreuve,
                userId = '1',
                createdAt = NOW();
        `)

        // création du triggers lors d'une suppression ou déclencheurs
        await connection.query(`
            CREATE TRIGGER before_epreuve_delete
            BEFORE DELETE ON epreuve 
            FOR EACH ROW
                INSERT INTO epreuve_audit
                SET operation_type = 'suppression',
                libelleEpreuve = OLD.libelleEpreuve,
                coef = OLD.coef ,
                duree = OLD.duree,
                dateEpreuve = OLD.dateEpreuve,
                userId = '1',
                createdAt = NOW();
        `)
    }
}