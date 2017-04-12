const DNA_RNA = {
  G: 'C',
  C: 'G',
  T: 'A',
  A: 'U',
};

class Transcriptor {
  toRna(dna) {
    const dnaArray = dna.split('');
    return dnaArray
      .map((nucleotide) => {
        if (!(nucleotide in DNA_RNA)) {
          throw new Error('Invalid input DNA.');
        }
        return DNA_RNA[nucleotide];
      })
      .join('');
  }
}

export default Transcriptor;
