# Yabber

## [View live site here](https://yabberaway.herokuapp.com/#/)

![Homepage Demo](gifs/homepage.gif)

## About

Yabber is a clone of Yammer, an Enterprise Social Network designed to help companies openly connect and engage
across the organization.  

Are you tired of your clunky email inbox? Are you looking to foster improved collaboration within your workplace? 

If so, you've come to the right place! 

## Technologies
Yabber is a full-stack web application built on a backend utilizing **Ruby on Rails** and **PostgreSQL**. The frontend is implemented with **Javascript**, **React**, and a **Redux** architectural framework. It is styled with **HTML**, **CSS**, and a hefty amount of patience and exasperation. 

## Features

### User Authentication

Sign-up and log-in were built utilizing the Ruby BCrypt gem, a hashing algorithm, to ensure the secure enterprise experience companies expect. 

In addition, Yammer is a private social network (unike Facebook or other personal social networks). Thus, 
it restricts personal email addresses. 

Yabber offers the same functionality. 

![Homepage Demo](gifs/signup_error.gif)

To accomplish this, I wrote my own custom error handling/message in my User Model and Controller on the backend. 

![Model](gifs/model.png)
![Controller](gifs/controller.png)

### Posts and Comments

Users can create/delete posts and reply to other users' posts/comments. 

### Groups

In addition, users can also create/delete posts and comments relegated for specific groups. They can also navigate to specific groups and see the filtered posts relevant for the specific group. 

### Future Features
* Enhanced Group(s) functionality
* Profile pages
* Likes
* Search
* Inbox

