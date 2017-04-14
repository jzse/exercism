const GIGASECOND_IN_MS = 1e12;

const Gigasecond = start => ({
  date: () => new Date(start.getTime() + GIGASECOND_IN_MS),
});

export default Gigasecond;
