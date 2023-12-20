-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 20, 2023 at 02:14 AM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_ecommerce`
--

-- --------------------------------------------------------

--
-- Table structure for table `tb_test`
--

CREATE TABLE `tb_test` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(32) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `tb_tests`
--

CREATE TABLE `tb_tests` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(32) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tb_tests`
--

INSERT INTO `tb_tests` (`id`, `name`, `email`, `password`) VALUES
(1, 'Lucas', 'lucas@lucas.com.br', '123456'),
(2, 'Duda', 'duda@duda.com.br', '123456'),
(3, 'Vasco', 'vasco@vasco.com.br', '123456'),
(4, 'Lukhaz', 'lukhaz@lukhaz.com.br', '123456'),
(5, 'Ultron', 'ultron@ultron.com.br', '123456');

-- --------------------------------------------------------

--
-- Table structure for table `td_client`
--

CREATE TABLE `td_client` (
  `id_client` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `age` int(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `td_client`
--

INSERT INTO `td_client` (`id_client`, `name`, `age`) VALUES
(1, 'Jorge', 29);

-- --------------------------------------------------------

--
-- Table structure for table `td_img`
--

CREATE TABLE `td_img` (
  `id_img` int(11) NOT NULL,
  `id_product` int(11) NOT NULL,
  `url_img` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `td_img`
--

INSERT INTO `td_img` (`id_img`, `id_product`, `url_img`) VALUES
(1, 1, 'notebook_1.jpg'),
(2, 1, 'notebook_2.jpg'),
(3, 1, 'notebook_3.jpg'),
(4, 2, 'smarttv_1.jpg'),
(5, 2, 'smarttv_2.jpg'),
(6, 3, 'smartphone_1.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `td_order`
--

CREATE TABLE `td_order` (
  `id_order` int(11) NOT NULL,
  `id_client` int(11) NOT NULL,
  `date_hour` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `td_order`
--

INSERT INTO `td_order` (`id_order`, `id_client`, `date_hour`) VALUES
(1, 1, '2023-11-01 23:05:57'),
(2, 1, '2023-11-01 23:07:02');

-- --------------------------------------------------------

--
-- Table structure for table `td_product`
--

CREATE TABLE `td_product` (
  `id_product` int(11) NOT NULL,
  `product` varchar(200) NOT NULL,
  `value` float(8,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `td_product`
--

INSERT INTO `td_product` (`id_product`, `product`, `value`) VALUES
(1, 'Notebook Dell Inspiron Ultrafino Intel Core i7, 16GB RAM e 240GB SSD', 3500.00),
(2, 'Smart TV LED 40\" Samsung Full HD 2 HDMI 1 USB Wi-Fi Integrado', 1475.54),
(3, 'Smartphone LG K10 Dual Chip Android 7.0 4G Wi-Fi Câmera de 13MP', 629.99);

-- --------------------------------------------------------

--
-- Table structure for table `td_product_order`
--

CREATE TABLE `td_product_order` (
  `id_order` int(11) NOT NULL,
  `id_product` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `td_product_order`
--

INSERT INTO `td_product_order` (`id_order`, `id_product`) VALUES
(1, 2),
(1, 3),
(2, 3);

-- --------------------------------------------------------

--
-- Table structure for table `td_tech_desc`
--

CREATE TABLE `td_tech_desc` (
  `id_tech_desc` int(11) NOT NULL,
  `id_product` int(11) NOT NULL,
  `tech_desc` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `td_tech_desc`
--

INSERT INTO `td_tech_desc` (`id_tech_desc`, `id_product`, `tech_desc`) VALUES
(1, 1, 'O novo Inspiron Dell oferece um design elegante e tela infinita que amplia seus sentidos, mantendo a sofisticação e medidas compactas...'),
(2, 2, 'A smart TV da Samsung possui tela de 40\" e oferece resolução Full HD, imagens duas vezes melhores que TVs HDs padrão...'),
(3, 3, 'Saia da mesmice. O smartphone LG está mais divertido, rápido, fácil, cheio de selfies e com tela HD de incríveis 5,3\"...');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tb_test`
--
ALTER TABLE `tb_test`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tb_tests`
--
ALTER TABLE `tb_tests`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `td_client`
--
ALTER TABLE `td_client`
  ADD PRIMARY KEY (`id_client`);

--
-- Indexes for table `td_img`
--
ALTER TABLE `td_img`
  ADD PRIMARY KEY (`id_img`),
  ADD KEY `id_product` (`id_product`);

--
-- Indexes for table `td_order`
--
ALTER TABLE `td_order`
  ADD PRIMARY KEY (`id_order`),
  ADD KEY `id_client` (`id_client`);

--
-- Indexes for table `td_product`
--
ALTER TABLE `td_product`
  ADD PRIMARY KEY (`id_product`);

--
-- Indexes for table `td_product_order`
--
ALTER TABLE `td_product_order`
  ADD KEY `id_order` (`id_order`),
  ADD KEY `id_product` (`id_product`);

--
-- Indexes for table `td_tech_desc`
--
ALTER TABLE `td_tech_desc`
  ADD PRIMARY KEY (`id_tech_desc`),
  ADD KEY `id_product` (`id_product`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tb_test`
--
ALTER TABLE `tb_test`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `tb_tests`
--
ALTER TABLE `tb_tests`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `td_client`
--
ALTER TABLE `td_client`
  MODIFY `id_client` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `td_img`
--
ALTER TABLE `td_img`
  MODIFY `id_img` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `td_order`
--
ALTER TABLE `td_order`
  MODIFY `id_order` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `td_product`
--
ALTER TABLE `td_product`
  MODIFY `id_product` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `td_tech_desc`
--
ALTER TABLE `td_tech_desc`
  MODIFY `id_tech_desc` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `td_img`
--
ALTER TABLE `td_img`
  ADD CONSTRAINT `td_img_ibfk_1` FOREIGN KEY (`id_product`) REFERENCES `td_product` (`id_product`);

--
-- Constraints for table `td_order`
--
ALTER TABLE `td_order`
  ADD CONSTRAINT `td_order_ibfk_1` FOREIGN KEY (`id_client`) REFERENCES `td_client` (`id_client`);

--
-- Constraints for table `td_product_order`
--
ALTER TABLE `td_product_order`
  ADD CONSTRAINT `td_product_order_ibfk_1` FOREIGN KEY (`id_order`) REFERENCES `td_order` (`id_order`),
  ADD CONSTRAINT `td_product_order_ibfk_2` FOREIGN KEY (`id_product`) REFERENCES `td_product` (`id_product`);

--
-- Constraints for table `td_tech_desc`
--
ALTER TABLE `td_tech_desc`
  ADD CONSTRAINT `td_tech_desc_ibfk_1` FOREIGN KEY (`id_product`) REFERENCES `td_product` (`id_product`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
