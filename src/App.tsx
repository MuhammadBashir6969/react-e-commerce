import { FilterProvider } from "./Components/FilterContext";
import MainContent from "./Components/MainContent";
import SideBar from "./Components/SideBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="flex h-screen">
        <SideBar />
        <div className="rounded w-full flex justify-between flex-wrap">
          <FilterProvider>
            <Routes>
              <Route path="/" element={<MainContent />} />
            </Routes>
          </FilterProvider>
        </div>
      </div>
    </Router>
  );
}

export default App;
