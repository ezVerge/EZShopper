export default {
    user: {
        isAuthUser: !!localStorage.getItem('user'),
        user: JSON.parse(localStorage.getItem('user')) || {}
    },
    ui: {
        isLoading: false
    }
};
