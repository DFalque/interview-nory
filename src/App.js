import "./App.scss";
import Nav from "./components/Nav";
import Home from "./pages/home";

import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <Nav />
        <Home />
      </div>
    </ChakraProvider>
  );
}

export default App;
