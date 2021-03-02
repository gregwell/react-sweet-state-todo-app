import React from 'react'
import PropTypes from 'prop-types'
import { Button } from 'antd'
import 'antd/dist/antd.css';

const Link = ({ active, children, onClick }) => (
    <Button type="primary"
       onClick={onClick}
       disabled={active}
       style={{
           marginLeft: '4px',
       }}
    >
      {children}
    </Button>
)

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Link
