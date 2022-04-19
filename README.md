# Meloman

This is a simple pet project for searching for music. The main purpose of it is to demonstrate my developing skills. It represents a web app that uses 
an external api provided by [Spotify](https://developer.spotify.com/documentation/web-api/).This api is free for non commercial use, but it has has some restrictions, such as you are allowed listen only 30 seconds fragment of the track, and some tracks are not avaliable for listening.

It consists of home page wich represents last releases, pages for searching artists and albums and pages of specific artist or album. It also has a self made audio player for listening fragments of tracks.

The project is made on [React](https://ru.reactjs.org/) using [Redux](https://redux.js.org/) as a state manager with [axios](https://github.com/axios/axios) and [redux-thunk](https://github.com/reduxjs/redux-thunk) for making api requests.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


### `npm run dev`

Builds the app to the `dist` folder in a development mode.

### `npm run dev:watch`

Builds the app to the `dist` folder in a development mode in the interactive watch mode.

### `npm run build`

Builds the app to the `dist` folder in a production mode. All files are minified.
