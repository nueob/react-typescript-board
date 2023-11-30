import styled from "styled-components";

export const ProfileContainer = styled.div`
    display: flex;
    margin: 0 auto;
    width: 800px;
`;

export const ImageContainer = styled.div`
    width: 300px;
    height: 300px;
    border-radius: 70%;
    overflow: hidden;
`;

export const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

export const IntroduceContainer = styled.div`
    flex-basis: 500px;
    padding: 20px 0 0 20px;
`

export const Wrapper = styled.div`
    font-weight: bold;
`;

export const StackLogoContainer = styled.div`
    margin-top: 10px;
`

export const StackLogo = styled.img`
    margin: 0 5px;

    &:first-of-type {
        margin-left: 0;
    }
`;
  
export const TableContainer = styled.table`
    width: 100%;
    padding: 5px;
    margin: 10px;
    font-size: 13px;
    border: 1px solid darkgray;
    border-radius: 3px;
    border-spacing: 0px 5px;

    tr {
        cursor: pointer;

        &:hover {
            background: lightblue;
            font-weight: bold;
        }
    }
`

export const Notifiation = styled.div`
    text-align: center;
    font-weight: 550;
`

export const Line = styled.div`
    border-top: 1px solid #dfe0e5;
    margin: 18px 0px;
`