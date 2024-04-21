export const getContacts = state => state.contacts;

export const getFilter = state => state.filter;


// * Auth selectors
export const selectIsLoggedIn = state => state.auth.isLoggedIn;
export const selectUser = state => state.auth.user;
export const selectIsRefreshing = state => state.auth.isRefreshing;
