import { useState } from "react"
import Frame from "../../assets/frame-horizontal.svg"
import Frame2 from "../../assets/frame2-horizontal.svg"
import Frame3 from "../../assets/frame3-horizontal.svg"
import Frame4 from "../../assets/frame4-horizontal.svg"
import LeftArrow from "../../assets/icon-leftArrow.svg"
import RightArrow from "../../assets/icon-rightArrow.svg"
import * as S from "./style"

const FrameList = [Frame, Frame2, Frame3, Frame4]

export default function DefaultFrame() {
  const [frame, setFrame] = useState(0)

  const handleChange = (idx) => {
    frame + idx >= FrameList.length ? 
     setFrame(0) :  setFrame(frame + idx)
  }
  
  return (
    <S.Wrapper>
      <S.ArrowBtn onClick={() => handleChange(-1)}>
        <img src={LeftArrow} alt="이전 프레임" />
      </S.ArrowBtn>
      <S.ContImg src={FrameList[frame]} alt="" />
      <S.ArrowBtn onClick={() => handleChange(1)}>
        <img src={RightArrow} alt="다음 프레임" />
      </S.ArrowBtn>
    </S.Wrapper>
  )
}
