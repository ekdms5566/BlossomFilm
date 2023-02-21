import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";

import { useRecoilState } from "recoil";
import { filmState } from "../../store/filmState";

import html2canvas from "html2canvas";

const Sample = () => {
    const [film, setFilm] = useRecoilState(filmState);
    const canvas = useRef();

    const nav = useNavigate();

    const onClickDownload = () => {
        // html2canvas(canvas.current,{scale : 10})
        // 모바일 Safari 환경 scale 확장 시 다운 불가능 이슈
        html2canvas(canvas.current, {
            allowTaint: true,
            useCORS: true,
            scale: 8,
        }).then(function (canvas) {
            var myImage = canvas.toDataURL("image/jpeg");
            setFilm(myImage);
        });
        nav("/title"); //화면 이동
    };

    return (
        <div>
            <div ref={canvas}>
                <img src={"/assets/Frame1_hor.svg"} />
            </div>
            <button
                onClick={() => {
                    onClickDownload();
                }}
            >
                next
            </button>
        </div>
    );
};

export default Sample;
