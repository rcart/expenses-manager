[![Build Status](https://travis-ci.org/rcart/expenses-manager.svg?branch=master)](https://travis-ci.org/rcart/expenses-manager)

# EXPENSES MANAGER

This web application gives you a clean, basic and minimal interface to track your **Incomes** and **Expenses**. It was developed using React, Firebase and vanilla CSS.

## Features
* Add and remove Incomes/Expenses
* It shows the TOP Income/expense
* Responsive design for desktops, tablets and mobiles

## Code features
* ReactJS as Frontend
* PropTypes
* Firebase as backend
* Social networks authentication (GitHub and Facebook)
* Anonymous user for those that doesn't care about sign in
* Testing with Jest/Enzyme
* CI/CD using:
    * GitHub for repository
    * Travis-ci for Continuos Integration
    * Heroku for deployment

I really like the CI/CD portion of this app far from the app functionality and design themself. I just need to push the code to GitHub, then Travis does the testing and if everything pass, then it confirms the commmit on GitHub and Heroku pulls the **master** branch to deploy the new code. Neat.

Check the live version at: [Heroku](https://rcart-expenses-manager.herokuapp.com/)

## Bugs
* The app uses the new **dialog** HTML element that is currently not supported for some browsers, including Safari and IE but full supported by Chrome and Firefox. I'll have to add a [polyfill](https://github.com/GoogleChrome/dialog-polyfill) for this.
