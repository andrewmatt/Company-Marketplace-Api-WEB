# Company Marketplace

-------

Company-Markeplace is an E-Commerce App that uses React&Redux for the frontend and Elixir with the Phoenix Framework for the backend. The communication between apps is done via Http requests and responses (Routes can be found in mix.exs). 

Features: The application has the following functional pages: Login, Register (via Verification Email), Dashboard Page, Company Profile, Edit Company, and a Products CRUD page.

In Elixir I used guardian for authentication combined with comeonin for password hashing and bamboo, bamboo_smtp for mailing using gmail sever. I also used CORSPlug to add Cors. I followed a token strategy using Bearer for login and I also generated a token for account-verification through email. The database used is Postgres and the Model Contains 3 main classes: User, Company and Product. We send data from the front-end using react-redux actions and we use it in the Elixir controllers, and then, we send back a response that we use to update our reducer (a Redux store is used to hold data). 

In the Web Application I used React-Router to create the Sidebar navigation Menu and the Navbar Links. I also used Redux Form, Redux-Auth-Wrapper, React-Router-Redux and others. For styles I used Bootstrap 4 with Font-Awesome 4.7.

-------

To start your React-Redux Client:
  * Unpack the Archive
  * cd Company-Marketplace-Project-WEB-master
  * npm install
  * npm start
  
If you have not opened the server yet follow the steps on this link:
[Click Here](https://github.com/andrewmatt/Company-Marketplace-Project-API)

Check localhost:3000/ in order to use the app.

Firefox recommended for the best viewing experience.

*Not fully optimized yet

-------

App generated with create-react-app:
https://github.com/facebook/create-react-app

Resources: 
* https://redux.js.org/
* https://reactjs.org/



