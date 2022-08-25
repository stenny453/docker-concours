import { Factory, Seeder } from 'typeorm-seeding'
import { Connection } from 'typeorm'


export default class CreateCandidats implements Seeder {
    public async run(factory: Factory, connection: Connection): Promise<any> {
        //---for postgreSQL use
        // await connection.query(`INSERT INTO "Candidat" (
        //     "nom",
        //     "prenoms",
        //     "dateNaiss",
        //     "dateNaissExacte",
        //     "situationMatrimoniale",
        //     "lieuNaissance",
        //     "telephone",
        //     "nomPere",
        //     "nomMere",
        //     "adresseParent",
        //     "numCIN",
        //     "dateCIN",
        //     "lieuCIN",
        //     "dateDuplicata",
        //     "lieuDuplicata",
        //     "photo",
        //     "mel",
        //     "numBord",
        //     "dateBord",
        //     "agenceBord",
        //     "montantBord",
        //     "photoBord",
        //     "photoDiplome",
        //     "photoEtatCivil",
        //     "premierChoixCodeFormation",
        //     "deuxiemeChoixCodeFormation",
        //     "numBacc",
        //     "ficheRenseignement",
        //     "demandeInscription"
        //     )  VALUES (
        //         'Rakoto',
        //         'Mendrika',
        //         '1992-12-12 00:00:00',
        //         null,
        //         'célibataire',
        //         'Manjakaray',
        //         '0347835668',
        //         'Rakoto Aimé',
        //         'Rahary Sah',
        //         'II O 154 Bis',
        //         '101254321456',
        //         '2016-03-24 00:00:00',
        //         'Tana V',
        //         null,
        //         '',
        //         'mendrika.jpeg',
        //         'ainarakotomalala227@gmail.com',
        //         '45621346',
        //         '2022-05-05 00:00:00',
        //         'Tsianolondroa',
        //         '500000',
        //         'bordMendrika.jpeg',
        //         'diploMendrika.jpeng',
        //         'etatCivilMendrika.jpeg',
        //         '1',
        //         '2',
        //         '1023564',
        //         '',
        //         ''
        //     );`
        // )

        // table pour les déclencheurs 
        // await connection.query(
        //     `CREATE TABLE IF NOT EXISTS candidat_audit (
        //     id SERIAL PRIMARY KEY,
        //     "operation_type" VARCHAR(20) NOT NULL,
        //     "nom" VARCHAR(255) NOT NULL,
        //     "prenoms" VARCHAR(255) NOT NULL,
        //     "dateNaiss" DATE NOT NULL,
        //     "dateNaissExacte" DATE NULL,
        //     "situationMatrimoniale" VARCHAR(50) NOT NULL,
        //     "lieuNaissance" VARCHAR(50) NOT NULL,
        //     "telephone" VARCHAR(50) NOT NULL,
        //     "nomPere" VARCHAR(50)  NULL,
        //     "nomMere" VARCHAR(50)  NULL,
        //     "adresseParent" VARCHAR(50) NOT NULL,
        //     "numCIN" VARCHAR(12)  NULL,
        //     "dateCIN" DATE NULL,
        //     "lieuCIN" VARCHAR(255) NULL,
        //     "dateDuplicata" DATE NULL,
        //     "lieuDuplicata" VARCHAR(255) NULL,
        //     "photo" VARCHAR(255) NOT NULL,
        //     "mel" VARCHAR(255) NULL,
        //     "numBord" VARCHAR(255) NOT NULL,
        //     "dateBord" DATE NOT NULL,
        //     "agenceBord" VARCHAR(100) NOT NULL,
        //     "montantBord" INT NOT NULL,
        //     "photoBord" VARCHAR(250) NOT NULL,
        //     "photoDiplome" VARCHAR(250) NOT NULL,
        //     "photoEtatCivil" VARCHAR(250) NOT NULL, 
        //     "premierChoix" INT  NULL,
        //     "deuxiemeChoix" INT  NULL,
        //     "numBacc" INT NOT NULL,
        //     "old_nom" VARCHAR(255) DEFAULT NULL,
        //     "old_prenoms" VARCHAR(255) DEFAULT NULL,
        //     "old_dateNaiss" DATE DEFAULT NULL,
        //     "old_dateNaissExacte" DATE DEFAULT NULL,
        //     "old_situationMatrimoniale" VARCHAR(50) DEFAULT NULL,
        //     "old_lieuNaissance" VARCHAR(50) DEFAULT NULL,
        //     "old_telephone" VARCHAR(50) DEFAULT NULL,
        //     "old_nomPere" VARCHAR(50) DEFAULT NULL,
        //     "old_nomMere" VARCHAR(50) DEFAULT NULL,
        //     "old_adresseParent" VARCHAR(50) DEFAULT NULL,
        //     "old_numCIN" VARCHAR(12) DEFAULT NULL,
        //     "old_dateCIN" DATE DEFAULT NULL,
        //     "old_lieuCIN" VARCHAR(255) DEFAULT NULL,
        //     "old_dateDuplicata" DATE DEFAULT NULL,
        //     "old_lieuDuplicata" VARCHAR(255) DEFAULT NULL,
        //     "old_photo" VARCHAR(255) DEFAULT NULL,
        //     "old_mel" VARCHAR(255) DEFAULT NULL,
        //     "old_numBord" VARfCHAR(255) DEFAULT NULL,
        //     "old_dateBord" DATE DEFAULT NULL,
        //     "old_agenceBord" VARCHAR(100) DEFAULT NULL,
        //     "old_montantBord" INT DEFAULT NULL,
        //     "old_photoBord" VARCHAR(250) DEFAULT NULL,
        //     "old_photoDiplome" VARCHAR(250) DEFAULT NULL,
        //     "old_photoEtatCivil" VARCHAR(250) DEFAULT NULL,
        //     "old_premierChoix" INT NOT NULL,
        //     "old_deuxiemeChoix" INT NOT NULL,
        //     "old_numBacc" INT NOT NULL,
        //     "createdAt" DATE DEFAULT NULL,
        //     "userId" INT NOT NULL,
        //     FOREIGN KEY (userId) REFERENCES "user" (id))`
        // );

        // //creation de la fonction à utiliser pour le trigger d'insertion
        // await connection.query(`
        //     CREATE OR REPLACE FUNCTION ajout_candidat ()
        //     RETURNS trigger AS
        //     $$
        //         DECLARE
        //         BEGIN
        //             IF TRUE THEN
        //                 INSERT INTO 
        //                 candidat_audit("operation_type", "nom", "prenoms", "dateNaiss", "dateNaissExacte", "situationMatrimoniale", "lieuNaissance", 
        //                     "telephone", "nomPere", "nomMere", "adresseParent", "numCIN", "dateCIN", "lieuCIN", "dateDuplicata", "lieuDuplicata",
        //                     "photo", "mel", "numBord", "dateBord", "agenceBord", "montantBord", "photoBord", "photoDiplome", "photoEtatCivil", "premierChoix",
        //                     "deuxiemeChoix", "numBacc", "userId", "createdAt")
        //                 VALUES('ajout', NEW.nom, NEW.prenoms, NEW.dateNaiss, NEW.dateNaissExacte, NEW.situationMatrimoniale, NEW.lieuNaissance,
        //                  NEW.telephone, NEW.nomPere, NEW.nomMere, NEW.adresseParent, NEW.numCIN, NEW.dateCIN, NEW.lieuCIN, NEW.dateDuplicata, NEW.lieuDuplicata,
        //                  NEW.photo, NEW.mel, NEW.numBord, NEW.dateBord, NEW.agenceBord, NEW.montantBord, NEW.photoBord, NEW.photoDiplome, NEW.photoEtatCivil, NEW.premierChoixCodeFormation, NEW.deuxiemeChoixCodeFormation,
        //                  NEW.deuxiemeChoixCodeFormation, NEW.numBacc, '1', NOW());
        //             END IF;
        //             RETURN NEW;
        //         END;
        //     $$ LANGUAGE 'plpgsql';
        // `)

        // //creation de la fonction à utiliser pour le trigger de modification
        // await connection.query(`
        //     CREATE OR REPLACE FUNCTION modification_candidat ()
        //     RETURNS trigger AS
        //     $$
        //         DECLARE
        //         BEGIN
        //             IF TRUE THEN
        //                 INSERT INTO 
        //                 candidat_audit(operation_type, nom, prenoms, dateNaiss, dateNaissExacte, situationMatrimoniale, lieuNaissance, 
        //                     telephone, nomPere, nomMere, adresseParent, numCIN, dateCIN, lieuCIN, dateDuplicata, lieuDuplicata,
        //                     photo, mel, numBord, dateBord, agenceBord, montantBord, photoBord, photoDiplome, photoEtatCivil, premierChoix, deuxiemeChoix, numBacc, 
        //                     old_nom, old_prenoms, old_dateNaiss, old_dateNaissExacte, old_situationMatrimoniale, old_lieuNaissance, 
        //                     old_telephone, old_nomPere, old_nomMere, old_adresseParent, old_numCIN, old_dateCIN, old_lieuCIN, old_dateDuplicata, old_lieuDuplicata,
        //                     old_photo, old_mel, old_numBord, old_dateBord, old_agenceBord, old_montantBord, old_photoBord, old_photoDiplome, old_photoEtatCivil, old_premierChoix, old_deuxiemeChoix, old_numBacc,
        //                     userId, createdAt)
        //                 VALUES('modification', NEW.nom, NEW.prenoms, NEW.dateNaiss, NEW.dateNaissExacte, NEW.situationMatrimoniale, NEW.lieuNaissance,
        //                  NEW.telephone, NEW.nomPere, NEW.nomMere, NEW.adresseParent, NEW.numCIN, NEW.dateCIN, NEW.lieuCIN, NEW.dateDuplicata, NEW.lieuDuplicata, NEW.photo, NEW.mel, NEW.numBord, NEW.dateBord, 
        //                  NEW.agenceBord, NEW.montantBord, NEW.photoBord, NEW.photoDiplome, NEW.photoEtatCivil, NEW.premierChoixCodeFormation, NEW.deuxiemeChoixCodeFormation, NEW.deuxiemeChoixCodeFormation, NEW.numBacc, 
        //                  OLD.nom, OLD.prenoms, OLD.dateNaiss, OLD.dateNaissExacte, OLD.situationMatrimoniale, OLD.lieuNaissance,
        //                  OLD.telephone, OLD.nomPere, OLD.nomMere, OLD.adresseParent, OLD.numCIN, OLD.dateCIN, OLD.lieuCIN, OLD.dateDuplicata, OLD.lieuDuplicata, OLD.photo, OLD.mel, OLD.numBord, OLD.dateBord, 
        //                  OLD.agenceBord, OLD.montantBord, OLD.photoBord, OLD.photoDiplome, OLD.photoEtatCivil, OLD.premierChoixCodeFormation, OLD.deuxiemeChoixCodeFormation, OLD.deuxiemeChoixCodeFormation, OLD.numBacc, 
        //                  '1', NOW());
        //             END IF;
        //             RETURN NEW;
        //         END;
        //     $$ LANGUAGE 'plpgsql';
        // `)

        // //creation de la fonction à utiliser pour le trigger de suppression
        // await connection.query(`
        //     CREATE OR REPLACE FUNCTION suppression_candidat ()
        //     RETURNS trigger AS
        //     $$
        //         DECLARE
        //         BEGIN
        //             IF TRUE THEN
        //                 INSERT INTO 
        //                 candidat_audit(operation_type, nom, prenoms, dateNaiss, dateNaissExacte, situationMatrimoniale, lieuNaissance, 
        //                     telephone, nomPere, nomMere, adresseParent, numCIN, dateCIN, lieuCIN, dateDuplicata, lieuDuplicata,
        //                     photo, mel, numBord, dateBord, agenceBord, montantBord, photoBord, photoDiplome, photoEtatCivil, premierChoix,
        //                     deuxiemeChoix, numBacc, userId, createdAt)
        //                 VALUES('suppression', OLD.nom, OLD.prenoms, OLD.dateNaiss, OLD.dateNaissExacte, OLD.situationMatrimoniale, OLD.lieuNaissance,
        //                  OLD.telephone, OLD.nomPere, OLD.nomMere, OLD.adresseParent, OLD.numCIN, OLD.dateCIN, OLD.lieuCIN, OLD.dateDuplicata, OLD.lieuDuplicata,
        //                  OLD.photo, OLD.mel, OLD.numBord, OLD.dateBord, OLD.agenceBord, OLD.montantBord, OLD.photoBord, OLD.photoDiplome, OLD.photoEtatCivil, OLD.premierChoixCodeFormation, OLD.deuxiemeChoixCodeFormation,
        //                  OLD.deuxiemeChoixCodeFormation, OLD.numBacc, '1', NOW());
        //             END IF;
        //             RETURN NEW;
        //         END;
        //     $$ LANGUAGE 'plpgsql';
        // `)

        // // création du triggers lors d'une insertion ou déclencheurs
        // await connection.query(`
        //     CREATE TRIGGER before_candidat_insert
        //     BEFORE INSERT ON "Candidat" 
        //     FOR EACH ROW EXECUTE PROCEDURE ajout_candidat();
        // `)

        // // création du triggers lors d'une modification ou déclencheurs
        // await connection.query(`
        //     CREATE TRIGGER before_candidat_update
        //     BEFORE UPDATE ON "Candidat" 
        //     FOR EACH ROW EXECUTE PROCEDURE modification_candidat();
        // `)

        // // création du triggers lors d'une suppression ou déclencheurs
        // await connection.query(`
        //     CREATE TRIGGER before_candidat_delete
        //     BEFORE DELETE ON "Candidat" 
        //     FOR EACH ROW EXECUTE PROCEDURE suppression_candidat();
        // `)

        //---for mysql use
        await connection.query(`INSERT INTO candidat  (
        nom,
        prenoms,
        dateNaiss,
        dateNaissExacte,
        situationMatrimoniale,
        lieuNaissance,
        telephone,
        nomPere,
        nomMere,
        adresseParent,
        numCIN,
        dateCIN,
        lieuCIN,
        dateDuplicata,
        lieuDuplicata,
        photo,
        mel,
        numBord,
        dateBord,
        agenceBord,
        montantBord,
        photoBord,
        photoDiplome,
        photoEtatCivil,
        premierChoixCodeFormation,
        deuxiemeChoixCodeFormation,
        numBacc,
        ficheRenseignement,
        demandeInscription)  VALUES (
            'Rakoto',
            'Mendrika',
            '1992-12-12 00:00:00',
            null,
            'célibataire',
            'Manjakaray',
            '0347835668',
            'Rakoto Aimé',
            'Rahary Sah',
            'II O 154 Bis',
            '101254321456',
            '2016-03-24 00:00:00',
            'Tana V',
            null,
            '',
            'mendrika.jpeg',
            'ainarakotomalala227@gmail.com',
            '45621346',
            '2022-05-05 00:00:00',
            'Tsianolondroa',
            '500000',
            'bordMendrika.jpeg',
            'diploMendrika.jpeng',
            'etatCivilMendrika.jpeg',
            '1',
            '2',
            '1023564',
            '',
            ''
        )`)

        // table pour les déclencheurs 
        await connection.query(
            `CREATE TABLE IF NOT EXISTS candidat_audit (
            id INT AUTO_INCREMENT PRIMARY KEY,
            operation_type VARCHAR(20) NOT NULL,
            nom VARCHAR(255) NOT NULL,
            prenoms VARCHAR(255) NOT NULL,
            dateNaiss DATETIME NOT NULL,
            dateNaissExacte DATETIME NULL,
            situationMatrimoniale VARCHAR(50) NOT NULL,
            lieuNaissance VARCHAR(50) NOT NULL,
            telephone VARCHAR(50) NOT NULL,
            nomPere VARCHAR(50)  NULL,
            nomMere VARCHAR(50)  NULL,
            adresseParent VARCHAR(50) NOT NULL,
            numCIN VARCHAR(12)  NULL,
            dateCIN DATETIME NULL,
            lieuCIN VARCHAR(255) NULL,
            dateDuplicata DATETIME NULL,
            lieuDuplicata VARCHAR(255) NULL,
            photo VARCHAR(255) NOT NULL,
            mel VARCHAR(255) NULL,
            numBord VARCHAR(255) NOT NULL,
            dateBord DATETIME NOT NULL,
            agenceBord VARCHAR(100) NOT NULL,
            montantBord INT(11) NOT NULL,
            photoBord VARCHAR(250) NOT NULL,
            photoDiplome VARCHAR(250) NOT NULL,
            photoEtatCivil VARCHAR(250) NOT NULL, 
            premierChoix INT(11)  NULL,
            deuxiemeChoix INT(11)  NULL,
            numBacc INT(11) NOT NULL,
            old_nom VARCHAR(255) DEFAULT NULL,
            old_prenoms VARCHAR(255) DEFAULT NULL,
            old_dateNaiss DATETIME DEFAULT NULL,
            old_dateNaissExacte DATETIME DEFAULT NULL,
            old_situationMatrimoniale VARCHAR(50) DEFAULT NULL,
            old_lieuNaissance VARCHAR(50) DEFAULT NULL,
            old_telephone VARCHAR(50) DEFAULT NULL,
            old_nomPere VARCHAR(50) DEFAULT NULL,
            old_nomMere VARCHAR(50) DEFAULT NULL,
            old_adresseParent VARCHAR(50) DEFAULT NULL,
            old_numCIN VARCHAR(12) DEFAULT NULL,
            old_dateCIN DATETIME DEFAULT NULL,
            old_lieuCIN VARCHAR(255) DEFAULT NULL,
            old_dateDuplicata DATETIME DEFAULT NULL,
            old_lieuDuplicata VARCHAR(255) DEFAULT NULL,
            old_photo VARCHAR(255) DEFAULT NULL,
            old_mel VARCHAR(255) DEFAULT NULL,
            old_numBord VARCHAR(255) DEFAULT NULL,
            old_dateBord DATETIME DEFAULT NULL,
            old_agenceBord VARCHAR(100) DEFAULT NULL,
            old_montantBord INT(11) DEFAULT NULL,
            old_photoBord VARCHAR(250) DEFAULT NULL,
            old_photoDiplome VARCHAR(250) DEFAULT NULL,
            old_photoEtatCivil VARCHAR(250) DEFAULT NULL,
            old_premierChoix INT(11) NOT NULL,
            old_deuxiemeChoix INT(11) NOT NULL,
            old_numBacc INT(11) NOT NULL,
            createdAt DATETIME DEFAULT NULL,
            userId INT NOT NULL,
            FOREIGN KEY (userId) REFERENCES user (id)
            );`
        );

        // création du triggers lors d'une insertion ou déclencheurs
        await connection.query(`
            CREATE TRIGGER before_candidat_insert
            BEFORE INSERT ON candidat 
            FOR EACH ROW
                INSERT INTO candidat_audit
                SET operation_type = 'ajout',
                nom = NEW.nom,
                prenoms = NEW.prenoms,
                dateNaiss = NEW.dateNaiss,
                dateNaissExacte = NEW.dateNaissExacte,
                situationMatrimoniale = NEW.situationMatrimoniale,
                lieuNaissance = NEW.lieuNaissance,
                telephone = NEW.telephone,
                nomPere = NEW.nomPere,
                nomMere = NEW.nomMere,
                adresseParent = NEW.adresseParent,
                numCIN = NEW.numCIN,
                dateCIN = NEW.dateCIN,
                lieuCIN = NEW.lieuCIN,
                dateDuplicata = NEW.dateDuplicata,
                lieuDuplicata = NEW.lieuDuplicata,
                photo = NEW.photo,
                mel = NEW.mel,
                numBord = NEW.numBord,
                dateBord = NEW.dateBord,
                agenceBord = NEW.agenceBord,
                montantBord = NEW.montantBord,
                photoBord = NEW.photoBord,
                photoDiplome = NEW.photoDiplome,
                photoEtatCivil = NEW.photoEtatCivil,
                premierChoix = NEW.premierChoixCodeFormation,
                deuxiemeChoix = NEW.deuxiemeChoixCodeFormation,
                numBacc = NEW.numBacc,
                userId = '1',
                createdAt = NOW();
        `)

        // création du triggers lors d'une modification ou déclencheurs
        await connection.query(`
            CREATE TRIGGER before_candidat_update
            BEFORE UPDATE ON candidat 
            FOR EACH ROW
                INSERT INTO candidat_audit
                SET operation_type = 'modification',
                nom = NEW.nom,
                prenoms = NEW.prenoms,
                dateNaiss = NEW.dateNaiss,
                dateNaissExacte = NEW.dateNaissExacte,
                situationMatrimoniale = NEW.situationMatrimoniale,
                lieuNaissance = NEW.lieuNaissance,
                telephone = NEW.telephone,
                nomPere = NEW.nomPere,
                nomMere = NEW.nomMere,
                adresseParent = NEW.adresseParent,
                numCIN = NEW.numCIN,
                dateCIN = NEW.dateCIN,
                lieuCIN = NEW.lieuCIN,
                dateDuplicata = NEW.dateDuplicata,
                lieuDuplicata = NEW.lieuDuplicata,
                photo = NEW.photo,
                mel = NEW.mel,
                numBord = NEW.numBord,
                dateBord = NEW.dateBord,
                agenceBord = NEW.agenceBord,
                montantBord = NEW.montantBord,
                photoBord = NEW.photoBord,
                photoDiplome = NEW.photoDiplome,
                photoEtatCivil = NEW.photoEtatCivil,
                premierChoix = NEW.premierChoixCodeFormation,
                deuxiemeChoix = NEW.deuxiemeChoixCodeFormation,
                numBacc = NEW.numBacc,
                old_nom = OLD.nom,
                old_prenoms = OLD.prenoms,
                old_dateNaiss = OLD.dateNaiss,
                old_dateNaissExacte = OLD.dateNaissExacte,
                old_situationMatrimoniale = OLD.situationMatrimoniale,
                old_lieuNaissance = OLD.lieuNaissance,
                old_telephone = OLD.telephone,
                old_nomPere = OLD.nomPere,
                old_nomMere = OLD.nomMere,
                old_adresseParent = OLD.adresseParent,
                old_numCIN = OLD.numCIN,
                old_dateCIN = OLD.dateCIN,
                old_lieuCIN = OLD.lieuCIN,
                old_dateDuplicata = OLD.dateDuplicata,
                old_lieuDuplicata = OLD.lieuDuplicata,
                old_photo = OLD.photo,
                old_mel = OLD.mel,
                old_numBord = OLD.numBord,
                old_dateBord = OLD.dateBord,
                old_agenceBord = OLD.agenceBord,
                old_montantBord = OLD.montantBord,
                old_photoBord = OLD.photoBord,
                old_photoDiplome = OLD.photoDiplome,
                old_photoEtatCivil = OLD.photoEtatCivil,
                old_premierChoix = OLD.premierChoixCodeFormation,
                old_deuxiemeChoix = OLD.deuxiemeChoixCodeFormation,
                old_numBacc = OLD.numBacc,
                userId = '1',
                createdAt = NOW();
        `)

        // création du triggers lors d'une suppression ou déclencheurs
        await connection.query(`
            CREATE TRIGGER before_candidat_delete
            BEFORE DELETE ON candidat 
            FOR EACH ROW
                INSERT INTO candidat_audit
                SET operation_type = 'suppression',
                nom = OLD.nom,
                prenoms = OLD.prenoms,
                dateNaiss = OLD.dateNaiss,
                dateNaissExacte = OLD.dateNaissExacte,
                situationMatrimoniale = OLD.situationMatrimoniale,
                lieuNaissance = OLD.lieuNaissance,
                telephone = OLD.telephone,
                nomPere = OLD.nomPere,
                nomMere = OLD.nomMere,
                adresseParent = OLD.adresseParent,
                numCIN = OLD.numCIN,
                dateCIN = OLD.dateCIN,
                lieuCIN = OLD.lieuCIN,
                dateDuplicata = OLD.dateDuplicata,
                lieuDuplicata = OLD.lieuDuplicata,
                photo = OLD.photo,
                mel = OLD.mel,
                numBord = OLD.numBord,
                dateBord = OLD.dateBord,
                agenceBord = OLD.agenceBord,
                montantBord = OLD.montantBord,
                photoBord = OLD.photoBord,
                photoDiplome = OLD.photoDiplome,
                photoEtatCivil = OLD.photoEtatCivil,
                premierChoix = OLD.premierChoixCodeFormation,
                deuxiemeChoix = OLD.deuxiemeChoixCodeFormation,
                numBacc = OLD.numBacc,
                userId = '1',
                createdAt = NOW();
        `)
    }
}