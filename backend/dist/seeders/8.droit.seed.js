"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CreateDroits {
    async run(factory, connection) {
        await connection.query(`INSERT INTO droit  (droitConcours, fraisScolaire, parametresId, typeCandidatCodeTypeCand)  
        VALUES (
            '10000',
            '100000',
            '1',
            '1'
        )`);
        await connection.query(`INSERT INTO droit  (droitConcours, fraisScolaire, parametresId, typeCandidatCodeTypeCand)  
        VALUES (
            '70000',
            '700000',
            '1',
            '2'
        )`);
        await connection.query(`INSERT INTO droit  (droitConcours, fraisScolaire, parametresId, typeCandidatCodeTypeCand)  
        VALUES (
            '90000',
            '900000',
            '1',
            '3'
        )`);
        await connection.query(`CREATE TABLE IF NOT EXISTS droit_audit (
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
            );`);
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
        `);
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
        `);
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
        `);
    }
}
exports.default = CreateDroits;
//# sourceMappingURL=8.droit.seed.js.map