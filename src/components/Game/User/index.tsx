import { Paper, TextField } from '@mui/material';
import { UserType } from '../../types';
import { Message } from '../Message';

export const User = ({ name, autoFocus, steps }: UserType) => {
  return (
    <Paper style={{ padding: '1rem', width: '100%' }}>
      <p>{name}</p>
      <TextField
        /* error={error.isError} */
        /* helperText={'Enter a 4-digit number'} */
        /* value={value} */
        type='text'
        label={'Enter a 4-digit number'}
        title={'Enter a 4-digit number'}
        variant={'outlined'}
        autoFocus={autoFocus}
      /* onChange={(ev) => {
        onChangeHandler(ev.currentTarget.value);
      }}
      onKeyDown={(ev) => {
        (ev.code === 'Enter' || ev.code === 'NumpadEnter') && onAddHandler();
        (ev.code === 'Escape') && onEsc && onEsc();
      }} */
      /* onBlur={onBlur} */
      />
      {steps.map((el) => {
        return (
          <Message
            guessedNumber={el.guessedNumber}
            result={el.result}
          />
        );
      })}
    </Paper>
  );
};
