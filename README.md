# Coursework for Systems Testing

## About

<div align="center">

<img src="https://user-images.githubusercontent.com/90407109/195615218-576a7c95-10fd-44f7-a54c-11a1f6cb7b35.jpg" width="554" height="399">

</div>

The Body Mass Index (BMI) calculator is an application that allows the user to measure their body fat based on their height and weight. This gives the user the ability to work out if they are of a healthy weight based on how tall the user is and it applies to both adult men and women.
This BMI calculator will give you an estimated number rounded to two decimal places. Below are some of the key features I aim to display.
- Inputs that the BMI Calculator will accept.
- Outputs that the BMI Calculator will display.
- Accuracy testing that the value displayed is indeed correct.
- A clickable button to give the user a result.

## Environments

Project has two environments, the Production environment and the Development environment. I tested features in the development environment.

- [Live App](https://ornate-chaja-fd77bd.netlify.app/)
- [Dev Environment](https://dev--ornate-chaja-fd77bd.netlify.app/)

## 💼 Project Management 

<div align="center">

<img src="https://user-images.githubusercontent.com/90407109/195608547-a226d783-9dca-4c58-b3a5-a77721829563.jpg" width="554" height="399">

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

# 💻 Coding Practice 
Throughout this project I ensured that the code is easily readable, whilst still maintaining the correct naming conventions; by using the camelCase practice throughout the entire code, and while still making sure that that all lines are correctly indented, ensuring that any other programmer could still read and understand the code. Furthermore, the code also has comments on every line of code to ensure that anyone can understand what is happening at every step of the code. I also made sure the code had the correct indentations throughout the entire code.

### camelCase

<img src="https://user-images.githubusercontent.com/90407109/195615304-6d5a11ff-dae2-4f13-9aa9-c219c93b7e8e.jpg" width="554" height="399">

### Comments

<img src="https://user-images.githubusercontent.com/90407109/195615374-722bd2c8-531f-4ed1-a7d4-fdc4ec5d4b8a.jpg" width="554" height="399">

---

### 📷 Regression Testing 

I used regression testing to maintain code base consistency. Regression testing creates a snapshot of the DOM (HTML) for each of the components, if any of those components change it will throw an error if not the test will pass.

### 📖 React Testing library 
![react testing library image](https://user-images.githubusercontent.com/90607602/149968583-1f49f002-711b-4ca7-9be0-a31edd29d1e8.png)

The react testing library is used for testing the UI in units. This is because react testing library is a set of helper functions that allow us to test React components without relying on their implementation details.

### Testing Logic 

For testing the logic of the website I used react testing library's Jest. Jest (standalone) is utilised to test the logic of the application, this is because Jest is an javascript testing framework designed with simplicity in mind and Jest supports projects coded using Babel, Typescript, Node, **React**, Angular, Vue and more; Making Jest an ideal testing framework for my project. I produced testing blocks that lead to huge code coverage using Jest within a short period of time. Unit testing using Jest makes my project more agile as it allows me to be assured that the code I have will not break easily as I have already found and prevented bugs earlier in the development cycle.

### End-to-End Testing

Puppeteer is a Node library which provides a high-level API to control Chrome or Chromium over the DevTools Protocol. I used Puppeteer to automate End-to-End testing. I have also integrated React E2E Testing with Puppeteer into a GitHub action, which allowed me to test my code with Puppeteer whenever I push or make a pull request.

## Manual Testing

Manual testing was completed on the application. The purpose of Manual Testing is to identify any bugs, issues, or defects in the website. Manual software testing helps to find critical bugs in the website design such as features not working as intended or not working at all. This allows to debug the website and improve features which did not have necessary code implemented to fix specific bugs which may occur when the user is using my BMI calculator to calculate body mass index. Although Manual website Testing requires more effort, I realised it was imperative to check automation feasibility; Additionally, Manual Testing concepts do not require knowledge of any testing tool.

### Resolution of an Issue

This is an example of an issue which was discovered while manually testing the design.

## Continuous Integration / Continuous Deployment

Netlify is used to continuously deploy my code or any changes, every time I push to the main branch, the website goes live with a new version. When a pull request is made in my workflow, netflify also checks if there are any warnings, and makes a preview for that specific pull request. This is beneficial because Netlify is incredibly quick and easy to use for getting started with my website, saving time and increasing productivity as a result. Netlify will also save more time as you can lock onto a main branch for main deployments. It can also deploy other branches and give you a URL to test those deploys, improving the amount of time it takes for you test your code before merging it to your main; Also giving you an easier option to manually test other branches. 

## GitHub Actions 

GitHub Actions is used to automate the testing pipeline every time code is pushed or a request is made. This allowed me to create workflows that build and test every pull request to the repository, or deploy my merged pull requests to production. GitHub Actions also helped improve my workflow by automatically adding the appropriate labels.

<img src="https://user-images.githubusercontent.com/90407109/195565469-b888fa80-296c-426c-a819-37df7ab5d26f.jpg" width="554" height="399">

### For additional examples of GitHub Actions click [here](https://docs.github.com/en/actions)

---

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
