import React from "react";

import { Router } from "./router/Router";
import { UserProvider } from "./providers/UserProvider";



export default function App() {
  return (
    <UserProvider>
      <Router />
    </UserProvider>
  );
}
