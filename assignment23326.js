//Print numbers from 1 to 30: if divisible by 2, print ‘Even’; if divisible by 3, print ‘Multiple of 3’; otherwise print the number.

console.log('Question 1');
for (let i = 1; i <= 30; i++) {
    if (i % 2 === 0) {
        console.log('Even');
    } else if (i % 3 === 0) {
        console.log('Multiple of 3');
    } else {
        console.log(i);
    }
}


//Count positive and negative numbers in [3, -2, 7, -5, 0, 4]
let numbers = [3, -2, 7, -5, 0, 4];
let positive = 0;
let negative = 0;

for (let num of numbers) {
    if (num > 0) {
        positive++;
    } else if (num < 0) {
        negative++;
    }
}
console.log('Question 2');
console.log('Positive numbers:', positive);
console.log('Negative numbers:', negative);

//Print numbers greater than average in [4, 8, 6, 10, 2]
let nums = [4, 8, 6, 10, 2];
let sum = 0;

for (let num of nums) {
    sum += num;
}
let average = sum / nums.length;

console.log('Question 3');
console.log('Average:', average);
console.log('Numbers greater than average:');

for (let num of nums) {
    if (num > average) {
        console.log(num);
    } 
}

//Print numbers from 1 to 15: even = 'Even', else = 'Odd'
console.log('Question 4');
for (let i = 1; i <= 15; i++) {
    if (i % 2 === 0) {
        console.log('Even');
    } else {
        console.log('Odd');
    }
}

// Print first number that appears twice in [1, 3, 5, 3, 7,]
console.log('Question 5');
let arr = [1, 3, 5, 3, 7,];
let seen = new Set();
let duplicate = null;

for (let num of arr) {
    if (seen.has(num)) {
        duplicate = num;
        break;
    }
    seen.add(num);
}

if (duplicate !== null) {
    console.log('First duplicate number:', duplicate);
} else {
    console.log('No duplicate found');
}

// Print numbers greater than 10 in [12, 5, 8, 130, 44]
console.log('Question 6');
let nos = [12, 5, 8, 130, 44];
for (let num of nos) {
    if (num > 10) {
        console.log(num);
    }
}

//Count vowels in 'education'
console.log('Question 7');
let str = 'education';
let vowels = 'aeiou';
let count = 0;

for (let char of str) {
    if (vowels.includes(char)) {
        count++;
    }
}
console.log('Number of vowels:', count);

// Find smallest number in [15, 3, 22, 1, 9]
console.log('Question 8');
let noms = [15, 3, 22, 1, 9];
let smallest = noms[0];

for (let num of noms) {
    if (num < smallest) {
        smallest = num;
    }
}
console.log('Smallest number:', smallest);

// Print numbers divisible by 5 but not by 10 from 1 to 100
console.log('Question 9');
for (let i = 1; i <= 100; i++) {
    if (i % 5 === 0 && i % 10 !== 0) {
        console.log(i);
    }
}

// Count how many times 2 appears in [2, 4, 2, 6, 2, 8]
console.log('Question 10');
let arr2 = [2, 4, 2, 6, 2, 8];
let count2 = 0;

for (let num of arr2) {
    if (num === 2) {
        count2++;
     }

}
console.log('Number of times 2 appears:', count2);

// Find total sum from 1 to 20
console.log('Question 11');
let totalSum = 0;
for (let i = 1; i<= 20; i++) {
    totalSum += i;
}
console.log('Total sum from 1 to 20:', totalSum);

// Multiply numbers from 1 to 5
console.log('Question 12');
let product = 1;
for (let i = 1; i <= 5; i++) {
    product *= i;
}
console.log('Product of numbers from 1 to 5:', product);

// Print numbers from 1 to 10, and for every even number print the number and its square
console.log('Question 13');
for (let i = 1; i <= 10; i++) {
    if( i % 2 === 0) {
        console.log('Number:', i, 'Square:', i * i);
    }
}

// Print numbers divisible by 3 from 1 to 30 and calculate their sum
console.log('Question 14');
let sumDivisibleBy3 = 0;
for (let i = 1; i <= 30; i++) {
    if (i % 3 === 0) {
        console.log(i);
        sumDivisibleBy3 += i;
    }
}
console.log('Sum of numbers divisible by 3:', sumDivisibleBy3);

// Calculate the total price of [200, 150, 300, 100]
console.log('Question 15');
let prices = [200, 150, 300, 100];
let totalPrice = 0;
for (let price of prices) {
    totalPrice += price;
}
console.log('Total price:', totalPrice);

console.log('Make a change and commit to GitHub');



function greet(name = 'Customer') {
    return 'Hello, ' + name + '! Your food is ready.';
}

console.log(greet( 'Ebuka'));


function sendMessage(name, age) {
    if (age < 13) {
        message = 'Hi ' + name + ', You are a child';
    } else if (age >= 13 && age < 18) {
        message = 'Hi ' + name + ', You are a teenager';
    } else {
        message = 'Hi ' + name + ', You are an adult';
    }
    return message;
}
console.log(sendMessage( 'Ebuka', 25));