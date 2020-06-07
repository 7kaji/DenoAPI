CREATE TABLE `books`(
   `id` bigint unsigned(11) NOT NULL AUTO_INCREMENT,
   `title` varchar(100) NOT NULL,
   `description` varchar(150) NOT NULL,
   `price` varchar(200) NOT NULL,
   `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
   `updated_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
   PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARACTER SET utf8mb4 COLLATE=utf8mb4_bin;

