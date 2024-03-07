# Datatables.net with DaisyUI test

Setup:
```bash
composer install
npm install
php artisan migrate --force
php artisan tinker --execute="User::factory(200)->create()" 
npm run dev
```
