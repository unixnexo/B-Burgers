import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";
import "./index.css";
import MainLayout from "./layouts/MainLayout";
import NotFound from "./pages/NotFound";
import Menu from "./pages/Menu";


function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route path="/" element={<Menu />}/>
        <Route path="*" element={<NotFound />} />
      </Route>
    )
  )

  return <RouterProvider router={router}/>;
}

export default App
