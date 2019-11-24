/** @jsx jsx */
import { css, jsx, keyframes } from "@emotion/core";
// tslint:disable-next-line: no-unused-expression
jsx;

const inputHighlighter = keyframes`
	from { background:#5264AE; }
    to 	{ width:0; background:transparent; }
`;

export const highLightStyle = css`
    position: absolute;
    height: 60%;
    width: 100px;
    top: 25%;
    left: 0;
    pointer-events: none;
    opacity: 0.5;
    input:focus & {
        animation: ${inputHighlighter} 0.3s ease;
    }
`;

export const inputStyle = css`
    font-size: 18px;
    padding: 10px 10px 10px 5px;
    display: block;
    width: 300px;
    border: none;
    border-bottom: 1px solid #757575;
    &:focus {
        outline: none;
    }
`;

export const barStyle = css`
    position: relative;
    display: block;
    width: 300px;
    &before,
    &:after {
        content: '';
        height: 2px;
        width: 0;
        bottom: 1px;
        position: absolute;
        background: #5264ae;
        transition: 0.2s ease all;
    }
    // &:before {
    //     right: 50%;
    // }
    // &:after {
    //     left: 50%;
    // }
    input:focus ~ &:before,
    input:focus ~ &:after {
        width: 100%;
    }
`;
export const groupStyle = css`
    position: relative;
    margin-bottom: 45px;
`;

export const labelStyle = css`
    color: #999;
    font-size: 18px;
    font-weight: normal;
    position: absolute;
    pointer-events: none;
    left: 5px;
    top: 10px;
    transition: 0.2s ease all;
    -moz-transition: 0.2s ease all;
    -webkit-transition: 0.2s ease all;
    input:focus ~ &, input:not([value=""]) ~ & {
        top: -20px;
        font-size: 14px;
        color: #5264ae;
    }
`;
export const errorStyle = css`
    color: red;
    position: absolute;
    margin: 5px;
`