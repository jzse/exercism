const GIGASECOND_IN_MS = 1e12;

class Gigasecond {
  constructor(start) {
    this.start = start;
  }

  date() {
    return new Date(this.start.getTime() + GIGASECOND_IN_MS);
  }
}

export default Gigasecond;
