# Interview Question

## Background

We have created a protoytype/first draft of a page to manage users.

Right now, we are using a static sample user. We want to get user data from the provided endpoint. But first, we want to review our approach.

## Steps

1. Bugfix: Clicking on the the user's name, their city should display
   Test: Add unit tests for `<User />`
2. Feature: Using the provided endpoint, show all users in the list.
   Use latest ES6 syntax to make the API call
   Test: Add unit tests for `<App />`

   Example endpoint usage:

```js
fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => response.json())
  .then((json) => console.log(json));
```

3. Feature: Add username to each user.
   It should formatted like this:

   ```
   Leanne Graham - (Bret)
   ```

4. Feature: Write reuable custom hook to get users from end point.
   Test: Write unit tests for custom hook.

## Additional Steps

5. Feature: Sort users alphabetically by username

### Good to know
