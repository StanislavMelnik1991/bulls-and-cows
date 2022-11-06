import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Routers } from './router';
import * as style from './App.css';

function App() {
  return (
    <div className={style.wrapper}>
      <Header />
      <Routers />
      <Footer />
    </div>
  );
}

export default App;
