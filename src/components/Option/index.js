
import React from 'react'
import PropTypes from 'prop-types'
import StyleOption from './style'

function Option({
    children,
    ...rest
}) {
    return (
        <StyleOption {...rest}>
            {children}
        </StyleOption>
    )
}

Option.propTypes = {
    children: PropTypes.any
}

export default Option

