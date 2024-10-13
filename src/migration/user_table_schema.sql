CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(60) NOT NULL,
  `password` varchar(150) NOT NULL,
  `role` varchar(10) NOT NULL,
  `status` int(11) NOT NULL,
  `access_token` varchar(65) NOT NULL,
  `created_at` date NOT NULL DEFAULT current_timestamp()
);

INSERT INTO `users` (`id`, `username`, `password`, `role`, `status`, `access_token`, `created_at`) VALUES
(11, 'adminxx0', 'f1887d3f9e6ee7a32fe5e76f4ab80d63', 'ADMIN', 1, '', '2024-10-13');