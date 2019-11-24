import { css } from "@emotion/core";
export const buttonStyle = css`
    background-color: cyan;
    border-radius: 5px;
    border: 0;
    width: 80px;
    height:25px;
    margin: auto;
    transition:all.5s ease;
    display: block;
    width: 125px;
    height: 40px;
    &:hover {
        background-color: yellow;
    }
    &:active {
        background-color: blue;
    }
    &:disabled {
        background-color: grey;
    }
`;
