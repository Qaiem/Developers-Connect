const express = require("express");
const mongoose = require("mongoose");
const users = require("./routes/api/users");
const post = require("./routes/api/post");
const profile = require("./routes/api/profile");
const bodyParser = require("body-parser");

const app = express();


//body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const port = process.env.PORT || 3000;

//db config
const db = require("./config/keys").mongoURI;

//connect to mongo
mongoose
  .connect(db)
  .then(() => console.log("MongoDB Connected..."))
  .catch((err) => console.log(err));

//routes
app.use("/api/users", users);
app.use("/api/post", post); 
app.use("/api/profile", profile);

// Define a simple User model
const UserSchema = new mongoose.Schema({ name: String, email: String });
const User = mongoose.model("User", UserSchema);

// Insert a user to create the database
User.create({ name: "John Doe", email: "john@example.com" })
  .then(() => console.log("User added, database created"))
  .catch((err) => console.error(err));

app.get("/", (req, res) => {
  res.send("Hello Worldgg!");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
