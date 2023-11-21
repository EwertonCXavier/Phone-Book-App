# Phone Book App (Back end)

This application section concerns the front end of the challenge provided by SOAP Health, as the first step of the hiring process.

First of all, create a `.env` file in the root of the api folder and add the following variables:

```
PG_CONTAINER_NAME=
POSTGRES_DB=
POSTGRES_USER=
POSTGRES_PASSWORD=
```

Side Note: You can set the name you want for the variables above, the prisma URL is defined based on the content of it, instead of a mocked value.



After setting the `.env` variables, you have to start and run the docker container. In order to achieve it, run the following commands:
```
<!-- Creates the external volume -->
sudo docker volume create soap_contact
<!-- Sets the container up and running -->
sudo docker compose up 

```

Once you set the `.env` variables and run the docker container. Open a new terminal and paste the following command:

```js
npx prisma migrate dev --name init
```

After this, your API is ready by typing the `npm start` command in the terminal. Before the command, remember to install the dependencies via `npm install`!


### API Docs

With the application running, access the [API Documentation](http://localhost:3000/api/docs) by clicking in the link. 