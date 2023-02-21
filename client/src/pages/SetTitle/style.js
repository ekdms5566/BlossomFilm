import styled from "styled-components";

export const SetTitleLayout = styled.div`
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
`;
