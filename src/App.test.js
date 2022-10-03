import { render, screen } from '@testing-library/react';
import App from './App';

test("the weight input box is in the DOM", ()=>{
  
  render(<App/>);
  const weightInput = screen.getByLabelText(/weight/i);
  expect(weightInput.value).toBeDefined();
  
});

test("the height input box is in the DOM", ()=>{
  
  render(<App/>);
  const heightInput = screen.getByLabelText(/height/i);
  expect(heightInput.value).toBeDefined();
  
});
