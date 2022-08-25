import { Factory, Seeder } from 'typeorm-seeding'
import { Connection } from 'typeorm'


export default class CreateUsers implements Seeder {
    public async run(factory: Factory, connection: Connection): Promise<any> {
        //---for postgreSQL use
        // await connection.query(`INSERT INTO "user" ("email", "firstname", "lastname", "role", "password", "salt")  
        // VALUES (
        //     'ainakum@gmail.com',
        //     'Haja',
        //     'Aina',
        //     'secretary',
        //     '$2b$10$x/iZU6zc8sbPBArJjBCHeeDwSDLNh7a59tDhaL3pmtONn.kZnVA.K',
        //     '$2b$10$x/iZU6zc8sbPBArJjBCHee'
        // )`)  //pwd : 1234

        // table pour les déclencheurs pg
        // await connection.query(
        //     `CREATE TABLE IF NOT EXISTS user_audit (
        //     id SERIAL PRIMARY KEY,
        //     operation_type VARCHAR(20) NOT NULL,
        //     email VARCHAR(50) NOT NULL,
        //     firstname VARCHAR(50) NOT NULL,
        //     lastname VARCHAR(50) NOT NULL,
        //     role VARCHAR(50) NOT NULL,
        //     password VARCHAR(255) NOT NULL,
        //     salt VARCHAR(255) NOT NULL,
        //     old_email VARCHAR(50) DEFAULT NULL,
        //     old_firstname VARCHAR(50) DEFAULT NULL,
        //     old_lastname VARCHAR(50) DEFAULT NULL,
        //     old_role VARCHAR(50) DEFAULT NULL,
        //     old_password VARCHAR(255) DEFAULT NULL,
        //     old_salt VARCHAR(255) DEFAULT NULL,            
        //     createdAt DATE DEFAULT NULL,
        //     userId INT NOT NULL,
        //     FOREIGN KEY (userId) REFERENCES "user" (id)
        //     );`
        // );

        // // creation de la fonction à utiliser pour le trigger d'insertion
        // await connection.query(`
        //     CREATE OR REPLACE FUNCTION ajout_user ()
        //     RETURNS trigger AS
        //     $$
        //         DECLARE
        //         BEGIN
        //             IF TRUE THEN
        //                 INSERT INTO 
        //                 user_audit(operation_type, email, firstname, lastname, role, password, salt, userId, createdAt)
        //                 VALUES('ajout', NEW.email, NEW.firstname, NEW.lastname, NEW.role, NEW.password, NEW.salt, '1', NOW());
        //             END IF;
        //             RETURN NEW;
        //         END;
        //     $$ LANGUAGE 'plpgsql';
        // `)

        // // creation de la fonction à utiliser pour le trigger de modification
        // await connection.query(`
        //     CREATE OR REPLACE FUNCTION modification_user ()
        //     RETURNS trigger AS
        //     $$
        //         DECLARE
        //         BEGIN
        //             IF TRUE THEN
        //                 INSERT INTO 
        //                 user_audit(operation_type, email, firstname, lastname, role, password, salt, old_email, old_firstname, old_lastname, old_role, old_password, old_salt, userId, createdAt)
        //                 VALUES('modification', NEW.email, NEW.firstname, NEW.lastname, NEW.role, NEW.password, NEW.salt, OLD.email, OLD.firstname, OLD.lastname, OLD.role, OLD.password, OLD.salt, '1', NOW());
        //             END IF;
        //             RETURN NEW;
        //         END;
        //     $$ LANGUAGE 'plpgsql';
        // `)

        // // creation de la fonction à utiliser pour le trigger de suppression
        // await connection.query(`
        //     CREATE OR REPLACE FUNCTION suppression_user ()
        //     RETURNS trigger AS
        //     $$
        //         DECLARE
        //         BEGIN
        //             IF TRUE THEN
        //                 INSERT INTO 
        //                 user_audit(operation_type, email, firstname, lastname, role, password, salt, userId, createdAt)
        //                 VALUES('suppression', OLD.email, OLD.firstname, OLD.lastname, OLD.role, OLD.password, OLD.salt, '1', NOW());
        //             END IF;
        //             RETURN NEW;
        //         END;
        //     $$ LANGUAGE 'plpgsql';
        // `)

        // // création du triggers lors d'une insertion ou déclencheurs
        // await connection.query(`
        //     CREATE TRIGGER before_user_insert
        //     BEFORE INSERT ON "user" 
        //     FOR EACH ROW EXECUTE PROCEDURE ajout_user()`)

        // // création du triggers lors d'une modification ou déclencheurs
        // await connection.query(`
        //     CREATE TRIGGER before_user_update
        //     BEFORE UPDATE ON "user" 
        //     FOR EACH ROW EXECUTE PROCEDURE modification_user()`)

        // // création du triggers lors d'une suppression ou déclencheurs
        // await connection.query(`
        //     CREATE TRIGGER before_user_delete
        //     BEFORE DELETE ON "user" 
        //     FOR EACH ROW EXECUTE PROCEDURE suppression_user()`)

        //---for mysql use
        await connection.query(`INSERT INTO user  (email, firstname, lastname, role, password, salt)  
        VALUES (
            'ainakum@gmail.com',
            'Haja',
            'Aina',
            'secretary',
            '$2b$10$x/iZU6zc8sbPBArJjBCHeeDwSDLNh7a59tDhaL3pmtONn.kZnVA.K',
            '$2b$10$x/iZU6zc8sbPBArJjBCHee'
        )`)  //pwd : 1234

        // table pour les déclencheurs mysql
        await connection.query(
            `CREATE TABLE IF NOT EXISTS user_audit (
            id INT AUTO_INCREMENT PRIMARY KEY,
            operation_type VARCHAR(20) NOT NULL,
            email VARCHAR(50) NOT NULL,
            firstname VARCHAR(50) NOT NULL,
            lastname VARCHAR(50) NOT NULL,
            role VARCHAR(50) NOT NULL,
            password VARCHAR(50) NOT NULL,
            salt VARCHAR(100) NOT NULL,
            old_email VARCHAR(50) DEFAULT NULL,
            old_firstname VARCHAR(50) DEFAULT NULL,
            old_lastname VARCHAR(50) DEFAULT NULL,
            old_role VARCHAR(50) DEFAULT NULL,
            old_password VARCHAR(50) DEFAULT NULL,
            old_salt VARCHAR(100) DEFAULT NULL,            
            createdAt DATETIME DEFAULT NULL,
            userId INT NOT NULL,
            FOREIGN KEY (userId) REFERENCES user (id)
            );`
        );

        // création du triggers lors d'une insertion ou déclencheurs
        await connection.query(`
            CREATE TRIGGER before_user_insert
            BEFORE INSERT ON user 
            FOR EACH ROW
                INSERT INTO user_audit
                SET operation_type = 'ajout',
                email = NEW.email,
                firstname = NEW.firstname,
                lastname = NEW.lastname,
                role = NEW.role,
                password = NEW.password,
                salt = NEW.salt,
                userId = '1',
                createdAt = NOW();
        `)

        // création du triggers lors d'une modification ou déclencheurs
        await connection.query(`
            CREATE TRIGGER before_user_update
            BEFORE UPDATE ON user 
            FOR EACH ROW
                INSERT INTO user_audit
                SET operation_type = 'modification',
                email = NEW.email,
                firstname = NEW.firstname,
                lastname = NEW.lastname,
                role = NEW.role,
                password = NEW.password,
                salt = NEW.salt,
                old_email = NEW.email,
                old_firstname = OLD.firstname,
                old_lastname = OLD.lastname,
                old_role = OLD.role,
                old_password = OLD.password,
                old_salt = OLD.salt,
                userId = '1',
                createdAt = NOW();
        `)

        // création du triggers lors d'une suppression ou déclencheurs
        await connection.query(`
            CREATE TRIGGER before_user_delete
            BEFORE DELETE ON user 
            FOR EACH ROW
                INSERT INTO user_audit
                SET operation_type = 'suppression',
                email = OLD.email,
                firstname = OLD.firstname,
                lastname = OLD.lastname,
                role = OLD.role,
                password = OLD.password,
                salt = OLD.salt,
                userId = '1',
                createdAt = NOW();
        `)

    }
}