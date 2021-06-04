import { createContext, useContext, useState } from 'react';
import './App.css';

const context = createContext(null);

const B = props => {
  const [theme, setTheme] = useState('light');
  return <context.Provider value={{ theme, setTheme }} {...props} />;
};

const App = props => {
  return (
    <div>
      <B>
        <A />
      </B>
      <B>
        <A />
      </B>
      <B>
        <A />
      </B>
      <B>
        <A />
      </B>
      <B>
        <A />
      </B>
      <B>
        <A />
      </B>
    </div>
  );
};

const A = () => {
  const { theme, setTheme } = useContext(context);

  return (
    <div className={`box ${theme}`}>
      <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
        Click to change theme
      </button>
    </div>
  );
};

export default App;
