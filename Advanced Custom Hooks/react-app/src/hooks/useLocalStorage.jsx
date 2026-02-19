import { useState } from 'react';

// key          = the localStorage key name (e.g. "user-name")
// initialValue = default value if nothing saved yet
function useLocalStorage(key, initialValue) {

    // read saved value from browser on first load
    const getSaved = () => {
        const saved = localStorage.getItem(key);
        if (saved) return JSON.parse(saved);
        return initialValue;
    };

    const [value, setValue] = useState(getSaved);

    // custom setter: update React state AND save to browser
    const saveValue = (newValue) => {
        setValue(newValue);
        localStorage.setItem(key, JSON.stringify(newValue));
    };

    return [value, saveValue]; // same shape as useState
}

export default useLocalStorage;