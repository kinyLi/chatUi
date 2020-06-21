import styled, { css } from 'styled-components';
import { circle } from 'utils/mixins';

const circleMixinFunc = (color, size = '8px') => css`
    content: "";
    display: block;
    position: absolute;
    ${circle(color, size)}
`

const StyleAvatar = styled.div`
    position: relative;
`;

const StatusIcon = styled.div`
    position: absolute;
    left: 2px;
    top: 4px;

    &::before {
        ${circleMixinFunc('white')}
        transform: scale(2);
    }

    &::after {
        ${({ theme, status, size }) => {
        if (status === 'online') {
            return circleMixinFunc(theme.green, size)
        } else if (status === 'offline') {
            return circleMixinFunc(theme.gray, size)
        }
    }}
    }
`;

const AvatarClip = styled.div`
    width: ${({ size }) => size};
    height: ${({ size }) => size};
    border-radius: 50%;
    overflow: hidden;
`;

const AvatarImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    obhect-position: center;
`;

export default StyleAvatar;
export { StatusIcon, AvatarClip, AvatarImage };