import React, {useState} from 'react'
import './App.css';

function App() {

  // state
  const [weight, setWeight] = useState(0)
  const [height, setHeight] = useState(0)
  const [bmi, setBmi] = useState('')
  const [message, setMessage] = useState('')

  let imgSrc = ''

  return (
    <div className="app">
      <div className='container'>
        <h1 className='center'>BMI Calculator</h1>
        <form >
          <div>
            <label>Weight (kg)</label>
            <input value={weight} onChange={(e) => setWeight(e.target.value)} />
          </div>
          <div>
            <label>Height (metres)</label>
            <input value={height} onChange={(e) => setHeight(e.target.value)} />
          </div>
          <div>
            <button className='btn' type='submit'>Submit</button>
            <button className='btn btn-outline'  type='submit'>Reload</button>
          </div>
        </form>

        <div className='center'>
          <h2>Your BMI is: {bmi}</h2>
          <p>{message}</p>
        </div>

        <div className='img-container'>
          <img src={imgSrc} alt=''></img>
        </div>
      </div>        
    </div>
  );
}

export default App;
