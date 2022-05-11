import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

//useParams hook returns an object of key-value pairs of route parameters
function UserProfile() {
  const [user, setUser] = useState({});

  // Use `useParams()` and `useEffect)`
  // Load profile data from https://jsonplaceholder.typicode.com/users/${userId}

  const {userId} = useParams(); //or   const userId = useParams().userId;

  const controller = new AbortController();
  useEffect(() => {
    setUser({})
    async function getProFileData() {
      try {
        {
          const response = await fetch(
            `https://jsonplaceholder.typicode.com/users/${userId}`,
            { signal: controller.signal }
          );
          const profileData = await response.json();
          setUser(profileData);
        }
      } catch (error) {
        console.log(error.name);
      }
    }

    getProFileData();

    return function cleanup() {
      controller.abort();
    };
  }, [userId]); //important, this one is the one that is changing

  // No need to change anything below here
  if (user.id) {
    return Object.entries(user).map(([key, value]) => (
      <div key={key}>
        <label>{key}</label>: {JSON.stringify(value)}
        <hr />
      </div>
    ));
  }
  return "Loading...";
}

export default UserProfile;

// if path="/users/:userId/post/:postId

// function UserProfile() {
//   const params = useParams();
//   return <p>{JSON.stringify(params)}</p>;
//   // >>> {"userId":"params-can-be-anything","postId":"{even-things-that-look-like-JSON:\"value:}"}
// }

// function UserProfile() {
//   const params = useParams();
//   console.log(params); //
//   // http://localhost:3000/users/1/post/1 , run this link
//   // console.log will give {userId: '1', postId: '1'} and
//   return <p1>{params.userId} - {params.postId}</p1>;
//   // >> 1 - 1 , this will be displayed on page
// }
