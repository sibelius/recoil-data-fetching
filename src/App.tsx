import React, { Suspense } from 'react';
import UsernameInput from './UsernameInput';
import GithubUser from './GithubUser';

const App = () => {
  return (
    <>
      <UsernameInput />
      <Suspense fallback={<div>Fetching user data...</div>}>
        <GithubUser />
      </Suspense>
    </>
  );
}

export default App;
