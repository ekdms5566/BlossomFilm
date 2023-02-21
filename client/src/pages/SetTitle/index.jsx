import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import BackButton from "../../components/BackButton/index";
import Button from "../../components/Button";
import CheckButton from "../../components/CheckButton";
import { titleState } from "../../store/filmState";
import { SetTitleLayout } from "./style";

const SetTitle = () => {
    const [title, setTitle] = useState("");
    const [filmTitle, setFilmTitle] = useRecoilState(titleState);

    const nav = useNavigate();

    const onClickNext = () => {
        nav("/download");
    };

    return (
        <SetTitleLayout>
            <div className="back-button">
                <BackButton />
            </div>
            <h1 className="title">프레임 제목을 정해주세요!</h1>
            <CheckButton
                hint="제목을 입력해주세요"
                setInput={setTitle}
                onClickCheck={() => {
                    //TODO 제목 설정 API 연결
                    setFilmTitle(title);
                }}
            />
            <Button
                text={"입력했어요!"}
                className="option-button"
                onClick={onClickNext}
            />
            <Button text={"괜찮아요!"} onClick={onClickNext} />
        </SetTitleLayout>
    );
};

export default SetTitle;
