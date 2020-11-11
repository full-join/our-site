# Full Join Website

This is a site for Full Join, made with ExpressJS and React :)

## Getting started

1. Clone this repository
2. Install backend dependencies (`npm install`)
3. Create a **.env** file based on the example with proper settings for your
   development environment
4. Setup your PostgreSQL user and password and make sure it matches your **.env** file with CREATEDB privileges

5. Run
   * `npx dotenv sequelize-cli run db:create`
   * `npx dotenv sequelize-cli run db:migrate`
   * `npx dotenv sequelize-cli run db:seed:all`
   * `npm start`

6. cd into client folder and npm install
7. Run `npm start`
8. Profit

## Deploy to Heroku

1. Create a new project
2. Under Resources click "Find more add-ons" and add the add on called "Heroku Postgres"
3. Install the [Heroku CLI](https://devcenter.heroku.com/articles/heroku-command-line)
4. Run `$ heroku login`
5. Add heroku as a remote to this git repo `$ heroku git:remote -a <project_name>`
6. Push the project to heroku `$ git push heroku master`
7. Connect to the heroku shell and prepare your database

```bash
    $ heroku run bash
    $ sequelize-cli db:migrate
    $ sequelize-cli db:seed:all
```
(You can interact with your database this way as youd like, but beware that `db:drop` should not be run in the heroku environment)

8. Profit