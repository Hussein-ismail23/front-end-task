import React, { useContext } from 'react'
import Image from 'next/image'
import { Button, Drawer } from 'antd'
import kitchen from '../../public/images/svgs/kitchen.svg'
import MenuContext from '@/lib/context'

export const Kitchen = () => {
    const [open, setOpen] = React.useState<boolean>(false);

    const context = useContext(MenuContext);

    const kitchenMenu = context.kitchen;

    return (
        <React.Fragment>
            <Button style={{ backgroundColor: '#E1ECF9', border: 'none', position: 'relative' }} shape='circle' onClick={() => setOpen(true)}>
                {kitchenMenu.length > 0 && <span className='badge'>{kitchenMenu.length}</span>}
                <Image src={kitchen} width={16} height={16} alt='kitchen' />
            </Button>
            <Drawer
                closable
                destroyOnClose
                title={<p>Your Run Kitchen</p>}
                placement="right"
                open={open}
                onClose={() => setOpen(false)}
            >
                {kitchenMenu.map((item, index) => (
                    <p key={index}>{item?.title}</p>
                ))}
            </Drawer>
        </React.Fragment>
    )
}
