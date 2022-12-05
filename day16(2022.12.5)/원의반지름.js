let r = prompt("원의 반지름은? (cm)");
let circle1 = new Circle(r); //new 객체생성 : 여러가지 속성이 들어간다.

document.write("반지름이 " + r + "cm일 때" + "<br>원의 둘레 : 약 " 
+ circle1.circumference() 
+ "cm <br> 원의 넓이 : 약 " + circle1.area() + "cm<sup>2</sup>");

function Circle(radius) {
    this.radius = radius, // 반지름의 값
    this.circumference = function() { // 원의 넓이
        return Math.floor(this.radius * 2 * Math.PI); // 소수점 버리는 Math.floor
    }
    this.area = function() { // 원의 둘레
        return Math.floor(Math.pow(this.radius, 2) * Math.PI); // 소수점 버리는 Math.floor
    }
}