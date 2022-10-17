import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Header } from "./components";

import { VideoPlayer } from "./pages";
import scss from "./App.module.scss";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/videoplayer" element={<VideoPlayer />} />
      </Routes>
    </div>
  );
}

export default App;
