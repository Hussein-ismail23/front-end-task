'use client';
import MenuContext, { productItem } from "@/lib/context";
import { Header } from "@/ui";
import { message } from "antd";
import { useState } from "react"

const Template = ({ children }: { children: React.ReactNode }) => {

    const [cart, setCart] = useState<Array<productItem>>([]);
    const [kitchen, setKitchen] = useState<Array<productItem>>([]);

    const [messageApi, contextHolder] = message.useMessage();

    const successAdd = (title: string) => {
        messageApi.open({
            duration: 2,
            type: 'success',
            content: `${title} added to cart successfully`,
        });
    };

    const successCheckout = () => {
        messageApi.open({
            duration: 2,
            type: 'success',
            content: 'Moved all items to kitchen successfully',
        });
    };

    const addToCart = (item: productItem) => {
        setCart([...cart, item])
        successAdd(item.title)
    }

    const deleteFromCart = (id: string) => {
        setCart(cart.filter(item => item.id !== id))
    }

    const checkout = () => {
        setKitchen(cart);
        setCart([]);
        successCheckout()
    }


    return (
        <MenuContext.Provider value={{ cart, kitchen, addToCart, deleteFromCart, checkout }}>
            {contextHolder}
            <header>
                <Header />
            </header>
            {children}

        </MenuContext.Provider>
    )
}

export default Template;