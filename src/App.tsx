import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <LikeButton />
      </header>
    </div>
  );
}

function LikeButton(){
  const [count, setCount] = useState(1000);
  const handleClick = () => {
    if (count%2 == 0){

      setCount(count/2);
    }
    else{
      setCount(3*count + 1)
    }
  }
  return <span className="likeButton" onClick={handleClick}>♥ {count}</span>;
}
export default App;
