const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/playground')
.then(() => console.log('Connected to MongoDB...'))
.catch(err => console.error('Could not connect to MongoDB...', err));

const courseSchema = new mongoose.Schema({
  name: String,
  author: String,
  tags: [ String ],
  date: { type: Date, default: Date.now },
  isPublished: Boolean
});

const Course = mongoose.model('Course', courseSchema);

async function createCourse() {
    const course = new Course({
        name: 'Nodejs Course',
        author: 'Aastha',
        tags: ['REACT', 'frontend'],
        isPublished: true
      });
      
      const result = await course.save();
      console.log(result);
}

createCourse();

async function getCourses() {
    const pageNumber = 2;
    const pageSize = 10;
   //api/courses?pageNumber=2&pageSize=10

    const courses = await Course
    .find({ author: 'Aastha', isPublished: true })
    .skip((pageNumber - 1) * pageSize)
    .limit(pageNumber)
    .sort({ name: 1 })
    .select({
        name: 1, tags: 1
    })
}