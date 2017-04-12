class Hamming {
  compute(first, second) {
    if (first.length !== second.length) {
      throw new Error('DNA strands must be of equal length.');
    } else {
      const firstArray = first.split('');
      let distance = 0;
      firstArray.forEach((item, index) => {
        if (firstArray[index] !== second[index]) {
          distance += 1;
        }
      });
      return distance;
    }
  }
}

export default Hamming;
