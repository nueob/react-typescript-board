import * as S from '../styles/Home';
import {useState} from "react";

import mainImage from '../assets/mainImage.jpg';

const PostList = () => {
  const careerList = [
    {key: 'vinulabs', value: '2022.01 - ing Vinulabs, Softdeveloper'},
    {key: 'intoCNS', value: '2021.03 - 2021.08 IntoCNS , Intern'}
  ];

  const [career, setCareer] = useState<string>('vinulabs');
  const handleSelect = (value: string) => setCareer(value);

  const [toggle, setToggle] = useState<{ [key: string]: boolean }>({
    language: false
  });
  const handleToggle = (key: string) => {
    setToggle((originToggle) => ({
      ...originToggle,
      [key]: !originToggle[key]
    }));
  }
  
  return (
    <>
      <S.ProfileContainer>
        <S.ImageContainer>
          <S.Image src={mainImage} alt="이미지 설명" />;
        </S.ImageContainer>
        <S.IntroduceContainer>
          <S.Wrapper>👋 Hi there</S.Wrapper>
          <S.Line></S.Line>
          <S.Wrapper>💻 Technology Stack 😎</S.Wrapper>
          <S.StackLogoContainer>
            <S.StackLogo src="https://img.shields.io/badge/NodeJS-yellowgreen?style=flat-square&logo=Node.js&logoColor=white" alt="NodeJS"/>
            <S.StackLogo src="https://img.shields.io/badge/ExpressJS-inactive?style=flat-square&logo=Express&logoColor=white" alt="ExpressJS"/>
            <S.StackLogo src="https://img.shields.io/badge/VueJS-brightgreen?style=flat-square&logo=Vue.js&logoColor=white" alt="VueJS"/>
            <S.StackLogo src="https://img.shields.io/badge/JavaScript-yellow?style=flat-square&logo=JavaScript&logoColor=white" alt="JavaScript"/>
          </S.StackLogoContainer>
          <S.Line></S.Line>
          <S.Wrapper>🤸 Career</S.Wrapper>
          <S.TableContainer>
            {
              careerList.map(({key, value}) => (
                <li
                  key={key}
                  onClick={() => handleSelect(key)}
                >
                  <S.Career isSelectCareer={career === key}>
                    {value}
                  </S.Career>
                </li>
              ))
            }
          </S.TableContainer>
          <S.Notifiation>👆 항목을 눌러 확인해주세요!</S.Notifiation>
        </S.IntroduceContainer>
      </S.ProfileContainer>
      {
        career === 'intoCNS' &&
          <S.PostContainer>
            <h2>🐶 Intopet</h2>
            <S.PostRow>
              <S.rowHeader>
                <S.Toggle isOpen={toggle['language']} onClick={() => handleToggle('language')}></S.Toggle>
                <S.ToggleTitle>개발 환경 및 언어</S.ToggleTitle>
              </S.rowHeader>
              {
                toggle['language'] && 
                  <S.rowBody>
                    Codeigniter 4 , PHP <br/>
                    VueJS <br/>
                    MySQL , DBeaver <br/>
                    Docker <br/>
                    Git , Zeplin <br/>
                  </S.rowBody>
              }
            </S.PostRow>
          </S.PostContainer>
      }
    </>
  )
}

export default PostList