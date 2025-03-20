import RouterComponent from './routes/RoutesApp';
import { ThemeProvider } from './themes/ThemeContext';
import ButtonComponent from './components/Button';
import './App.css';

const App = () => {
  return (
    <>
      <ThemeProvider>
        <RouterComponent />
        <ButtonComponent />
      </ThemeProvider>
    </>
  );
};

export default App;
