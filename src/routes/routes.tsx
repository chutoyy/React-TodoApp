import { RouterProvider, createBrowserRouter } from "react-router-dom"
import TodoPage from "../pages/TodoPage/todo.page"
import ProfilePage from "../pages/ProfilePage/profile.page"
import ErrorPage from "../pages/ErrorPage/error.page"

const router = createBrowserRouter([
    {
        path: "/",
        element: <TodoPage/>
    },
    {
        path: "/profile/:userTag",
        element: <ProfilePage/>
    },
    {
        path: "/@issue",
        element: <h1> Issue </h1>
    },
    {
        path: "*",
        element: <ErrorPage />
    },

])

function RouteMap(){
    return (
        <RouterProvider router={router}/>
    )
}

export default RouteMap