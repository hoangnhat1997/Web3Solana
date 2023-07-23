import { TwitterProvider } from "./src/context/context";
import Home from "./src/screen/home";
const App = () => {
  return (
    <TwitterProvider>
      <Home />
    </TwitterProvider>
  );
};

export default App;
