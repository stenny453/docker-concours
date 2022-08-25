-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le : jeu. 25 août 2022 à 07:50
-- Version du serveur : 5.7.36
-- Version de PHP : 7.4.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `concours`
--

-- --------------------------------------------------------

--
-- Structure de la table `candidat`
--

DROP TABLE IF EXISTS `candidat`;
CREATE TABLE IF NOT EXISTS `candidat` (
  `numInscription` int(11) NOT NULL AUTO_INCREMENT,
  `nom` varchar(255) NOT NULL,
  `prenoms` varchar(255) DEFAULT NULL,
  `dateNaiss` datetime DEFAULT NULL,
  `dateNaissExacte` datetime DEFAULT NULL,
  `situationMatrimoniale` varchar(255) NOT NULL,
  `lieuNaissance` varchar(255) NOT NULL,
  `telephone` varchar(255) NOT NULL,
  `nomPere` varchar(255) DEFAULT NULL,
  `nomMere` varchar(255) NOT NULL,
  `adresseParent` varchar(255) NOT NULL,
  `numCIN` varchar(255) DEFAULT NULL,
  `dateCIN` datetime DEFAULT NULL,
  `lieuCIN` varchar(255) DEFAULT NULL,
  `dateDuplicata` datetime DEFAULT NULL,
  `lieuDuplicata` varchar(255) DEFAULT NULL,
  `photo` varchar(255) NOT NULL,
  `mel` varchar(255) NOT NULL,
  `numBord` varchar(255) NOT NULL,
  `dateBord` datetime NOT NULL,
  `agenceBord` varchar(255) NOT NULL,
  `montantBord` int(11) NOT NULL,
  `photoBord` varchar(255) NOT NULL,
  `photoDiplome` varchar(255) DEFAULT NULL,
  `photoEtatCivil` varchar(255) DEFAULT NULL,
  `ficheRenseignement` varchar(255) NOT NULL,
  `demandeInscription` varchar(255) NOT NULL,
  `numBacc` varchar(255) NOT NULL,
  `premierChoixCodeFormation` int(11) DEFAULT NULL,
  `deuxiemeChoixCodeFormation` int(11) DEFAULT NULL,
  `codeCentreCodeCentre` int(11) DEFAULT NULL,
  `codeCentreBaccCodeCentreBacc` int(11) DEFAULT NULL,
  `codeTypeCandCodeTypeCand` int(11) DEFAULT NULL,
  `codeSerieCodeSerie` int(11) DEFAULT NULL,
  `codeResultatCodeResultat` int(11) DEFAULT NULL,
  PRIMARY KEY (`numInscription`),
  KEY `FK_6011107eb9b0ececb7e306d3361` (`premierChoixCodeFormation`),
  KEY `FK_595c938c15c1a34cbc46534a650` (`deuxiemeChoixCodeFormation`),
  KEY `FK_b87419363d05c2c22aa354b4759` (`codeCentreCodeCentre`),
  KEY `FK_332f0aa82aaa724abfe64514375` (`codeCentreBaccCodeCentreBacc`),
  KEY `FK_6bdd281759607d17276ecf44f43` (`codeTypeCandCodeTypeCand`),
  KEY `FK_4589a9416da6b7d72fb801c0e94` (`codeSerieCodeSerie`),
  KEY `FK_ec28be3b67680dd91da89ba7df5` (`codeResultatCodeResultat`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `candidat`
--

INSERT INTO `candidat` (`numInscription`, `nom`, `prenoms`, `dateNaiss`, `dateNaissExacte`, `situationMatrimoniale`, `lieuNaissance`, `telephone`, `nomPere`, `nomMere`, `adresseParent`, `numCIN`, `dateCIN`, `lieuCIN`, `dateDuplicata`, `lieuDuplicata`, `photo`, `mel`, `numBord`, `dateBord`, `agenceBord`, `montantBord`, `photoBord`, `photoDiplome`, `photoEtatCivil`, `ficheRenseignement`, `demandeInscription`, `numBacc`, `premierChoixCodeFormation`, `deuxiemeChoixCodeFormation`, `codeCentreCodeCentre`, `codeCentreBaccCodeCentreBacc`, `codeTypeCandCodeTypeCand`, `codeSerieCodeSerie`, `codeResultatCodeResultat`) VALUES
(1, 'Rakoto', 'Mendrika', '1992-12-12 00:00:00', NULL, 'célibataire', 'Manjakaray', '0347835668', 'Rakoto Aimé', 'Rahary Sah', 'II O 154 Bis', '101254321456', '2016-03-24 00:00:00', 'Tana V', NULL, '', 'mendrika.jpeg', 'ainarakotomalala227@gmail.com', '45621346', '2022-05-05 00:00:00', 'Tsianolondroa', 500000, 'bordMendrika.jpeg', 'diploMendrika.jpeng', 'etatCivilMendrika.jpeg', '', '', '1023564', 1, 2, NULL, NULL, NULL, NULL, NULL);

--
-- Déclencheurs `candidat`
--
DROP TRIGGER IF EXISTS `before_candidat_delete`;
DELIMITER $$
CREATE TRIGGER `before_candidat_delete` BEFORE DELETE ON `candidat` FOR EACH ROW INSERT INTO candidat_audit
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
                createdAt = NOW()
$$
DELIMITER ;
DROP TRIGGER IF EXISTS `before_candidat_insert`;
DELIMITER $$
CREATE TRIGGER `before_candidat_insert` BEFORE INSERT ON `candidat` FOR EACH ROW INSERT INTO candidat_audit
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
                createdAt = NOW()
$$
DELIMITER ;
DROP TRIGGER IF EXISTS `before_candidat_update`;
DELIMITER $$
CREATE TRIGGER `before_candidat_update` BEFORE UPDATE ON `candidat` FOR EACH ROW INSERT INTO candidat_audit
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
                createdAt = NOW()
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Structure de la table `candidat_audit`
--

DROP TABLE IF EXISTS `candidat_audit`;
CREATE TABLE IF NOT EXISTS `candidat_audit` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `operation_type` varchar(20) NOT NULL,
  `nom` varchar(255) NOT NULL,
  `prenoms` varchar(255) NOT NULL,
  `dateNaiss` datetime NOT NULL,
  `dateNaissExacte` datetime DEFAULT NULL,
  `situationMatrimoniale` varchar(50) NOT NULL,
  `lieuNaissance` varchar(50) NOT NULL,
  `telephone` varchar(50) NOT NULL,
  `nomPere` varchar(50) DEFAULT NULL,
  `nomMere` varchar(50) DEFAULT NULL,
  `adresseParent` varchar(50) NOT NULL,
  `numCIN` varchar(12) DEFAULT NULL,
  `dateCIN` datetime DEFAULT NULL,
  `lieuCIN` varchar(255) DEFAULT NULL,
  `dateDuplicata` datetime DEFAULT NULL,
  `lieuDuplicata` varchar(255) DEFAULT NULL,
  `photo` varchar(255) NOT NULL,
  `mel` varchar(255) DEFAULT NULL,
  `numBord` varchar(255) NOT NULL,
  `dateBord` datetime NOT NULL,
  `agenceBord` varchar(100) NOT NULL,
  `montantBord` int(11) NOT NULL,
  `photoBord` varchar(250) NOT NULL,
  `photoDiplome` varchar(250) NOT NULL,
  `photoEtatCivil` varchar(250) NOT NULL,
  `premierChoix` int(11) DEFAULT NULL,
  `deuxiemeChoix` int(11) DEFAULT NULL,
  `numBacc` int(11) NOT NULL,
  `old_nom` varchar(255) DEFAULT NULL,
  `old_prenoms` varchar(255) DEFAULT NULL,
  `old_dateNaiss` datetime DEFAULT NULL,
  `old_dateNaissExacte` datetime DEFAULT NULL,
  `old_situationMatrimoniale` varchar(50) DEFAULT NULL,
  `old_lieuNaissance` varchar(50) DEFAULT NULL,
  `old_telephone` varchar(50) DEFAULT NULL,
  `old_nomPere` varchar(50) DEFAULT NULL,
  `old_nomMere` varchar(50) DEFAULT NULL,
  `old_adresseParent` varchar(50) DEFAULT NULL,
  `old_numCIN` varchar(12) DEFAULT NULL,
  `old_dateCIN` datetime DEFAULT NULL,
  `old_lieuCIN` varchar(255) DEFAULT NULL,
  `old_dateDuplicata` datetime DEFAULT NULL,
  `old_lieuDuplicata` varchar(255) DEFAULT NULL,
  `old_photo` varchar(255) DEFAULT NULL,
  `old_mel` varchar(255) DEFAULT NULL,
  `old_numBord` varchar(255) DEFAULT NULL,
  `old_dateBord` datetime DEFAULT NULL,
  `old_agenceBord` varchar(100) DEFAULT NULL,
  `old_montantBord` int(11) DEFAULT NULL,
  `old_photoBord` varchar(250) DEFAULT NULL,
  `old_photoDiplome` varchar(250) DEFAULT NULL,
  `old_photoEtatCivil` varchar(250) DEFAULT NULL,
  `old_premierChoix` int(11) NOT NULL,
  `old_deuxiemeChoix` int(11) NOT NULL,
  `old_numBacc` int(11) NOT NULL,
  `createdAt` datetime DEFAULT NULL,
  `userId` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `userId` (`userId`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `centrebacc`
--

DROP TABLE IF EXISTS `centrebacc`;
CREATE TABLE IF NOT EXISTS `centrebacc` (
  `codeCentreBacc` int(11) NOT NULL AUTO_INCREMENT,
  `nomCentreBacc` varchar(255) NOT NULL,
  `codeFaritany` int(11) NOT NULL,
  PRIMARY KEY (`codeCentreBacc`)
) ENGINE=InnoDB AUTO_INCREMENT=168 DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `centrebacc`
--

INSERT INTO `centrebacc` (`codeCentreBacc`, `nomCentreBacc`, `codeFaritany`) VALUES
(1, 'ANTANANARIVO I', 101),
(2, 'ANTANANARIVO II', 102),
(3, 'ANTANANARIVO III', 103),
(4, 'ANTANANARIVO IV', 104),
(5, 'ANTANANARIVO V', 105),
(6, 'ANTANANARIVO VI', 106),
(7, 'ITAOSY', 107),
(8, 'AMPITATAFIKA', 108),
(9, 'ALAKAMISY FENOARIVO', 109),
(10, 'ANDOHARANOFOTSY', 110),
(11, 'AMBOHIMANGAKELY', 111),
(12, 'ALASORA', 112),
(13, 'SABOTSY NAMEHANA', 113),
(14, 'TALATA VOLONONDRY', 114),
(15, 'AMBOHIDRATRIMO', 115),
(16, 'IVATO', 116),
(17, 'AMBOHITRIMANJAKA', 117),
(18, 'MAHITSY', 118),
(19, 'FENOARIVOBE', 119),
(20, 'FIRAVAHANA', 120),
(21, 'ANKAZOBE', 121),
(22, 'ANDRAMASINA', 122),
(23, 'AMBOHIMIADANA', 123),
(24, 'ALATSINAINY BAKARO', 124),
(25, 'AMBATOLAMPY', 125),
(26, 'ANTANIFOTSY', 126),
(27, 'AMBOHIMANDROSO', 127),
(28, 'ANTSIRABE', 128),
(29, 'AMBOHIBARY', 129),
(30, 'BETAFO', 130),
(31, 'MANDOTO', 131),
(32, 'FARATSIHO', 132),
(33, 'ANJOZOROBE', 133),
(34, 'AMBATOMANOINA', 134),
(35, 'MANJAKANDRIANA', 135),
(36, 'AMBATOMANGA', 136),
(37, 'AMBATOMENA MANANARA', 137),
(38, 'ANKAZONDANDY', 138),
(39, 'MANTASOA', 139),
(40, 'ARIVONIMAMO', 140),
(41, 'IMERINTSIATOSIKA', 141),
(42, 'MIARINARIVO', 142),
(43, 'ANALAVORY', 143),
(44, 'SOAVINANDRIANA', 144),
(45, 'TSIROANOMANDIDY', 145),
(46, 'MAHASOLO', 146),
(47, 'ANKADINONDRY SAKAY', 147),
(48, 'MAHABO', 148),
(49, 'FIHAONANA', 149),
(50, 'ANKADINANDRIANA', 150),
(51, 'ANTANANARIVO RENIVOHITRA', 151),
(52, 'ANTSIRANANA I', 201),
(53, 'ANTSIRANANA II', 202),
(54, 'AMBANJA', 203),
(55, 'AMBILOBE', 204),
(56, 'ANDAPA', 205),
(57, 'ANTALAHA', 206),
(58, 'NOSY-BE', 207),
(59, 'SAMBAVA', 208),
(60, 'VOHEMAR', 209),
(61, 'FIANARANTSOA 301', 301),
(62, 'ISORANA', 302),
(63, 'AMBALAVAO', 303),
(64, 'AMBATOFINANDRAHANA', 304),
(65, 'AMBOHIMAHASOA', 305),
(66, 'AMBOSITRA', 306),
(67, 'ALAKAMISY ITENINA', 307),
(68, 'FANDRIANA', 308),
(69, 'FARAFANGANA', 309),
(70, 'IKONGO', 310),
(71, 'IMITO', 311),
(72, 'IFANADIANA', 312),
(73, 'IHOSY', 313),
(74, 'IKALAMAVONY', 314),
(75, 'KIANJANDRAKEFINA', 315),
(76, 'MANAKARA', 316),
(77, 'MANANJARY', 317),
(78, 'MIDONGY DU SUD', 318),
(79, 'NOSY VARIKA', 319),
(80, 'VANGAINDRANO', 320),
(81, 'VOHIPENO', 321),
(82, 'VONDROZO', 322),
(83, 'MANANDRIANA', 323),
(84, 'AMBONDROMISOTRA', 324),
(85, 'MAHAJANGA I', 401),
(86, 'MAHAJANGA II', 402),
(87, 'AMBATO-BOENI', 403),
(88, 'AMBATOMAINTY', 404),
(89, 'ANALALAVA', 405),
(90, 'ANTSALOVA', 406),
(91, 'ANTSOHIHY', 407),
(92, 'BEALANANA', 408),
(93, 'BEFANDRIANA-AVARATRA', 409),
(94, 'BESALAMPY', 410),
(95, 'KANDREHO', 411),
(96, 'MAEVATANANA', 412),
(97, 'MAINTIRANO', 413),
(98, 'MAMPIKONY', 414),
(99, 'MANDRITSARA', 415),
(100, 'MAROVOAY', 416),
(101, 'MITSINJO', 417),
(102, 'MORAFENOBE', 418),
(103, 'BORIZINY (PORT-BERGE)', 419),
(104, 'SOALALA', 420),
(105, 'TSARATANANA', 421),
(106, 'AMBATORIHA-EST', 422),
(107, 'MAROVANTAZA(Andrevorevo)', 423),
(108, 'BEFOTAKA-NORD', 424),
(109, 'MAROVATOLENA', 425),
(110, 'ANTSAKABARY', 426),
(111, 'ANKARAMIBE', 427),
(112, 'AMBODIMOTSO-SUD', 428),
(113, 'MAROMANDIA', 429),
(114, 'TOAMASINA I', 501),
(115, 'TOAMASINA II', 502),
(116, 'AMBATONDRAZAKA', 503),
(117, 'AMPARAFARAVOLA', 504),
(118, 'ANDILAMENA', 505),
(119, 'ANOSIBE AN\'ALA', 506),
(120, 'ANTANAMBAO MANAMPOTSY', 507),
(121, 'VOHIBINANY (BRICKAVILLE)', 508),
(122, 'FENERIVE-EST', 509),
(123, 'MAHANORO', 510),
(124, 'MANANARA AVARATRA', 511),
(125, 'MAROANTSETRA', 512),
(126, 'MAROLAMBO', 513),
(127, 'MORAMANGA', 514),
(128, 'SAINTE MARIE', 515),
(129, 'SOANIERANA IVONGO', 516),
(130, 'VATOMANDRY', 517),
(131, 'VAVATENINA', 518),
(132, 'TANAMBE', 519),
(133, 'MORARANO CHROME', 520),
(134, 'IMERIMANDROSO', 521),
(135, 'VOHILENGO', 522),
(136, 'AMBOASARY GARA', 523),
(137, 'TOLIARA I', 601),
(138, 'TOLIARA II', 602),
(139, 'AMBOASARY', 603),
(140, 'AMBOVOMBE ANDROY', 604),
(141, 'AMPANIHY OUEST', 605),
(142, 'ANKAZOABO SUD', 606),
(143, 'BEKILY', 607),
(144, 'BELO/TSIRIBIHINA', 608),
(145, 'BELOHA', 609),
(146, 'BENENITRA', 610),
(147, 'BEROROHA', 611),
(148, 'BETIOKY SUD', 612),
(149, 'BETROKA', 613),
(150, 'TOLAGNARO', 614),
(151, 'MAHABO', 615),
(152, 'MANJA', 616),
(153, 'MIANDRIVAZO', 617),
(154, 'MOROMBE', 618),
(155, 'MORONDAVA', 619),
(156, 'SAKARAHA', 620),
(157, 'TSIHOMBE', 621),
(158, 'BEZAHA', 622),
(159, 'ANKILILOAKE', 623),
(160, 'EJEDA', 624),
(161, 'FOTADREVO', 627),
(162, 'ISOANALA', 628),
(163, 'ITAMPOLO', 629),
(164, 'SOAMANONGA', 630),
(165, 'AMBAHIKILY', 631),
(166, 'ANDROKA', 632),
(167, 'ANKILIZATO', 633);

--
-- Déclencheurs `centrebacc`
--
DROP TRIGGER IF EXISTS `before_centrebacc_delete`;
DELIMITER $$
CREATE TRIGGER `before_centrebacc_delete` BEFORE DELETE ON `centrebacc` FOR EACH ROW INSERT INTO centrebacc_audit
                SET operation_type = 'suppression',
                nomCentreBAcc = OLD.nomCentreBAcc,
                codeFaritany = OLD.codeFaritany,
                userId = '1',
                createdAt = NOW()
$$
DELIMITER ;
DROP TRIGGER IF EXISTS `before_centrebacc_insert`;
DELIMITER $$
CREATE TRIGGER `before_centrebacc_insert` BEFORE INSERT ON `centrebacc` FOR EACH ROW INSERT INTO centrebacc_audit
                SET operation_type = 'ajout',
                nomCentreBAcc = NEW.nomCentreBAcc,
                codeFaritany = NEW.codeFaritany,
                userId = '1',
                createdAt = NOW()
$$
DELIMITER ;
DROP TRIGGER IF EXISTS `before_centrebacc_update`;
DELIMITER $$
CREATE TRIGGER `before_centrebacc_update` BEFORE UPDATE ON `centrebacc` FOR EACH ROW INSERT INTO centrebacc_audit
                SET operation_type = 'modification',
                nomCentreBAcc = NEW.nomCentreBAcc,
                codeFaritany = NEW.codeFaritany,
                old_nomCentreBAcc = OLD.nomCentreBAcc,
                old_codeFaritany = OLD.codeFaritany,
                userId = '1',
                createdAt = NOW()
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Structure de la table `centrebacc_audit`
--

DROP TABLE IF EXISTS `centrebacc_audit`;
CREATE TABLE IF NOT EXISTS `centrebacc_audit` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `operation_type` varchar(20) NOT NULL,
  `nomCentreBAcc` varchar(50) NOT NULL,
  `old_nomCentreBAcc` varchar(50) DEFAULT NULL,
  `codeFaritany` varchar(50) DEFAULT NULL,
  `old_codeFaritany` varchar(50) DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `userId` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `userId` (`userId`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `centreconcours`
--

DROP TABLE IF EXISTS `centreconcours`;
CREATE TABLE IF NOT EXISTS `centreconcours` (
  `codeCentre` int(11) NOT NULL AUTO_INCREMENT,
  `nomCentre` varchar(255) NOT NULL,
  PRIMARY KEY (`codeCentre`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `centreconcours`
--

INSERT INTO `centreconcours` (`codeCentre`, `nomCentre`) VALUES
(1, 'Antananarivo'),
(2, 'Fianarantsoa'),
(3, 'Toamasina'),
(4, 'Diego'),
(5, 'Toliara'),
(6, 'Mahajanga');

--
-- Déclencheurs `centreconcours`
--
DROP TRIGGER IF EXISTS `before_centreconcours_delete`;
DELIMITER $$
CREATE TRIGGER `before_centreconcours_delete` BEFORE DELETE ON `centreconcours` FOR EACH ROW INSERT INTO centreconcours_audit
                 SET operation_type = 'suppression',
                 nomCentre = OLD.nomCentre,
                 userId = '1',
                 createdAt = NOW()
$$
DELIMITER ;
DROP TRIGGER IF EXISTS `before_centreconcours_insert`;
DELIMITER $$
CREATE TRIGGER `before_centreconcours_insert` BEFORE INSERT ON `centreconcours` FOR EACH ROW INSERT INTO centreconcours_audit
                 SET operation_type = 'ajout',
                 nomCentre = NEW.nomCentre,
                 userId = '1',
                 createdAt = NOW()
$$
DELIMITER ;
DROP TRIGGER IF EXISTS `before_centreconcours_update`;
DELIMITER $$
CREATE TRIGGER `before_centreconcours_update` BEFORE UPDATE ON `centreconcours` FOR EACH ROW INSERT INTO centreconcours_audit
                 SET operation_type = 'modification',
                 nomCentre = NEW.nomCentre,
                 old_nomCentre = OLD.nomCentre,
                 userId = '1',
                 createdAt = NOW()
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Structure de la table `centreconcours_audit`
--

DROP TABLE IF EXISTS `centreconcours_audit`;
CREATE TABLE IF NOT EXISTS `centreconcours_audit` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `operation_type` varchar(20) NOT NULL,
  `nomCentre` varchar(50) NOT NULL,
  `old_nomCentre` varchar(50) DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `userId` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `userId` (`userId`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `centreformation`
--

DROP TABLE IF EXISTS `centreformation`;
CREATE TABLE IF NOT EXISTS `centreformation` (
  `codeFormation` int(11) NOT NULL AUTO_INCREMENT,
  `nomCentreFormation` varchar(255) NOT NULL,
  PRIMARY KEY (`codeFormation`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `centreformation`
--

INSERT INTO `centreformation` (`codeFormation`, `nomCentreFormation`) VALUES
(1, 'Professionnel (Fianarantsoa)'),
(2, 'Informatique Générale (Fianarantsoa)'),
(3, 'Informatique Générale (Toliara)');

--
-- Déclencheurs `centreformation`
--
DROP TRIGGER IF EXISTS `before_centreformation_delete`;
DELIMITER $$
CREATE TRIGGER `before_centreformation_delete` BEFORE DELETE ON `centreformation` FOR EACH ROW INSERT INTO centreformation_audit
                 SET operation_type = 'suppression',
                 nomCentreFormation = OLD.nomCentreFormation,
                 userId = '1',
                 createdAt = NOW()
$$
DELIMITER ;
DROP TRIGGER IF EXISTS `before_centreformation_insert`;
DELIMITER $$
CREATE TRIGGER `before_centreformation_insert` BEFORE INSERT ON `centreformation` FOR EACH ROW INSERT INTO centreformation_audit
                 SET operation_type = 'ajout',
                 nomCentreFormation = NEW.nomCentreFormation,
                 userId = '1',
                 createdAt = NOW()
$$
DELIMITER ;
DROP TRIGGER IF EXISTS `before_centreformation_update`;
DELIMITER $$
CREATE TRIGGER `before_centreformation_update` BEFORE UPDATE ON `centreformation` FOR EACH ROW INSERT INTO centreformation_audit
                 SET operation_type = 'modification',
                 nomCentreFormation = NEW.nomCentreFormation,
                 old_nomCentreFormation = OLD.nomCentreFormation,
                 userId = '1',
                 createdAt = NOW()
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Structure de la table `centreformation_audit`
--

DROP TABLE IF EXISTS `centreformation_audit`;
CREATE TABLE IF NOT EXISTS `centreformation_audit` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `operation_type` varchar(20) NOT NULL,
  `nomCentreFormation` varchar(50) NOT NULL,
  `old_nomCentreFormation` varchar(50) DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `userId` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `userId` (`userId`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `choix`
--

DROP TABLE IF EXISTS `choix`;
CREATE TABLE IF NOT EXISTS `choix` (
  `codeChoix` int(11) NOT NULL AUTO_INCREMENT,
  `libelleChoix` varchar(255) NOT NULL,
  `limiteAge` int(11) NOT NULL,
  `limiteBacc` int(11) NOT NULL,
  `nbPlaces` int(11) NOT NULL,
  `nbListeAttente` int(11) NOT NULL,
  PRIMARY KEY (`codeChoix`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `choix`
--

INSERT INTO `choix` (`codeChoix`, `libelleChoix`, `limiteAge`, `limiteBacc`, `nbPlaces`, `nbListeAttente`) VALUES
(1, 'IG -  Fianarantsoa', 3, 2, 150, 50),
(2, 'IG - Toliara', 3, 2, 150, 50),
(3, 'PRO - Fianarantsoa ', 0, 0, 150, 20);

--
-- Déclencheurs `choix`
--
DROP TRIGGER IF EXISTS `before_choix_delete`;
DELIMITER $$
CREATE TRIGGER `before_choix_delete` BEFORE DELETE ON `choix` FOR EACH ROW INSERT INTO choix_audit
                SET operation_type = 'suppression',
                libelleChoix = OLD.libelleChoix,
                limiteAge = OLD.limiteAge,
                limiteBacc = OLD.limiteBacc,
                nbPlaces = OLD.nbPlaces,
                userId = '1',
                createdAt = NOW()
$$
DELIMITER ;
DROP TRIGGER IF EXISTS `before_choix_insert`;
DELIMITER $$
CREATE TRIGGER `before_choix_insert` BEFORE INSERT ON `choix` FOR EACH ROW INSERT INTO choix_audit
                SET operation_type = 'ajout',
                libelleChoix = NEW.libelleChoix,
                limiteAge = NEW.limiteAge,
                limiteBacc = NEW.limiteBacc,
                nbPlaces = NEW.nbPlaces,
                userId = '1',
                createdAt = NOW()
$$
DELIMITER ;
DROP TRIGGER IF EXISTS `before_choix_update`;
DELIMITER $$
CREATE TRIGGER `before_choix_update` BEFORE UPDATE ON `choix` FOR EACH ROW INSERT INTO choix_audit
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
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Structure de la table `choix_audit`
--

DROP TABLE IF EXISTS `choix_audit`;
CREATE TABLE IF NOT EXISTS `choix_audit` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `operation_type` varchar(20) NOT NULL,
  `libelleChoix` varchar(50) NOT NULL,
  `old_libelleChoix` varchar(50) DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `limiteAge` int(11) NOT NULL,
  `old_limiteAge` int(11) DEFAULT NULL,
  `limiteBacc` varchar(50) NOT NULL,
  `old_limiteBacc` varchar(50) DEFAULT NULL,
  `nbPlaces` int(11) DEFAULT NULL,
  `old_nbPlaces` int(11) DEFAULT NULL,
  `nbListeAttente` int(11) DEFAULT NULL,
  `old_nbListeAttente` int(11) DEFAULT NULL,
  `userId` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `userId` (`userId`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `choix_epreuves_epreuve`
--

DROP TABLE IF EXISTS `choix_epreuves_epreuve`;
CREATE TABLE IF NOT EXISTS `choix_epreuves_epreuve` (
  `choixCodeChoix` int(11) NOT NULL,
  `epreuveCodeEpreuve` int(11) NOT NULL,
  PRIMARY KEY (`choixCodeChoix`,`epreuveCodeEpreuve`),
  KEY `IDX_b619a3c2f0dce88ea7dbd4cffb` (`choixCodeChoix`),
  KEY `IDX_fec1820492294f177b191352c5` (`epreuveCodeEpreuve`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `choix_parametres_parametres`
--

DROP TABLE IF EXISTS `choix_parametres_parametres`;
CREATE TABLE IF NOT EXISTS `choix_parametres_parametres` (
  `choixCodeChoix` int(11) NOT NULL,
  `parametresId` int(11) NOT NULL,
  PRIMARY KEY (`choixCodeChoix`,`parametresId`),
  KEY `IDX_8f1dc45ff60288ce579c536b1f` (`choixCodeChoix`),
  KEY `IDX_52dafb385328fb7db97adbdf9d` (`parametresId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `choix_series_serie`
--

DROP TABLE IF EXISTS `choix_series_serie`;
CREATE TABLE IF NOT EXISTS `choix_series_serie` (
  `choixCodeChoix` int(11) NOT NULL,
  `serieCodeSerie` int(11) NOT NULL,
  PRIMARY KEY (`choixCodeChoix`,`serieCodeSerie`),
  KEY `IDX_9a402a103c8a416a851109e7b5` (`choixCodeChoix`),
  KEY `IDX_a216f194877ddb2f6bd4891ca0` (`serieCodeSerie`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `composer`
--

DROP TABLE IF EXISTS `composer`;
CREATE TABLE IF NOT EXISTS `composer` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `Presence` tinyint(4) NOT NULL,
  `Note` int(11) NOT NULL,
  `numInscriptionNumInscription` int(11) DEFAULT NULL,
  `codeEpreuveCodeEpreuve` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_fa354d44d0e804e601f08098da7` (`numInscriptionNumInscription`),
  KEY `FK_b31f52a9d6e278e3d31413e014a` (`codeEpreuveCodeEpreuve`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `composer`
--

INSERT INTO `composer` (`id`, `Presence`, `Note`, `numInscriptionNumInscription`, `codeEpreuveCodeEpreuve`) VALUES
(1, 1, 12, 1, 1),
(2, 1, 12, 1, 2),
(3, 1, 12, 1, 3),
(4, 1, 12, 1, 4),
(5, 1, 12, 1, 5);

--
-- Déclencheurs `composer`
--
DROP TRIGGER IF EXISTS `before_composer_delete`;
DELIMITER $$
CREATE TRIGGER `before_composer_delete` BEFORE DELETE ON `composer` FOR EACH ROW INSERT INTO composer_audit
                SET operation_type = 'suppression',
                presence = OLD.presence,
                note = OLD.note,
                numInscriptionNumInscription = OLD.numInscriptionNumInscription,
                codeEpreuveCodeEpreuve = OLD.codeEpreuveCodeEpreuve,
                userId = '1',
                createdAt = NOW()
$$
DELIMITER ;
DROP TRIGGER IF EXISTS `before_composer_insert`;
DELIMITER $$
CREATE TRIGGER `before_composer_insert` BEFORE INSERT ON `composer` FOR EACH ROW INSERT INTO composer_audit
                SET operation_type = 'ajout',
                presence = NEW.presence,
                note = NEW.note,
                numInscriptionNumInscription = NEW.numInscriptionNumInscription,
                codeEpreuveCodeEpreuve = NEW.codeEpreuveCodeEpreuve,
                userId = '1',
                createdAt = NOW()
$$
DELIMITER ;
DROP TRIGGER IF EXISTS `before_composer_update`;
DELIMITER $$
CREATE TRIGGER `before_composer_update` BEFORE UPDATE ON `composer` FOR EACH ROW INSERT INTO composer_audit
                SET operation_type = 'modification',
                presence = NEW.presence,
                note = NEW.note,
                numInscriptionNumInscription = NEW.numInscriptionNumInscription,
                codeEpreuveCodeEpreuve = NEW.codeEpreuveCodeEpreuve,
                old_presence = OLD.presence,
                old_note = OLD.note,
                old_numInscriptionNumInscription = OLD.numInscriptionNumInscription,
                old_codeEpreuveCodeEpreuve = OLD.codeEpreuveCodeEpreuve,
                userId = '1',
                createdAt = NOW()
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Structure de la table `composer_audit`
--

DROP TABLE IF EXISTS `composer_audit`;
CREATE TABLE IF NOT EXISTS `composer_audit` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `operation_type` varchar(20) NOT NULL,
  `presence` varchar(50) NOT NULL,
  `note` varchar(50) NOT NULL,
  `numInscriptionNumInscription` varchar(50) NOT NULL,
  `codeEpreuveCodeEpreuve` varchar(50) NOT NULL,
  `old_presence` varchar(50) DEFAULT NULL,
  `old_note` varchar(50) DEFAULT NULL,
  `old_numInscriptionNumInscription` int(10) DEFAULT NULL,
  `old_codeEpreuveCodeEpreuve` int(10) DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `userId` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `userId` (`userId`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `custom_migration_table`
--

DROP TABLE IF EXISTS `custom_migration_table`;
CREATE TABLE IF NOT EXISTS `custom_migration_table` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `timestamp` bigint(20) NOT NULL,
  `name` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `droit`
--

DROP TABLE IF EXISTS `droit`;
CREATE TABLE IF NOT EXISTS `droit` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `droitConcours` int(11) NOT NULL,
  `fraisScolaire` int(11) NOT NULL,
  `parametresId` int(11) DEFAULT NULL,
  `typeCandidatCodeTypeCand` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_4b402cb9c38f84da734425fb9c6` (`parametresId`),
  KEY `FK_043a33b29c968a15e6e4e2a4560` (`typeCandidatCodeTypeCand`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `droit`
--

INSERT INTO `droit` (`id`, `droitConcours`, `fraisScolaire`, `parametresId`, `typeCandidatCodeTypeCand`) VALUES
(1, 10000, 100000, 1, 1),
(2, 70000, 700000, 1, 2),
(3, 90000, 900000, 1, 3);

--
-- Déclencheurs `droit`
--
DROP TRIGGER IF EXISTS `before_droit_delete`;
DELIMITER $$
CREATE TRIGGER `before_droit_delete` BEFORE DELETE ON `droit` FOR EACH ROW INSERT INTO droit_audit
                SET operation_type = 'suppression',
                droitConcours = OLD.droitConcours,
                fraisScolaire = OLD.fraisScolaire,
                parametresId = OLD.parametresId,
                typeCandidatCodeTypeCand = OLD.typeCandidatCodeTypeCand,
                userId = '1',
                createdAt = NOW()
$$
DELIMITER ;
DROP TRIGGER IF EXISTS `before_droit_insert`;
DELIMITER $$
CREATE TRIGGER `before_droit_insert` BEFORE INSERT ON `droit` FOR EACH ROW INSERT INTO droit_audit
                SET operation_type = 'ajout',
                droitConcours = NEW.droitConcours,
                fraisScolaire = NEW.fraisScolaire,
                parametresId = NEW.parametresId,
                typeCandidatCodeTypeCand = NEW.typeCandidatCodeTypeCand,
                userId = '1',
                createdAt = NOW()
$$
DELIMITER ;
DROP TRIGGER IF EXISTS `before_droit_update`;
DELIMITER $$
CREATE TRIGGER `before_droit_update` BEFORE UPDATE ON `droit` FOR EACH ROW INSERT INTO droit_audit
                SET operation_type = 'modification',
                droitConcours = NEW.droitConcours,
                fraisScolaire = NEW.fraisScolaire,
                parametresId = NEW.parametresId,
                typeCandidatCodeTypeCand = NEW.typeCandidatCodeTypeCand,
                old_droitConcours = OLD.droitConcours,
                old_fraisScolaire = OLD.fraisScolaire,
                old_parametresId = OLD.parametresId,
                old_typeCandidatCodeTypeCand = OLD.typeCandidatCodeTypeCand,
                userId = '1',
                createdAt = NOW()
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Structure de la table `droit_audit`
--

DROP TABLE IF EXISTS `droit_audit`;
CREATE TABLE IF NOT EXISTS `droit_audit` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `operation_type` varchar(20) NOT NULL,
  `droitConcours` varchar(50) NOT NULL,
  `fraisScolaire` varchar(50) DEFAULT NULL,
  `parametresId` int(10) DEFAULT NULL,
  `typeCandidatCodeTypeCand` int(10) DEFAULT NULL,
  `old_droitConcours` varchar(50) DEFAULT NULL,
  `old_fraisScolaire` varchar(50) DEFAULT NULL,
  `old_parametresId` int(10) DEFAULT NULL,
  `old_typeCandidatCodeTypeCand` int(10) DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `userId` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `userId` (`userId`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `epreuve`
--

DROP TABLE IF EXISTS `epreuve`;
CREATE TABLE IF NOT EXISTS `epreuve` (
  `codeEpreuve` int(11) NOT NULL AUTO_INCREMENT,
  `libelleEpreuve` varchar(255) NOT NULL,
  `coef` int(11) NOT NULL,
  `duree` int(11) NOT NULL,
  `dateEpreuve` datetime NOT NULL,
  PRIMARY KEY (`codeEpreuve`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `epreuve`
--

INSERT INTO `epreuve` (`codeEpreuve`, `libelleEpreuve`, `coef`, `duree`, `dateEpreuve`) VALUES
(1, 'Français', 2, 3, '2022-11-12 06:00:00'),
(2, 'Anglais', 2, 3, '2022-11-12 08:00:00'),
(3, 'Mathematiques', 4, 4, '2022-11-12 10:00:00'),
(4, 'Physiques', 4, 4, '2022-11-12 15:00:00'),
(5, 'Testes Psychotechniques', 4, 2, '2022-11-12 17:00:00');

--
-- Déclencheurs `epreuve`
--
DROP TRIGGER IF EXISTS `before_epreuve_delete`;
DELIMITER $$
CREATE TRIGGER `before_epreuve_delete` BEFORE DELETE ON `epreuve` FOR EACH ROW INSERT INTO epreuve_audit
                SET operation_type = 'suppression',
                libelleEpreuve = OLD.libelleEpreuve,
                coef = OLD.coef ,
                duree = OLD.duree,
                dateEpreuve = OLD.dateEpreuve,
                userId = '1',
                createdAt = NOW()
$$
DELIMITER ;
DROP TRIGGER IF EXISTS `before_epreuve_insert`;
DELIMITER $$
CREATE TRIGGER `before_epreuve_insert` BEFORE INSERT ON `epreuve` FOR EACH ROW INSERT INTO epreuve_audit
                SET operation_type = 'ajout',
                libelleEpreuve = NEW.libelleEpreuve,
                coef = NEW.coef ,
                duree = NEW.duree,
                dateEpreuve = NEW.dateEpreuve,
                userId = '1',
                createdAt = NOW()
$$
DELIMITER ;
DROP TRIGGER IF EXISTS `before_epreuve_update`;
DELIMITER $$
CREATE TRIGGER `before_epreuve_update` BEFORE UPDATE ON `epreuve` FOR EACH ROW INSERT INTO epreuve_audit
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
                createdAt = NOW()
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Structure de la table `epreuve_audit`
--

DROP TABLE IF EXISTS `epreuve_audit`;
CREATE TABLE IF NOT EXISTS `epreuve_audit` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `operation_type` varchar(20) NOT NULL,
  `libelleEpreuve` varchar(50) NOT NULL,
  `coef` varchar(50) NOT NULL,
  `duree` varchar(50) NOT NULL,
  `dateEpreuve` datetime NOT NULL,
  `old_libelleEpreuve` varchar(50) NOT NULL,
  `old_coef` varchar(50) DEFAULT NULL,
  `old_duree` varchar(50) DEFAULT NULL,
  `old_dateEpreuve` datetime DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `userId` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `userId` (`userId`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `faritany`
--

DROP TABLE IF EXISTS `faritany`;
CREATE TABLE IF NOT EXISTS `faritany` (
  `codeFaritany` int(11) NOT NULL AUTO_INCREMENT,
  `nomFaritany` varchar(255) NOT NULL,
  PRIMARY KEY (`codeFaritany`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `faritany`
--

INSERT INTO `faritany` (`codeFaritany`, `nomFaritany`) VALUES
(1, 'Diana'),
(2, 'Sava'),
(3, 'Itasy'),
(4, 'Analamanga'),
(5, 'Vakinakaratra'),
(6, 'Bongolava'),
(7, 'Sofia'),
(8, 'Boeny'),
(9, 'Betsiboka'),
(10, 'Melaky'),
(11, 'Alaotra Mangoro'),
(12, 'Antsinanana'),
(13, 'Analanjirofo'),
(14, 'Amoron\'i Mania'),
(15, 'Matsiatra Ambony'),
(16, 'Vatovavy'),
(17, 'Fitovinany'),
(18, 'Atsimo Antsinanana'),
(19, 'Ihorombe'),
(20, 'Menabe'),
(21, 'Atsimo Andrefana'),
(22, 'Androy'),
(23, 'Anosy');

--
-- Déclencheurs `faritany`
--
DROP TRIGGER IF EXISTS `before_faritany_delete`;
DELIMITER $$
CREATE TRIGGER `before_faritany_delete` BEFORE DELETE ON `faritany` FOR EACH ROW INSERT INTO faritany_audit
                SET operation_type = 'suppression',
                nomFaritany = OLD.nomFaritany,
                userId = '1',
                createdAt = NOW()
$$
DELIMITER ;
DROP TRIGGER IF EXISTS `before_faritany_insert`;
DELIMITER $$
CREATE TRIGGER `before_faritany_insert` BEFORE INSERT ON `faritany` FOR EACH ROW INSERT INTO faritany_audit
                SET operation_type = 'ajout',
                nomFaritany = NEW.nomFaritany,
                userId = '1',
                createdAt = NOW()
$$
DELIMITER ;
DROP TRIGGER IF EXISTS `before_faritany_update`;
DELIMITER $$
CREATE TRIGGER `before_faritany_update` BEFORE UPDATE ON `faritany` FOR EACH ROW INSERT INTO faritany_audit
                SET operation_type = 'modification',
                nomFaritany = NEW.nomFaritany,
                old_nomFaritany = OLD.nomFaritany,
                userId = '1',
                createdAt = NOW()
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Structure de la table `faritany_audit`
--

DROP TABLE IF EXISTS `faritany_audit`;
CREATE TABLE IF NOT EXISTS `faritany_audit` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `operation_type` varchar(20) NOT NULL,
  `nomFaritany` varchar(50) NOT NULL,
  `old_nomFaritany` varchar(50) DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `userId` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `userId` (`userId`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `parametres`
--

DROP TABLE IF EXISTS `parametres`;
CREATE TABLE IF NOT EXISTS `parametres` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `anneeUniv` varchar(255) NOT NULL,
  `dateConcours` datetime DEFAULT NULL,
  `dateOuvertureInscription` datetime NOT NULL,
  `dateFermetureInscription` datetime NOT NULL,
  `numCpteENI` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `parametres`
--

INSERT INTO `parametres` (`id`, `anneeUniv`, `dateConcours`, `dateOuvertureInscription`, `dateFermetureInscription`, `numCpteENI`) VALUES
(1, '2022', NULL, '2022-09-11 00:00:00', '2022-09-10 00:00:00', '54654319849461');

--
-- Déclencheurs `parametres`
--
DROP TRIGGER IF EXISTS `before_parametres_delete`;
DELIMITER $$
CREATE TRIGGER `before_parametres_delete` BEFORE DELETE ON `parametres` FOR EACH ROW INSERT INTO parametres_audit
                SET operation_type = 'suppression',
               anneeUniv = OLD.anneeUniv,
                dateOuvertureInscription = OLD.dateOuvertureInscription,
                dateFermetureInscription = OLD.dateFermetureInscription,
                numCpteENI = OLD.numCpteENI,
                userId = '1',
                createdAt = NOW()
$$
DELIMITER ;
DROP TRIGGER IF EXISTS `before_parametres_insert`;
DELIMITER $$
CREATE TRIGGER `before_parametres_insert` BEFORE INSERT ON `parametres` FOR EACH ROW INSERT INTO parametres_audit
                SET operation_type = 'ajout',
                anneeUniv = NEW.anneeUniv,
                dateOuvertureInscription = NEW.dateOuvertureInscription,
                dateFermetureInscription = NEW.dateFermetureInscription,
                numCpteENI = NEW.numCpteENI,
                userId = '1',
                createdAt = NOW()
$$
DELIMITER ;
DROP TRIGGER IF EXISTS `before_parametres_update`;
DELIMITER $$
CREATE TRIGGER `before_parametres_update` BEFORE UPDATE ON `parametres` FOR EACH ROW INSERT INTO parametres_audit
                SET operation_type = 'modification',
                anneeUniv = NEW.anneeUniv,
                dateOuvertureInscription = NEW.dateOuvertureInscription,
                dateFermetureInscription = NEW.dateFermetureInscription,
                numCpteENI = NEW.numCpteENI,
                old_anneeUniv = OLD.anneeUniv,
                old_dateOuvertureInscription = OLD.dateOuvertureInscription,
                old_dateFermetureInscription = OLD.dateFermetureInscription,
                old_numCpteENI = OLD.numCpteENI,
                userId = '1',
                createdAt = NOW()
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Structure de la table `parametres_audit`
--

DROP TABLE IF EXISTS `parametres_audit`;
CREATE TABLE IF NOT EXISTS `parametres_audit` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `operation_type` varchar(20) NOT NULL,
  `anneeUniv` varchar(50) NOT NULL,
  `dateOuvertureInscription` datetime NOT NULL,
  `dateFermetureInscription` datetime NOT NULL,
  `numCpteENI` varchar(50) NOT NULL,
  `old_anneeUniv` varchar(50) DEFAULT NULL,
  `old_dateOuvertureInscription` datetime DEFAULT NULL,
  `old_dateFermetureInscription` datetime DEFAULT NULL,
  `old_numCpteENI` varchar(50) DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `userId` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `userId` (`userId`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `resultat`
--

DROP TABLE IF EXISTS `resultat`;
CREATE TABLE IF NOT EXISTS `resultat` (
  `codeResultat` int(11) NOT NULL AUTO_INCREMENT,
  `libelleResultat` varchar(255) NOT NULL,
  PRIMARY KEY (`codeResultat`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `resultat`
--

INSERT INTO `resultat` (`codeResultat`, `libelleResultat`) VALUES
(1, 'Admis'),
(2, 'En attente'),
(3, 'Refusé');

--
-- Déclencheurs `resultat`
--
DROP TRIGGER IF EXISTS `before_resultat_delete`;
DELIMITER $$
CREATE TRIGGER `before_resultat_delete` BEFORE DELETE ON `resultat` FOR EACH ROW INSERT INTO resultat_audit
                SET operation_type = 'suppression',
               libelleResultat = OLD.libelleResultat,
                userId = '1',
                createdAt = NOW()
$$
DELIMITER ;
DROP TRIGGER IF EXISTS `before_resultat_insert`;
DELIMITER $$
CREATE TRIGGER `before_resultat_insert` BEFORE INSERT ON `resultat` FOR EACH ROW INSERT INTO resultat_audit
                SET operation_type = 'ajout',
                libelleResultat = NEW.libelleResultat,
                userId = '1',
                createdAt = NOW()
$$
DELIMITER ;
DROP TRIGGER IF EXISTS `before_resultat_update`;
DELIMITER $$
CREATE TRIGGER `before_resultat_update` BEFORE UPDATE ON `resultat` FOR EACH ROW INSERT INTO resultat_audit
                SET operation_type = 'modification',
                libelleResultat = NEW.libelleResultat,
                old_libelleResultat = OLD.libelleResultat,
                userId = '1',
                createdAt = NOW()
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Structure de la table `resultat_audit`
--

DROP TABLE IF EXISTS `resultat_audit`;
CREATE TABLE IF NOT EXISTS `resultat_audit` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `operation_type` varchar(20) NOT NULL,
  `libelleResultat` varchar(50) NOT NULL,
  `old_libelleResultat` varchar(50) DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `userId` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `userId` (`userId`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `serie`
--

DROP TABLE IF EXISTS `serie`;
CREATE TABLE IF NOT EXISTS `serie` (
  `codeSerie` int(11) NOT NULL AUTO_INCREMENT,
  `libelleSerie` varchar(255) NOT NULL,
  PRIMARY KEY (`codeSerie`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `serie`
--

INSERT INTO `serie` (`codeSerie`, `libelleSerie`) VALUES
(1, 'C'),
(2, 'D'),
(3, 'Tech');

--
-- Déclencheurs `serie`
--
DROP TRIGGER IF EXISTS `before_serie_delete`;
DELIMITER $$
CREATE TRIGGER `before_serie_delete` BEFORE DELETE ON `serie` FOR EACH ROW INSERT INTO serie_audit
                SET operation_type = 'suppression',
                libelleSerie = OLD.libelleSerie,
                userId = '1',
                createdAt = NOW()
$$
DELIMITER ;
DROP TRIGGER IF EXISTS `before_serie_insert`;
DELIMITER $$
CREATE TRIGGER `before_serie_insert` BEFORE INSERT ON `serie` FOR EACH ROW INSERT INTO serie_audit
                SET operation_type = 'ajout',
                libelleSerie = NEW.libelleSerie,
                userId = '1',
                createdAt = NOW()
$$
DELIMITER ;
DROP TRIGGER IF EXISTS `before_serie_update`;
DELIMITER $$
CREATE TRIGGER `before_serie_update` BEFORE UPDATE ON `serie` FOR EACH ROW INSERT INTO serie_audit
                SET operation_type = 'modification',
                libelleSerie = NEW.libelleSerie,
                old_libelleSerie = OLD.libelleSerie,
                userId = '1',
                createdAt = NOW()
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Structure de la table `serie_audit`
--

DROP TABLE IF EXISTS `serie_audit`;
CREATE TABLE IF NOT EXISTS `serie_audit` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `operation_type` varchar(20) NOT NULL,
  `libelleSerie` varchar(50) NOT NULL,
  `old_libelleSerie` varchar(50) DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `userId` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `userId` (`userId`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `typecandidat`
--

DROP TABLE IF EXISTS `typecandidat`;
CREATE TABLE IF NOT EXISTS `typecandidat` (
  `codeTypeCand` int(11) NOT NULL AUTO_INCREMENT,
  `libelleTypeCand` varchar(255) NOT NULL,
  PRIMARY KEY (`codeTypeCand`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `typecandidat`
--

INSERT INTO `typecandidat` (`codeTypeCand`, `libelleTypeCand`) VALUES
(1, 'Malagasy'),
(2, 'Militaire'),
(3, 'Etranger');

--
-- Déclencheurs `typecandidat`
--
DROP TRIGGER IF EXISTS `before_typecandidat_delete`;
DELIMITER $$
CREATE TRIGGER `before_typecandidat_delete` BEFORE DELETE ON `typecandidat` FOR EACH ROW INSERT INTO typecandidat_audit
                SET operation_type = 'suppression',
                libelleTypeCand = OLD.libelleTypeCand,
                userId = '1',
                createdAt = NOW()
$$
DELIMITER ;
DROP TRIGGER IF EXISTS `before_typecandidat_insert`;
DELIMITER $$
CREATE TRIGGER `before_typecandidat_insert` BEFORE INSERT ON `typecandidat` FOR EACH ROW INSERT INTO typecandidat_audit
                SET operation_type = 'ajout',
                libelleTypeCand = NEW.libelleTypeCand,
                userId = '1',
                createdAt = NOW()
$$
DELIMITER ;
DROP TRIGGER IF EXISTS `before_typecandidat_update`;
DELIMITER $$
CREATE TRIGGER `before_typecandidat_update` BEFORE UPDATE ON `typecandidat` FOR EACH ROW INSERT INTO typecandidat_audit
                SET operation_type = 'modification',
                libelleTypeCand = NEW.libelleTypeCand,
                old_libelleTypeCand = OLD.libelleTypeCand,
                userId = '1',
                createdAt = NOW()
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Structure de la table `typecandidat_audit`
--

DROP TABLE IF EXISTS `typecandidat_audit`;
CREATE TABLE IF NOT EXISTS `typecandidat_audit` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `operation_type` varchar(20) NOT NULL,
  `libelleTypeCand` varchar(50) NOT NULL,
  `old_libelleTypeCand` varchar(50) DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `userId` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `userId` (`userId`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `user`
--

DROP TABLE IF EXISTS `user`;
CREATE TABLE IF NOT EXISTS `user` (
  `createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `updatedAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  `deletedAt` datetime(6) DEFAULT NULL,
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(255) NOT NULL,
  `firstname` varchar(255) NOT NULL,
  `lastname` varchar(255) NOT NULL,
  `role` enum('admin','president','teacher','secretary') NOT NULL DEFAULT 'secretary',
  `password` varchar(255) NOT NULL,
  `salt` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `IDX_e12875dfb3b1d92d7d7c5377e2` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `user`
--

INSERT INTO `user` (`createdAt`, `updatedAt`, `deletedAt`, `id`, `email`, `firstname`, `lastname`, `role`, `password`, `salt`) VALUES
('2022-08-23 14:10:59.278634', '2022-08-23 14:10:59.278634', NULL, 1, 'ainakum@gmail.com', 'Haja', 'Aina', 'secretary', '$2b$10$x/iZU6zc8sbPBArJjBCHeeDwSDLNh7a59tDhaL3pmtONn.kZnVA.K', '$2b$10$x/iZU6zc8sbPBArJjBCHee');

--
-- Déclencheurs `user`
--
DROP TRIGGER IF EXISTS `before_user_delete`;
DELIMITER $$
CREATE TRIGGER `before_user_delete` BEFORE DELETE ON `user` FOR EACH ROW INSERT INTO user_audit
                SET operation_type = 'suppression',
                email = OLD.email,
                firstname = OLD.firstname,
                lastname = OLD.lastname,
                role = OLD.role,
                password = OLD.password,
                salt = OLD.salt,
                userId = '1',
                createdAt = NOW()
$$
DELIMITER ;
DROP TRIGGER IF EXISTS `before_user_insert`;
DELIMITER $$
CREATE TRIGGER `before_user_insert` BEFORE INSERT ON `user` FOR EACH ROW INSERT INTO user_audit
                SET operation_type = 'ajout',
                email = NEW.email,
                firstname = NEW.firstname,
                lastname = NEW.lastname,
                role = NEW.role,
                password = NEW.password,
                salt = NEW.salt,
                userId = '1',
                createdAt = NOW()
$$
DELIMITER ;
DROP TRIGGER IF EXISTS `before_user_update`;
DELIMITER $$
CREATE TRIGGER `before_user_update` BEFORE UPDATE ON `user` FOR EACH ROW INSERT INTO user_audit
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
                createdAt = NOW()
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Structure de la table `user_audit`
--

DROP TABLE IF EXISTS `user_audit`;
CREATE TABLE IF NOT EXISTS `user_audit` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `operation_type` varchar(20) NOT NULL,
  `email` varchar(50) NOT NULL,
  `firstname` varchar(50) NOT NULL,
  `lastname` varchar(50) NOT NULL,
  `role` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL,
  `salt` varchar(100) NOT NULL,
  `old_email` varchar(50) DEFAULT NULL,
  `old_firstname` varchar(50) DEFAULT NULL,
  `old_lastname` varchar(50) DEFAULT NULL,
  `old_role` varchar(50) DEFAULT NULL,
  `old_password` varchar(50) DEFAULT NULL,
  `old_salt` varchar(100) DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `userId` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `userId` (`userId`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `candidat`
--
ALTER TABLE `candidat`
  ADD CONSTRAINT `FK_332f0aa82aaa724abfe64514375` FOREIGN KEY (`codeCentreBaccCodeCentreBacc`) REFERENCES `centrebacc` (`codeCentreBacc`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `FK_4589a9416da6b7d72fb801c0e94` FOREIGN KEY (`codeSerieCodeSerie`) REFERENCES `serie` (`codeSerie`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `FK_595c938c15c1a34cbc46534a650` FOREIGN KEY (`deuxiemeChoixCodeFormation`) REFERENCES `centreformation` (`codeFormation`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `FK_6011107eb9b0ececb7e306d3361` FOREIGN KEY (`premierChoixCodeFormation`) REFERENCES `centreformation` (`codeFormation`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `FK_6bdd281759607d17276ecf44f43` FOREIGN KEY (`codeTypeCandCodeTypeCand`) REFERENCES `typecandidat` (`codeTypeCand`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `FK_b87419363d05c2c22aa354b4759` FOREIGN KEY (`codeCentreCodeCentre`) REFERENCES `centreconcours` (`codeCentre`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `FK_ec28be3b67680dd91da89ba7df5` FOREIGN KEY (`codeResultatCodeResultat`) REFERENCES `resultat` (`codeResultat`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Contraintes pour la table `choix_epreuves_epreuve`
--
ALTER TABLE `choix_epreuves_epreuve`
  ADD CONSTRAINT `FK_b619a3c2f0dce88ea7dbd4cffb6` FOREIGN KEY (`choixCodeChoix`) REFERENCES `choix` (`codeChoix`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `FK_fec1820492294f177b191352c5e` FOREIGN KEY (`epreuveCodeEpreuve`) REFERENCES `epreuve` (`codeEpreuve`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Contraintes pour la table `choix_parametres_parametres`
--
ALTER TABLE `choix_parametres_parametres`
  ADD CONSTRAINT `FK_52dafb385328fb7db97adbdf9d3` FOREIGN KEY (`parametresId`) REFERENCES `parametres` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `FK_8f1dc45ff60288ce579c536b1fd` FOREIGN KEY (`choixCodeChoix`) REFERENCES `choix` (`codeChoix`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Contraintes pour la table `choix_series_serie`
--
ALTER TABLE `choix_series_serie`
  ADD CONSTRAINT `FK_9a402a103c8a416a851109e7b5e` FOREIGN KEY (`choixCodeChoix`) REFERENCES `choix` (`codeChoix`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `FK_a216f194877ddb2f6bd4891ca06` FOREIGN KEY (`serieCodeSerie`) REFERENCES `serie` (`codeSerie`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Contraintes pour la table `composer`
--
ALTER TABLE `composer`
  ADD CONSTRAINT `FK_b31f52a9d6e278e3d31413e014a` FOREIGN KEY (`codeEpreuveCodeEpreuve`) REFERENCES `epreuve` (`codeEpreuve`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `FK_fa354d44d0e804e601f08098da7` FOREIGN KEY (`numInscriptionNumInscription`) REFERENCES `candidat` (`numInscription`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Contraintes pour la table `droit`
--
ALTER TABLE `droit`
  ADD CONSTRAINT `FK_043a33b29c968a15e6e4e2a4560` FOREIGN KEY (`typeCandidatCodeTypeCand`) REFERENCES `typecandidat` (`codeTypeCand`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `FK_4b402cb9c38f84da734425fb9c6` FOREIGN KEY (`parametresId`) REFERENCES `parametres` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
