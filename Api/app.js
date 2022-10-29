const express = require('express')
const app = express()
const logger = require('morgan')
const createError = require("http-errors");


app.use((req, res, next) => {
  res.set("Access-Control-Allow-Origin", "http://localhost:3000");
  res.set("Access-Control-Allow-Headers", "content-type");
  res.set("Access-Control-Allow-Methods", "*");
  res.set("Access-Control-Allow-Credentials", "true");
  next();
});

//response to json
app.use(express.json());
app.use(logger("dev"));

//routes
const routes = require("./config/routes.config");
app.use("/api/v1", routes);


// errors

app.use((req, res, next) => next(createError(404, "Route not found")));

app.use((error, req, res, next) => {
  res.status(error.status || 500);

  const data = {};

  if (error.status === 400) {
    error.status = 400;
    data.errors = error.errors;
  } else if (error) {
    error = createError(404, "Resource not found");
  }

  data.message = error.message;

  res.status(error.status);
  res.json(data);
});

  if (process.env.NODE_ENV !== "test") {
    const port = process.env.PORT || 3001;
  
    app.listen(port, () =>
      console.log(`Phones at port ${port}`)
    );
  }