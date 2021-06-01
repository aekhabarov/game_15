import { createContext, useContext, useState } from "react";

const usersContext = createContext()


const UserContextProvide = ({children}) => {

  const [users, setUsers] = useState([])

  return (
    <usersContext.Provider value={setUsers, users}>
      {children}
    </usersContext.Provider>
  )
}


export default UserContextProvide

const useUserContext = () => useContext(usersContext)

export {
  useUserContext,
}
