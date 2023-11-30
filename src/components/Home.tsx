import mainImage from '../assets/mainImage.jpg';
import * as S from '../styles/Home';

const PostList = () => {
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
            <tbody>
              <tr>
                <td>2021.03 - 2021.08</td>
                <td>IntoCNS , Intern</td>
              </tr>
              <tr>
                <td>2022.01 - ing</td>
                <td>Vinulabs, Softdeveloper</td>
              </tr>
            </tbody>
          </S.TableContainer>
          <S.Notifiation>👆 항목을 눌러 확인해주세요!</S.Notifiation>
        </S.IntroduceContainer>
      </S.ProfileContainer>
    </>
  )
}

export default PostList