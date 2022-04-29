//Задача № 1
function parseCount(number) {
    if (isNaN(number)) {
        throw new Error("Невалидное значение");
    } 
    return parseInt(number);    
}

function validateCount(number) {
    try {
        return parseCount(number);
    } catch(e) {
        return e;
    } 
}

//Задача 2

class Triangle {
    constructor(a, b, c) {
        if ((a + b) < c || (a + c) < b || (b + c) < a) throw new Error (
            "Треугольник с такими сторонами не существует"); 
            this.a = a;
            this.b = b;
            this.c = c;  
        }
        
        getPerimeter() {
            return this.a + this.b + this.c;
        }
        
        getArea() {
            let p = (this.getPerimeter()) / 2;
            return +(Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c))).toFixed(3);
        } 
    }
    
    function getTriangle(a, b, c) {
        try {return new Triangle(a, b, c);
        } catch {
            const triangle = new Triangle(a, b, c);
            
            triangle.getArea = () => {
                console.log('Ошибка! Треугольник не существует');
            } 
            triangle.getPerimeter = () => {
                console.log('Ошибка! Треугольник не существует');
            }
        };                
    } 
    