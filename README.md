# Task Master

## Inspiration
As students, we've all struggled with time management, procrastination, and keeping track of our assignments in between our other responsibilities. To avoid these problems, we created Taskey to parse, chunk, and schedule our assignments into our calendars.

## What it does
Taskey uses GPT-3.5 to convert a user's homework assignment into smaller tasks of manageable lengths, and automatically populates Google Calendar with the tasks whenever the user has free time available to work on their homework assignment within some predetermined constraints.

## How we built it
We used Python with Flask to serve our backend and React for our frontend, OAuth integration to access Google Calendar, and GPT-3.5 to parse a given homework assignment into tasks.

## Challenges we ran into
Only one person on our team had ANY frontend experience, which made creating the frontend difficult. We also didn't have any experience with non-static webpages, so learning to integrate react with our python backend was a new experience. We also had a good amount of trouble figuring out how to utilize OAuth for our authentication. For the backend, it was difficult to produce consistent outputs with OpenAI, and our prompts took constant iterating. We also struggled with both OpenAI and Google Calendar's APIs, so that was a learning experience for us.

## Accomplishments that we're proud of
Overall, this entire project was a huge accomplishment, both as a hackathon but overall as well. This was the first hackathon for half of our team, and the first time we made a practical web-app project. Figuring out how to make and integrate a frontend was a huge task we were able to surmount. We struggled a lot also with OAuth, spending over 8 hours trying to figure it out and get it working with our project. At the end of the day we are happy to say we created an app we are proud of, and can be a significant contribution to student quality of life.

## What we learned
We learned how to use API's for OpenAI and Google Calendar. We learned a lot of React, and also how to integrate it with a backend for a full fledged app. For authentication we learned about OAuth by google and how to use that as a safe way to handle user logins. We also learned of different ways to utilize GPT-3.5, in our case for parsing and processing of data. Also combining OAuth and Google Calendar let us automate otherwise tedious tasks regarding calendars.

## What's next for Taskey
We want to fine-tune the amount of time allocated for each task to the abilities of the user. We plan to do this by offering users a personality survey where they can specify how long it takes them to complete tasks in certain subjects and how long they want to focus on a specific task. In addition, we want to introduce a reward system for users who complete their assignments during the blocks of time specified. 
