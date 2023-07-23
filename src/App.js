import './App.css';
import ButtonComponent from './ButtonComponent';
import CounterComponent from './CounterComponent';
import DataComponent from './DataComponent';

function App() {
  const func =()=>{
    alert("Button Clicked");
  }

  return (
    <div className="App">
      <ButtonComponent label="Click Me..!" onClickHandler={func}/>
      <CounterComponent/>
      <DataComponent/>
    </div>
  );
}

export default App;
