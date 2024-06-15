import { Flex } from 'antd'
import React from 'react'
import data from '../../../../public/companies.json'

const Page = ({ params }: { params: { id: string } }) => {
  const company = data.companies.find(company => company.id === params.id)
  return (
    <Flex vertical style={{ height: '100%', width: '100%', position: 'absolute' }} justify='center' align='center'>
      <h1 style={{ color: '#00254F', fontSize: '64px', fontWeight: 'normal' }}>Welcome to {company?.title}</h1>
    </Flex>
  )
}

export default Page