import { Menu } from '@mui/icons-material';
import {
  AppBar, Button, IconButton, Toolbar,
} from '@mui/material';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <AppBar position={'static'}>
      <Toolbar >
        <IconButton edge={'start'} color={'inherit'} aria-label={'menu'}>
          <Menu />
        </IconButton>
        <Button color={'inherit'}><Link to={'/signIn'} style={{ color: 'white', textDecoration: 'none' }}>sign in</Link></Button>
        <Button color={'inherit'}><Link to={'/signUp'} style={{ color: 'white', textDecoration: 'none' }}>sign up</Link></Button>
      </Toolbar>
    </AppBar>
  );
};
