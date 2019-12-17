# Interview Question

## Background

We have created a protoytype/first draft of a page to manage users.

Right now, we are using a static sample user. We want to get user data from the provided endpoint. But first, we want to review our approach.

## Stories

1. Bugfix: Clicking on the the user's name, their city should display
2. Feature: Using the provided endpoint, show all users in the list

Example endpoint useage:

```js
fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(json => console.log(json))
```

3. Feature: Add username to each user.
   It should formatted like this: First Last - (username)
   Example: Leanne Graham - (Bret)

## Additional Steps

- Feature: Sort users alphabetically by username
