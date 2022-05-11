import { useParams } from "react-router-dom";

//useParams hook returns an object of key-value pairs of route parameters

function UserProfile() {
  const params = useParams();
  console.log(params);
  return <p1>{params}</p1>;
}

export default UserProfile;
