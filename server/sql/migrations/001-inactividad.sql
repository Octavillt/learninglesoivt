-- Agrega seguimiento de último inicio de sesión y estado de la cuenta.
-- Aplicar una sola vez sobre bases creadas con el schema.sql anterior a esta fecha.
ALTER TABLE users
  ADD COLUMN last_login_at TIMESTAMP NULL DEFAULT NULL,
  ADD COLUMN is_active TINYINT(1) NOT NULL DEFAULT 1;

UPDATE users SET last_login_at = created_at WHERE last_login_at IS NULL;
