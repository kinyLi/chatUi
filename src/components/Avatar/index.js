import React from 'react'
import PropTypes from 'prop-types'
import face1 from './assets/images/default-avatar.jpg'
import StyleAvatar, { StatusIcon, AvatarClip, AvatarImage } from './style'

function Avatar({
    src,
    size = '48px',
    status,
    statusIconSize,
    ...rest
}) {
    return (
        <StyleAvatar {...rest}>
            {status && <StatusIcon status={status} size={statusIconSize}></StatusIcon>}
            <AvatarClip size={size}>
                <AvatarImage src={face1} />
            </AvatarClip>
        </StyleAvatar>
    )
}

Avatar.propTypes = {
    src: PropTypes.string,
    size: PropTypes.string,
    status: PropTypes.oneOf(['online', 'offline']),
    statusIconSize: PropTypes.string

}

export default Avatar

