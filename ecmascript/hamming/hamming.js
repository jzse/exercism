class Hamming {
  compute(first, second) {
    if (first.length !== second.length) {
      throw new Error('DNA strands must be of equal length.');
    } else {
      return [...first].reduce(
        (distance, nucleotide, index) => {
          if (nucleotide !== second[index]) {
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
