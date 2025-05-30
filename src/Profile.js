import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }
  return (
    isAuthenticated && (
      <div>
        <h1 className="font-bold font-mono text-3xl ml-6 mt-6 mb-0">Hello, {user.name}</h1>
      </div>
    )
  );
};

export default Profile;