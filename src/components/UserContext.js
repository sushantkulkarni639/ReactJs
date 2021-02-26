import React from 'react';
const UserContext= React.createContext()
// const UserContext= React.createContext("codeEvolution")    
//alt method to use default value

const UserProvider=UserContext.Provider
const UserConsumer=UserContext.Consumer

export{UserProvider,UserConsumer }
export default UserContext