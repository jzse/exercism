class Bob {
  hey(message) {
    // Minimum of 2 uppercase chars and ends '!' OR all uppercase chars.
    if ((message.endsWith('!') && /[A-Z]{2}/.test(message)) || /^[A-Z][A-Z\d\W]+$/.test(message)) {
      return 'Whoa, chill out!';
      // Ends with '?'
    } else if (message.endsWith('?')) {
      return 'Sure.';
      // Empty message or contains just spaces.
    } else if (!message || /^[\s]*$/.test(message)) {
      return 'Fine. Be that way!';
    }
    return 'Whatever.';
  }
}

export default Bob;
