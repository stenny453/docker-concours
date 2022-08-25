"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CreateCentreConcours {
    async run(factory, connection) {
        await connection.query(`INSERT INTO centreconcours  (nomCentre)  VALUES ('Antananarivo')`);
        await connection.query(`INSERT INTO centreconcours  (nomCentre)  VALUES ('Fianarantsoa')`);
        await connection.query(`INSERT INTO centreconcours  (nomCentre)  VALUES ('Toamasina')`);
        await connection.query(`INSERT INTO centreconcours  (nomCentre)  VALUES ('Diego')`);
        await connection.query(`INSERT INTO centreconcours  (nomCentre)  VALUES ('Toliara')`);
        await connection.query(`INSERT INTO centreconcours  (nomCentre)  VALUES ('Mahajanga')`);
        await connection.query(`CREATE TABLE IF NOT EXISTS centreconcours_audit (
             id INT AUTO_INCREMENT PRIMARY KEY,
             operation_type VARCHAR(20) NOT NULL,
             nomCentre VARCHAR(50) NOT NULL,
             old_nomCentre VARCHAR(50) DEFAULT NULL,
             createdAt DATETIME DEFAULT NULL,
             userId INT NOT NULL,
             FOREIGN KEY (userId) REFERENCES user(id)
             );`);
        await connection.query(`
             CREATE TRIGGER before_centreconcours_insert
             BEFORE INSERT ON centreconcours 
             FOR EACH ROW
                 INSERT INTO centreconcours_audit
                 SET operation_type = 'ajout',
                 nomCentre = NEW.nomCentre,
                 userId = '1',
                 createdAt = NOW();
         `);
        await connection.query(`
             CREATE TRIGGER before_centreconcours_update
             BEFORE UPDATE ON centreconcours 
             FOR EACH ROW
                 INSERT INTO centreconcours_audit
                 SET operation_type = 'modification',
                 nomCentre = NEW.nomCentre,
                 old_nomCentre = OLD.nomCentre,
                 userId = '1',
                 createdAt = NOW();
         `);
        await connection.query(`
             CREATE TRIGGER before_centreconcours_delete
             BEFORE DELETE ON centreconcours 
             FOR EACH ROW
                 INSERT INTO centreconcours_audit
                 SET operation_type = 'suppression',
                 nomCentre = OLD.nomCentre,
                 userId = '1',
                 createdAt = NOW();
 
         `);
    }
}
exports.default = CreateCentreConcours;
//# sourceMappingURL=4.centreConcours.seed.js.map