function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
}

let student3 = new Student("Vlad", "male", 35);
let student4 = new Student("Diana", "female", 30);

Student.prototype.setSubject = function(subjectName) {
  this.subject = subjectName;  
}

Student.prototype.addMark = function(mark) {
    if (this.marks === undefined) { 
    this.marks = [];
  } 
  this.marks.push(mark);
  
}

Student.prototype.addMarks = function(...markList) {
    if (this.marks === undefined) { 
    this.marks = [];
  }
  for (let mark of markList) {
    this.marks.push(mark);
  }   
}

Student.prototype.getAverage = function() {
  return this.marks.reduce((sum, item) => sum + item, 0) / this.marks.length;
}

Student.prototype.exclude = function(reason) {
  delete this.subject;
  delete this.marks;
  this.excluded = reason;
}