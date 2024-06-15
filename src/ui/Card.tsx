'use client';
import React from 'react'
import { Card as AntCard, Button, Flex, message } from 'antd';
import Image from 'next/image';
import MenuContext, { useAppContext } from '@/lib/context';
export const Card = ({ data }: { data: { id: string; imgSrc: string; title: string, description?: string; price: string, color: string } }) => {

    const { addToCart, cart } = useAppContext();

  

    const handleAddToCart = () => {
        addToCart({ id: data.id, title: data.title, descrption: data.description, price: data.price });
        
    }
    return (
        <AntCard className='card'>
      
            <Flex vertical gap-3>
                <div style={{ position: 'relative', width: '100%', padding: '16px', height: '50%' }}>
                    <Image src={data.imgSrc} alt='' width={195} height={125} />
                </div>
                <Flex className='card-data' vertical justify='space-between' align='start' style={{ width: '100%', backgroundColor: data.color }}>
                    <div>
                        <h5>{data.title}</h5>
                        <p>{data.description}</p>
                    </div>
                    <Flex justify='space-between' style={{ width: '100%', marginTop: '16px' }} align='center'>
                        <p>{data.price}</p>
                        <Flex gap={6} className='card-actions'>
                            <Button className='card-action' href={`/company/${data.id}`}>
                                <Image src={'/images/svgs/open.svg'} alt='open' width={16} height={16} />
                            </Button>
                            <Button onClick={handleAddToCart} className='card-action'>
                                <Image src={'/images/svgs/add.svg'} alt='add to cart' width={16} height={16} />
                            </Button>
                        </Flex>
                    </Flex>
                </Flex>
            </Flex>
        </AntCard>
    )
}
