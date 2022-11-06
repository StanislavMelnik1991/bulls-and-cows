/* eslint-disable global-require */
import { Typography } from '@mui/material';
import InlineSVG from 'react-inlinesvg';
import * as style from './style.css';

export const Footer = () => {
  return (
    <footer className={style.footerWrapper}>
      <a href="https://github.com/StanislavMelnik1991"
        target='blank'
        style={{
          display: 'flex',
          gap: '1rem',
          color: 'black',
          textDecoration: 'none',
        }}>
        <InlineSVG src={require('../../assets/github.svg')} className={style.logo} />
        <Typography variant={'h6'}>
          Stanislau Melnik
        </Typography>
      </a>
    </footer>
  );
};
