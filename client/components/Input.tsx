/** @jsx jsx */
import { css, jsx, keyframes } from "@emotion/core";
import {
  barStyle,
  errorStyle,
  groupStyle,
  highLightStyle,
  inputStyle,
  labelStyle
} from "../styles/InputStyles";
// tslint:disable-next-line: no-unused-expression
jsx;

const Input = (props: any) => (
  <div className="group" css={groupStyle}>
    <input css={inputStyle} {...props} />
    <span className="highlight" css={highLightStyle} />
    <span className="bar" css={barStyle} />
    <label css={labelStyle} htmlFor="{props.id}">
      {props.label}
    </label>
    {!!props.error && <label css={errorStyle}>{props.error}</label>}
  </div>
);
export default Input;
