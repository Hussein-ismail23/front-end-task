import { AvatarProps, Avatar, Tooltip } from 'antd'
import { AntDesignOutlined, UserOutlined } from '@ant-design/icons';
import React from 'react'
interface IAvatarProps extends Omit<AvatarProps, 'src'> {
    src: Array<string>;
}
export const MyAvatarGroup = ({ src }: { src: Array<string> }) => {
    return (
        <Avatar.Group>
            {src.length && src.map((item, index) =>
                <Avatar src={item} shape='circle' key={index} />
            )}
            <Tooltip title="Ant User" placement="top">
                <Avatar style={{ backgroundColor: '#E6E6E6', color: '#7C838A' }}  >
                    +3
                </Avatar>
            </Tooltip>
        </Avatar.Group>
    )
}
