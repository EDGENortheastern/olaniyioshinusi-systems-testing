import { render, screen, fireEvent } from '@testing-library/react';
import renderer from 'react-test-renderer';
import userEvent from '@testing-library/user-event';

// Imports component
import App from './App';

/* These regression tests whether the DOM remains the same
or has changed. If there is a change and it is intentional,
then the snapshot for the change must be updated. */

it('checks that the App DOM is consistent', () => {
  const appTree = renderer.create(<App/>).toJSON();
  expect(appTree).toMatchSnapshot();
});

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

test("the we can type in height input box", () => {
  
  render(<App/>);
  const heightInput = screen.getByLabelText(/height/i);
  userEvent.type(heightInput, '173');
  console.log(heightInput.value);
  expect(heightInput.value).not.toBe('');
  expect(heightInput.value).toBe('173');
});

test("that we can type in weight input box", () => {
  
  render(<App/>);
  const weightInput = screen.getByLabelText(/weight/i);
  userEvent.type(weightInput, '79');
  expect(weightInput.value).toBe('79');
});

test("that BMI calculates correctly", () => {
  
  render(<App/>);
  const heightInput = screen.getByLabelText(/height/i);
  userEvent.type(heightInput, '173');
  const weightInput = screen.getByLabelText(/weight/i);
  userEvent.type(weightInput, '79');
  expect(weightInput.value).toBe('79');
  const frmSubmit = screen.getByTestId('form');
  fireEvent.submit(frmSubmit);
  const utput = screen.getByText(/You are/i);
  expect(utput).toBeInTheDocument();
});
