/* Student

Create an object factory for a student object. The student object should have the following methods and it should produce the expected results demonstrated in the sample code:

info: Logs the name and year of the student.

addCourse: Enrolls student in a course. A course is an object literal that has properties for its name and code.

listCourses: Returns a list of the courses student has enrolled in.

addNote: Adds a note property to a course. Takes a code and a note as an argument. If a note already exists, the note is appended to the existing one.

updateNote: Updates a note for a course. Updating a note replaces the existing note with the new note.

viewNotes: Logs the notes for all the courses. Courses without notes are not displayed. */

function createStudent(name, year) {
  return {
    name: name,
    year: year,
    courses: [],
    notes: {},
    // {}
    // add 101, 'text1'
    // { 101: ["text1"] }
    // add 101, 'text2'
    // { 101: ["text1", "text2"]}

    info() {
      console.log(`${this.name} is a ${this.year} year student.`);
    },

    listCourses() {
      return this.courses;
    },

    addCourse(course) {
      return this.courses.push(course);
    },

    addNote(code, note) {
      // Adds a note property to a course. Takes a code and a note as arguments. If a note already exists, the note is appended to the existing one.
      if (!this.notes[code]) this.notes[code] = [];
      this.notes[code].push(note);
    },

    // updateNote: Updates a note for a course. Updating a note replaces the existing note with the new note.
    updateNote(code, note) {
      this.notes[code] = [note];
    },

    // viewNotes: Logs the notes for all the courses. Courses without notes are not displayed.
    viewNotes() {
      this.courses.forEach((course) => {
        if (this.notes[course.code]) {
          console.log(`${course.name}: ${this.notes[course.code].join('; ')}`);
        }
      });
    },
  };
}

let foo = createStudent('Foo', '1st');
foo.info();
// // "Foo is a 1st year student"
// console.log(foo.listCourses());
// [];
foo.addCourse({ name: 'Math', code: 101 });
// { name: 'Math', code: 101, note: 'message' };
foo.addCourse({ name: 'Advanced Math', code: 102 });
// console.log(foo.listCourses());
// [{ name: 'Math', code: 101 }, { name: 'Advanced Math', code: 102 }]
foo.addNote(101, 'Fun course');
// console.log(foo.notes);
foo.addNote(101, 'Remember to study for algebra');
// console.log(foo.notes);
foo.viewNotes();
// "Math: Fun course; Remember to study for algebra"
foo.addNote(102, 'Difficult subject');
foo.viewNotes();
// "Math: Fun course; Remember to study for algebra"
// "Advance Math: Difficult subject"
foo.updateNote(101, 'Fun course');
// console.log(foo.notes);
foo.viewNotes();
// "Math: Fun course"
// "Advanced Math: Difficult subject"

function createStudent(name, year) {
  return {
    name: name,
    year: year,
    courses: [],
    info: function () {
      console.log(`${this.name} is a ${this.year} year student`);
    },

    listCourses: function () {
      return this.courses;
    },

    addCourse: function (course) {
      this.courses.push(course);
    },

    addNote: function (courseCode, note) {
      let course = this.courses.filter((course) => {
        return course.code === courseCode;
      })[0];

      if (course) {
        if (course.note) {
          course.note += `; ${note}`;
        } else {
          course.note = note;
        }
      }
    },

    viewNotes: function () {
      this.courses.forEach((course) => {
        if (course.note) {
          console.log(`${course.name}: ${course.note}`);
        }
      });
    },

    updateNote: function (courseCode, note) {
      let course = this.courses.filter((course) => {
        return course.code === courseCode;
      })[0];

      if (course) {
        course.note = note;
      }
    },
  };
}