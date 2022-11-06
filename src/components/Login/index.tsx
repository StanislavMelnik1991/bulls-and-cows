import { Button, Paper, TextField } from '@mui/material';
import * as style from './style.css';

export const Login = () => {
  return (
    <Paper style={{ padding: '1rem', margin: '0 auto' }}>
      <div className={style.wrapper}>
        <TextField
          /* error={error.isError} */
          /* helperText={'Enter a 4-digit number'} */
          /* value={value} */
          type='text'
          label={'login'}
          title={'login'}
          variant={'outlined'}
        /* onChange={(ev) => {
          onChangeHandler(ev.currentTarget.value);
        }}
        onKeyDown={(ev) => {
          (ev.code === 'Enter' || ev.code === 'NumpadEnter') && onAddHandler();
          (ev.code === 'Escape') && onEsc && onEsc();
        }} */
        /* onBlur={onBlur} */
        />
        <TextField
          /* error={error.isError} */
          /* helperText={'Enter a 4-digit number'} */
          /* value={value} */
          type='password'
          label={'password'}
          title={'password'}
          variant={'outlined'}
        /* onChange={(ev) => {
          onChangeHandler(ev.currentTarget.value);
        }}
        onKeyDown={(ev) => {
          (ev.code === 'Enter' || ev.code === 'NumpadEnter') && onAddHandler();
          (ev.code === 'Escape') && onEsc && onEsc();
        }} */
        /* onBlur={onBlur} */
        />
        <Button variant='contained'>registration</Button>
      </div>
    </Paper>
  );
};
