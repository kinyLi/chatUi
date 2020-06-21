
import React from 'react';
import Icon from '.';
import { ReactComponent as SmileIcon } from './assets/icon/accessibility-human.svg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentDots } from '@fortawesome/free-solid-svg-icons';

export default {
    title: "UI 组件/Icon",
    component: Icon
};

export const CustomDefault = () => <Icon icon={SmileIcon}></Icon>;

export const FontAwesome = () => {
    return <FontAwesomeIcon icon={faCommentDots} />
}

export const FontAwesomeColor = () => {
    return <FontAwesomeIcon icon={faCommentDots} style={{ color: "#cccccc" }} />
}

export const FontAwesomeSize = () => {
    return (
        <div>
            <FontAwesomeIcon icon={faCommentDots} style={{ fontSize: "24px" }} />
            <FontAwesomeIcon icon={faCommentDots} style={{ fontSize: "36px" }} />
            <FontAwesomeIcon icon={faCommentDots} style={{ fontSize: "48px" }} />
        </div>
    )
}