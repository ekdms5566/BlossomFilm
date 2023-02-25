import axios from "axios";
import html2canvas from "html2canvas";
import React, { useContext, useEffect, useRef, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { useRecoilState } from "recoil";
import styled, { css } from "styled-components";
import { CutContext } from "../../context/Context";
import { filmState, frameState } from "../../store/filmState";
import { decrypt } from "../../utils/encrypt";
import BackButton from "../BackButton";
import { Button } from "../Button/style";
import Loading from "../Loading";
import Myimg from "./Myimg";
const BgImg = styled.div`
    ${(props) =>
        props.data &&
        css`
            background-image: url(${props.data});
        `}
    ${({ Standard }) =>
        Standard === "Width" &&
        css`
            width: 394px;
            height: 263px;
            .imgbox {
                display: flex;
                flex-wrap: wrap;
                margin-left: 9px;
                padding-top: 23px;
            }
            .imgbox > section {
                display: flex;
                justify-content: center;
            }
            .imgbox > section > .testimg {
                width: 157px;
                height: 105px;
                padding: 3px;
            }
        `}
  ${({ Standard }) =>
        Standard === "Length" &&
        css`
            width: 159.99px;
            height: 479.97px;
            .imgbox {
                display: flex;
                flex-wrap: wrap;
                margin-left: 0px;
                padding-top: 0px;
            }
            .imgbox > section {
                display: flex;
                justify-content: center;
            }
            .imgbox > section > .testimg {
                width: 151px;
                height: 100px;
                padding: 3px;
            }
        `}
  background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    z-index: 1;
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #4a4a4a;

    .buttonBox {
        margin: 63px 0px 37px 40px;
        display: flex;
    }
`;

const Section = styled.div`
    display: flex;
    justify-content: center;
    height: 100%;
    color: white;
    padding: 30px;
    & > .uploadBtn {
        margin: 0px 0px 20px 0px;
    }
`;

// const Grid = styled.div`
// display:grid;
// width:100%;
// height: 100%;
// grid-template-columns: repeat(2, 0.4fr);
// grid-template-rows: repeat(2, 0.407fr);
// margin: 51px 0px 0px 14px;
// `;
export default function Uploadimg() {
    const [complete, setCompelete] = useState(true);
    const [isdelete, setIsDelete] = useState(false);

    const [frameImg, setFrameImg] = useState("");
    const [standard, setStandard] = useState("");

    const canvas = useRef(null);
    const [film, setFilm] = useRecoilState(filmState);

    /**************************/
    //url 다이렉트 접근 s
    const { id } = useParams();
    const [isValid, setValid] = useState("loading"); //api 유효성
    const { cutSelect, setCutselect } = useContext(CutContext);
    const [editedFrame, setFrame] = useRecoilState(frameState);

    useEffect(() => {
        if (id?.includes("Uploadimg")) {
            setValid("success");
            return;
        }
        //id?.contains("Uploadimg") ? ) : setValid("loading");
        const secret = decrypt(id);
        if (!secret) {
            setValid("error");
            return;
        }
        if (secret) {
            axios
                .get(
                    `${process.env.REACT_APP_BASE_URL}/blossom/frames/${secret.id}`
                )
                .then((res) => {
                    console.log(res);
                    /*
                    {
    "frame_id": 2,
		"title" :"제목", 
    "width": false,
    "height": false,
    "frame_background": "http://127.0.0.1:8000/media/frame_photo/20220923132522_gTIFfhM.png"
}
                    */
                    setFrameImg(res.data.frameImage);
                    setStandard(res.data.width ? "hor" : "ver"); //프레임 방향설정
                    //setCutselect(res.data.width ? "Frame_hor" : "Frame_ver");
                    //setFrame(res.data.frame_background);
                    setValid("success");
                })
                .catch((e) => {
                    console.log(e);
                    setValid("error");
                });
        }
    }, []);
    /**************************/

    const isUploadimg = (iscomplete) => {
        const temp = iscomplete === 0;
        // setCompelete(temp);
        setCompelete(true);
    };
    const handleClick = () => {
        return isdelete;
    };
    const location = useLocation();
    const madeframe = null; //location.state.post;
    const itemstandard = "Length";

    useEffect(() => {
        console.log(frameImg);
        setStandard(itemstandard);
        //setFrameImg(editedFrame ? editedFrame : madeframe);
        //제목에서 뒤로가기 선택시 기존 편집된 프레임 유지

        console.log(standard);
    }, [frameImg]);

    useEffect(() => {
        setIsDelete(false);
    }, [isdelete]);
    // console.log(frameImg);
    // console.log(isdelete);

    const onClickDownload = () => {
        if (!canvas) return;

        html2canvas(canvas.current, {
            allowTaint: true,
            useCORS: true,
            scale: 10,
        }).then(function (canvas) {
            var myImage = canvas.toDataURL("image/jpeg");
            setFilm(myImage);
        });
    };

    return isValid === "success" ? (
        <Container>
            <div className="buttonBox">
                <Link to="/frame">
                    <BackButton />
                </Link>
            </div>
            <Section>
                <p>사진을 4장 업로드해주세요!</p>
            </Section>
            <Section>
                <BgImg ref={canvas} data={frameImg} Standard={standard}>
                    <Myimg isUpload={isUploadimg} isDelete={isdelete} />
                </BgImg>
            </Section>
            <Section>
                {complete && (
                    <div>
                        <Link to="/title">
                            <Button
                                className="uploadBtn"
                                onClick={onClickDownload}
                            >
                                확인
                            </Button>
                        </Link>
                        <Button
                            onClick={() => {
                                setIsDelete(true);
                            }}
                        >
                            사진 전체 삭제
                        </Button>
                    </div>
                )}
            </Section>
        </Container>
    ) : (
        <>
            <Loading isError={isValid !== "loading"} />
        </>
    );
}
