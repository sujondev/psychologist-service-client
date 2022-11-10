import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './layout/Main';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login';
import SignUp from './Pages/SignUp/SignUp';
import AllServices from './Pages/Home/AllServices/AllServices';
import ServiceDetails from './Pages/Home/ServiceDetails/ServiceDetails';
import { Toaster } from 'react-hot-toast';
import AddServices from './Pages/AddServices/AddServices';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: "/login",
          element: <Login></Login>
        },
        {
          path: '/signup',
          element: <SignUp></SignUp>
        },
        {
          path: "/allservices",
          loader: () => fetch("http://localhost:5000/services"),
          element: <AllServices></AllServices>
        },
        {
          path: "/service/:id",
          loader: ({ params }) => fetch(`http://localhost:5000/service/${params.id}`),
          element: <ServiceDetails></ServiceDetails>
        },

        {
          path: '/addservice',
          element: <AddServices></AddServices>
        }


      ]
    }
  ])
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
      <Toaster></Toaster>
    </div>
  );
}

export default App;
