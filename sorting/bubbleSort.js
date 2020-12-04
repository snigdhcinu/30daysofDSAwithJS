// Bubble sort implementation
// Helpful Article for algo explanation :-  

function bubbleSortInc(arr){
  let size = arr.length;
  let temp = [];

  for(let i = 0 ; i < size-1 ; i++){
    for(let j = 0 ; j < size-i-1;j++){
      if(arr[j] > arr[j+1]){
        swap(arr,j,j+1);
      }
    }
  }

  // can use defn. here too
  // function swap(arr,i,j){
  //   let temp = arr[i];
  //   arr[i] = arr[j];
  //   arr[j] = temp;
  // }
  temp = [...arr]
  // So that we have the organic array for further operations.
  return temp;
}

function bubbleSortDec(arr){
  let size = arr.length;
  let temp = [];

  for(let i = 0 ; i < size-1 ; i++){
    for(let j = 0 ; j < size-i-1;j++){
      if(arr[j] < arr[j+1]){
        swap(arr,j,j+1);
      }
    }
  }

  // can use defn. here too
  // function swap(arr,i,j){
  //   let temp = arr[i];
  //   arr[i] = arr[j];
  //   arr[j] = temp;
  // }

  // So that we are still left with the organic array for further operations on it.
  temp = [...arr]
  return temp
}

// can have defn. here too
function swap(arr,i,j){
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

let arr = [1,5,2,4,3];
let temp = [...arr]

let sortedArrInc = bubbleSortInc(temp);
let sortedArrDec = bubbleSortDec(temp);
console.log('The original Array is :- ')
console.log(arr);
console.log('Array sorted in Ascending Order')
console.log(sortedArrInc);
console.log('Array sorted in Descending Order')
console.log(sortedArrDec);
