import { Flex } from 'antd'
import React from 'react'

export const Footer = () => {
  return (
    <Flex justify='center' style={{ marginTop: '20px', marginBottom: '20px' }}>
      <h6 style={{ color: '#637182' }}>
        <span style={{ color: '#052346' }}>Got questions?</span> Take a look at our <a href="" style={{ color: '#0097C2' }}>FAQs</a>, talk to us on Twitter
        <a href="x.com" style={{ color: '#0097C2' }}> @company </a>
        or send an email to <a style={{ color: '#0097C2' }} href="mailto:team@company.com">
          team@company.com
        </a>
      </h6>
    </Flex>
  )
}
