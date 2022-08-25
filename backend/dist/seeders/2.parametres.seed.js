"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CreateParametres {
    async run(factory, connection) {
        await connection.query(`INSERT INTO parametres  (anneeUniv, dateOuvertureInscription, dateFermetureInscription, numCpteENI) 
         VALUES (
            '2022',
            '2022-09-11 00:00:00',
            '2022-09-10 00:00:00',
            '54654319849461'
         )`);
        await connection.query(`CREATE TABLE IF NOT EXISTS parametres_audit (
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
            );`);
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
        `);
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
        `);
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

        `);
    }
}
exports.default = CreateParametres;
//# sourceMappingURL=2.parametres.seed.js.map