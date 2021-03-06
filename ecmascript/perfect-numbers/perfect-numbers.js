class PerfectNumbers {
  getFactors(number) {
    const factors = [];
    for (let i = 1; i <= number; i += 1) {
      if (number % i === 0) {
        factors.push(i);
      }
    }
    return factors;
  }

  getAliquotSum(number) {
    const factors = this.getFactors(number);
    const factorsSansNumber = factors.slice(0, -1);
    const aliquotSum = factorsSansNumber.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0,
    );
    return aliquotSum;
  }

  classify(number) {
    if (number < 1) {
      throw new Error('Classification is only possible for natural numbers.');
    }
    const aliquotSum = this.getAliquotSum(number);
    if (aliquotSum === number) {
      return 'perfect';
    } else if (aliquotSum > number) {
      return 'abundant';
    } else if (aliquotSum < number) {
      return 'deficient';
    }
    return false;
  }
}

export default PerfectNumbers;
