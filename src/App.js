import React, {useState} from 'react'
import './App.css';

function App() {

  // state
  const [weight, setWeight] = useState("")
  const [height, setHeight] = useState("")
  const [bmi, setBmi] = useState('')
  const [message, setMessage] = useState('')

  let calcBmi = (event) => {
    //prevent submitting, e=event
    event.preventDefault()

    if (weight === 0 || height === 0) {
      alert('Please enter a valid weight and height')
    } else {
      let bmi = (weight / (height * height))
      setBmi(bmi.toFixed(2)) 

      // Logic for message

      if (bmi < 18.5) {
        setMessage('You are underweight')
      } else if (bmi >= 18.5 && bmi < 24.9) {
        setMessage('You are a healthy weight')
      } else if (bmi >= 25 && bmi < 29.9) {
        setMessage('You are a Overweight')  
      } else {
        setMessage('You are Obese')
      }
    }
  }
  
  let reload = () => {
    window.location.reload()
  }

  return (
    <div className="app">
      <div className='container'>
        <h1 className='center'>BMI Calculator</h1>
        <form onSubmit={calcBmi} data-testid='form'>
          <div>
            <label htmlFor='weight'>Weight (kg)</label>
            <input id="weight" value={weight} onChange={(e) => setWeight(e.target.value)} />
          </div>
          <div>
            <label htmlFor='height'>Height (metres)</label>
            <input id="height" value={height} onChange={(e) => setHeight(e.target.value)} />
          </div>
          <div>
            <button className='btn' type='submit'>Submit</button>
            <button className='btn btn-outline' onClick={reload} type='submit'>Reload</button>
          </div>
        </form>

        <div className='center' role = 'article'>
          <h2>Your BMI is: {bmi}</h2>
          <p data-testid='output'>{message}</p>
        </div>
      </div>        
    </div>
  );
}

export default App;
