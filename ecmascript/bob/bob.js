class Bob {
  hey(message) {
    const isExclamation = message.endsWith('!');
    const isYellShort = /[A-Z]{2}/.test(message);
    const isYellAll = /^[A-Z][A-Z\d\W]+$/.test(message);
    const isQuestion = message.endsWith('?');
    const isSilence = !message || /^[\s]*$/.test(message);

    if ((isExclamation && isYellShort) || isYellAll) {
      return 'Whoa, chill out!';
    } else if (isQuestion) {
      return 'Sure.';
    } else if (isSilence) {
      return 'Fine. Be that way!';
    }
    return 'Whatever.';
  }
}

export default Bob;
