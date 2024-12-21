import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Home from "./pages/Home";
import Settings from "./pages/Settings";
import Analytics from "./pages/Analytics";
import Chat from "./pages/Chat";

function App() {
  return (
    <Router>
      <Dashboard>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/analytics" element={<Analytics />} />
        </Routes>
      </Dashboard>
    </Router>
  );
}

export default App;
