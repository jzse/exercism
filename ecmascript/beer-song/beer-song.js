const MAX_BOTTLES = 99;

const verse = (numberOfBottles) => {
  const current = numberOfBottles;
  const variation = {
    default: {
      intro: `${current} bottles of beer on the wall, ${current} bottles of beer.`,
      end: `Take one down and pass it around, ${current - 1} bottles of beer on the wall.`,
    },
    two: {
      intro: '2 bottles of beer on the wall, 2 bottles of beer.',
      end: 'Take one down and pass it around, 1 bottle of beer on the wall.',
    },
    one: {
      intro: '1 bottle of beer on the wall, 1 bottle of beer.',
      end: 'Take it down and pass it around, no more bottles of beer on the wall.',
    },
    zero: {
      intro: 'No more bottles of beer on the wall, no more bottles of beer.',
      end: `Go to the store and buy some more, ${MAX_BOTTLES} bottles of beer on the wall.`,
    },
  };
  switch (numberOfBottles) {
    case 2:
      return `${variation.two.intro}\n${variation.two.end}`;
    case 1:
      return `${variation.one.intro}\n${variation.one.end}`;
    case 0:
      return `${variation.zero.intro}\n${variation.zero.end}`;
    default:
      return `${variation.default.intro}\n${variation.default.end}`;
  }
};

const sing = (startBottles = MAX_BOTTLES, endBottles = 0) => {
  const range = (startBottles - endBottles) + 1;
  return Array(range).fill().map((_, index) => verse(startBottles - index)).join('\n\n');
};

const Beer = () => ({ verse, sing });

export default Beer();
