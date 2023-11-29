import "./App.css";
import { RouterProvider } from "react-router-dom";
import { element } from "./routes/MainRoutes";
import Online from "./pages/Online/Online";
import BackToTopButton from "./components/blocks/BackToTopButton";

function App() {
  return (
    <div>
      <RouterProvider router={element} />
      <Online />
      <BackToTopButton />
    </div>
  );
}

export default App;
