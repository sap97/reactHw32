import  { createContext, useContext, useState } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [selectedUser, setSelectedUser] = useState(null);

  const selectUser = (user) => {
    setSelectedUser(user);
  };

  return (
    <div>
    <UserContext.Provider value={{ selectedUser, selectUser }}>
      {children}
    </UserContext.Provider>
    </div>
  );
};

export const useUser = () => {
  return useContext(UserContext);
};
