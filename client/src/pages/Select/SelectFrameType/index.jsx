import Button from "../../../components/Button"
import DefaultFrame from "../../../components/DefaultFrame"
import * as S from "../style"

export default function SelectFrameType() {
  
  return (
    <S.Wrapper>
      <S.Subtit>벚꽃필름 전용 프레임을 선택해보세요!</S.Subtit>
      <DefaultFrame />
      <Button text="확인" />
    </S.Wrapper>
  )
}
