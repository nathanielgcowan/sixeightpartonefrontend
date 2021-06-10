
[*] A link to your project repo, with code for your Rails backend and HTML / CSS / JavaScript frontend.
    https://github.com/nathanielgcowan/sixeightpartonefrontend
[*] A README.md file describing your application
[*] A Blog Post about your application
[] A 2-4 minute Video Demo introducing your application

[*] The application must be an HTML, CSS, and JavaScript frontend with a Rails API backend.
[*] All interactions between the client and the server must be handled asynchronously (AJAX) and use JSON as the communication format.

[*] The JavaScript application must use Object Oriented JavaScript (classes) to encapsulate related data and behavior.

[*] The domain model served by the Rails backend must include a resource with at least one has-many relationship.

[*] The backend and frontend must collaborate to demonstrate Client-Server Communication.
[*] Your application should have at least 3 AJAX calls, covering at least 2 of Create, Read, Update, and Delete (CRUD).
    yes, post, patch, and (delete, create, update, destroy)
[*] Your client-side JavaScript code must use fetch with the appropriate HTTP verb, and your Rails API should use RESTful conventions.

JavaScript
[*] Use classes and functions to organize your code into reusable pieces.
[*] Translate JSON responses into JavaScript model objects using ES6 class or constructor function syntax.
[*] Use ES6 features when appropriate (e.g. arrow functions, let & const, rest and spread syntax).
Rails
[*] Follow Rails MVC and RESTful conventions. That means, for example, that a request GET /puppies ought to be handled by the PuppiesController, fetch puppies from the database using a Puppy Active Record model, and return a list of puppies as JSON.
[*] Well-named variables and methods
[*] Short, single-purpose methods
Git
[*] Aim for a large number of small commits - commit frequently!
[*] Add meaningful messages to your commits. When you look back at your commits with git log, the messages should describe each change.
[*] Don't include changes in a commit that aren't related to the commit message
[*] You must submit a link to the repo with the code for your project. There is no requirement for how you decide to structure the code within that repo, but in the past, students have had success using a structure like:

    javascript-project/
    backend/
        app/
        (...other rails files and folders)
    frontend/
        index.html
        style.css
        index.js
    README.md
[*] Explain your code from execution point to exit point.
- In particular, the JavaScript Fundamentals concepts your reviewer may ask about include:
    variables
    data structures
    functions
    hoisting
    scope
    context
    this
    closures
    ES6 syntax
    let, const
    arrow functions

- These are the skills and knowledge that you should aim to demonstrate through the project review.
    Explain how Rails routes a request to a controller and method based on the URL and HTTP verb
    [*] Use render json: to render serialized JSON
    [*] Select, Create, and Modify DOM nodes
    [*] Attach listeners to DOM nodes to respond to user interaction
    [*] Use preventDefault to control form submit behavior
    [*] Use fetch with 'GET', 'POST', 'PATCH' & 'DELETE' HTTP methods
    [*] Create a JavaScript object with ES6 class syntax
    Instantiate JavaScript objects and call methods on them.