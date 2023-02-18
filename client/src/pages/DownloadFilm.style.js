import styled from "styled-components";
import { Button } from "../components/Button/style";

export const DownloadFilmLayout = styled.div`
    position: relative;

    height: calc(var(--vh, 1vh) * 100);
    padding: 0 40px;

    display: flex;
    align-items: center;
    flex-direction: column;

    .back-button {
        position: absolute;
        left: 40px;
        top: 60px;
    }

    .title {
        margin-top: 167px;
        margin-bottom: 7.8rem;
        font-weight: 600;
        font-size: 16px;
        line-height: 19px;
        color: #212121;
    }

    .option-button {
        margin: 1.6rem;
        margin-top: 9.125rem;
    }

    .retry-button {
        margin-top: 1.563rem;
        border: none;
        background: none;

        font-weight: 300;
        font-size: 10px;
        line-height: 12px;
        color: #636363;

        cursor: pointer;
        :active {
            filter: brightness(0.3);
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
