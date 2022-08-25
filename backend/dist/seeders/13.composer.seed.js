"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CreateComposer {
    async run(factory, connection) {
        await connection.query(`INSERT INTO composer  (presence, note, numInscriptionNumInscription, codeEpreuveCodeEpreuve) 
         VALUES (
            true,
            '12',
            '1',
            '1'
         )`);
        await connection.query(`INSERT INTO composer  (presence, note, numInscriptionNumInscription, codeEpreuveCodeEpreuve) 
         VALUES (
            true,
            '12',
            '1',
            '2'
         )`);
        await connection.query(`INSERT INTO composer  (presence, note, numInscriptionNumInscription, codeEpreuveCodeEpreuve) 
         VALUES (
            true,
            '12',
            '1',
            '3'
         )`);
        await connection.query(`INSERT INTO composer  (presence, note, numInscriptionNumInscription, codeEpreuveCodeEpreuve) 
         VALUES (
            true,
            '12',
            '1',
            '4'
         )`);
        await connection.query(`INSERT INTO composer  (presence, note, numInscriptionNumInscription, codeEpreuveCodeEpreuve) 
         VALUES (
            true,
            '12',
            '1',
            '5'
         )`);
        await connection.query(`CREATE TABLE IF NOT EXISTS composer_audit (
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
            );`);
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
        `);
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
        `);
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
        `);
    }
}
exports.default = CreateComposer;
//# sourceMappingURL=13.composer.seed.js.map