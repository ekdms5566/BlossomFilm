import Logo from "../../assets/logo.svg"
import SubLogo from "../../assets/sub-logo.svg"
import Button from "../Button"
import * as S from "./style"

export default function Home() {
  return (
    <S.Wrapper>
      <S.Subtit>우리의 <S.SubSpan>"봄"</S.SubSpan>을 담다</S.Subtit>
      <h1>
        <img src={Logo} alt="" />
      </h1>
      <S.SubLogoImg src={SubLogo} alt="" />
      <Button text="시작하기" className="on" />
    </S.Wrapper>
  )
}
