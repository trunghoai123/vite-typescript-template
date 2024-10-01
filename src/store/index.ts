import { create } from 'zustand';

type VStoreType = {
    state: string;
    setState: () => void;
};

export const MainStore = create<VStoreType>((set) => ({
    state: '',
    setState: () => {
        set({});
    },
}));
