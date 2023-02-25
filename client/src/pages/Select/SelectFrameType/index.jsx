import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../../components/Button";
import DefaultFrame from "../../../components/DefaultFrame";
import { CutContext, FrameBgContext } from "../../../context/Context";
import * as S from "../style";

export default function SelectFrameType() {
    const { setFrameBg } = useContext(FrameBgContext);
    const navigate = useNavigate();
    const [frame, setFrame] = useState(0);
    const { cutSelect } = useContext(CutContext);
    const handleToFrame = () => {
        // const blob = new Blob([new ArrayBuffer(frame)], { type: "image/*" });
        // const frameFile = URL.createObjectURL(blob);
        const type = cutSelect === "Width" ? "hor" : "ver";
        const path = `/assets/Frame${frame + 1}_${type}.png`;
        setFrameBg(path);
        navigate("/Uploadimg");
    };

    return (
        <S.Wrapper>
            <S.Subtit>벚꽃필름 전용 프레임을 선택해보세요!</S.Subtit>
            <DefaultFrame frame={frame} setFrame={setFrame} />
            <Button text="확인" onClick={handleToFrame} />
        </S.Wrapper>
    );
}
