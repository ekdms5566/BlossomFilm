import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Logo from "../assets/sub-logo.svg";

const StyledContainer = styled.div`
    position: relative;
    height: calc(var(--vh, 1vh) * 80);
    max-width: 90%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-content: center;
    gap: 3rem;
    img {
        width: 50%;
    }
    .retry-button {
        padding-top: 1.563rem;
        padding-bottom: 1.563rem;
        border: none;
        background: none;

        font-weight: 300;
        font-size: 10px;
        line-height: 12px;
        color: #636363;

        cursor: pointer;
    }
`;

const Loading = ({ isError }) => {
    return (
        <StyledContainer>
            <img src={Logo} alt="logo" />
            <p>
                {isError
                    ? "프레임 정보를 찾을 수 없습니다."
                    : "프레임 가져오는 중! 잠시만 기다려주세요"}
            </p>
            {isError ? (
                <Link to="/">
                    <button className="retry-button">벚꽃필름 만들기</button>
                </Link>
            ) : null}
        </StyledContainer>
    );
};

export default Loading;
