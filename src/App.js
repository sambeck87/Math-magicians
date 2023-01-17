import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import './App.css';
import Calc from './components/Calculator';
import Home from './Pages/Home';
import Quote from './Pages/Quote';
import Header from './components/Header';

class App extends React.PureComponent {
  render() {
    return (
      <React.StrictMode>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route
              path="/"
              element={(<Home />
              )}
            />
            <Route
              path="/calculator"
              element={(<Calc />
              )}
            />
            <Route
              path="/quote"
              element={(<Quote />
              )}
            />
          </Routes>
        </BrowserRouter>
      </React.StrictMode>
    );
  }
}

export default App;
