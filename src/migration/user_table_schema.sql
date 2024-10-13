CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(60) NOT NULL,
  `password` varchar(150) NOT NULL,
  `role` varchar(10) NOT NULL,
  `status` int(11) NOT NULL,
  `access_token` varchar(65) NOT NULL,
  `created_at` date NOT NULL DEFAULT current_timestamp()
);