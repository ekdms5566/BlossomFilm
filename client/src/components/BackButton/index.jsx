import React from "react";

import BackArrow from "../../assets/BackArrow.svg";
import * as S from "./style";

const BackButton = ({ onClick }) => {
    return (
        <S.BackButton onClick={onClick}>
            <img src={BackArrow} alt="뒤로가기버튼" />
        </S.BackButton>
    );
};

export default BackButton;
