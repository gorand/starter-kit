export const pushHistory = query => window.history.pushState({ path: query }, document.title, `?${query}`);

export const downloadFromLink = (path, filename) => {
    const link = document.createElement('a');
    link.href = path;
    element.setAttribute('download', filename);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};
