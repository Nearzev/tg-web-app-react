import { useEffect } from 'react';
import { useTelegram } from './hooks/useTelegram';
import {Route, Routes} from 'react-router-dom';
import Header from './components/Header/Header';
import ProductList from './components/ProductList/ProductList';
import Form from './components/Form/Form'
import './App.css';

function App() {
  const {tg} = useTelegram();

  useEffect(() => {
    tg.ready();
  }, )


  return (
    <div className="App">
      <Header />
      <Routes>
        <Route index elemet={<ProductList />} />
        <Route path={'form'} elemet={<Form />} />
      </Routes>
    </div>
  );
}


export default App;
