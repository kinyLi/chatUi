
import React from 'react'
import StyledNavBar, { StyledMenuItem, MenuIcon, MenuItems } from './style'
import Badge from 'components/Badge'
import Avatar from 'components/Avatar'
import { faCommentDots, faUsers, faFolder, faStickyNote, faEllipsisH, faCog } from '@fortawesome/free-solid-svg-icons'
import "styled-components/macro";

function NavBar({
    ...rest
}) {
    return (
        <StyledNavBar {...rest}>
            <Avatar status="online" />
            <MenuItems>
                <MenuItem showBadge active icon={faCommentDots} />
                <MenuItem icon={faUsers} />
                <MenuItem icon={faFolder} />
                <MenuItem icon={faStickyNote} />
                <MenuItem icon={faEllipsisH} />
                <MenuItem icon={faCog} css={`align-self: end;`} />
            </MenuItems>
        </StyledNavBar>
    )
}

function MenuItem({ icon, active, showBadge, ...rest }) {
    return (
        <StyledMenuItem active={active} {...rest}>
            <a href="#">
                <Badge show={showBadge}>
                    <MenuIcon active={active} icon={icon}></MenuIcon>
                </Badge>
            </a>
        </StyledMenuItem>
    )
}

export default NavBar;
export { MenuItem };

