//1 
console.log(hello);                                   
var hello = 'world';                                 

/*

predict:

var hello;
console.log(hello); logs undefined
hello = 'world';

*/


//2

var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
}


/*

predict:

var needle; gets hoisted to the top
test(); gets hoisted to the top
'needle' is declared within 'test()' and gets hoisted to the top
log it as 'magnet'

output: magnet
*/


//3

var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);

/*

predict:

var brendan; gets hoisted to the top

log it as 'super cool'
 
output: super cool
*/


//4
var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}

/*

predict:

var food; gets hoisted to the top

log it as 'chicken'

eat(); gets hoisted to the top
'food' is reassign in 'eat()' 
log it as 'half-chicken'

'food' is declared within 'eat()' and gets hoisted to the top

output: chicken , half-chicken
*/

//5


console.log(food);
var mean = function() {
   food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
mean();
console.log(food);



/*

predict:
console.log(food); it not defined

mean();  gets hoisted to the top

var mean; gets hoisted to the top
'food' is declared in function
log it as 'chicken'
'food' is declared in function and gets hoisted to the top
log it as 'fish'
console.log(food); it not defined

*/

//6

console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);

/*
predict:
console.log(genre); undefined
rewind() gets hoisted to the top

'genre' is reassign in function
log it as 'rock'
'genre' is declared in function and gets hoisted to the top
log it as 'r&b'

output: rock, r&b, disco

*/

//7

dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);


/*

predict:
dojo gets hoisted to the top
log it as 'san jose'
learn() gets hoisted to the top

'dojo' is reassign in learn() function and gets hoisted to the top
log it as 'seattle'
'dojo' is declared in learn() function and gets hoisted to the top
log it as 'burbank'

output: san jose, seattle, burbank, san jose

*/


