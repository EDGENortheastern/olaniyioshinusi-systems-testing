import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test("the weight input box is in the DOM", () => {
  
  render(<App/>);
  const weightInput = screen.getByLabelText(/weight/i);
  expect(weightInput).toBeInTheDocument();
  
});

test("the height input box is in the DOM", () => {
  
  render(<App/>);
  const heightInput = screen.getByLabelText(/height/i);
  expect(heightInput).toBeInTheDocument();
  
});

test("the weight input box is empty at the start", () => {
  
  render(<App/>);
  const weightInput = screen.getByLabelText(/weight/i);
  expect(weightInput.value).toBe("");
  
});

test("the height input box is empty at the start", () => {
  
  render(<App/>);
  const heightInput = screen.getByLabelText(/height/i);
  expect(heightInput.value).toBe("");
  
});

test("that button submit exists in the DOM", () => {
  
  render(<App/>);
  const btnSubmit = screen.getByText(/submit/i);
  expect(btnSubmit).toBeInTheDocument();
  
});

test("that button reload exists in the DOM", () => {
  
  render(<App/>);
  const btnReload = screen.getByText(/reload/i);
  expect(btnReload).toBeInTheDocument();
  
});

test("that output article exists in the DOM", () => {
  
  render(<App/>);
  const artOutput = screen.getByRole("article");
  expect(artOutput).toBeInTheDocument();
  
});

test("that output paragraph exists in the DOM", () => {
  
  render(<App/>);
  const pOutput = screen.getByTestId("output");
  expect(pOutput).toBeInTheDocument();
  
});
