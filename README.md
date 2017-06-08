![Imgur](http://i.imgur.com/HyZptil.jpg)
# CFA-Sydney-Escape
This is a website built for the 3rd Major Project of the Coder Factory Bootcamp. I have met some clients who are interested in a solution for their Escape Room business opening up in Sydney. They would like to have a website to provide information to potential customers, as well as a well-design booking and payment system, as there is to be no Point-of-contact sales on the premises. There will be 1 room released initially with a second to follow, so the website will accomodate for two rooms, and some features that they would like includes statistics which display taken directly from the database, and the contact mailer working.

The solution is a React front-end and a node/express back-end with various API endpoints that will support the "ledger" of all runs via the database, which the front-end can make calls to. It will also support an intgrated payment and booking system as requested, which will heavily rely upon the back-end to function (at which point lots of data validation with be implemented to prevent any errors). The static website will also act as a hub for potential customers to learn about escape rooms and find more information about the client's business on top of bookings and payment. MongoDB (via mLab) will be used for the database, Stripe (and PayPal in the future) for payments, Mailgun for the mailing, and heroku/s3 for website hosting for now. The website will also be mobile friendly as requested
### Usage
Unfortunately there currently is no production version as there are some issues upon uploading to heroku/s3.
 
If you would like download and visit the website locally:
 
In your terminal, type in 
```
git clone https://github.com/abazilla/CFA-Sydney-Escape.git
```
Cd into the folder
Cd into the server folder
```
npm install
```
```
npm start
```
Keep that terminal running, and Cd back out and into the client folder
```
npm install
```
```
Run npm start // (note, it will say that another server is already running. Just say yes to that and another server will run on localhost:3001
```
Visit `localhost:3001` on your browser
 
### Design
##### Trello 
Contains notes, some client interactions, User stories, costing/budgeting: https://trello.com/b/KYb1qEnM/escape

![Imgur](http://i.imgur.com/fzxElW3.png)
##### Entity Relationship Diagram
I went through various ERD's as I had to redesign the data schema a few times after working on the website and booking/payment system.
![Imgur](http://i.imgur.com/PuyN5F4.png)
##### User Journeys
The User Journeys for the two most likely scenarios that our users would follow: A User booking an Escape Room and an Admin wanting to manipulate the data.
![Imgur](http://i.imgur.com/ivwBHG5.png)

### Building
The website building process was a very lengthy process, and involved a lot of learning. 
##### Favourite Parts
 - Getting the connections between the front end and back end working
 - Styling the website with re-bulma and editing images
##### Challenges
 - Asynchronous issues with React - upon providing your details and payment for a booking, sometimes the website will create a booking into the database, but will not update the availablity of the booking slot (or vice versa). This is likely due to the asynchronous nature of React, meaning that the website refreshes before finishing an action.
 - Severe overestimation of what I could complete in the two weeks. The following list are the things I had agreed on to complete with my client, however was not able to finish in time
    -  Statistics
    -  Mobile Friendliness
    -  Contact/Mailgun
    -  Fully functional Admin Dashboard
    -  Data validation
    -  Fully functional booking & payment system (current version is very limited and is not robust)
 - Uploading to Heroku: The following error is what I get when I try to upload my app to heroku, or run `yarn run build`, and my teacher and I could not find any way to fix it. It is likely I will have to remake the website without the `re-bulma` package to prevent this error from occuring:
     ```
    Unexpected token: operator (>) [./~/re-bulma/lib-es/helper/helper.js:1,0][static/js/main.fb0e2409.js:90,28]
     ```
