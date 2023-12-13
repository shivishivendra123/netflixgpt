import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./Login";
import Browse from "./Browse";
import GptSearch from "./GptSearch";


const Body = ()=>{

    const appRouter = createBrowserRouter([
        {
            path:"/",
            element:<Login/>
        },
        {
            path:"/browse",
            element:<Browse/>
        },
        {
            path:"/GptSearch",
            element:<GptSearch/>
        }
    ])

    return (
        <div>
            <RouterProvider router={appRouter} />
        </div>
    )
}
export default Body;