import * as style from './style.css';
import { User } from './User';

export const Game = () => {
  return (
    <div className={style.wrapper}>
      <User
        name={'you'}
        steps={[{ guessedNumber: '1234', result: { bulls: 1, cows: 2 } }, { guessedNumber: '1234', result: { bulls: 1, cows: 2 } }, { guessedNumber: '1234', result: { bulls: 1, cows: 2 } }]}
      />
      <User
        name={'opponent'}
        steps={[]}
      />
    </div>
  );
};
