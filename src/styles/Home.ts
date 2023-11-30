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
  
export const TableContainer = styled.div`
    width: 100%;
    padding: 5px;
    margin: 10px;
    font-size: 13px;
    border: 1px solid darkgray;
    border-radius: 3px;
    border-spacing: 0px 5px;

    li {
        list-style: none;
        cursor: pointer;

        &:first-of-type {
            margin-bottom: 8px;
        }
    }
`

export const Career = styled.span<{ isSelectCareer: boolean }>`
    background: ${({isSelectCareer}) => (isSelectCareer ? 'lightblue' : 'transparent')};
    font-weight: ${({isSelectCareer}) => (isSelectCareer ? 'bold' : 'normal')};
`;

export const Notifiation = styled.div`
    text-align: center;
    font-weight: 550;
`

export const Line = styled.div`
    border-top: 1px solid #dfe0e5;
    margin: 18px 0px;
`

export const PostContainer = styled.div`
    width: 800px;
    margin: 50px auto 0;
`;

export const PostRow = styled.div`
    margin-left: 20px;
`

export const rowHeader = styled.div`
    display: flex;
    align-items: end;
`
export const rowBody = styled.div`
    margin: 10px 0 0 30px;
    line-height: 24px;
`

export const Toggle = styled.div<{ isOpen: boolean }>`
    margin: 0 6px 2px 0;
    width: 0;
    height: 0;
    border-top: 6px solid black;
    border-left: 6px solid transparent;
    border-bottom: 6px solid transparent;
    border-right: 6px solid transparent;
    cursor: pointer;
    ${({isOpen}) => (isOpen ? 'transform: rotate(180deg);' : '')}
    ${({isOpen}) => (isOpen ? 'margin-bottom: 8px;' : '')}
`

export const ToggleTitle = styled.div`
    margin-left: 10px;
    background: lightgray;
`