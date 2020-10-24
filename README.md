# Unit 11 Express Homework: Note Taker

## Description

For this assignment, we were told to make an application on a mysql server that helps you add, post, and delete notes on Note-Taker. We use express to be able to make it work on the mysql server. With that being said we used api/notes to be able to add, post and delete notes in the application.  The criteria is the following: 

* The application frontend has already been created, it's your job to build the backend and connect the two.

* The following HTML routes should be created:

  * GET `/notes` - Should return the `notes.html` file.

  * GET `*` - Should return the `index.html` file

* The application should have a `db.json` file on the backend that will be used to store and retrieve notes using the `fs` module.

* The following API routes should be created:

  * GET `/api/notes` - Should read the `db.json` file and return all saved notes as JSON.

  * POST `/api/notes` - Should receive a new note to save on the request body, add it to the `db.json` file, and then return the new note to the client.

  * DELETE `/api/notes/:id` - Should receive a query parameter containing the id of a note to delete. This means you'll need to find a way to give each note a unique `id` when it's saved. In order to delete a note, you'll need to read all notes from the `db.json` file, remove the note with the given `id` property, and then rewrite the notes to the `db.json` file.

## User Story

AS A user, I want to be able to write and save notes

I WANT to be able to delete notes I've written before

SO THAT I can organize my thoughts and keep track of tasks I need to complete

## Business Context

For users that need to keep track of a lot of information, it's easy to forget or be unable to recall something important. Being able to take persistent notes allows users to have written information available when needed.

## Acceptance Criteria

Application should allow users to create and save notes.

Application should allow users to view previously saved notes.

Application should allow users to delete previously saved notes.

## Deploying the App

You will not be able to deploy your server side code on GitHub pages. This app should be deployed on Heroku. Carefully follow the [Heroku Guide](../04-Supplemental/HerokuGuide.md) for getting your app deployed on Heroku.



## Submission on BCS

You are required to submit the following:

*  Link to Heroku Deployed App: https://glacial-wave-75469.herokuapp.com/

* The URL of the GitHub repository : https://github.com/garrib10/Note-Taker


## Screenshots 

<img width="1440" alt="Screen Shot 2020-10-22 at 7 56 20 PM" src="https://user-images.githubusercontent.com/68867054/96941604-d96c2c00-14a0-11eb-8030-1ad31a454001.png">

<img width="1440" alt="Screen Shot 2020-10-22 at 7 53 58 PM" src="https://user-images.githubusercontent.com/68867054/96941660-06b8da00-14a1-11eb-8fd7-44090fbf307c.png">


<img width="1438" alt="Screen Shot 2020-10-22 at 7 54 39 PM" src="https://user-images.githubusercontent.com/68867054/96941637-f0128300-14a0-11eb-915d-35329a0aa104.png">

- - -
© 2019 Trilogy Education Services, a 2U, Inc. brand. All Rights Reserved.
