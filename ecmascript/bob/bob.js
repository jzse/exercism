class Bob {
  hey(message) {
    const isYell = message === message.toUpperCase() && message !== message.toLowerCase();
    const isQuestion = message.endsWith('?');
    const isSilence = !message.trim();

    if (isSilence) {
      return 'Fine. Be that way!';
    }
    if (isYell) {
      return 'Whoa, chill out!';
    }
    if (isQuestion) {
      return 'Sure.';
    }
    return 'Whatever.';
  }
}

export default Bob;
