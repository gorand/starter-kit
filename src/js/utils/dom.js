export const select = selector => document.querySelector(selector);

export const selectAll = selector => document.querySelectorAll(selector);

export const getById = id => document.getElementById(id);

export const createEl = type => document.createElement(type);

export const createDiv = createEl('div');

export const getRect = el => el.getBoundingClientRect();
