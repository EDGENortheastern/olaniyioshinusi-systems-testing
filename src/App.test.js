import { render, screen } from '@testing-library/react';
import App from './App';

test("the initial input box is empty", ()=>{
  
  render(<App/>);
  const weightInput = screen.getByLabelText(/Weight (kg)/);
  expect(weightInput.value).toBe('0');//Checks that initial input box value is an empty string
  
});


