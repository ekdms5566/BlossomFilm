import React, { useRef } from "react";
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
background-size:cover;
z-index:1;
width:394px;
height:263px;
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
& > .uploadBtn{
  margin:0px 0px 20px 0px;
}
`;

const Buttonbox = styled.div`
margin:63px 0px 0px 40px;
`;
// const Grid = styled.div`
// display:grid;
// width:100%;
// height: 100%;
// grid-template-columns: repeat(2, 0.4fr);
// grid-template-rows: repeat(2, 0.407fr);   
// margin: 51px 0px 0px 14px;
// `;
export default function Uploadimg() {
  const [complete, setCompelete] = useState(false);
  const [isdelete, setIsDelete] = useState(false);
  const isUploadimg = (iscomplete) => {
    const temp = iscomplete === 0;
    setCompelete(temp);
  }
  const handleClick = () => {
    return isdelete;
  }
  return (
    <Container>
      <Buttonbox>
      <BackButton />
      </Buttonbox>
      <Section>
        <p>사진을 4장 업로드해주세요!</p>
      </Section>
      <Section>
        <BgImg>
            <Myimg isUpload={isUploadimg} myref={handleClick}/>
        </BgImg>
      </Section>
      <Section>
          {complete && <div>
            <Link to='/정보입력'><Button className="uploadBtn">확인</Button></Link>
            <Button onClick={() => {
              setIsDelete(true)
              }}>사진 전체 삭제</Button>
          </div>}
      </Section>
    </Container>
  );
}