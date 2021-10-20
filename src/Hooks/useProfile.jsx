import React, { createContext, useCallback, useContext, useEffect, useState } from 'react';
import Api from '../Api';

const Context = createContext(null);

export const ProfileProvider = ({ children }) => {
    const [profile, setProfile] = useState(null);

    const fetchData = useCallback(async () => {
        const data = await Api.get('/profile');
        console.log(data.data.data);
        if (!data) return;

        setProfile((prevState) => data);
    }, []);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    return <Context.Provider value={profile}>{children}</Context.Provider>;
};

const useProfile = () => useContext(Context);

export default useProfile;
