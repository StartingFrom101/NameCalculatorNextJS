import React, { createContext, useContext, useState, useEffect } from 'react'

const Context = createContext();

export const StateContext = ({children}) => {
    const [name, setName] = useState();
    const [age, setAge] = useState();
    const [nameSubmit, setNameSubmit] = useState(false);
    const [gender, setGender] = useState();
    const [nationality, setNationality] = useState();
    const [probability, setProbability] = useState();
    const [loading, setLoading] = useState();


    return (
        <Context.Provider
        // ALL EXPORT VALUES
        value={{
            name, nameSubmit, setName, setNameSubmit,
            age, setAge, gender, setGender, nationality, setNationality, probability, setProbability,
            loading, setLoading,
        }}>
            {children}
        </Context.Provider>
  )
}

export const useStateContext = () => useContext(Context);