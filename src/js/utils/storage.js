import { STORAGE_ID } from '../const';

const getStorage = id => JSON.parse(localStorage.getItem(id));

export const getStorageByKey = id => {
    const _setValue = (val, key) => (val?.hasOwnProperty(key) ? val[key] : undefined);
    let value = getStorage(id);

    const getNested = (...args) => {
        if (args.length > 1) {
            args.forEach(arg => {
                value = _setValue(value, arg);
                getNested.value = value;
            });
            return getNested;
        }
        value = _setValue(value, args[0]);
        getNested.value = value;
        return getNested;
    };

    getNested.value = value;
    return getNested;
};

export const setPropToStorage = (id, key, value) => {
    let added = {
        ...getStorageByKey(id)(key).value,
        ...value,
    };
    if (typeof value !== 'object') {
        added = value;
    }
    const inbox = { [key]: added };
    let data = { ...getStorageByKey(id).value, ...inbox };
    if (!localStorage.getItem(id)) {
        data = inbox;
    }
    localStorage.setItem(id, JSON.stringify(data));
};

export const setObjToStorage = (id, value) => {
    let data = {
        ...getStorageByKey(id).value,
        ...value,
    };
    if (!localStorage.getItem(id)) {
        data = value;
    }
    localStorage.setItem(id, JSON.stringify(data));
};

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
