import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Courselist from "./Courselist";
import Sidebar from "./Sidebar";
import { Toaster } from "react-hot-toast";

function Dashboard() {
  return <h1 className="text-2xl font-bold">Dashboard Page</h1>;
}

function POS() {
  return <h1 className="text-2xl font-bold">POS Page</h1>;
}

function App() {
  return (
    <Router>
      <Toaster position="top-right" />

      <div className="flex min-h-screen ">
        
        {/* LEFT SIDEBAR */}
        <Sidebar />

        {/* RIGHT CONTENT */}
        <div className="flex-1 p-6">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/pos" element={<POS />} />
            <Route path="/courses" element={<Courselist />} />
          </Routes>
        </div>

      </div>
    </Router>
  );
}

export default App;
