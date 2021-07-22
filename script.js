/* Count A
Write a method count_a(word) that takes in a string word and 
returns the number of a's in the word.
The method should count both lowercase (a) and uppercase (A) */

function count_a(word) {
    let count = 0;
    let i = 0;

    while (i < word.length) {
        let char = word[i];
        if (char == "a" || char == "A") count++;
        i++
    };
    return count
}

console.log(count_a("astronaut"));
console.log(count_a("Terrible"));
console.log(count_a("SantishA"));
console.log(count_a("Application"))


/*Count Vowels
Write a method, count_vowels(word), 
that takes in a string word and returns the number of vowels in the word.
 Vowels are the letters a, e, i, o, u. */
 
 function count_vowels(word) {
    let vowels = 0;
    let i = 0;

     while (i < word.length) {
         let char = word[i];
         if (char == "a" || char == "e" || char == "i" || char == "o" || char == "u") {
             vowels++
         };
         i++
     };
    return vowels
};

console.log(count_vowels("astronaut"));
console.log(count_vowels("Terrible"));
console.log(count_vowels("SantishA"));
console.log(count_vowels("Application"))





/* Sum Nums
Write a method sum_nums(max) that takes in a number max 
and returns the sum of all numbers from 1 up to and including max. */

function sum_nums(max) {
    let sum = 0;
    let i = 1;

    while (i <= max) {
        sum += i;
        i++
    };
    return sum
};

console.log (sum_nums(9))
console.log (sum_nums(21))
console.log (sum_nums(7))




 /* Write a method factorial(num) that takes in a number num and 
 returns the product of all numbers from 1 up to and including num.
 Hint * use let  product = 1, then product *=1 somewhere in your solution */

function factorial(num) {
    let product = 1;
    let i = 1;

    while (i <= num) {
        product *= i;
        i++
    };
    return product
};

console.log (factorial(5))
console.log (factorial(8))
console.log (factorial(7))




 /* Reverse
Write a method reverse(word) that takes in a string word and 
returns the word with its letters in reverse order.
 Hint * search for reverse method that you can use to manipulate strings ibn JavaScript.*/

 function reverse(word) {
     let reversed = "";
      let i = 0;

   while (i < word.length) {
        let char = word[i];
       reversed = char + reversed
         i++
       };
     return reversed
 };


 console.log(reverse("Santisha"));
 console.log(reverse("javascript"));
 console.log(reverse("program"))



 /* Goodbye
Write a method goodbye(name) that takes in a string name 
and returns a string saying bye to that name. 
See the example calls. */

function goodbye(name) {
    return "Bye " + name + "."
};

console.log(goodbye("Santisha"));
console.log(goodbye("Jay"));
console.log(goodbye("Kai"))