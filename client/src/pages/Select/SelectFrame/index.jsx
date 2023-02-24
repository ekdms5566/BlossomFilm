import { Link } from "react-router-dom";
import Frame from "../../../assets/img-frame2.svg";
import Button from "../../../components/Button";
import * as S from "../style";

export default function SelectFrame() {
  return (
    <S.Wrapper>
      <S.Subtit>나만의 벚꽃필름 프레임을 선택해보세요!</S.Subtit>
      <S.SubLogoImg src={Frame} alt="" />
      <Button text="갤러리에서 직접 선택" />
      <Link to="/selectFrametype" >
        <Button text="벚꽃필름 전용 프레임 선택"/>
      </Link>
    </S.Wrapper>
  )
}
