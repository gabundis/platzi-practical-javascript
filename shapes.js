// Code for square
console.group("Squares");

// const squareSide = 5;
// console.log("The sides of the square measures: " + squareSide + "cm");

function squarePerimeter( side ) {
    return side * 4;
} 
// console.log("The perimeter of the square measures: " + squarePerimeter + "cm");

function squareArea( side ) {
    return side * side;
} 
// console.log("The area of the square measures: " + squareArea + "cm^2");

console.groupEnd();

// Code for triangle
console.group("Triangles");

// const triangleSide1 = 6;
// const triangleSide2 = 6;
// const triangleWidth = 4;
// console.log(
//     "The sides of the triangle measures: "
//     + triangleSide1 + "cm, "
//     + triangleSide2 + "cm, "
//     + triangleWidth + "cm"
// );

// const triangleHeight = 4;
// console.log("The height of the triangle measures: " + triangleHeight + "cm");
    
function trianglePerimeter( side1, side2, width ) {
    return side1 + side2 + width;
} 
// console.log("The perimeter of the triangle measures: " + trianglePerimeter + "cm");
    
function triangleArea ( width, height ) {
    return (width * height) / 2;
}
// console.log("The area of the triangle measures: " + triangleArea + "cm^2");
    
console.groupEnd();

// Code for circle
console.group("Circles");

// const circleRadius = 4;
// console.log("The radius of the circle measures: " + circleRadius);

function circleDiameter( radius ) {
    return radius * 2;
}
// console.log("The diameter of the circle measures: " + circleDiameter);

const PI = Math.PI;
console.log("PI value: " + PI);

function circleCircumference( radius ) {
    const diameter = circleDiameter( radius );
    return diameter * PI;
}
// console.log("The circumference of the circle measures: " + circleCircumference + "cm");
    
function circleArea( radius ) {
    return (radius * radius) * PI;
}
// console.log("The area of the circle measures: " + circleArea + "cm^2");
    
console.groupEnd();

// Interact with HTML here
function calculatePerimeter() {
    const input = document.getElementById("squareInput");
    const value = input.value;
    const perimeter = squarePerimeter( value );
    alert("The perimeter is: " + perimeter);
}

// Calculate the altitude of a triangle Isosceles
function calculateAltitude( side1, side2, base ) {
    if ( side1 !== side2 ) {
        return;
    }
    if ( side1 === base ) {
        return;
    }
    const altitude = Math.sqrt( (side1 * side1) - ((base * base) / 4) ).toFixed(2);
    alert("The altitude is: " + altitude);
}