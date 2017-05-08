class Words {
  getWordsBySpaces(sentence) {
    const patternNewLines = /\n/g;
    const patternTabs = /\t/g;
    const patternMultipleSpaces = /\s{2,}/g;
    const clean = sentence
      .trim()
      .toLowerCase()
      .replace(patternNewLines, ' ')
      .replace(patternTabs, ' ')
      .replace(patternMultipleSpaces, ' ');
    return clean.split(' ');
  }

  count(sentence) {
    const words = this.getWordsBySpaces(sentence);
    const countWords = words.reduce((accumulator, currentValue) => {
      if (!accumulator.hasOwnProperty(currentValue)) {
        accumulator[currentValue] = 1;
      } else {
        accumulator[currentValue] += 1;
      }
      return accumulator;
    }, {});
    return countWords;
  }
}

export default Words;
