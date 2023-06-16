function threeSum(arr, target) {
// write your code here
  for(let l=0; l<arr.length; l++){
  target += l;
  for(let i=0; i<arr.length; i++){
	  for(let j=i+1; j<arr.length; j++){
		  for(let k=j+1; k<arr.length; k++){
			  let sum = arr[i] + arr[j] + arr[k];
			  if(sum === target){
				  console.log(sum); 
			  }
		  }
	  }
  }
}
  // console.log() "not found";
}

module.exports = threeSum;
