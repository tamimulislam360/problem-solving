

const findSecondLargestNumberFromArray = (arr) => {
    const { largest, secondLargest } = arr.reduce(
      (acc, current) => {
        if (current > acc.largest) {
          return { largest: current, secondLargest: acc.largest };
        } else if (current > acc.secondLargest && current < acc.largest) {
          return { ...acc, secondLargest: current };
        } else {
          return acc;
        }
      },
      { largest: -Infinity, secondLargest: -Infinity }
    );
  
    return secondLargest;
  };
  
  const secondLargest = findSecondLargestNumberFromArray([80, 10, 7, 90]);
  console.log(secondLargest);
  
  
  
  // const findSecondLargestNumberFromArray = (arr) => {
  //   let largest = -Infinity
  //   let secondLargest = -Infinity
  
  //   arr.forEach(v => {
  //     if(v > largest){
  //       // console.log('l', v, largest, secondLargest)
  //       secondLargest = largest
  //       largest = v
  //     }else if(v > secondLargest){
  //       secondLargest = v
  //     }
  //   })
  
  //   return secondLargest
  // }
  
  
  
  // const secondLargest = findSecondLargestNumberFromArray([80, 10, 7, 90])
  // console.log(secondLargest)