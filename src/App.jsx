import { useState } from 'react';
import Header from './components/Header';
import UserInput from './components/UserInput';
import Result from './components/Result';

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });
  const inputIsValid =  userInput.duration > 0;
  function handleChange(inputIdentifier, newValue) {
    
    setUserInput((prevInput) => {
      return {
        ...prevInput,
        [inputIdentifier]: +newValue,
      };
    });
  }
  return (
    <div>
      <Header />
      <UserInput onChange={handleChange} userInput={userInput} />
      {!inputIsValid && <p style={{textAlign: 'center'}}>Please enter a valid number.</p>}
      {inputIsValid && <Result userInput={userInput} />}
    </div>
  )
}

export default App
