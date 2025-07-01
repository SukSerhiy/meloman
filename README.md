# [Meloman :notes: :headphones:](https://meloman1.netlify.app)

A simple portfolio for muusic searching.

Uses free [Spotify](https://developer.spotify.com/documentation/web-api/) API. This part of API is free so I can not aviod some restrictions such as not all tracks are avaliable for listening and those what are avaliable provides only 30 sec fragment.

The following use cases are implemented:

* Get list of last releases
* Search albums and artists by the key world
* Open album page with information about album and trak list
* Open artist page with artist info including top tracks, albums and related artists

Made using following technologies and libraries: [React](https://ru.reactjs.org/), [Redux](https://redux.js.org/), [axios](https://github.com/axios/axios), [redux-thunk](https://github.com/reduxjs/redux-thunk), [react-testing-library](https://testing-library.com/docs/react-testing-library/intro/), [vitest](https://vitest.dev/)

## Available Scripts

Following commands are avaliable

### `npm run dev`

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm run build`

Builds the app to the `dist` folder in a production mode.

### `npm run test`

Run tests.
