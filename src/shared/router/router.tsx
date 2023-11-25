import {
  HOME_ROUTE,
  INVOCATION_ROUTE,
  MY_INVOCATIONS_ROUTE,
  NEWS_ROUTE,
} from "./paths";
import { HomePage, InvocationPage, MyInvocationsPage, NewsPage } from "@/pages";
import { createBrowserRouter } from "react-router-dom";

export const userRoutes = [
  {
    path: HOME_ROUTE,
    element: <HomePage />,
  },
  {
    path: INVOCATION_ROUTE,
    element: <InvocationPage />,
  },
  {
    path: NEWS_ROUTE,
    element: <NewsPage />,
  },
  {
    path: MY_INVOCATIONS_ROUTE,
    element: <MyInvocationsPage />,
  },
];

export const router = createBrowserRouter(userRoutes);
