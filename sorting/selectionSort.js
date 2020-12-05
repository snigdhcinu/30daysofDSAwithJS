// Implementing selection sort

function swap(arr,i,j){
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

function selectionSort_inc(arr){
  for(let i = 0 ; i < arr.length - 1 ; i++){
    let min = arr[i];
    let target = i;
    for(let j = i+1 ; j < arr.length ; j++){
      if(min > arr[j]){
        min = arr[j]
        target = j;
      }
    }
    swap(arr,i,target);

    // Or use object destructuring for swap
    // [arr[i],arr[target]] = [arr[target],arr[i]]
  }
  return arr;
}

function selectionSort_dec(arr){
  for(let i = 0 ; i < arr.length - 1 ; i++){
    let max = arr[i];
    let target = i;
    for(let j = i+1 ; j < arr.length ; j++){
      if(max < arr[j]){
        max = arr[j]
        target = j;
      }
    }
    swap(arr,i,target);

    // Or use object destructuring for swap
    // [arr[i],arr[target]] = [arr[target],arr[i]]
  }
  return arr;
}



let arr = [1,3,15,32,2,7,5,234,65,678,34,555,261,0]
let temp = [...arr];
console.log('The original array is :- ')
console.log(temp)

temp = selectionSort_inc(arr);
console.log('The array sorted in increasing order is  :- ')
console.log(temp);

temp = selectionSort_dec(arr);
console.log('The array sorted in decreasing order is :- ')
console.log(temp);