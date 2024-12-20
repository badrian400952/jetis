import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Home";
import TreeComponent from "./try";


export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="try" element={<TreeComponent />} />
      </Route>
    </Routes>

  )
}