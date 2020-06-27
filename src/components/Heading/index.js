
import React from 'react'
import PropTypes from 'prop-types'
import StyleHeading from './style'

function Heading({
    children,
    level,
    ...rest
}) {
    return (
        <StyleHeading as={`h${level}`} {...rest}>
            {children}
        </StyleHeading>
    )
}

Heading.propTypes = {
    children: PropTypes.any,
    level: PropTypes.oneOf([1, 2, 3, 4, 5, 6])
}

export default Heading

