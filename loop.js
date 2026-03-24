// looping through 30 and finding the largest of the multiples of 4
let largestNo = 0

for (let i = 1; i < 30; i++) {
    if( i % 4 === 0 ){
        if (i > largestNo){
            largestNo = i
        }
    }
}

console.log(largestNo)

// print out a pattern
//for (let i = 1; i <= 5; i++) {    // controls rows
   // let row = '';
    //for (let j = 1; j <= i; j++) {
   //     row += '* ';
    //}
    //console.log(row);
//}