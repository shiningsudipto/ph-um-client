import MainLayout from "../src/components/layouts/MainLayout.tsx";
import ProtectedRoute from "./routes/ProtectedRoute.tsx";
function App() {
  return (
    <>
      <ProtectedRoute>
        <MainLayout />
      </ProtectedRoute>
    </>
  );
}

export default App;
