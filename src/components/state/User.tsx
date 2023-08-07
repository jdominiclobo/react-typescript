import React, { useState } from "react";

type AuthUser = {
  name: string;
  email: string;
};

export const User = () => {
  const [user, setUser] = useState<AuthUser | null>(null);

  const handleLogin = () => {
    setUser({
      name: "Joel",
      email: "joel@email.com",
    });
  };

  const handleLogout = () => {
    setUser(null);
  };
  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <div>User name is {user?.name}</div>
      <div>User email is {user?.email} </div>
    </div>
  );
};

export const UserLogin = () => {
  // A more effective way of writing this useState would be using type ascersion if you think there is an user always going to be there without loggin out.
  const [user, setUser] = useState<AuthUser>({} as AuthUser);

  const handleLogin = () => {
    setUser({
      name: "Joel",
      email: "joel@email.com",
    });
  };

  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <div>User name is {user.name}</div>
      <div>User email is {user.email} </div>
    </div>
  );
};
