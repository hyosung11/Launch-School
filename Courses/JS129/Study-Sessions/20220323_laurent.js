/* Create a school object. The school object uses the student object from the previous exercise. It has methods that use and update information about the student. Be sure to check out the previous exercise for the other arguments that might be needed by the school object. Implement the following methods for the school object:

    addStudent: Adds a student by creating a new student and adding the student to a collection of students. The method adds a constraint that the year can only be any of the following values: '1st', '2nd', '3rd', '4th', or '5th'. Returns a student object if year is valid otherwise it logs "Invalid Year".
    
    enrollStudent: Enrolls a student in a course.
    
    addGrade: Adds the grade of a student for a course.
    
    getReportCard: Logs the grades of a student for all courses. If the course has no grade, it uses "In progress" as the grade.
    
    courseReport: Logs the grades of all students for a given course name. Only student with grades are part of the course report.

To test your code, use the three student objects listed below. Using the three student objects, produce the following values from the getReportCard and courseReport methods respectively. */

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

    addCourse: function (courseObject) {
      this.courses.push(courseObject);
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

let school = {
  students: [],
  addStudent(name, year) {
    if (['1st', '2nd', '3rd', '4th', '5th'].includes(year)) {
      let student = createStudent(name, year);
      this.students.push(student);
      return student;
    } else {
      console.log('Invalid Year');
    }
  },

  enrollStudent(studentName, courseObject) {
    this.students.forEach(function (student) {
      if (student.name === studentName) {
        student.addCourse(courseObject);
      }
    });
  },

  // addGrade: Adds the grade of a student for a course.
  addGrade(studentName, courseName, grade) {
    this.students.forEach(function (student) {
      if (student.name === studentName) {
        student.courses.forEach(function (course) {
          if (course.name === courseName) course.grade = grade;
        });
      }
    });
  },

  getReportCard(studentName) {
    this.students.forEach(function (student) {
      if (student.name === studentName) {
        student.courses.forEach(function (course) {
          if (course.grade) console.log(`${course.name} : ${course.grade}`);
          else console.log(`${course.name} : In progress`);
        });
      }
    });
  },

  // courseReport: Logs the grades of all students for a given course name. Only student with grades are part of the course report.
  // > school.courseReport('Math');
  // = =Math Grades=
  // = foo: 95
  // = bar: 91
  // = qux: 93
  // = Course Average: 93
  courseReport(courseName) {
    const addGrades = function (array) {
      return array.reduce((acc, value) => acc + value);
    };

    let courseGradesStrings = [];
    let courseGrades = [];

    this.students.forEach(function (student) {
      student.courses.forEach(function (course) {
        if (course.name === courseName) {
          courseGradesStrings.push(`${student.name}: ${course.grade}`);
          courseGrades.push(course.grade);
        }
      });
    });

    let averageGrade = addGrades(courseGrades) / courseGrades.length;

    console.log('');
    console.log(`== ${courseName} ==`);
    courseGradesStrings.forEach(function (gradeString) {
      console.log(gradeString);
    });
    console.log('---');
    console.log(`Course Average: ${averageGrade}`);
  },
};

// Examples of created student objects with grades; methods on the objects are not shown here for brevity. The following are only showing the properties that aren't methods for the three objects.

school.addStudent('foo', '3rd');
school.addStudent('Laurent', '1st');
// console.log(school.students);

school.enrollStudent('foo', { name: 'Math', code: 101 });
school.enrollStudent('Laurent', { name: 'Math', code: 101 });
school.enrollStudent('foo', { name: 'Advanced Math', code: 102 });
// console.log(school.students[0].courses);

school.addGrade('foo', 'Math', 85);
school.addGrade('Laurent', 'Math', 95);
school.addGrade('foo', 'Advanced Math', 90);
console.log(school.students[0].courses);

school.getReportCard('foo');
school.courseReport('Math');

// {
//   name: 'foo',
//   year: '3rd',
//   courses: [
//     { name: 'Math', code: 101, grade: 95, },
//     { name: 'Advanced Math', code: 102, grade: 90, },
//     { name: 'Physics', code: 202, }
//   ],
// }

// bar;
// {
//   name: 'bar',
//   year: '1st',
//   courses: [
//     { name: 'Math', code: 101, grade: 91, },
//   ],
// }

// qux;
// {
//   name: 'qux',
//   year: '2nd',
//   courses: [
//     { name: 'Math', code: 101, grade: 93, },
//     { name: 'Advanced Math', code: 102, grade: 90, },
//    ],
// }

// > school.getReportCard(foo);
// = Math: 95
// = Advanced Math: 90
// = Physics: In progress

// > school.courseReport('Math');
// = =Math Grades=
// = foo: 95
// = bar: 91
// = qux: 93
// = ---
// = Course Average: 93

// > school.courseReport('Advanced Math');
// = =Advanced Math Grades=
// = foo: 90
// = qux: 90
// = ---
// = Course Average: 90

// > school.courseReport('Physics');
// = undefined
