-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema dronedb
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `dronedb` ;

-- -----------------------------------------------------
-- Schema dronedb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `dronedb` DEFAULT CHARACTER SET utf8 ;
USE `dronedb` ;

-- -----------------------------------------------------
-- Table `Location`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `Location` ;

CREATE TABLE IF NOT EXISTS `Location` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `state` VARCHAR(100) NULL,
  `city` VARCHAR(400) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Flight`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `Flight` ;

CREATE TABLE IF NOT EXISTS `Flight` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `aircraft` VARCHAR(500) NULL,
  `weather` VARCHAR(500) NULL,
  `flight_time` VARCHAR(300) NULL,
  `difficulty_level` INT NULL,
  `terrain` VARCHAR(400) NULL,
  `drone_issues` VARCHAR(1000) NULL,
  `location_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_Flight_Location1_idx` (`location_id` ASC),
  CONSTRAINT `fk_Flight_Location1`
    FOREIGN KEY (`location_id`)
    REFERENCES `Location` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

SET SQL_MODE = '';
DROP USER IF EXISTS droneuser@localhost;
SET SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';
CREATE USER 'droneuser'@'localhost' IDENTIFIED BY 'droneuser';

GRANT SELECT, INSERT, TRIGGER, UPDATE, DELETE ON TABLE * TO 'droneuser'@'localhost';

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

-- -----------------------------------------------------
-- Data for table `Location`
-- -----------------------------------------------------
START TRANSACTION;
USE `dronedb`;
INSERT INTO `Location` (`id`, `state`, `city`) VALUES (1, 'California', 'Mckinleyville');
INSERT INTO `Location` (`id`, `state`, `city`) VALUES (2, 'California ', 'Arcata');

COMMIT;


-- -----------------------------------------------------
-- Data for table `Flight`
-- -----------------------------------------------------
START TRANSACTION;
USE `dronedb`;
INSERT INTO `Flight` (`id`, `aircraft`, `weather`, `flight_time`, `difficulty_level`, `terrain`, `drone_issues`, `location_id`) VALUES (1, 'DJI Mavic Pro', 'overcast clear skies', '24 minutes', 5, 'beach, over water, with hills', 'app issues, lost visual connection during wind gusts', 1);
INSERT INTO `Flight` (`id`, `aircraft`, `weather`, `flight_time`, `difficulty_level`, `terrain`, `drone_issues`, `location_id`) VALUES (2, 'DJI Mavic Pro', 'sunny, high winds', '20 mins', 7, 'launched off a hill top', 'lost visual connection multiple times', 2);
INSERT INTO `Flight` (`id`, `aircraft`, `weather`, `flight_time`, `difficulty_level`, `terrain`, `drone_issues`, `location_id`) VALUES (3, 'DJI Mavic Pro', 'overcast', '27 mins', 4, 'street view', 'sun glare messed with camerea visual', 2);

COMMIT;

