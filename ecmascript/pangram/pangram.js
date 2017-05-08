const ALPHABET = 'abcdefghijklmnopqrstuvwxyz'.split('');

class Pangram {
  constructor(sentence) {
    this.sentence = this.normalise(sentence);
  }

  normalise(sentence) {
    const normalised = sentence.toLowerCase();
    return normalised;
  }

  isPangram() {
    if (!this.sentence) {
      return false;
    }
    const matchingChars = ALPHABET.reduce((accumulator, currentValue) => {
      if (this.sentence.includes(currentValue)) {
        accumulator.push(currentValue);
      }
      return accumulator;
    }, []);
    return matchingChars.length === ALPHABET.length;
  }
}

export default Pangram;
