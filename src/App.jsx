import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "./Components/LoginButton";
import LogoutButton from "./Components/LogoutButton";
import Profile from "./Components/Profile";

function App() {
  const { isLoading, error } = useAuth0();

  if (isLoading) {
    return <h1>Loading....</h1>;
  }

  if (error) {
    return <h2>Authentication Error</h2>;
  }

  return (
    <>


      {!isLoading && !error && (
        <>
          <LoginButton></LoginButton>

          <LogoutButton></LogoutButton>
          <Profile />
        </>
      )}
    </>
  );
}

export default App;
