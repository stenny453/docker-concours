import { Factory, Seeder } from 'typeorm-seeding'
import { Connection } from 'typeorm'


export default class CreateComposer implements Seeder {
   public async run(factory: Factory, connection: Connection): Promise<any> {
      //---for postgreSQL use
      // await connection.query(`INSERT INTO "Composer"  ("Presence", "Note", "numInscriptionNumInscription", "codeEpreuveCodeEpreuve") 
      //    VALUES (
      //       true,
      //       '12',
      //       '1',
      //       '1'
      //    )`)
      // await connection.query(`INSERT INTO "Composer"  ("Presence", "Note", "numInscriptionNumInscription", "codeEpreuveCodeEpreuve") 
      //    VALUES (
      //       true,
      //       '12',
      //       '1',
      //       '2'
      //    )`)
      // await connection.query(`INSERT INTO "Composer"  ("Presence", "Note", "numInscriptionNumInscription", "codeEpreuveCodeEpreuve") 
      //    VALUES (
      //       true,
      //       '12',
      //       '1',
      //       '3'
      //    )`)
      // await connection.query(`INSERT INTO "Composer"  ("Presence", "Note", "numInscriptionNumInscription", "codeEpreuveCodeEpreuve") 
      //    VALUES (
      //       true,
      //       '12',
      //       '1',
      //       '4'
      //    )`)
      // await connection.query(`INSERT INTO "Composer"  ("Presence", "Note", "numInscriptionNumInscription", "codeEpreuveCodeEpreuve") 
      //    VALUES (
      //       true,
      //       '12',
      //       '1',
      //       '5'
      //    )`)

      // table pour les déclencheurs 
      // await connection.query(
      //    `CREATE TABLE IF NOT EXISTS composer_audit (
      //       id SERIAL PRIMARY KEY,
      //       operation_type VARCHAR(20) NOT NULL,
      //       presence VARCHAR(50) NOT NULL,
      //       note VARCHAR(50) NOT NULL,
      //       numInscriptionNumInscription VARCHAR(50) NOT NULL,
      //       codeEpreuveCodeEpreuve VARCHAR(50) NOT NULL,
      //       old_presence VARCHAR(50) DEFAULT NULL,
      //       old_note VARCHAR(50) DEFAULT NULL,
      //       old_numInscriptionNumInscription INT DEFAULT NULL,
      //       old_codeEpreuveCodeEpreuve INT DEFAULT NULL,
      //       createdAt DATE DEFAULT NULL,
      //       userId INT NOT NULL,
      //       FOREIGN KEY (userId) REFERENCES "user" (id)
      //       );`
      // );

      // //creation de la fonction à utiliser pour le trigger d'insertion
      // await connection.query(`
      //    CREATE OR REPLACE FUNCTION ajout_composer ()
      //    RETURNS trigger AS
      //    $$
      //          DECLARE
      //          BEGIN
      //             IF TRUE THEN
      //                INSERT INTO 
      //                composer_audit(operation_type, presence, note, numInscriptionNumInscription, codeEpreuveCodeEpreuve, userId, createdAt)
      //                VALUES('ajout', NEW.Presence, NEW.Note, NEW.numInscriptionNumInscription, NEW.codeEpreuveCodeEpreuve, '1', NOW());
      //             END IF;
      //             RETURN NEW;
      //          END;
      //    $$ LANGUAGE 'plpgsql';
      // `)

      // //creation de la fonction à utiliser pour le trigger de modification
      // await connection.query(`
      //    CREATE OR REPLACE FUNCTION modification_composer ()
      //    RETURNS trigger AS
      //    $$
      //          DECLARE
      //          BEGIN
      //             IF TRUE THEN
      //                INSERT INTO 
      //                composer_audit(operation_type, presence, note, numInscriptionNumInscription, codeEpreuveCodeEpreuve, 
      //                   old_presence, old_note, old_numInscriptionNumInscription, old_codeEpreuveCodeEpreuve, userId, createdAt)
      //                VALUES('modification', NEW.Presence, NEW.Note, NEW.numInscriptionNumInscription, NEW.codeEpreuveCodeEpreuve, 
      //                   OLD.Presence, OLD.Note, OLD.numInscriptionNumInscription, OLD.codeEpreuveCodeEpreuve, '1', NOW());
      //             END IF;
      //             RETURN NEW;
      //          END;
      //    $$ LANGUAGE 'plpgsql';
      // `)

      // //creation de la fonction à utiliser pour le trigger de suppression
      // await connection.query(`
      //    CREATE OR REPLACE FUNCTION suppression_composer ()
      //    RETURNS trigger AS
      //    $$
      //          DECLARE
      //          BEGIN
      //             IF TRUE THEN
      //                INSERT INTO 
      //                composer_audit(operation_type, presence, note, numInscriptionNumInscription, codeEpreuveCodeEpreuve, userId, createdAt)
      //                VALUES('suppression', OLD.Presence, OLD.Note, OLD.numInscriptionNumInscription, OLD.codeEpreuveCodeEpreuve, '1', NOW());
      //             END IF;
      //             RETURN NEW;
      //          END;
      //    $$ LANGUAGE 'plpgsql';
      // `)

      // // création du triggers lors d'une insertion ou déclencheurs
      // await connection.query(`
      //       CREATE TRIGGER before_composer_insert
      //       BEFORE INSERT ON "Composer" 
      //       FOR EACH ROW EXECUTE PROCEDURE ajout_composer();
      //   `)

      // // création du triggers lors d'une modification ou déclencheurs
      // await connection.query(`
      //       CREATE TRIGGER before_composer_update
      //       BEFORE UPDATE ON "Composer" 
      //       FOR EACH ROW EXECUTE PROCEDURE modification_composer();
      //   `)

      // // création du triggers lors d'une suppression ou déclencheurs
      // await connection.query(`
      //       CREATE TRIGGER before_composer_delete
      //       BEFORE DELETE ON "Composer" 
      //       FOR EACH ROW EXECUTE PROCEDURE suppression_composer();
      //   `)


      //---for mysql use
      await connection.query(`INSERT INTO composer  (presence, note, numInscriptionNumInscription, codeEpreuveCodeEpreuve) 
         VALUES (
            true,
            '12',
            '1',
            '1'
         )`)
      await connection.query(`INSERT INTO composer  (presence, note, numInscriptionNumInscription, codeEpreuveCodeEpreuve) 
         VALUES (
            true,
            '12',
            '1',
            '2'
         )`)
      await connection.query(`INSERT INTO composer  (presence, note, numInscriptionNumInscription, codeEpreuveCodeEpreuve) 
         VALUES (
            true,
            '12',
            '1',
            '3'
         )`)
      await connection.query(`INSERT INTO composer  (presence, note, numInscriptionNumInscription, codeEpreuveCodeEpreuve) 
         VALUES (
            true,
            '12',
            '1',
            '4'
         )`)
      await connection.query(`INSERT INTO composer  (presence, note, numInscriptionNumInscription, codeEpreuveCodeEpreuve) 
         VALUES (
            true,
            '12',
            '1',
            '5'
         )`)

      // table pour les déclencheurs 
      await connection.query(
         `CREATE TABLE IF NOT EXISTS composer_audit (
            id INT AUTO_INCREMENT PRIMARY KEY,
            operation_type VARCHAR(20) NOT NULL,
            presence VARCHAR(50) NOT NULL,
            note VARCHAR(50) NOT NULL,
            numInscriptionNumInscription VARCHAR(50) NOT NULL,
            codeEpreuveCodeEpreuve VARCHAR(50) NOT NULL,
            old_presence VARCHAR(50) DEFAULT NULL,
            old_note VARCHAR(50) DEFAULT NULL,
            old_numInscriptionNumInscription INT(10) DEFAULT NULL,
            old_codeEpreuveCodeEpreuve INT(10) DEFAULT NULL,
            createdAt DATETIME DEFAULT NULL,
            userId INT NOT NULL,
            FOREIGN KEY (userId) REFERENCES user (id)
            );`
      );

      // création du triggers lors d'une insertion ou déclencheurs
      await connection.query(`
            CREATE TRIGGER before_composer_insert
            BEFORE INSERT ON composer 
            FOR EACH ROW
                INSERT INTO composer_audit
                SET operation_type = 'ajout',
                presence = NEW.presence,
                note = NEW.note,
                numInscriptionNumInscription = NEW.numInscriptionNumInscription,
                codeEpreuveCodeEpreuve = NEW.codeEpreuveCodeEpreuve,
                userId = '1',
                createdAt = NOW();
        `)

      // création du triggers lors d'une modification ou déclencheurs
      await connection.query(`
            CREATE TRIGGER before_composer_update
            BEFORE UPDATE ON composer 
            FOR EACH ROW
                INSERT INTO composer_audit
                SET operation_type = 'modification',
                presence = NEW.presence,
                note = NEW.note,
                numInscriptionNumInscription = NEW.numInscriptionNumInscription,
                codeEpreuveCodeEpreuve = NEW.codeEpreuveCodeEpreuve,
                old_presence = OLD.presence,
                old_note = OLD.note,
                old_numInscriptionNumInscription = OLD.numInscriptionNumInscription,
                old_codeEpreuveCodeEpreuve = OLD.codeEpreuveCodeEpreuve,
                userId = '1',
                createdAt = NOW();
        `)

      // création du triggers lors d'une suppression ou déclencheurs
      await connection.query(`
            CREATE TRIGGER before_composer_delete
            BEFORE DELETE ON composer 
            FOR EACH ROW
                INSERT INTO composer_audit
                SET operation_type = 'suppression',
                presence = OLD.presence,
                note = OLD.note,
                numInscriptionNumInscription = OLD.numInscriptionNumInscription,
                codeEpreuveCodeEpreuve = OLD.codeEpreuveCodeEpreuve,
                userId = '1',
                createdAt = NOW();
        `)
   }
}