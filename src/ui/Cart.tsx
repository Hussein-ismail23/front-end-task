'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { Button, Drawer, Flex } from 'antd';
import cartIcon from '../../public/images/svgs/cart.svg'
import { useAppContext } from '@/lib/context';

export const Cart = () => {
    const [open, setOpen] = useState<boolean>(false);

    const { cart, checkout, deleteFromCart } = useAppContext()

    return (
        <React.Fragment>
            <Button style={{ backgroundColor: '#E1ECF9', border: 'none', position: 'relative' }} shape='circle' onClick={() => setOpen(true)}>
                {cart.length > 0 && <span className='badge'>{cart.length}</span>}
                <Image src={cartIcon} width={16} height={16} alt='cart' />
            </Button>
            <Drawer
                closable
                destroyOnClose
                title={<Flex justify='space-between' align='center'><p style={{ fontWeight: 'normal' }}>Your Run Cart</p> <p style={{ fontSize: '12px', fontWeight: 'normal' }}>Requests in
                    your run cart <span style={{ color: '#052346', backgroundColor: '#FFD900', width: '20px', height: '20px', borderRadius: '50%', display: 'inline-flex', justifyContent: 'center', alignItems: 'center' }}>{cart.length}</span></p></Flex>}
                placement="right"
                open={open}
                onClose={() => setOpen(false)}
            >
                {cart.map((item, index) => (
                    <Flex justify='space-between' style={{ padding: '12px', borderBottom: '1px solid #E1ECF9', marginBottom: '16px' }}>
                        <p key={index}>{item?.title}</p>
                        <Image src={'/images/svgs/delete.svg'} alt='delete' width={16} height={16} onClick={() => deleteFromCart(item?.id ?? '')} style={{ cursor: 'pointer' }} />
                    </Flex>
                ))}
                {cart.length > 0 ? <Button onClick={() => checkout()} block style={{ backgroundColor: '#0097C2', color: 'white' }}>Checkout</Button>
                    : <Flex justify='center' align='center' vertical style={{ height: '100%' }}>
                        <Image src='/images/empty-cart.png' alt='' width={67} height={84} />
                        <p style={{ color: '#00244D', margin: '24px 0 6px 0' }}>
                            Your run cart is empty!
                        </p>
                        <p style={{ color: '#637182' }}>start add your requests here</p>
                    </Flex>}
            </Drawer>
        </React.Fragment>
    )
}
