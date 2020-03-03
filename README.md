# Interview Question

## Background

We have created a protoytype/first draft of a page to manage users.

Right now, we are using a static sample user. We want to get user data from the provided endpoint. But first, we want to review our approach.

## Steps

1. Bugfix: Clicking on the the user's name, their city should display
1. Test: Add unit tests for `<User />`
1. Feature: Using the provided endpoint, show all users in the list
1. Test: Add unit tests for `<App />`
1. Feature: Add username to each user.
   It should formatted like this:
   ```
   Leanne Graham - (Bret)
   ```
1. Refactor: use [react hooks](https://reactjs.org/docs/hooks-intro.html) for `<App />` and `<User />`
1. Refactor: use [typescript](https://github.com/typescript-cheatsheets/react-typescript-cheatsheet)

## Additional Steps

1. Feature: Sort users alphabetically by username

### Good to know

Example endpoint usage:

```js
fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(json => console.log(json))
```
