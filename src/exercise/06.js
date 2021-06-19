// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  const [username, setUsername] = React.useState("");
  const handleSubmit = React.useCallback((event) => {
    event.preventDefault();
    onSubmitUsername(username);
  }, [username, onSubmitUsername]);
  const onChange = React.useCallback((event) => {
    const value = event.target.value;
    setUsername(value.toLowerCase());
  }, []);

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username-input" >Username:</label>
        <input id="username-input" type="text" value={username} onChange={onChange} />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
