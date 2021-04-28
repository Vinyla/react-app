import { BrowserRouter } from 'react-router-dom';
import AppHeader from './components/AppHeader';
import AppFooter from './components/AppFooter';

//Create a react component
const App = () => {
  return (
    <BrowserRouter>
      <AppHeader />
      <p>Naslov</p>
      <p>Text</p>
      <AppFooter />
    </BrowserRouter>
  );
};

export default App;
