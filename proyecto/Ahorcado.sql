-- phpMyAdmin SQL Dump
-- version 4.6.6deb5
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:3306
-- Tiempo de generación: 13-02-2019 a las 20:39:34
-- Versión del servidor: 5.7.25-0ubuntu0.18.04.2
-- Versión de PHP: 7.2.10-0ubuntu0.18.04.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `Ahorcado`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Login`
--

CREATE TABLE `Login` (
  `ID_Usuario` int(11) NOT NULL,
  `Nombre_Usuario` varchar(44) NOT NULL,
  `Password` varchar(44) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `Login`
--

INSERT INTO `Login` (`ID_Usuario`, `Nombre_Usuario`, `Password`) VALUES
(1, 'gonzalo', 'gonzalo'),
(2, 'manuel', 'manuel'),
(9, 'ruben', 'ruben');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Palabras`
--

CREATE TABLE `Palabras` (
  `ID_Palabra` int(11) NOT NULL,
  `Nombre_Palabra` varchar(44) NOT NULL,
  `ID_Tema` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `Palabras`
--

INSERT INTO `Palabras` (`ID_Palabra`, `Nombre_Palabra`, `ID_Tema`) VALUES
(1, 'One Piece', 1),
(2, 'Death Note', 1),
(3, 'El Principito', 2),
(4, 'La divina comedia', 2),
(5, 'Matrix', 3),
(6, 'King Kong', 3),
(7, 'Canada', 4),
(8, 'Irlanda', 4),
(9, 'Dark Souls', 5),
(10, 'Undertale', 5),
(11, 'Warframe', 5),
(12, 'Neon Genesis Evangelion', 1),
(13, 'Viaje al centro de la Tierra', 2),
(14, 'Pulp Fiction', 3),
(15, 'Ciudad del Vaticano', 4);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Pistas`
--

CREATE TABLE `Pistas` (
  `ID_Pista` int(11) NOT NULL,
  `Descripcion` varchar(88) NOT NULL,
  `ID_Palabra` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `Pistas`
--

INSERT INTO `Pistas` (`ID_Pista`, `Descripcion`, `ID_Palabra`) VALUES
(1, 'Va sobre Piratas', 1),
(2, 'Cuaderno con poderes sobrenaturales ', 2),
(3, 'Libro que todos hemos leido', 3),
(4, 'Obra maestra de la literatura italiana y universal', 4),
(5, 'Trilogia de peliculas de ciencia ficcion', 5),
(6, 'Habita en la Isla Calavera', 6),
(7, 'Pais soberano de America del Norte', 7),
(8, 'Pais miembro de la Union Europea', 8),
(9, 'RPG de accion en tercera persona', 9),
(10, 'Videojuego de rol creado por un desarrollador independiente ', 10),
(11, 'Robots en el espacio', 11),
(12, 'Mechas contra Angeles', 12),
(13, 'Expedicion Subterranea', 13),
(14, 'Maletin con contenido brillante', 14),
(15, 'Pais mas pequeño del mundo', 15);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Temas`
--

CREATE TABLE `Temas` (
  `ID_Tema` int(11) NOT NULL,
  `Nombre_Tema` varchar(44) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `Temas`
--

INSERT INTO `Temas` (`ID_Tema`, `Nombre_Tema`) VALUES
(1, 'Anime'),
(2, 'Libros'),
(3, 'Peliculas'),
(4, 'Paises'),
(5, 'Videojuegos');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `Login`
--
ALTER TABLE `Login`
  ADD PRIMARY KEY (`ID_Usuario`);

--
-- Indices de la tabla `Palabras`
--
ALTER TABLE `Palabras`
  ADD PRIMARY KEY (`ID_Palabra`),
  ADD KEY `ID_Tema` (`ID_Tema`);

--
-- Indices de la tabla `Pistas`
--
ALTER TABLE `Pistas`
  ADD PRIMARY KEY (`ID_Pista`),
  ADD KEY `ID_Palabra` (`ID_Palabra`);

--
-- Indices de la tabla `Temas`
--
ALTER TABLE `Temas`
  ADD PRIMARY KEY (`ID_Tema`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `Login`
--
ALTER TABLE `Login`
  MODIFY `ID_Usuario` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
--
-- AUTO_INCREMENT de la tabla `Palabras`
--
ALTER TABLE `Palabras`
  MODIFY `ID_Palabra` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;
--
-- AUTO_INCREMENT de la tabla `Pistas`
--
ALTER TABLE `Pistas`
  MODIFY `ID_Pista` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;
--
-- AUTO_INCREMENT de la tabla `Temas`
--
ALTER TABLE `Temas`
  MODIFY `ID_Tema` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `Palabras`
--
ALTER TABLE `Palabras`
  ADD CONSTRAINT `Palabras_ibfk_1` FOREIGN KEY (`ID_Tema`) REFERENCES `Temas` (`ID_Tema`);

--
-- Filtros para la tabla `Pistas`
--
ALTER TABLE `Pistas`
  ADD CONSTRAINT `Pistas_ibfk_1` FOREIGN KEY (`ID_Palabra`) REFERENCES `Palabras` (`ID_Palabra`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
