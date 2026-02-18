import { createContext } from "react"

const obj = {
    loggedInUser: "Default User"
}

const UserContext = createContext(obj);
export default UserContext;