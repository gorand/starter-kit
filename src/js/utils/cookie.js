export const getCookie = name => {
    const reg = `(?:^|; )${name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1')}=([^;]*)`;
    const matches = document.cookie.match(new RegExp(reg));
    return matches ? decodeURIComponent(matches[1]) : undefined;
};

export const setCookie = (name, value, props = {}) => {
    value = encodeURIComponent(value);
    let updatedCookie = `${name}=${value}`;
    let exp = props.expires;

    if (exp && typeof exp === 'number') {
        const date = new Date();
        date.setTime(date.getTime() + exp * 1000);
        exp = props.expires = date;
    }

    if (exp && exp.toUTCString) {
        props.expires = exp.toUTCString();
    }

    Object.entries(props).forEach(([key, val]) => {
        updatedCookie += `; ${key}`;
        if (val !== true) updatedCookie += `=${val}`;
    });

    document.cookie = updatedCookie;
};

export const deleteCookie = name => setCookie(name, null, { expires: -1 });
