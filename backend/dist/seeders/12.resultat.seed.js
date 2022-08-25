"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CreateResultats {
    async run(factory, connection) {
        await connection.query(`INSERT INTO resultat  (libelleResultat)  VALUES ('Admis')`);
        await connection.query(`INSERT INTO resultat  (libelleResultat)  VALUES ('En attente')`);
        await connection.query(`INSERT INTO resultat  (libelleResultat)  VALUES ('Refusé')`);
        await connection.query(`CREATE TABLE IF NOT EXISTS resultat_audit (
            id INT AUTO_INCREMENT PRIMARY KEY,
            operation_type VARCHAR(20) NOT NULL,
            libelleResultat VARCHAR(50) NOT NULL,
            old_libelleResultat VARCHAR(50) DEFAULT NULL,
            createdAt DATETIME DEFAULT NULL,
            userId INT NOT NULL,
            FOREIGN KEY (userId) REFERENCES user (id)
            );`);
        await connection.query(`
            CREATE TRIGGER before_resultat_insert
            BEFORE INSERT ON resultat 
            FOR EACH ROW
                INSERT INTO resultat_audit
                SET operation_type = 'ajout',
                libelleResultat = NEW.libelleResultat,
                userId = '1',
                createdAt = NOW();
        `);
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
        `);
        await connection.query(`
            CREATE TRIGGER before_resultat_delete
            BEFORE DELETE ON resultat 
            FOR EACH ROW
                INSERT INTO resultat_audit
                SET operation_type = 'suppression',
               libelleResultat = OLD.libelleResultat,
                userId = '1',
                createdAt = NOW();
        `);
    }
}
exports.default = CreateResultats;
//# sourceMappingURL=12.resultat.seed.js.map