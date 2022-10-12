import React from "react";

import { RequireAuth } from "./requireAuth";
import {
    BrowserRouter,
    Routes,
    Route,
    Navigate
  } from "react-router-dom";

import Hotel from "./pages/Hotel";
import SearchList from "./pages/SearchList";
import UserProfile from "./pages/UserProfile";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";



export default function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/hotels" element={<SearchList/>} />
            <Route path="/details/:id" element={<Hotel/>}/>
              <Route
                path="/profile"
                element={
                  <RequireAuth>
                    <UserProfile />
                  </RequireAuth>
                  }
                />
              <Route path="/" element={<Navigate to="/home" replace />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    </BrowserRouter>
  )
}
