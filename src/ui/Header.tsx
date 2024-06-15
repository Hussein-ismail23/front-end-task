'use client';
import React from 'react'
import { Button, Flex, } from 'antd';
import { MyAvatarGroup } from './MyAvatarGroup';
import avatars from '../../public/avatars.json'

import Link from 'next/link';
import { Cart } from './Cart';
import { Kitchen } from './Kitchen';
export const Header = () => {
    const headerAvatars = avatars
    return (
        <Flex justify='space-evenly' align='start' wrap>
            <Flex vertical gap={5}>
                <h4 style={{ color: '#00244D' }}>Welcome to My Company!</h4>
                <h6 style={{ color: '#637182' }}>You have started your <span style={{ color: '#00244D' }} >30 day trial</span></h6>
            </Flex>
            <Flex gap={10}>
                <MyAvatarGroup src={avatars.avatars} />
                <Flex vertical gap={2}>
                    <h5 style={{ color: '#637182' }}>Our architects are here to help</h5>
                    <Link href={'/'}>Book a free session</Link>
                </Flex>
            </Flex>
            <Flex gap={5}>
                <Cart />
                <Kitchen />
            </Flex>
        </Flex>
    )
}
