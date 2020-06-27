
import React from 'react'
import PropTypes from 'prop-types'
import StyleSelect from './style'

function Select({
    children,
    ...rest
}) {
    return (
        <StyleSelect {...rest}>
            {children}
        </StyleSelect>
    )
}

Select.propTypes = {
    children: PropTypes.any
}

export default Select

