import { STORAGE_ID } from '../const';

const getStorage = id => JSON.parse(localStorage.getItem(id));

export const getDataFromStorage = (id, key) => {
    const entries = getStorage(STORAGE_ID);

    if (!key && entries) {
        return entries[id];
    } else if (key && entries && entries[id]) {
        return entries[id][key];
    } else {
        return null;
    }
};

export const setDataInStorage = (id, keys) => {
    const entries = getStorage(STORAGE_ID);
    localStorage.setItem(
        STORAGE_ID,
        JSON.stringify({
            ...entries,
            [id]: { ...keys },
        })
    );
};
