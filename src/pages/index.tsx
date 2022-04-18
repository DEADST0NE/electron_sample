import { Routes, Route, Navigate } from "react-router-dom";

import { Home } from '../components';

const Pages = () => {
  return (
    <Routes>
      <Route path="*" element={<Navigate replace to="/home" />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  )
};

export { Pages };