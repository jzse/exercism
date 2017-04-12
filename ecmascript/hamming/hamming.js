class Hamming {
  compute(first, second) {
    if (first.length !== second.length) {
      throw new Error('DNA strands must be of equal length.');
    } else {
      const firstList = first.split('');
      return firstList.reduce(
        (distance, value, index) => {
          if (value !== second[index]) {
            distance += 1;
          }
          return distance;
        },
        0,
      );
    }
  }
}

export default Hamming;
