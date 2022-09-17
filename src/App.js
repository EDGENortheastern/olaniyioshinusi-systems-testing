import './App.css';

function App() {
  return (
    <div className='container my-5'>
      <form>
        <div className='my-3'>
          <label htmlFor='input-temp' classname='form-label'>
            Input Temperature
          </label>
          <input
            id="input-temp"
            name="input-temp"
            className='form-control'
          />
        </div>
      </form>      
    </div>
  );
}

export default App;
