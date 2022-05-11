import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import UserProfile from "./UserProfile.js";

function NewUser() {
  return <p>Unable to create a new user</p>
}
function DefinitelyNoMatch() {
  return <h1>404 Not Found</h1> 
}

function App() {
  return (
    // No need to add <Router>, it has been added to ./index.js
    <div className="App">
      <Link to="/user/new">New User</Link>
      {Array(10)
        .fill()
        .map((ignoredValue, index) => index + 1)
        .map((id) => (
          <div key={id}>
            <Link to={`/user/${id}`} data-testid={`user-${id}`}>
              User{id}
            </Link>
          </div>
        ))}
      <main>
        <Switch>
          <Route exact path="/user/:userId">
            <UserProfile />
          </Route>
          <Route exact path="/user/new">
            <UserProfile />
          </Route>
          <Route>
            <DefinitelyNoMatch />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
