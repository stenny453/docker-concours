"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CreateUsers {
    async run(factory, connection) {
        await connection.query(`INSERT INTO user  (email, firstname, lastname, role, password, salt)  
        VALUES (
            'ainakum@gmail.com',
            'Haja',
            'Aina',
            'secretary',
            '$2b$10$x/iZU6zc8sbPBArJjBCHeeDwSDLNh7a59tDhaL3pmtONn.kZnVA.K',
            '$2b$10$x/iZU6zc8sbPBArJjBCHee'
        )`);
        await connection.query(`CREATE TABLE IF NOT EXISTS user_audit (
            id INT AUTO_INCREMENT PRIMARY KEY,
            operation_type VARCHAR(20) NOT NULL,
            email VARCHAR(50) NOT NULL,
            firstname VARCHAR(50) NOT NULL,
            lastname VARCHAR(50) NOT NULL,
            role VARCHAR(50) NOT NULL,
            password VARCHAR(50) NOT NULL,
            salt VARCHAR(100) NOT NULL,
            old_email VARCHAR(50) DEFAULT NULL,
            old_firstname VARCHAR(50) DEFAULT NULL,
            old_lastname VARCHAR(50) DEFAULT NULL,
            old_role VARCHAR(50) DEFAULT NULL,
            old_password VARCHAR(50) DEFAULT NULL,
            old_salt VARCHAR(100) DEFAULT NULL,            
            createdAt DATETIME DEFAULT NULL,
            userId INT NOT NULL,
            FOREIGN KEY (userId) REFERENCES user (id)
            );`);
        await connection.query(`
            CREATE TRIGGER before_user_insert
            BEFORE INSERT ON user 
            FOR EACH ROW
                INSERT INTO user_audit
                SET operation_type = 'ajout',
                email = NEW.email,
                firstname = NEW.firstname,
                lastname = NEW.lastname,
                role = NEW.role,
                password = NEW.password,
                salt = NEW.salt,
                userId = '1',
                createdAt = NOW();
        `);
        await connection.query(`
            CREATE TRIGGER before_user_update
            BEFORE UPDATE ON user 
            FOR EACH ROW
                INSERT INTO user_audit
                SET operation_type = 'modification',
                email = NEW.email,
                firstname = NEW.firstname,
                lastname = NEW.lastname,
                role = NEW.role,
                password = NEW.password,
                salt = NEW.salt,
                old_email = NEW.email,
                old_firstname = OLD.firstname,
                old_lastname = OLD.lastname,
                old_role = OLD.role,
                old_password = OLD.password,
                old_salt = OLD.salt,
                userId = '1',
                createdAt = NOW();
        `);
        await connection.query(`
            CREATE TRIGGER before_user_delete
            BEFORE DELETE ON user 
            FOR EACH ROW
                INSERT INTO user_audit
                SET operation_type = 'suppression',
                email = OLD.email,
                firstname = OLD.firstname,
                lastname = OLD.lastname,
                role = OLD.role,
                password = OLD.password,
                salt = OLD.salt,
                userId = '1',
                createdAt = NOW();
        `);
    }
}
exports.default = CreateUsers;
//# sourceMappingURL=0.user.seed.js.map