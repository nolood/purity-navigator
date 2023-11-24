import { HOME_ROUTE } from "./paths";  
import { createBrowserRouter } from "react-router-dom";
import {HomePage} from "@/pages/home";

export const router = createBrowserRouter([
  { 
    path: HOME_ROUTE, 
    element: <HomePage/>,
  }
])
