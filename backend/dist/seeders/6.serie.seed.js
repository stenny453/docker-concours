"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CreateSeries {
    async run(factory, connection) {
        await connection.query(`INSERT INTO serie  (libelleSerie)  VALUES ('C')`);
        await connection.query(`INSERT INTO serie  (libelleSerie)  VALUES ('D')`);
        await connection.query(`INSERT INTO serie  (libelleSerie)  VALUES ('Tech')`);
        await connection.query(`CREATE TABLE IF NOT EXISTS serie_audit (
            id INT AUTO_INCREMENT PRIMARY KEY,
            operation_type VARCHAR(20) NOT NULL,
            libelleSerie VARCHAR(50) NOT NULL,
            old_libelleSerie VARCHAR(50) DEFAULT NULL,
            createdAt DATETIME DEFAULT NULL,
            userId INT NOT NULL,
            FOREIGN KEY (userId) REFERENCES user (id)
            );`);
        await connection.query(`
            CREATE TRIGGER before_serie_insert
            BEFORE INSERT ON serie 
            FOR EACH ROW
                INSERT INTO serie_audit
                SET operation_type = 'ajout',
                libelleSerie = NEW.libelleSerie,
                userId = '1',
                createdAt = NOW();
        `);
        await connection.query(`
            CREATE TRIGGER before_serie_update
            BEFORE UPDATE ON serie 
            FOR EACH ROW
                INSERT INTO serie_audit
                SET operation_type = 'modification',
                libelleSerie = NEW.libelleSerie,
                old_libelleSerie = OLD.libelleSerie,
                userId = '1',
                createdAt = NOW();
        `);
        await connection.query(`
            CREATE TRIGGER before_serie_delete
            BEFORE DELETE ON serie 
            FOR EACH ROW
                INSERT INTO serie_audit
                SET operation_type = 'suppression',
                libelleSerie = OLD.libelleSerie,
                userId = '1',
                createdAt = NOW();

        `);
    }
}
exports.default = CreateSeries;
//# sourceMappingURL=6.serie.seed.js.map