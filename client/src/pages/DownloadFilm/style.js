import styled from "styled-components";
import { Button } from "../../components/Button/style";

export const DownloadFilmLayout = styled.div`
    position: relative;

    max-height: calc(var(--vh, 1vh) * 100);
    padding: 0 40px;

    display: flex;
    align-items: center;
    flex-direction: column;

    canvas {
        position: relative;
        background-color: yellow;
    }

    .back-button {
        position: absolute;
        left: 40px;
        top: 60px;
    }

    .title {
        margin-top: 140px;
        font-weight: 600;
        font-size: 16px;
        line-height: 19px;
        color: #212121;
    }

    .option-button {
        margin: 1.6rem;
        margin-top: 2rem;
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

    .frame {
        position: relative;
        margin-top: 2rem;
        max-width: 394px;
        max-height: 32rem;

        background-color: blue;

        /*
width: 212.64px;
height: 372.17px;


        width: 159.99px;
        height: 479.96px;
        */

        display: flex;
        justify-content: center;
        background-repeat: no-repeat;
        background-size: cover;

        img {
            width: 100%;
        }
    }
`;

export const DownloadButton = styled(Button)`
    display: flex;
    flex-direction: row;
    justify-items: center;
    align-content: space-between;

    background-color: #ff6581;
    color: #ffffff;
    p {
        flex-grow: 1;
    }

    :active {
        filter: brightness(0.8);
    }
`;

export const Frame = styled.img`
    width: 394px;
    height: 263px;
    background-color: red;
`;
