export const generateId = () => `a-${new Date().getTime()}-${Math.random()}`.replace(/\./, '');
