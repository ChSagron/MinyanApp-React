import { createBrowserRouter } from "react-router-dom";
import LogIn from "../logIn/Login";
import Register from "../logIn/Register";
import FindForm from "../findForm/FindForm";
import SynagogueForm from "../synagogueForm/SynagogueForm";
import MinyanForm from "../synagogueForm/MinyanForm";
import ResetPass from "../logIn/ResetPass";
import SynagogueView from "../synagogueForm/SynagogueView";
import FindResult from "../findFormResult/FindResult";
import OptionalMinyan from "../findFormResult/OptionalMinyan"
import NoOptionalMinyan from "../findFormResult/NoOptionalMinyan"
import MapUsers from "../findFormResult/MapUsers"
import minyansStore from "../../data/stores/minyansStore";



const Router = createBrowserRouter([
    {
        path: "",
        element: <LogIn />
    },
    {
        path: "/register",
        element: <Register />
    },
    {
        path: "/resetPass",
        element: <ResetPass />
    },
    {
        path: "/findMinyan",
        element: <FindForm />
    },
    {
        path: "/synagogueForm",
        element: <SynagogueForm />
    },
    {
        path: "/synagogueView",
        element: <SynagogueView />
    },
    {
        path: "/minyanform",
        element: <MinyanForm />
    },
    {
        path: "/findResult",
        element: <FindResult />,
        // ♥ nested routing
        children: [
            {
                path: "options",
                element: minyansStore.optionalMinyansList.length > 0 ? <OptionalMinyan /> : <NoOptionalMinyan />
            },
            {
                path: "map",
                element: <MapUsers />
            }
        ]
    }
])


export default Router;