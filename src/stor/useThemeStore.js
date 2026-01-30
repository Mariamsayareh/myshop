import { create } from "zustand";

const useThemeStore = create((set) => ({
    mode: localStorage.getItem('theme') || 'dark',
    toggleTheme: () => {
        set((state) => {
            const newMode = state.mode === 'dark' ? 'light' : 'dark';
            localStorage.setItem('theme', newMode);
            return { mode: newMode }
        })

    }

}))
export default useThemeStore;