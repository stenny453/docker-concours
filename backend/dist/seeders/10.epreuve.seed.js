"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CreateEpreuves {
    async run(factory, connection) {
        await connection.query(`INSERT INTO epreuve  (libelleEpreuve, coef, duree, dateEpreuve)  
        VALUES (
            'Français',
            '2',
            '3',
            '2022-11-12 06:00:00'
        )`);
        await connection.query(`INSERT INTO epreuve  (libelleEpreuve, coef, duree, dateEpreuve)  
        VALUES (
            'Anglais',
            '2',
            '3',
            '2022-11-12 08:00:00'
        )`);
        await connection.query(`INSERT INTO epreuve  (libelleEpreuve, coef, duree, dateEpreuve)  
        VALUES (
            'Mathematiques',
            '4',
            '4',
            '2022-11-12 10:00:00'
        )`);
        await connection.query(`INSERT INTO epreuve  (libelleEpreuve, coef, duree, dateEpreuve)  
        VALUES (
            'Physiques',
            '4',
            '4',
            '2022-11-12 15:00:00'
        )`);
        await connection.query(`INSERT INTO epreuve  (libelleEpreuve, coef, duree, dateEpreuve)  
        VALUES (
            'Testes Psychotechniques',
            '4',
            '2',
            '2022-11-12 17:00:00'
        )`);
        await connection.query(`CREATE TABLE IF NOT EXISTS epreuve_audit (
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
            );`);
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
        `);
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
        `);
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
        `);
    }
}
exports.default = CreateEpreuves;
//# sourceMappingURL=10.epreuve.seed.js.map