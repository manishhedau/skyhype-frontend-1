export const setLocalUserId = (userId) => {
    localStorage.setItem("userid", userId);
}

export const getLocalUserId = () => {
    return localStorage.getItem("userid");
}

