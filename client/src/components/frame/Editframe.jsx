import React, { useState } from 'react';
import { Button } from '../Button/style';
import Fourcuts from './Fourcuts';
import styled from "styled-components";
import { Link } from 'react-router-dom';
import BackButton from '../BackButton';

export default function Editframe() {
    const [imgData, setImgData] = useState("");
    const Container = styled.div`
    display:flex;
    flex-direction: column;
    background-color:#4A4A4A;
    `;

    const Section = styled.div`
    color:white;
    padding:30px;
    `;
    
    return (
        <Container>
            <BackButton/>
            <Section>
                <p>프레임 배경 사진을 수정해보세요!</p>
            </Section>
            <Section>
            <Fourcuts>
            </Fourcuts>
            </Section>
            <Section>
                <Link to='/Uploadimg'>
                <Button>확인</Button>
                </Link>
            </Section>
        </Container>
    );
}

