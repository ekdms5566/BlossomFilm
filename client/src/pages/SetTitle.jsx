import React, { useState } from "react";
import BackButton from "../components/BackButton/index";
import Button from "../components/Button";
import CheckButton from "../components/CheckButton";
import { SetTitleLayout } from "./SetTitle.style";

const SetTitle = () => {
    const [title, setTitle] = useState("");

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
                    alert(`check ${title}`);
                }}
            />
            <Button text={"입력했어요!"} className="option-button"></Button>
            <Button text={"괜찮아요!"}></Button>
        </SetTitleLayout>
    );
};

export default SetTitle;
