import { RouterProvider } from "react-router-dom";
import { Toaster } from "sonner";
import { router } from "./routes/router";
const App = () => {
  return (
    <>
      <Toaster position="top-right" duration={2000} />
      <RouterProvider router={router} />
    </>
  );
};

export default App;
