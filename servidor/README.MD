php artisan make:model Publicacao -m
php artisan migrate
php artisan make:model noticia -m
php artisan migrate
php artisan make:seeder ArticlesTableSeeder
php artisan db:seed --class=NoticiasTableSeeder
php artisan make:seeder NoticiasTableSeeder
php artisan db:seed --class=NoticiasTableSeeder
php artisan make:seeder UsersTableSeeder
php artisan db:seed --class=UserTableSeeder
php artisan db:seed --class=UsersTableSeeder
php artisan db:seed
php artisan make:controller NoticiaController
