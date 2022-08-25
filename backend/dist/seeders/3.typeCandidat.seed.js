"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CreateTypeCandidat {
    async run(factory, connection) {
        await connection.query(`INSERT INTO typecandidat  (libelleTypeCand)  VALUES ('Malagasy')`);
        await connection.query(`INSERT INTO typecandidat  (libelleTypeCand)  VALUES ('Militaire')`);
        await connection.query(`INSERT INTO typecandidat  (libelleTypeCand)  VALUES ('Etranger')`);
        await connection.query(`CREATE TABLE IF NOT EXISTS typecandidat_audit (
            id INT AUTO_INCREMENT PRIMARY KEY,
            operation_type VARCHAR(20) NOT NULL,
            libelleTypeCand VARCHAR(50) NOT NULL,
            old_libelleTypeCand VARCHAR(50) DEFAULT NULL,
            createdAt DATETIME DEFAULT NULL,
            userId INT NOT NULL,
            FOREIGN KEY (userId) REFERENCES user (id)
            );`);
        await connection.query(`
            CREATE TRIGGER before_typecandidat_insert
            BEFORE INSERT ON typecandidat 
            FOR EACH ROW
                INSERT INTO typecandidat_audit
                SET operation_type = 'ajout',
                libelleTypeCand = NEW.libelleTypeCand,
                userId = '1',
                createdAt = NOW();
        `);
        await connection.query(`
            CREATE TRIGGER before_typecandidat_update
            BEFORE UPDATE ON typecandidat 
            FOR EACH ROW
                INSERT INTO typecandidat_audit
                SET operation_type = 'modification',
                libelleTypeCand = NEW.libelleTypeCand,
                old_libelleTypeCand = OLD.libelleTypeCand,
                userId = '1',
                createdAt = NOW();
        `);
        await connection.query(`
            CREATE TRIGGER before_typecandidat_delete
            BEFORE DELETE ON typecandidat 
            FOR EACH ROW
                INSERT INTO typecandidat_audit
                SET operation_type = 'suppression',
                libelleTypeCand = OLD.libelleTypeCand,
                userId = '1',
                createdAt = NOW();

        `);
    }
}
exports.default = CreateTypeCandidat;
//# sourceMappingURL=3.typeCandidat.seed.js.map