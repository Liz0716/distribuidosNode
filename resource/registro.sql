-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: node-mysql
-- Tiempo de generación: 13-12-2024 a las 16:52:39
-- Versión del servidor: 9.1.0
-- Versión de PHP: 8.2.24

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `registro`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `apellido_paterno` varchar(100) NOT NULL,
  `apellido_materno` varchar(100) NOT NULL,
  `telefono` char(10) NOT NULL,
  `fecha_nacimiento` date NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `nombre`, `apellido_paterno`, `apellido_materno`, `telefono`, `fecha_nacimiento`, `email`, `password`) VALUES
(1, 'Lizbeth', 'Chavarria', 'Guerrero', '4151234244', '2004-07-16', 'liz@gmail.com', '$2b$08$cmytQGQPc8FR1JNG8wWQ5eg8UvxyUfXED0GeOLgbWWfqfXkGGVnL.'),
(2, 'prueba', 'prueba1', 'prueba2', '4152334212', '2024-12-19', 'prueba@gmail.com', '123456789'),
(3, 'Alexis', 'Rodriguez', 'Chavez', '4151332353', '2003-02-05', 'alexis@gmail.com', '$2b$08$TFQGhxRb19HBznNmtDCXgOUz69yvmmQ5DFc4im./DdAwEBe9ZvBr2'),
(4, 'Liz', 'Chavarria', 'Guerrero', '4151332380', '2004-07-16', 'lizbeth.chavarria.1606@gmail.com', '$2b$08$b7TQaLKvU2d6xg8DypDEAOCzK6zt0ItHYrdNVj9Gf0Bz5bO9VSzZS'),
(5, 'Armando', 'Garcia', 'Gonzalez', '4151239876', '1992-08-27', 'charmilion55@gmail.com', '$2b$08$fy/Fc0uBGW43qRZF2MjHVOZw4OSWcJWArs2tpoXUpy7Z/3PIZvJGO'),
(6, 'Carlos', 'Cadena', 'Rios ', '4151234567', '2000-07-05', 'carlosantoniocadenarios@gmail.com', '$2b$08$n26dIOjM0rCD3GrJ8nZMr.ly91moQsk7QERAEhg4jVtDLm0rZoXie'),
(7, 'Abril', 'Gonzalez', 'Vazquez', '4151195601', '1998-10-19', 'abril.gonzalez@itses.edu.mx', '$2b$08$asi3lb8Hez.1oEbJ9tEHaeAVR8KuYfsOqkDsiozZkWTEBSYSEBwkC');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
