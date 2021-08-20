function merge(arr, buffer, start, mid, end) {
	// см. 6.1
  for (let i = start; i <= end; i++) {
    buffer[i] = arr[i];
  }
  console.log(buffer)
	
	// см. 6.2
    let l = start;
    let r = mid + 1;
    let i = start;
	
	// см. 6.3
    while (l < mid + 1 && r < mid +1) {
         if (buffer[l] <= buffer[r]) {
            arr[i] = buffer[l];
    	    l++;
         } else {
          arr[i] = buffer[r];
          r++
         }
         i++;
    }
	
	// см. 6.4
  while (l < mid + 1) {
       arr[i] = buffer[l];
       l++;
       i++;
    }
	
	// см. 6.5
  while (r < end + 1) {
       arr[i] = buffer[r];
       r++;
       i++;
  }
  
  return arr;
}

const arr = [2, 4, 6, 1, 8, 3, 5, 9, 0];

console.log(merge(arr, [], 0, 4, 8));