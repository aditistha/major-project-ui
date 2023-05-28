import { createGlobalStyle } from "styled-components/macro";
import { COLOR } from "./constants/style/Color";

export default createGlobalStyle`

body{
    background-color: ${COLOR.DawnPink};
    color: ${COLOR.DarkCyan};
}

`;
