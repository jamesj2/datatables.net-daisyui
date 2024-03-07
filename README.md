# Datatables.net with DaisyUI test

Setup:
```bash
composer install
npm install
cp .env.example .env
php artisan key:generate
php artisan migrate --force
php artisan tinker --execute="User::factory(200)->create()" 
npm run dev
```
