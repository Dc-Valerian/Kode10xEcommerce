import "./App.css";
import { RouterProvider } from "react-router-dom";
import { element } from "./routes/MainRoutes";
import Online from "./pages/Online/Online";
import BackToTopButton from "./components/blocks/BackToTopButton";
import { Suspense } from "react";
import LoadingPage from "./pages/LoadingPage/LoadingPage";

function App() {
  return (
    <Suspense fallback={<LoadingPage />}>
      <RouterProvider router={element} />
      <Online />
      <BackToTopButton />
    </Suspense>
  );
}

export default App;
