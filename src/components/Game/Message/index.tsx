import { Paper, TextField } from '@mui/material';
import * as style from './style.css';
import { MessageType } from '../../types';

export const Message = ({ guessedNumber, result }: MessageType) => {
  return (
    <div className={style.wrapper}>
      <div>{guessedNumber}</div>
      <div>{`bulls ${result.bulls}`}</div>
      <div>{`cows ${result.cows}`}</div>
    </div>
  );
};
