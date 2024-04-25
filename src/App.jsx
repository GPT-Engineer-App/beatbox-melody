import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import Index from "./pages/Index.jsx";
import Register from "./pages/Register.jsx";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Header />
      <Box as="main" p={4}>
        <Routes>
          <Route exact path="/" element={<Index />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Box>
      <Footer />
    </Router>
  );
}

export default App;
