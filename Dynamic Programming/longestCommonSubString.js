// Given 2 strings, find the longest common substrings between them 

function lcs(str1, str2){

  let max = 0;
  let index = 0;

  // Phase 1 initializing the matrix
  let arr = new Array(str1.length + 1);
  for(let i = 0;i <= str1.length;i++){
    arr[i] = new Array(str2.length + 1);
    for(let j = 0;j <= str2.length;j++){
      arr[i][j] = 0;
    }
  }

  // Phase 2 updating the entries
  for(let i = 0; i <= str1.length; i++ ){
    for(let j = 0; j <= str2.length; j++ ){
      if(i === 0 || j === 0){
        arr[i][j] = 0; 
      }
      else{
        if(str1[i-1] == str2[j-1]){
          arr[i][j] = arr[i-1][j-1] + 1;
        }
        else{
          arr[i][j] = 0;
        }
      }
      if(max < arr[i][j]){
        max = arr[i][j];
        index = i
      }    
    }
  }

  // Phase 3 extracting the length of longest common substring and the substring
  // 3.1 done in above loop to avoid using the loop again
  // 3.2 below.
  let result = [];
  if(max === 0){
    return "";
  }
  for (let i = index - max ; result.length < max ; i++){
    result.push(str1[i])
  }

  return result;
}

let result = lcs('python','pythagoras');
console.log(result)
console.log(`Longest common sub-string is ${result.length} characters long`)
