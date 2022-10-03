import { render, screen } from '@testing-library/react';
import App from './App';

test("the initial input box is empty", ()=>{
  render(<App/>);
  expect(celsiusInput.value).toBe('');//Checks that initial input box value is an empty string
  //expect(celsiusInput).toHaveStyle({backgroundColor: "beige"})
});


