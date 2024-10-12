const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/playground')
  .then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.error('Could not connect to MongoDB...', err));

const authorSchema = new mongoose.Schema({
  name: String,
  bio: String,
  website: String
});

const Author = mongoose.model('Author', authorSchema);

const Course = mongoose.model('Course', new mongoose.Schema({
  name: String,
  authors: [authorSchema] // Uncommented this line to add the authors field to the Course model
}));

async function createCourse(name, authors) {
  const course = new Course({
    name, 
    authors
  }); 
  
  const result = await course.save();
  console.log(result);
}

async function listCourses() { 
  const courses = await Course.find();
  console.log(courses);
}

// async function updateAuthor(courseId) {
//   const course = await Course.findById(courseId);
//   course.author.name = 'John Smith';
//   course.save();
// }
// updateAuthor('670ac0b7556eab94ee798df7');

async function addAuthor(courseId, author) {
  const course = await Course.findById(courseId);
  course.authors.push(author);
  await course.save(); // Added 'await' to ensure save completes before continuing
  console.log('Author added:', author);
}

async function removeAuthor(courseId, authorId) {
  const course = await Course.findById(courseId);
  const author = course.authors.id(authorId);
  author.remove();
  await course.save(); // Added 'await' here as well
  console.log('Author removed:', authorId);
}

// Example usage
addAuthor('670ac0b7556eab94ee798df7', new Author({ name: 'Mosh' }));
