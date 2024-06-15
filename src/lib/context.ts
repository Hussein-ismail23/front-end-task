'use client';
import { createContext, useContext } from "react";

export interface productItem {
    id: string;
    title: string;
    descrption?: string;
    price: string;
    quantity?: number;
}

export type itemsContext = {
    cart: Array<productItem | null>;
    kitchen: Array<productItem | null>;
    addToCart: (item: productItem) => void;
    deleteFromCart: (id: string) => void;
    checkout: () => void;
}

const initialData = { cart: [], kitchen: [], addToCart: () => { }, deleteFromCart: () => { }, checkout: () => { } };

const MenuContext = createContext<itemsContext>(initialData);


export const useAppContext = () => {
    const context = useContext(MenuContext);
    if (context === undefined) {
        throw new Error('useAppContext must be used within an AppProvider');
    }
    return context;
};

export default MenuContext;