// Implementing Insertion sort
// Algorithm reference :- https://medium.com/dailyjs/insertion-sort-in-javascript-9c077844717a

// function to shift an item in an array from i to j
function shift(arr,i,j){
  let replaced = arr[i];
  let replacer = arr[j];

  for(let x = j-1; x <= i ; x++){
    arr[x] = arr[x+1];
  }
  arr[i] = replacer;
}

function selectionSort(arr){
  for(let i = 1 ; i < arr.length ; i++){
    let pig = arr[i];
    for(let j = i-1 ; j >= 0 ; j--){
      if(pig > arr[j]){

        continue;
      }
      if(pig <= arr[j]){
        shift(arr,i,j+1);
        break;
      }
      if(j === 0 && pig < arr[j]){
        shift(arr,i,j);
        break;
      }
    }
  }
  return arr;
}

let arr = [1,4,2,5,3]
let temp = [...arr];
selectionSort(temp);
console.log(temp)