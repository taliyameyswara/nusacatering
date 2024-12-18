import "./index.css";
import { RouterProvider } from "react-router-dom";
import { publicRoutes } from "./routes";
import { AuthProvider } from "./contexts/AuthContext";

function App() {
  return (
    <AuthProvider>
      <RouterProvider router={publicRoutes} />
    </AuthProvider>
  );
}

export default App;
