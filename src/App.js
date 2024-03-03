
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import ProjectsSec from './components/Projects/Projects';
import Cv from './components/Cv/Cv';

function App(props) {
  let routes = createBrowserRouter([
    { path: '/', element: <Layout />, children: [
      {index:true , element:<Home/> },
      {path:'about' , element:<About/> },
      {path:'contact', element:<Contact/>},
      {path:'projects', element:<ProjectsSec/>},
      {path:'cv', element:<Cv/>},
   
    ] }
  ])
  return <RouterProvider router={routes}>
  {props.children}
  </RouterProvider>
   
}

export default App;
