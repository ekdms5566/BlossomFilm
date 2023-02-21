import Frame from "../../../assets/img-frame.svg"
import Button from "../../../components/Button"
import * as S from "../style"

export default function SelectCut() {
  return (
    <S.Wrapper>
      <S.Subtit>만들고 싶은 벚꽃필름을 선택해주세요!</S.Subtit>
      <S.SubLogoImg src={Frame} alt="" />
      <Button text="가로 4CUT" />
      <Button text="세로 4CUT"/>
    </S.Wrapper>
  )
}
