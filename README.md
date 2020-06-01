
Tech Details:
- I have used node server to insert records in database
- Use Hooks and functional components.
- Use App context to maintain the state of Application rather than using Redux.
- material ui for design, though it was not really needed


What Application Includes:
- Get Illnesses list from API.
- Once user selects the the illness, ask to select level of pain
- Once level of Pain is selected, get all hospitals filtered on level of pain same as user and show the waiting time in ascending order
- When user selects level of pain make an insertion in database. Just storing data everytime user selects level of pain, user id is auto incremented id for sake of test

What is not included:
- I havent written any unit tests for hooks, So didn't spend time in writing those. To be honest I couldnt find much documentation on writing tests with hooks.


What could've been better:
There are still tons of things to make it better but here are some on top of my head
- Unit tests
- Support for Lazy loading of illnesses and hospitals
- Multiple context support
- Docker support to avoid app setup hassle
- A proper model controller setup for node server
- May be generalized css to use for common elements inside components.



How to Run Application:

- Go to project directory run `npm install && npm start` for front end
- cd server and run `npm install && npm start` for your node server
- import db dump from server/dump.sql file on your local and change db connection details in db.js

NOTE: I have recently started to learn react, so made the application in React to see how it goes.
I tried my level best to use best practices for React, but I am still getting there. 
