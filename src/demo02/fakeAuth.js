let isAuthenticated = false;

export const getAuthenticate = () => {
    return isAuthenticated;
}

export const authenticate = (cb) => {
    isAuthenticated = true;
    setTimeout(cb, 100);
}

export const signout = (cb) => {
    isAuthenticated = false;
    setTimeout(cb, 100);
}
