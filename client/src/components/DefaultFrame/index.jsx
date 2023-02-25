import { useContext, useState } from "react";
import Frame from "../../assets/frame-horizontal.svg";
import Vframe1 from "../../assets/frame-vertical.svg";
import Frame2 from "../../assets/frame2-horizontal.svg";
import Vframe2 from "../../assets/frame2-vertical.svg";
import Frame3 from "../../assets/frame3-horizontal.svg";
import Vframe3 from "../../assets/frame3-vertical.svg";
import Frame4 from "../../assets/frame4-horizontal.svg";
import Vframe4 from "../../assets/frame4-vertical.svg";
import LeftArrow from "../../assets/icon-leftArrow.svg";
import RightArrow from "../../assets/icon-rightArrow.svg";
import { CutContext } from "../../context/Context";
import * as S from "./style";

export default function DefaultFrame({ cutState }) {
    const [frame, setFrame] = useState(0);
    const { cutSelect } = useContext(CutContext);

    const FrameList =
        cutSelect === "hor"
            ? [Frame, Frame2, Frame3, Frame4]
            : [Vframe1, Vframe2, Vframe3, Vframe4];

    const handleChange = (idx) => {
        frame + idx >= FrameList.length ? setFrame(0) : setFrame(frame + idx);
    };

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
    );
}
