import { create } from 'zustand';

type UserState = {
    isLoggedIn: false;
    userInfo: null;
};

const useUserStore = create<UserState>()((set) => ({
    isLoggedIn: false,
    userInfo: null,
    // You can add actions here to modify the state, e.g., login, logout, updateUserInfo
}));

export default useUserStore;
