# CyHub - Repository Manager

> A Simple React App that allows the user to view the most popular repositories, and manage their own repositories.

### Features

1. Overview Tab - Displays the most popular repositories
2. Repository Tab - Displays repositories in order of most recently updated 

  * Users are also able to filter through the results in the repository tab through the input field

3. Unit Tests - Simple Tests to verify Code is running correctly
4. Profile Section - Displays a default profile avatar and the user name of profile currently in view

### Authors

Justen Quirante

### Setup Instructions

> 1. Fork this repo
> 1. Clone your forked copy of this repo
>    - `git clone https://github.com/jquirante/cy-ai-take-home.git`
> 1. Change directory into the newly cloned repo
>    - `cd`
> 1. Install dependencies 
>    - `npm install`
> 1. Start dev server
>    - `npm start`
> 1. Open a browser and navigate to `localhost:3000`

>> To Run Tests, use "npm test" in terminal/command prompt. Press a and enter to rerun all test files.

### Libraries/Tools Used

> # React
> Main Front End Library to create the interface of the web application. I used it for the ease of use and performance

> # CSS
> Main language used for styling application components

> # JavaScript
> Used to add functionality to React Components. Javascript and React go hand in hand

> # Create React App
> Boiler Plate code from Facebook to quickly configure the React application

> # Materialize CSS
> Used for quick styling improvements for the following:
>> 1.  Font
> 2. Navigation Menu
> 3. Grid/Layout

> # Axios
> Library to assist with AJAX requests to the GitHub Open API

> # React-Router-DOM
> Enhances React functionality by routing users to a specific url and rendering a specific component based on that url path or route
>> Ex: The Overview Component (Component that contains the list of repos) in the "Overview Tab" is rendered for the base url "/" while the Repositories Component (Similar component for rendering repos) in the "Repositories Tab" are rendered for a url that matches "/repositories"

># Enzyme
> React-testing Library. Assists with rendering components and accessing component members while testing

> # Jest
> Runs our Unit Tests as React's default testing library
