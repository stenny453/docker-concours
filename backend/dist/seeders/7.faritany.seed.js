"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CreateFaritany {
    async run(factory, connection) {
        await connection.query(`INSERT INTO faritany  (nomFaritany)  VALUES ('Diana')`);
        await connection.query(`INSERT INTO faritany  (nomFaritany)  VALUES ('Sava')`);
        await connection.query(`INSERT INTO faritany  (nomFaritany)  VALUES ('Itasy')`);
        await connection.query(`INSERT INTO faritany  (nomFaritany)  VALUES ('Analamanga')`);
        await connection.query(`INSERT INTO faritany  (nomFaritany)  VALUES ('Vakinakaratra')`);
        await connection.query(`INSERT INTO faritany  (nomFaritany)  VALUES ('Bongolava')`);
        await connection.query(`INSERT INTO faritany  (nomFaritany)  VALUES ('Sofia')`);
        await connection.query(`INSERT INTO faritany (nomFaritany)  VALUES ('Boeny')`);
        await connection.query(`INSERT INTO faritany (nomFaritany)  VALUES ('Betsiboka')`);
        await connection.query(`INSERT INTO faritany (nomFaritany)  VALUES ('Melaky')`);
        await connection.query(`INSERT INTO faritany (nomFaritany)  VALUES ('Alaotra Mangoro')`);
        await connection.query(`INSERT INTO faritany (nomFaritany)  VALUES ('Antsinanana')`);
        await connection.query(`INSERT INTO faritany (nomFaritany)  VALUES ('Analanjirofo')`);
        await connection.query(`INSERT INTO faritany (nomFaritany)  VALUES ('Amoron\\'i Mania')`);
        await connection.query(`INSERT INTO faritany (nomFaritany)  VALUES ('Matsiatra Ambony')`);
        await connection.query(`INSERT INTO faritany (nomFaritany)  VALUES ('Vatovavy')`);
        await connection.query(`INSERT INTO faritany (nomFaritany)  VALUES ('Fitovinany')`);
        await connection.query(`INSERT INTO faritany (nomFaritany)  VALUES ('Atsimo Antsinanana')`);
        await connection.query(`INSERT INTO faritany (nomFaritany)  VALUES ('Ihorombe')`);
        await connection.query(`INSERT INTO faritany (nomFaritany)  VALUES ('Menabe')`);
        await connection.query(`INSERT INTO faritany (nomFaritany)  VALUES ('Atsimo Andrefana')`);
        await connection.query(`INSERT INTO faritany (nomFaritany)  VALUES ('Androy')`);
        await connection.query(`INSERT INTO faritany (nomFaritany)  VALUES ('Anosy')`);
        await connection.query(`CREATE TABLE IF NOT EXISTS faritany_audit (
            id INT AUTO_INCREMENT PRIMARY KEY,
            operation_type VARCHAR(20) NOT NULL,
            nomFaritany VARCHAR(50) NOT NULL,
            old_nomFaritany VARCHAR(50) DEFAULT NULL,
            createdAt DATETIME DEFAULT NULL,
            userId INT NOT NULL,
            FOREIGN KEY (userId) REFERENCES user (id)
            );`);
        await connection.query(`
            CREATE TRIGGER before_faritany_insert
            BEFORE INSERT ON faritany 
            FOR EACH ROW
                INSERT INTO faritany_audit
                SET operation_type = 'ajout',
                nomFaritany = NEW.nomFaritany,
                userId = '1',
                createdAt = NOW();
        `);
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
        `);
        await connection.query(`
            CREATE TRIGGER before_faritany_delete
            BEFORE DELETE ON faritany 
            FOR EACH ROW
                INSERT INTO faritany_audit
                SET operation_type = 'suppression',
                nomFaritany = OLD.nomFaritany,
                userId = '1',
                createdAt = NOW();
        `);
    }
}
exports.default = CreateFaritany;
//# sourceMappingURL=7.faritany.seed.js.map