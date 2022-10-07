import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

const Profile = () => {
  const { isAuthenticated, user } = useAuth0();
  console.log(user);

  //   const { name, email, picture, nickname } = user;

  return (
    <>
      {isAuthenticated && (
        <section>
          <h1>Hello World</h1>
          <article> {user?.picture && <img src={user.picture} />} </article>
          <h2>{user?.name}</h2>
          <ul>
            {Object.keys(user).map((objKey, index) => {
              return (
                <li key={index}>
                  {objKey}: {user[objKey]}
                </li>
              );
            })}
          </ul>
        </section>
      )}
    </>
  );
};

export default Profile;
