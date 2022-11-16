// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)

    //use true false statements to identify 0 1 values

    //loop through array and use if statments

  
 if (A.length === 1) return 0;

let result = 0;

  // how many pairs of coins we have now 
  for(let i = 0; i < A.length; i++) {
    if (A[i] === A[i+1]) {
      result++;
      A[i+1] = Number(!A[i+1])

      console.log(A)
    }
    // else if (A[i+1] === A[i+2]){
    //     A[i] = Number(!A[i])
      
    // }
  }
  
  return result
}
    


   

