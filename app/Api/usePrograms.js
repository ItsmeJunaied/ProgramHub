'use client'
import { useEffect, useState } from 'react';

const usePrograms = () => {
    const [programData, setProgramData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/data.json'); 
                const jsonData = await response.json();
                setProgramData(jsonData.programs);
            } catch (error) {
                console.error('Error fetching data:', error);
                setProgramData({});
            }
        };

        fetchData();
    }, []);

    return { programData };
};

export default usePrograms;
