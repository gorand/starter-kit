export const getParamsAsPath = (path, formData) => `${path}?${new URLSearchParams(formData).toString()}`;
