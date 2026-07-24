import AppRoutes from "./routes/AppRoutes";
console.log(import.meta.env.VITE_API_BASE_URL);
function App() {
  return <AppRoutes />;
}

export default App;