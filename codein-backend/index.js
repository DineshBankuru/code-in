const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const connectDB = require("./db");
const createBookModel = require("./models/DynamicBookModel");
const cors = require("cors");
const wrapAsync = require("./utils/wrapAsync");
const ExpressError = require("./utils/ExpressError");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

// Establish the MongoDB connection once
(async () => {
  try {
    await connectDB();
    console.log("Connected to MongoDB successfully");
  } catch (err) {
    console.error("Failed to connect to MongoDB:", err);
    process.exit(1); // Exit the process if the connection fails
  }
})();

// Define Routes
app.get("/", function (req, res) {
  res.send("<h3>Landing page here</h3>");
  // res.render("home");
});

app.get(
  "/subjects",
  wrapAsync(async (req, res) => {
    const collections = await mongoose.connection.db
      .listCollections()
      .toArray();
    const collectionNames = collections.map((coll) => coll.name);

    console.log(collectionNames);
    const data = {};

    for (const collection of collectionNames) {
      console.log(collection);
      const BookModel = createBookModel(collection);

      data[collection] = await BookModel.find()
        .select("name authors rating subject")
        // .sort({ rating: -1 })
        .limit(12);
    }

    res.status(200).json(data);
  })
);

app.get(
  "/subjects/:subject_name",
  wrapAsync(async (req, res) => {
    const subjectName = req.params.subject_name; // Extract the subject_name from the route parameter

    // Create the model for the specific collection (subject)
    const BookModel = createBookModel(subjectName);

    // Find books in the specified collection and select specific fields
    const books = await BookModel.find()
      .select("name authors rating subject")
      // .sort({ rating: -1 }) // Uncomment if you want to sort by rating
      .limit(12);

    // If no books are found, respond accordingly
    if (!books || books.length === 0) {
      throw new ExpressError("No books found for the specified subject", 404);
    }

    // Send the books data as JSON to the frontend
    res.status(200).json({ subject: subjectName, booksData: books });
  })
);

app.get(
  "/books/:book_name",
  wrapAsync(async (req, res) => {
    const bookName = req.params.book_name;
    const subjectName = req.query.subject_name;
    //console.log("Hello", subjectName);
    // Get the model for the specified subject
    const BookModel = createBookModel(subjectName);
    console.log(bookName);

    // Find the book based on the given name
    const book = await BookModel.findById(bookName);
    console.log(book);

    // If the book is not found, return 404 status
    if (!book) {
      throw new ExpressError("Book not found", 404);
    }

    // Send the book data as a JSON response to the frontend
    res.status(200).json({
      fileData: book.file.fileData,
      fileType: book.file.fileType,
      bookName: book.name, // Optionally add other fields as needed
      subject: subjectName, // Optionally add more metadata if needed
    });
  })
);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  let { statusCode = 500, message = "Something went wrong!" } = err;
  res.status(statusCode).json({ message, error: err.message });
});

// Start Server
app.listen(5000, () => {
  console.log("Server started on port 5000");
});
