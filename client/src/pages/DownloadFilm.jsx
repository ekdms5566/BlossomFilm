import React, { useState } from "react";
import { DownloadButton, DownloadFilmLayout } from "./DownloadFilm.style";

import DownIcon from "../assets/Download.svg";

import BackButton from "../components/BackButton";
import Button from "../components/Button";
import Modal from "../components/Modal";

const DownloadFilm = () => {
    const [isModalOpen, setModalOpen] = useState(true);

    return (
        <DownloadFilmLayout>
            {isModalOpen ? <Modal setModalState={setModalOpen} /> : null}

            <div className="back-button">
                <BackButton />
            </div>
            <h1 className="title">봄을 담은 벚꽃필름이 완성되었어요!</h1>

            <DownloadButton className="option-button">
                <p>사진 저장하기</p>
                <img src={DownIcon} alt="다운로드" />
            </DownloadButton>
            <Button
                text={"URL로 프레임 공유하기"}
                className="share"
                onClick={() => {
                    setModalOpen(true);
                }}
            ></Button>
            <button className="retry-button"> 벚꽃필름 다시 만들기</button>
        </DownloadFilmLayout>
    );
};

export default DownloadFilm;
