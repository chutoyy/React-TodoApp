import { RouterProvider, createBrowserRouter } from "react-router-dom"
import TodoPage from "../pages/TodoPage/todo.page"
import ProfilePage from "../pages/ProfilePage/profile.page"
import ErrorPage from "../pages/ErrorPage/error.page"
import Document from "../components/Document"
import DefaultPage from "../pages/DefaultPage/default.page"
import FreelancePage from "../pages/FreeLancePage/freelance.page"


const router = createBrowserRouter([
    {
        path: "/",
        element: <Document/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: "/",
                element: <DefaultPage/>
            },
            {
                path: "/todo",
                element: <TodoPage />
            },
            {
                path: "/profile/:userTag",
                element: <ProfilePage />
            },
            {
                path: "/@issue",
                element: <h1> Issue </h1>
            },
            {
                path:"/freelance",
                element: <FreelancePage/>
            }
        ]
    }
])

function RouteMap() {
    return (
        <RouterProvider router={router} />
    )
}

export default RouteMap