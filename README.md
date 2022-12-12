<div id="top"></div>

<br />
<div align="center">
  <a>
    <img src="https://raw.githubusercontent.com/velidp/to-do-list/master/frontend/public/icon.ico?token=GHSAT0AAAAAABQ3TQD6MDS5CLUG4XKIU726YPW7UNA" alt="Logo" width="80" height="80">
  <a/>

  <h2 align="center">To Do List App</h2>

  <p>
    An awesome web app to track your tasks!
    <br />
    <a></a>
    <br />
    <br />
   
    ·
    <a target="_blank" href="https://github.com/velidp/to-do-list/issues">Report Bug</a>
    ·
    
  </p>
</div>

<hr/>


#### App is deployed at:  https://to-do-list-velid.netlify.app




## About The Project

<figure align="center">
  <img width="800" alt="homePage" src="https://raw.githubusercontent.com/velidp/to-do-list/master/images/HomePage.png?token=GHSAT0AAAAAABQ3TQD7J6W3DEED6KWT5HUKYPW7I7A">
  <figcaption>Home Page</figcaption>
</figure>

<br/>
<br/>
<br/>
To Do List App is a kind of app that generally used to maintain our day-to-day tasks or list everything that we have to do, with the last added tasks at the top of the list. Every task is described by title, description and deadline. 

There is three cateogries of tasks:
* To do tasks
* Done tasks
* Overdue tasks

App has clean and user frinedly interface. The app can be used with a Google Account, but it is possible to create an account specifically for this app.
The application is responsive and can be used on devices of all screen sizes.

<figure align="center">
  <img width="500" alt="form" src="https://raw.githubusercontent.com/velidp/to-do-list/master/images/Form.png?token=GHSAT0AAAAAABQ3TQD7GSJGIEW55RW6YZ2AYPW7HFQ">
  <figcaption>Form for signup</figcaption>
</figure>

### Built With

* [MongoDB](https://www.mongodb.com/)
* [Express](https://expressjs.com/)
* [React.js](https://reactjs.org/)
* [Node.js](https://nodejs.org/en/)

The frontend was developed using the React.  <a href="https://mui.com/">Material-UI</a> library and CSS were used for the layout of the application.
<a href="https://redux.js.org/">Redux</a> and <a href="https://www.npmjs.com/package/axios">Axios</a> were also used on the frontend.
All data is stored in the MongoDB database. The passwords of the created users are hashed using the bycritp library. 
Backend was developed using Node.js. 
The following libraries were used to develop the backend: express, moongose, cors, dotenv. 
The backend is deplolayed on <a href="https://www.heroku.com/">Heroku</a> and the frontend on <a href="https://www.netlify.com/">Netlify</a>. 



## Getting Started

### Installing dependencies and developing locally

```
# Clone this repository
git clone https://github.com/velidp/to-do-list.git
```

#### Run frontend
```
# Move to the project frontend folder
cd frontend

# in src/api/index.js file change API from heroku to http://localhost: + PORT on which backend will run

# install dependencies
npm install

# start local development server and watch for changes
npm start
```

#### Run backend
```
# In another terminal
# Move to the project backend folder
cd backend

# create .env file and add PORT and MongoDB url string to it, for example:
PORT = 5000
CONNECTION_URL = mongodb+srv://<name>:<password>@todolist.s381a.mongodb.net/myFirstDatabase?retryWrites=true&w=majority


# install dependencies
npm install

# start local development server and watch for changes
npm start

```


<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request



<!-- CONTACT -->
## Contact

[@LinkedIn](https://www.linkedin.com/in/velid-posko/) 
<br/>
velid.sm@gmail.com

<p align="right">(<a href="#top">back to top</a>)</p>


