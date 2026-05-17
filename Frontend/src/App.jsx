import { Route, Routes } from "react-router-dom";

const App = () => {
  return <div>
    <Routes>
      <Route path="/about" element={<h1>Hi</h1>}/>
    </Routes>
  </div>;
};

export default App;
