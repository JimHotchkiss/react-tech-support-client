- This is building off the tech-support-money-settings app that was built using HTML, CSS and Javascript
- Want to create a new app, that is more scalable, using React/Redux for the front-end, and Rails --api as the backend

* Installing Redux
* Redux allows you to `store` the data in one spot, and allows you to access that data from anywhere in the, by using `connect`

* Install Redux
  > yarn add redux

1.  So first, we want to create our store

- Create a store.js file, src/store.js
  - Import from Redux {createStore }into store.js # CreateStore - the `store` is where our data is stored # Define a functional component 'store', using createStore() > const store = createStore(
    manageReducers,
    compose(
    applyMiddleware(thunk),
    window.**REDUX_DEVTOOLS_EXTENSION** && window.**REDUX_DEVTOOLS_EXTENSION**()
    )
    );
    ** window.**REDUX_DEVTOOLS_EXTENSION** && window.**REDUX_DEVTOOLS_EXTENSION**() ** Are devtools
  - Import from Redux { compose, appplyMiddleware }

# applyMiddleware - helps handle middleware, like Thunk (asynchronise request)

# CombineReducers - helps split the app's reducing functions into seperate functions, each managing independent part of the state

# Compose - helps with composing function (multiple functions you may add to your app)

# thunk (from redux-thunk) - this helps handle asynchronise fetch request -> you can think of it as kinding of pausing React while the data is fetched

!! need to add redux-thunk

> yarn add redux-thunk

2. Wiring up Provide to pass this data down through the App component

- this will be done in index.js
  # import the store we just created
  # import { Provide } from 'react-redux' !!! Need to install react-redux
  > yarn add react-redux
  # pass `store` into Provider as a prop: store={store}

@ Now, action creators describe what's going to be done. These are functions(), and they pass the responsiblity to the reducers. The reducers update the state

Let's try it.

We'll define an action 'getAllUsers', and we will pass this into the componentDidMount(). This action will send a fetch() request to our backend. The action will then pass this retrieved data over to the reducers. The reduer will then update our store with the data

# create .env file to 'hide' your url, and use process.env.REACT_APP_API_URL

src/.env/REACT_APP_API_URL=http://localhost:3000/api/v1

# will change the App functional component into a class component by import {Component} from react

# we also need to use 'connect' from react-redux to connect our actions as props
