import { render, screen } from '@testing-library/react';
import App from './App';

// Smoke Test - Checks that jest is working!
//a describe block groups several tests together
describe("check that Jest is working", () => {
  test("that 2+2 is 4", () => {
      expect(2+2).toBe(4); // smoke test's assertion
  })
});

test("the initial input box is empty", () => {
  render(<App/>);
  const celsiusInput = screen.getByRole('textbox');//Gets the input box and assigns it to a variable
  expect(celsiusInput.value).toBe('');//Checks that initial input box value is an empty string
});


