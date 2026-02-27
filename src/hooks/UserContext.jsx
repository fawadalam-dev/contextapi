import React, { createContext, useContext, useState } from "react";

const UserContextprovider = createContext();

const UserContextWrapper = ({ children }) => {
    const [userinfo, setUserinfo] = useState({ fullname: "Fawad Alam" });
    return (
        <UserContextprovider.Provider value={{ userinfo: userinfo, setUserinfo: setUserinfo }} >
            {children}
        </UserContextprovider.Provider>
    )
}
export default UserContextWrapper;
export const useUserContext = () => {
    return useContext(UserContextprovider)
};