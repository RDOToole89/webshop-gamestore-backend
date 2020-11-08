\$ npx sequelize-cli db:seed:all

## To un-do the seed we can use

\$ npx sequelize-cli db:seed:undo:all

## We can also point to a specific seed file to run instead of "all" using the --seed flag

$ npx sequelize-cli db:seed --seed 20191211110453-some-users
$ npx sequelize-cli db:seed:undo --seed 20191211110453-some-users.js (.js at the end of the file required to be able to run)

$ npx sequelize-cli db:migrate:undo:all
$ npx sequelize-cli db:migrate
\$ npx sequelize-cli db:seed:all
