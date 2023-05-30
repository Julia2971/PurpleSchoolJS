const arr = [1, 40, -5, 10, 0];

for ( j = 0; j < arr.length; j++) {
  for (let i = 0; i < arr.length - 1; i++) {
    let a = arr[i],
     b = arr[i + 1];
    if (a > b) {
      let temp = a;
      a = b;
      b = temp;
    }
    arr[i] = a;
    arr[i + 1] = b;
  }

  console.log(arr);
}
