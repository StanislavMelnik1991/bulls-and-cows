/* export type Digit = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 0;

export type ArrNumber = [Digit, Digit, Digit, Digit]
| [Digit, Digit, Digit, Digit, Digit]
| [Digit, Digit, Digit, Digit, Digit, Digit]
| [Digit, Digit, Digit, Digit, Digit, Digit, Digit];

export type UserGame = {
  id: string,
  intendedNumber: ArrNumber;
  guessedNumber: ArrNumber;
  step: number;
  cows: Digit;
  bulls: Digit;
  isDone: boolean;
  position: 1 | 2
};

export type GameVariant = 4 | 5 | 6 | 7; */

export type MessageType = {
  guessedNumber: string;
  result: {
    cows: number;
    bulls: number;
  }
};

export type UserType = {
  name: string;
  autoFocus?: boolean;
  steps: Array<MessageType>
};
