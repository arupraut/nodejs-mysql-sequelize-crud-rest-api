-- MySQL dump 10.13  Distrib 8.0.19, for macos10.15 (x86_64)
--
-- Host: 127.0.0.1    Database: task360
-- ------------------------------------------------------
-- Server version	8.0.18

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `tasks`
--

DROP TABLE IF EXISTS `tasks`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tasks` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `task_title` varchar(45) NOT NULL,
  `task_description` longtext,
  `task_completed_at` datetime DEFAULT NULL,
  `status` varchar(45) DEFAULT NULL COMMENT 'assigned => Assigned\\ncompleted => Completed\\ndeleted => Deleted',
  `added_by` varchar(45) NOT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tasks`
--

LOCK TABLES `tasks` WRITE;
/*!40000 ALTER TABLE `tasks` DISABLE KEYS */;
INSERT INTO `tasks` VALUES (1,'Task 01','This is an demo task, you can add anything in here.',NULL,'assigned','1','2021-03-19 18:13:46',NULL),(2,'Task 02','This is an demo task, you can add anything in here.',NULL,'assigned','1','2021-03-19 18:14:31',NULL),(3,'Task 03','This is an demo task, you can add anything in here.',NULL,'assigned','1','2021-03-19 18:14:37',NULL),(4,'Task 04','This is an demo task, you can add anything in here.',NULL,'assigned','1','2021-03-19 18:14:44',NULL),(5,'Task 05','This is an demo task, you can add anything in here.','2021-03-19 18:21:06','completed','1','2021-03-19 18:14:49','2021-03-19 18:21:06'),(6,'Task 06','This is an demo task, you can add anything in here.',NULL,'deleted','1','2021-03-19 18:14:54','2021-03-19 18:25:19'),(7,'Task 07','This is an demo task, you can add anything in here.',NULL,'assigned','1','2021-03-19 18:18:30',NULL),(8,'Task 08','This is an demo task, you can add anything in here.',NULL,'assigned','1','2021-03-19 18:18:34',NULL),(9,'Task 09','This is an demo task, you can add anything in here.',NULL,'assigned','1','2021-03-19 18:18:39',NULL),(10,'Task 10','This is an demo task, you can add anything in here.',NULL,'assigned','1','2021-03-19 18:18:45',NULL),(11,'Task 10','This is an demo task, you can add anything in here.','2021-03-23 05:27:07','completed','1','2021-03-23 04:37:34','2021-03-23 05:27:07'),(12,'Task 10','This is an demo task, you can add anything in here.','2021-03-22 18:30:00','completed','1','2021-03-23 04:40:51','2021-03-22 18:30:00'),(13,'Task 10','This is an demo task, you can add anything in here.','2021-03-23 05:37:11','completed','1','2021-03-23 04:49:58','2021-03-23 05:37:11');
/*!40000 ALTER TABLE `tasks` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(45) NOT NULL,
  `password` varchar(100) NOT NULL,
  `first_name` varchar(45) NOT NULL,
  `last_name` varchar(45) DEFAULT NULL,
  `status` varchar(45) DEFAULT 'active',
  `created_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'abc@yopmail.com','$2a$10$TbYSo0XTIahK3yCsKCY25uwp5tDWlL8R4wtJfBRoLmAUzaQPyDSeO','Arup','Raut','active','2021-03-19 02:37:00'),(2,'xyz@yopmail.com','$2a$10$TbYSo0XTIahK3yCsKCY25uwp5tDWlL8R4wtJfBRoLmAUzaQPyDSeO','Arup','Raut','active','2021-03-19 02:37:43');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-03-23 11:12:43
