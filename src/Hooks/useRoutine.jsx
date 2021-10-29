import React, { createContext, useCallback, useContext, useEffect, useState } from 'react';
import Api from '../Api';

const Context = createContext(null);

export const RoutineProvider = ({ children }) => {
    const [routine, setRoutine] = useState(null);

    const fetchData = useCallback(async () => {
        const data = await Api.get('/lutin/preview');
        if (!data) return;

        setRoutine((prevState) => data.data.data);
    }, []);

    useEffect(() => {
        fetchData().then(() => {});
    }, [fetchData]);

    return <Context.Provider value={routine}>{children}</Context.Provider>;
};

const useRoutine = () => useContext(Context);

export default useRoutine;
