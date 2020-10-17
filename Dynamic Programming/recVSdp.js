// Using Recursion method

function genSeq_recursion(n){
  if(n == 1){
    return 0;
  }
  if(n == 2){
    return 1;
  }
  else{
    return genSeq_recursion(n-1) + genSeq_recursion(n-2);
  }
}

let start = new Date().getTime();

let result = genSeq_recursion(30);

let stop = new Date().getTime();

console.log(result +' calculated using Recursion in '+(stop - start)+'mS')


// Using dynamic programming

function genSeq_dp(n){
  let arr = [];

  for(let i = 0;i < n; i++){
    arr[i] = 0;
  }

  // if(n == 1){ 
  //   arr[0] = 0;
  // }
  if(n == 2){
    arr[1] = 1;
  }
  else{
    arr[0] = 0;
    arr[1] = 1;
    for(let i = 2; i < n ; i++){
      arr[i] = arr[i-2] + arr[i-1];
    }
  }
  return arr[n-1]
}

let start2 = new Date().getTime();

let result2 = genSeq_dp(30);

let stop2 = new Date().getTime();

console.log(result2 +' calculated using Dynamic programming in '+(stop2 - start2)+'mS')