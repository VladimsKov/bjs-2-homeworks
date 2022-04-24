class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }
    
    fix() {
        return this.state *= 1.5;
    }  
    
    set state(value) {
        if (value < 0) {
            this._state = 0;
        } else if (value > 100) {
            this._state = 100;
        } else {
            this._state = value;
        }
    }
    get state() {
        return this._state;
    }  
}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = "magazine";
    }
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.author = author;
        this.type = "book";
    }
}

class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "novel";
    }
}

class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "fantastic";
    }
}

class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "detective";
    }
}

//Задача 2

class Library {
    constructor(name) {
        this.name = name;
        this.books = [];
    }
    addBook(book) {
        if (book.state > 30) {
            this.books.push(book);
        }
    }
    findBookBy(type, value) {
        let result = this.books.find(item => item[type] === value);
        if (result === undefined) {
            return null
        } else {
            return result;
        }
    }    
    giveBookByName(bookName) {
        let bookIndex = this.books.findIndex(item => item.name === bookName);
        if (bookIndex === -1) {
            return null
        } else {
            return this.books.splice(bookIndex, 1)[0];                     
        }
    }
}

//Задача 3

class Student {
    constructor(name) {
        this.name = name;
        this.subjects = {};
    }
    
    addMark(mark, subject) {
        if (mark > 5) {
            console.log("Ошибка, оценка должна быть числом от 1 до 5");
            return
        }
        if (this.subjects[subject] === undefined) {
            this.subjects[subject] = [];
        }
        this.subjects[subject].push(mark);
    }
    
    getAverageBySubject(subject) {
        if (this.subjects[subject] === undefined) {
            console.log("Несуществующий предмет");
            return
        }
        let averageMark = this.subjects[subject].reduce((sum, item) => sum + item, 0) / this.subjects[subject].length;
        console.log(`Средний балл по предмету ${subject} ${averageMark}`);
        return averageMark;
    }
    
    getAverage() {
        let sumMarks = 0, sumLength = 0;
        for (let prop in this.subjects) {
            sumMarks += this.subjects[prop].reduce((sum, item) => sum + item, 0);
            sumLength += this.subjects[prop].length;
        }
        let allAverageMark = sumMarks / sumLength;
        console.log(`Средний балл по всем предметам ${allAverageMark}`);
        return allAverageMark;
    }    
}