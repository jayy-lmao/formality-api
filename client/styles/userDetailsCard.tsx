import { css, keyframes } from "@emotion/core";

const fadeUp = keyframes`
	from { 
        opacity: 0;
        margin-top: 30px;
     }
    to 	{
        opacity: 1;
        margin-top: 0px;
    }
`;
export const userDetailsCard = css`
    margin: auto;
    width: 320px;
    box-shadow: 10px 10px 36px -2px rgba(0,0,0,0.25);
    border-radius: 5px 5px 5px 5px;
    padding: 90px;
    animation: ${fadeUp} 0.3s ease-out;
`;
