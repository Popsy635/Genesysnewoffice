console.log('Question 1');
//Write the same task twice — once as a function declaration and once as a function expression. The task: accept a student name and score and return a string like "Ada scored 87/100". Call each version and log the result. In a comment, explain why one is hoisted and the other is not.

//Function declaration
console.log(result('Ada', 90));

function result(name, result) {
    return name + ' scored ' + result + '/100';
}


//Function expression anonymous
const result2 = function(namex, resultx) {
    return namex + ' scored ' + resultx + '/100';
}

console.log(result2('Ada', 92));

//Function expression named
const result3 = function results(namey, resulty) {
    return namey + ' scored ' + resulty + '/100';
}

console.log(result3('Ada', 78));

//Function declarations can be hoisted, meaning they can be called before they are defined in the code. Function expressions, on the other hand, cannot be hoisted and must be defined before they are called.

console.log('Question 2');
//Write an arrow function calculateGrade(score, maxScore = 100) that returns a letter grade: A (>=70), B (60–69), C (50–59), F (below 50). Test it with at least four different calls, including one with a custom maxScore. Handle invalid input gracefully.

//Arrow function
const calculateGrade = (score, maxScore = 100) => {
    if (score >= 70) {
        return 'A';
    }else if (score >= 60 && score < 69) {
        return 'B';
    } else if (score >= 50 && score <= 59) {
        return 'C';
    } else {
        return 'F';
    }
}

// loggin the grade for a score of 85, 65, 55, and 45 with a max score of 50. The expected output should be 'A', 'B', 'C', and 'F' respectively.

console.log(calculateGrade(85)); 
console.log(calculateGrade(65)); 
console.log(calculateGrade(55)); 
console.log(calculateGrade(45, 50)); 


console.log('Question 3');
//Closures — Private Score Tracker - Create makeScoreTracker() that returns an object with three methods: addScore(n), getTotal(), and reset(). The internal score must be private — not reachable from outside the function. Demonstrate all three methods and explain in a comment how closure makes the data private.

function makeScoreTracker() {
    let score = 0; // This variable is private and can only be accessed through the methods defined in the returned object.

    return {
        addScore: function(n) {
            score += n; // This method allows us to modify the private score variable.
        },
        getTotal: function() {
            return score; // This method allows us to access the current value of the private score variable.
        },
        reset: function() {
            score = 0; // This method allows us to reset the private score variable to zero.
        }
    };
}

const tracker = makeScoreTracker();
tracker.addScore(10);
tracker.addScore(20);
tracker.addScore(5);
console.log(tracker.getTotal()); // Output: 30
tracker.reset();
console.log(tracker.getTotal()); // Output: 0

// In this example, the variable 'score' is private because it is defined within the scope of the makeScoreTracker function and cannot be accessed directly from outside. The methods addScore, getTotal, and reset form a closure that allows them to access and manipulate the private 'score' variable while keeping it hidden from the outside world. This encapsulation is a key feature of closures, allowing us to create private state and control access to it through defined methods.
