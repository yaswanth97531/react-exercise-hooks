import React from 'react';

import sampleUser from './sampleUser.json';
import User from './components/User';

const App = () => {
  return (
    <div>
      <h1>Users</h1>
      <ul>
        {/* write code to show the list of users fetched from above  */}
        <User user={sampleUser} />
        <User user={sampleUser} />
        <User user={sampleUser} />
      </ul>
    </div>
  );
};

export default App;
