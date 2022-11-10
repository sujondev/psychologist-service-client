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
import PrivateRoute from './PrivateRoute/PrivateRoute';
import MyReveiws from './Pages/MyReveiws/MyReveiws';
import Blogs from './Pages/Blogs/Blogs';

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
          loader: () => fetch("https://psychologist-service-server.vercel.app/services"),
          element: <AllServices></AllServices>
        },
        {
          path: "/service/:id",
          loader: ({ params }) => fetch(`https://psychologist-service-server.vercel.app/service/${params.id}`),
          element: <ServiceDetails></ServiceDetails>
        },

        {
          path: "/myreveiws",
          element: <MyReveiws></MyReveiws>
        },

        {
          path: "/blogs",
          element: <Blogs></Blogs>
        },

        {
          path: '/addservice',
          element: <PrivateRoute>
            <AddServices></AddServices>
          </PrivateRoute>
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
