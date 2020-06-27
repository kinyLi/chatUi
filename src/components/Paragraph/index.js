
import React from 'react'
import PropTypes from 'prop-types'
import StyleParagraph from './style'

function Paragraph({
    children,
    ellipsis,
    ...rest
}) {
    return (
        <StyleParagraph as="p" ellipsis={ellipsis} {...rest}>
            {children}
        </StyleParagraph>
    )
}

Paragraph.propTypes = {
    children: PropTypes.any,
    ellipsis: PropTypes.bool
}

export default Paragraph

