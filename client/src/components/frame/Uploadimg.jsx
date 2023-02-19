import React from "react";
import Fourcuts from "./Fourcuts";
import Editframe from "./Editframe";
import { useState } from "react";
import BackButton from "../BackButton";
import styled from "styled-components";
import { Button } from "../Button/style";
import { Link } from "react-router-dom";
export default function Uploadimg() {
  const [images, setImages] = useState([
    {
      id: 1,
      isTure: false,
    },
    {
      id: 2,
      isTure: false,
    },
    {
      id: 3,
      isTure: false,
    },
    {
      id: 4,
      isTure: false,
    },
  ]);
  const Container = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #4a4a4a;
  `;

  const Section = styled.div`
    color: white;
    padding: 30px;
  `;
  const isUploadAll = images.filter((img) => {
    return img.isTure === false;
  });
  return (
    <Container>
      <BackButton />
      <Section>
        <p>사진을 4장 업로드해주세요!</p>
      </Section>
      <Section>
        {/* <Fourcuts>
        </Fourcuts> */}
      </Section>
      <Section>
        {isUploadAll.length === 0 ? (
          <div>
            <Link to ='/정보입력'><Button>확인</Button></Link>
            <Button>사진 전체 삭제</Button>
          </div>
        ) : (
          <Button>갤러리에서 선택</Button>
        )}
      </Section>
    </Container>
  );
}
