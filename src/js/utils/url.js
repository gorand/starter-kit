export const pushHistory = query => window.history.pushState({ path: query }, document.title, `?${query}`);
