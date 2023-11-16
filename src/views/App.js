import logo from './logo.svg';
import './App.scss';
import './exemple/mycomponent'
import Mycomponent from './exemple/mycomponent';
const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello world with react js
        </p>

        <Mycomponent></Mycomponent>

      </header>

    </div>
  );
}

export default App;
