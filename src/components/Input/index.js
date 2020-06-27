
import React from 'react'
import PropTypes from 'prop-types'
import StyleInput, { InputContainer, Prefix, Suffix } from './style'
import { useTheme } from 'styled-components'
import { faSearchLocation } from '@fortawesome/free-solid-svg-icons'
import Icon from 'components/Icon'
import theme from 'theme'

function Input({
    placeholder = "请输入内容",
    prefix,
    suffix,
    ...rest
}) {
    return (
        <InputContainer {...rest}>
            {prefix && <Prefix>{prefix}</Prefix>}
            <StyleInput placeholder={placeholder} />
            {suffix && <Suffix>{suffix}</Suffix>}
        </InputContainer>
    )
}

function Search({ placeholder = "请输入搜索内容...", ...rest }) {
    const themem = useTheme();
    return (
        <Input
            placeholder={placeholder}
            prefix={
                <Icon color={theme.gray3} width={18} height={18}></Icon>
            }
            {...rest}
        />
    )
}

Input.Search = Search;

Input.propTypes = {
    placeholder: PropTypes.string,
    prefix: PropTypes.any,
    suffix: PropTypes.any,
}

export default Input

