# Coursework for Systems Testing

## About

The Body Mass Index (BMI) calculator is an application that allows the user to measure their body fat based on their height and weight. This gives the user the ability to work out if they are of a healthy weight based on how tall the user is and it applies to both adult men and women.
This BMI calculator will give you an estimated number rounded to two decimal places. Below are some of the key features I aim to display.
- Inputs that the BMI Calculator will accept.
- Outputs that the BMI Calculator will display.
- Accuracy testing that the value displayed is indeed correct.
- A clickable button to give the user a result. 

## 💼 Project Management 

<div align="center">

![]()
</div>

I used GitHub's Project Tracker for project management to manage issues and used the kanban methodology to maintain a workflow where I could continuously improve, visualise my workflow on a regular basis and sort tasks in order of priority.

---

## :heavy_exclamation_mark: Prerequisites

This project requires npm to execute the files, so ensure that it is installed.

### 1. Ensure node and npm are installed by running the following commands in your terminal:

```sh
node -v
```

```sh
npm -v
```

If they are not installed, follow the steps on [npm Docs](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm).

### 2. To run end-to-end tests, please install 'serve' globally in your machine:

```sh
npm install -g serve
```
If you are getting some errors after using that command and you are on Linux/MacOS, try running it as a superuser (sudo)

### 3. Afterwards, clone this repo:

```sh
git clone https://github.com/EDGENortheastern/olaniyioshinusi-systems-testing.git
```
Now, you should have everything that you need to proceed! Navigate into the folder you just cloned to find our code :)
  
## :book: Getting Started

### 0. Before trying out any of the next commands:

```sh
npm install
```
If you get some vulnerability warnings after executing this command, don't worry ;), it's the React team that has to do some catch-up...

### 1. In the project directory, you can run:

```sh
npm start
```

Runs the app in the development mode. :point_up_2: \
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### 2. To run logic and UI tests for my application, run the following command:

```sh
npm test
```
```sh
a
```
 
This launches the test runner in the interactive watch mode. :point_up_2: \
Clicking on the 'a' key runs all tests (excluding End-to-End tests).
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### 3. To view full tests and code coverage for my code:

```sh
npm test -- --coverage --watchAll=false
```

### 4. To run our E2E tests:
#### Note that the following command might be different depending on your Operating System:

```sh
npm run build
```
Builds the app for production to the `build` folder. :point_up_2: \
It correctly bundles React in production mode and optimizes the build for the best performance.

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

```sh
PORT=4571 serve -s build & npm run test:e2e
```
'PORT=4571' is used to set the port where the production server will be listening for incoming connections. I decided to use a very specific number so that it doesn't interfere with any of your servers <3 (especially if you are testing multiple apps for some scholar reason?) 

### 5. To customise your React configs in-depth and detach from react-scripts:

```sh
$ npm run eject
```

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

---

## Environments

Project has two environments, the Production environment and the Development environment. The testing team will be testing features in the development environment.

- [Live App](https://ornate-chaja-fd77bd.netlify.app/)
- [Dev Environment](https://dev--ornate-chaja-fd77bd.netlify.app/)


## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
