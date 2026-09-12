# Despliegue del login en un VPS

Esta rama (`feature/login-vps`) contiene la funcionalidad de login con backend
Express + MySQL. **No puede correr en el producto "Web app" de Hostinger** (ese
solo sirve archivos estáticos de Vite y no ejecuta un servidor Node persistente).
Necesita un VPS o un servicio que corra Node de forma permanente.

## Por qué un VPS

El backend (`server/`) es un proceso Express de larga duración que debe estar
siempre escuchando y mantener un pool de conexiones a MySQL. El hosting compartido
"Web app" de Hostinger no ofrece esa capacidad (no tiene "Setup Node.js App").
Un VPS da una máquina Linux completa donde se controla Node, MySQL y el proceso.

Alternativas al VPS (mismo concepto, gestionado): Render, Railway, Fly.io.

## Arquitectura recomendada en el VPS

Un solo proceso Node sirve **todo** (API + frontend compilado), igual que en
desarrollo local con `npm start`:

- `npm run build` compila el frontend a `dist/`.
- `server/index.js` (Express) sirve `dist/` como estáticos **y** responde `/api/*`.
- Como frontend y API comparten origen, `src/auth/api.js` usa rutas relativas
  (`/api/...`) sin necesidad de CORS ni de configurar una URL de API aparte.

## Pasos en un VPS (Ubuntu/Debian)

1. **Instalar Node 20+ y MySQL**
   ```bash
   curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
   sudo apt install -y nodejs mysql-server
   ```

2. **Crear la base de datos y el usuario**
   ```sql
   CREATE DATABASE learningles CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
   CREATE USER 'learningles_app'@'localhost' IDENTIFIED BY '<contraseña-fuerte>';
   GRANT ALL PRIVILEGES ON learningles.* TO 'learningles_app'@'localhost';
   FLUSH PRIVILEGES;
   ```
   Aplicar el esquema: `mysql -u learningles_app -p learningles < server/sql/schema.sql`

3. **Clonar el repo e instalar dependencias**
   ```bash
   git clone <repo> && cd InglesBasicI
   npm install
   npm run build
   ```

4. **Crear el archivo `.env`** (NO se commitea) con:
   ```
   NODE_ENV=production
   PORT=3000
   DB_HOST=localhost
   DB_PORT=3306
   DB_USER=learningles_app
   DB_PASSWORD=<la del paso 2>
   DB_NAME=learningles
   JWT_SECRET=<generar: node -e "console.log(require('crypto').randomBytes(48).toString('hex'))">
   ```

5. **Correr con un gestor de procesos (PM2)** para que sobreviva reinicios y cierres de sesión SSH
   ```bash
   sudo npm install -g pm2
   pm2 start server/index.js --name learningles
   pm2 save
   pm2 startup   # seguir la instrucción que imprime, para arranque automático
   ```

6. **Poner un reverse proxy (Nginx) delante** con HTTPS
   - Nginx escucha en 443 (con certificado, ej. Let's Encrypt/certbot) y hace
     proxy a `http://localhost:3000`.
   - **HTTPS es obligatorio**: la cookie de sesión usa `secure: true` en
     producción, así que sin HTTPS el login no persiste.

## Checklist de verificación tras desplegar

- [ ] `pm2 status` muestra el proceso `learningles` en `online`.
- [ ] El dominio carga por HTTPS y muestra el `LoginGate`.
- [ ] Registro de un usuario de prueba → aparece en la tabla `users`.
- [ ] Cerrar sesión y volver a entrar funciona (cookie persiste = HTTPS OK).
