import { Route, Routes } from "react-router";
import Mission from "./components/Mission";
import MissionList from "./components/MissionList";
import Navbar from "./components/NavBar/navbar";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route strict exact path="/" element={<MissionList />} />
        <Route strict exact path="/:id" element={<Mission />} />
      </Routes>
    </div>
  );
}

export default App;
