"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CreateChoix {
    async run(factory, connection) {
        await connection.query(`INSERT INTO choix  (libelleChoix, limiteAge, limiteBacc, nbPlaces, nbListeAttente)  VALUES ('IG -  Fianarantsoa', '3', '2', '150', '50')`);
        await connection.query(`INSERT INTO choix  (libelleChoix, limiteAge, limiteBacc, nbPlaces, nbListeAttente)  VALUES ('IG - Toliara', '3', '2', '150', '50')`);
        await connection.query(`INSERT INTO choix  (libelleChoix, limiteAge, limiteBacc, nbPlaces, nbListeAttente)  VALUES ('PRO - Fianarantsoa ', '0', '0', '150', '20')`);
        await connection.query(`CREATE TABLE IF NOT EXISTS choix_audit (
            id INT AUTO_INCREMENT PRIMARY KEY,
            operation_type VARCHAR(20) NOT NULL,
            libelleChoix VARCHAR(50) NOT NULL,
            old_libelleChoix VARCHAR(50) DEFAULT NULL,
            createdAt DATETIME DEFAULT NULL,
            limiteAge INT NOT NULL,
            old_limiteAge INT DEFAULT NULL,
            limiteBacc VARCHAR(50) NOT NULL,
            old_limiteBacc VARCHAR(50) DEFAULT NULL,
            nbPlaces INT DEFAULT NULL,
            old_nbPlaces INT DEFAULT NULL,
            nbListeAttente INT DEFAULT NULL,
            old_nbListeAttente INT DEFAULT NULL,
            userId INT NOT NULL,
            FOREIGN KEY (userId) REFERENCES user (id)
            );`);
        await connection.query(`
            CREATE TRIGGER before_choix_insert
            BEFORE INSERT ON choix 
            FOR EACH ROW
                INSERT INTO choix_audit
                SET operation_type = 'ajout',
                libelleChoix = NEW.libelleChoix,
                limiteAge = NEW.limiteAge,
                limiteBacc = NEW.limiteBacc,
                nbPlaces = NEW.nbPlaces,
                userId = '1',
                createdAt = NOW()
        `);
        await connection.query(`
            CREATE TRIGGER before_choix_update
            BEFORE UPDATE ON choix 
            FOR EACH ROW
                INSERT INTO choix_audit
                SET operation_type = 'modification',
                libelleChoix = NEW.libelleChoix,
                limiteAge = NEW.limiteAge,
                limiteBacc = NEW.limiteBacc,
                nbPlaces = NEW.nbPlaces,
                nbListeAttente = NEW.nbListeAttente,
                old_libelleChoix = OLD.libelleChoix,
                old_limiteAge = OLD.limiteAge,
                old_limiteBacc = OLD.limiteBacc,
                old_nbPlaces = OLD.nbPlaces,
                old_nbListeAttente = OLD.nbListeAttente,
                userId = '1',
                createdAt = NOW()
        `);
        await connection.query(`
            CREATE TRIGGER before_choix_delete
            BEFORE DELETE ON choix 
            FOR EACH ROW
                INSERT INTO choix_audit
                SET operation_type = 'suppression',
                libelleChoix = OLD.libelleChoix,
                limiteAge = OLD.limiteAge,
                limiteBacc = OLD.limiteBacc,
                nbPlaces = OLD.nbPlaces,
                userId = '1',
                createdAt = NOW()
        `);
    }
}
exports.default = CreateChoix;
//# sourceMappingURL=9.choix.seed.js.map