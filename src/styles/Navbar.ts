import styled from "styled-components";
import {Link} from 'react-router-dom';

export const Navbar = styled.nav`
    display: flex;
    width: 211px;
    margin: 0 auto 10px;
`

export const StyledLink = styled(Link)`
    margin: 0 10px;
    font-family: 'SLEIGothicTTF';
    text-decoration: none;
    color: black;

    &:hover {
        background-color: #ddd;
        font-weight: bold;
    }
`