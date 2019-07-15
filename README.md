# PlayBrain

## Specs

1. A user can vote for up to 3 players in total from 1 region. Those 3 players should belong to the chosen country only, and multiple countries cannot be voted for.

2. An admin user can close the voting.
   Non-logged users cannot access the voting but can see options and results.

3. Once the voting is closed, no user will be able to vote anymore, but instead they will be able to see the percentage of votes for each participant.

4. There is no need to make a login system for the purpose of this test. It is possible to mock the user and admin user. The admin user can have a button to close the voting.

5. The data of the application can be found in the snippet, and should be used when calculating the percentage of votes.

## Guide

### Login

Root directory has login functionality.

Username **adamgoodapp** has admin rights, username **michael** has normal user priveladges and anyone else will be set as a guest.

## Future changes

Currently the voting and results are handled by one Component, **Player**.

The results and voting functionality should be split into seperate files and routing should add seperate routes to give the user a better guided experince, for example the User can choose a region first and then be guided to voting as a seperate screen. This will also further cut the Player component complexity down.

## Built with

**React**

**Redux**

**TypeScript**

**Jest**

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `yarn test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.
