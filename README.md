# Launch_View

A basic app to retrieve and view upcoming global space launch information from the [launchlibrary API](https://launchlibrary.net/1.2/docs/api.html).

## Getting Started

These instructions will get you a copy of the project up and running on your local machine.

### Prerequisites

You will need on your local machine...

* [Node & NPM](https://www.npmjs.com/get-npm).
* [MongoDB](https://docs.mongodb.com/manual/installation/).

### Installing

1. Cd to your desired directory and run ...

```
git clone https://github.com/melliflorGunk/launch_view.git
```

2. Before starting the app, you will need an instance of Mongo running. Open a terminal window and type:

```
mongod
```

3. Cd into the newly cloned directory and install the required packages with

```
npm install
```

4. After installation is complete run following command to initalise the server. Wait until the server is initalised. Please note it can take up to 30 seconds for the app to populate your Mongo database with the API Data. 

```
npm run server
```

5. The server will have finished initialising once you see a series of 'success 202' outputs in your terminal window, indicating that ther server wrote to the database successfully. Finally, run the following to initalise the client.

```
npm run dev
```

## Built With

* [React](https://facebook.github.io/react/) - The web framework used
* [Redux](https://github.com/reactjs/redux) - State Management
* [Express](https://expressjs.com/) - Server Routing
* [Mongoose](http://mongoosejs.com/) - DB Validation

## Authors

* **Charlie Shingleton** - *Initial work* - [MelliflorGunk](https://github.com/melliflorGunk)
