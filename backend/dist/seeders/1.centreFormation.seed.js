"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CreateCentreFormation {
    async run(factory, connection) {
        await connection.query(`INSERT INTO centreformation  (nomCentreFormation)  VALUES ('Professionnel (Fianarantsoa)')`);
        await connection.query(`INSERT INTO centreformation  (nomCentreFormation)  VALUES ('Informatique Générale (Fianarantsoa)')`);
        await connection.query(`INSERT INTO centreformation  (nomCentreFormation)  VALUES ('Informatique Générale (Toliara)')`);
        await connection.query(`CREATE TABLE IF NOT EXISTS centreformation_audit (
             id INT AUTO_INCREMENT PRIMARY KEY,
             operation_type VARCHAR(20) NOT NULL,
             nomCentreFormation VARCHAR(50) NOT NULL,
             old_nomCentreFormation VARCHAR(50) DEFAULT NULL,
             createdAt DATETIME DEFAULT NULL,
             userId INT NOT NULL,
             FOREIGN KEY (userId) REFERENCES user(id)
             );`);
        await connection.query(`
             CREATE TRIGGER before_centreformation_insert
             BEFORE INSERT ON centreformation 
             FOR EACH ROW
                 INSERT INTO centreformation_audit
                 SET operation_type = 'ajout',
                 nomCentreFormation = NEW.nomCentreFormation,
                 userId = '1',
                 createdAt = NOW();
         `);
        await connection.query(`
             CREATE TRIGGER before_centreformation_update
             BEFORE UPDATE ON centreformation 
             FOR EACH ROW
                 INSERT INTO centreformation_audit
                 SET operation_type = 'modification',
                 nomCentreFormation = NEW.nomCentreFormation,
                 old_nomCentreFormation = OLD.nomCentreFormation,
                 userId = '1',
                 createdAt = NOW();
         `);
        await connection.query(`
             CREATE TRIGGER before_centreformation_delete
             BEFORE DELETE ON centreformation 
             FOR EACH ROW
                 INSERT INTO centreformation_audit
                 SET operation_type = 'suppression',
                 nomCentreFormation = OLD.nomCentreFormation,
                 userId = '1',
                 createdAt = NOW();
         `);
    }
}
exports.default = CreateCentreFormation;
//# sourceMappingURL=1.centreFormation.seed.js.map