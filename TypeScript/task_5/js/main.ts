interface MajorCredits {
  credits: number;
  readonly majorCredits: 'MajorCredits'
}

interface MinorCredits {
  credits: number;
  readonly minorCredits: 'MinorCredits'
}

function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  const sum = subject1.credits + subject2.credits;

  return { credits: sum, majorCredits: 'MajorCredits'}
}

function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  const sum = subject1.credits + subject2.credits;

  return { credits: sum, minorCredits: 'MinorCredits'}
}
