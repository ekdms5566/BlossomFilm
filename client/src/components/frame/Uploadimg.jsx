import React from "react";
import Fourcuts from "./Fourcuts";
import Editframe from "./Editframe";
import { useState } from "react";
import BackButton from "../BackButton";
import styled from "styled-components";
import { Button } from "../Button/style";
import { Link } from "react-router-dom";
import Myimg from "./Myimg";

const BgImg = styled.div`
background-image: url("img/bgComponent.png");
background-repeat: no-repeat;
background-position: center;
z-index:1;
width:319px;
height:213px;
`;

const Container = styled.div`
display: flex;
flex-direction: column;
background-color: #4a4a4a;
`;

const Section = styled.div`
display:flex;
justify-content:center;
height:100%;
color: white;
padding: 30px;
`;

const Grid = styled.div`
display:grid;
width:100%;
height: 100%;
grid-template-columns: repeat(2, 0.4fr);
grid-template-rows: repeat(2, 0.407fr);   
margin: 51px 0px 0px 14px;
`;
export default function Uploadimg() {
  const [images, setImages] = useState([
    {
      id: 1,
      isTrue: false,
    },
    {
      id: 2,
      isTrue: false,
    },
    {
      id: 3,
      isTrue: false,
    },
    {
      id: 4,
      isTrue: false,
    },
  ]);

  const isUploadAll = images.filter((img) => {
    return img.isTrue === false;
  });
  const isUploadimg = (id, isTrue, file) => {
    console.log(id,isTrue,file);
  }
  return (
    <Container>
      <BackButton />
      <Section>
        <p>사진을 4장 업로드해주세요!</p>
      </Section>
      <Section>
        <BgImg>
          <Grid>
            <Myimg/>
          </Grid>
        </BgImg>
      </Section>
      <Section>
        {isUploadAll.length === 0 ? (
          <div>
            <Link to='/정보입력'><Button>확인</Button></Link>
            <Button>사진 전체 삭제</Button>
          </div>
        ) : (
          <Button>갤러리에서 선택</Button>
        )}
      </Section>
    </Container>
  );
}
 // <Myimg 
              // key={image.id}
              // id={image.id}
              // bool={image.isTrue}
              // upload={isUploadimg}
              // />  