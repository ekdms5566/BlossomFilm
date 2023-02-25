import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { FrameBgContext } from "../../context/Context";
import { frameState } from "../../store/filmState";
import BackButton from "../BackButton";
import { Button } from "../Button/style";
import Fourcuts from "./Fourcuts";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #4a4a4a;

    .buttonBox {
        margin: 63px 0px 37px 40px;
    }
`;

const Section = styled.div`
    color: white;
    padding: 30px;
`;

export default function Editframe() {
    const [imgData, setImgData] = useState("");
    const [standard, setStandard] = useState("");
    const [frame, setFrame] = useRecoilState(frameState);
    const { frameBg, setFrameBg } = useContext(FrameBgContext);

    // context.includes("Frame") -> true : 지정 프레임 false : 갤러리프레임
    // context.includes("hor") -> true : 지정 프레임 가로크기 false : 지정 프레임 세로크기 ("ver")
    const pagemove = (cropData, standard) => {
        console.log(cropData);
        console.log(standard);
        console.log("frame", frameBg);
        setImgData(cropData);
        setStandard(standard);
        //TODO Sever 전달한 프레임 배경 저장 & 가로 프레임 or 세로프레임
    };

    console.log("init", frameBg);

    return (
        <Container>
            <div className="buttonBox">
                <Link to="/">
                    <BackButton />
                </Link>
            </div>
            <Section>
                <p style={{ margin: "0px 0px 47px 0px" }}>
                    프레임 배경 사진을 수정해보세요!
                </p>
            </Section>
            <Section>
                <Fourcuts pagemove={pagemove}></Fourcuts>
            </Section>
            <Section>
                <Link
                    to="/Uploadimg"
                    state={{
                        post: imgData ? imgData : frameBg,
                        data: standard,
                    }}
                >
                    <Button
                        onClick={() => {
                            //TODO Sever 전달한 프레임 배경 저장 & 가로 프레임 or 세로프레임
                        }}
                    >
                        확인
                    </Button>
                </Link>
            </Section>
        </Container>
    );
}
