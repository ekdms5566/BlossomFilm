import "cropperjs/dist/cropper.css";
import React, { useRef, useState, useContext } from "react";
import Cropper from "react-cropper";
import { useRecoilState } from "recoil";
import { frameState } from "../../store/filmState";
import { convertURLtoFile } from "../../utils/urltofile";
import CropButton from "../CropButton";
import * as S from "./style/style.js";
import { CutContext, FrameBgContext } from "../../context/Context";

export default function Fourcuts(props) {
    const cropperRef = useRef(null);
    // 유저가 첨부한 이미지
    const [cropData, setCropData] = useState("");
    const [inputImage, setInputImage] = useState(null);
    const [cropper, setCropper] = useState();
    // 유저가 선택한 영역만큼 크롭된 이미지
    //   const [croppedImage, setCroppedImage] = useState(null);
    //   const [complete, setComplete] = useState(false);
    const [showcropper, setshowCropper] = useState(false);
    // 인생네컷 가로 세로 기준 state
    const [frame, setFrame] = useRecoilState(frameState);
    const { frameBg,setFrameBg } = useContext(FrameBgContext);
    const { cutSelect } = useContext(CutContext); 


    console.log(frameBg, cutSelect);
    const onCrop = () => {
        const imageElement = cropperRef?.current;
        const cropper = imageElement?.cropper;
        // setCroppedImage(cropper.getCroppedCanvas().toDataURL());
        // setComplete(true);
    };

    const getCropData = (e) => {
        // setStandard("Length");
        if (typeof cropper !== "undefined") {
            const url = cropper.getCroppedCanvas().toDataURL();
            setCropData(url);
            setshowCropper(true);
            setFrameBg(url);
            const converted = convertURLtoFile(url).then((res) => {
                console.log("res", res);
                setFrame(res);

            });
        }
        console.log(cropperRef.current);
    };

    const reCrop = () => {
        setshowCropper(false);
    };

    props.pagemove(cropData, cutSelect);

    return (
        <S.Container>
            <div className="wrapperContainer">
                {/* 아래 사진입력은 사진을 입력받아서도 수정가능하게끔 할 수 있는 코드  */}
                {/* <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => {
                        setshowCropper(false);
                        setInputImage(URL.createObjectURL(e.target.files[0]));
                        //setFrame(e.target.files[0]);
                        console.log("event", e.target.files[0]);
                    }}
                /> */}
                <CropButton
          style="color:white"
          text="수정하기"
          onClick={() => {
            setshowCropper(false);
            setInputImage(frameBg);
          }}
        >
          <img style={{height:"1.15rem"}} src="assets/framebtn/blossom.png"></img>
        </CropButton>

                <section className="btnbox">
                    <CropButton
                        style="color:white"
                        text="이미지 저장"
                        onClick={getCropData}
                    ></CropButton>

                    <CropButton
                        style="color:white"
                        text="다시자르기"
                        onClick={reCrop}
                    ></CropButton>
                </section>
                <Cropper
                    className={showcropper ? `cropper-hidden` : "cropperObject"}
                    src={inputImage}
                    crop={onCrop}
                    ref={cropperRef}
                    onInitialized={(instance) => {
                        setCropper(instance);
                    }}
                />
                {/* <img className="previewImg" src={croppedImage} /> */}
            </div>
            <S.BgImg className="bgImg" Standard={cutSelect} data={cropData}>
                <div className="imgbox">
                    <Imgbox itemclass="testimg1" />
                    <Imgbox itemclass="testimg2" />
                    <Imgbox itemclass="testimg3" />
                    <Imgbox itemclass="testimg4" />
                </div>
            </S.BgImg>
        </S.Container>
    );
}

const Imgbox = (props) => {
    return (
        <section>
            <img
                className={props.itemclass}
                src="assets/framebtn/Rectangle.png"
            ></img>
        </section>
    );
};
