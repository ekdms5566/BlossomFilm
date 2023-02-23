import React, { useRef } from "react";
import { useState, useEffect } from "react";
import BackButton from "../BackButton";
import styled, { css } from "styled-components";
import { Button } from "../Button/style";
import { Link, useLocation } from "react-router-dom";
import Myimg from "./Myimg";

const BgImg = styled.div`
  ${(props) =>
    props.data &&
    css`
      background-image: url(${props.data});
    `};
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
  const [frameImg, setFrameImg] = useState("");
  const isUploadimg = (iscomplete) => {
    const temp = iscomplete === 0;
    setCompelete(temp);
  }
  const handleClick = () => {
    return isdelete;
  }
  const location = useLocation();
	const madeframe = location.state.post;
  useEffect(() => {
    setFrameImg(madeframe);
  },[frameImg])

  useEffect(() => {
    setIsDelete(false);
  },[isdelete])
  console.log(frameImg);

  console.log(isdelete);
  return (
    <Container>
      <Buttonbox>
      <BackButton />
      </Buttonbox>
      <Section>
        <p>사진을 4장 업로드해주세요!</p>
      </Section>
      <Section>
        <BgImg data={frameImg}>
            <Myimg isUpload={isUploadimg} myref={handleClick}/>
        </BgImg>
      </Section>
      <Section>
          {complete && <div>
            <Link to='/정보입력'><Button className="uploadBtn">확인</Button></Link>
            <Button onClick={() => {
              setIsDelete(true);
              }}>사진 전체 삭제</Button>
          </div>}
      </Section>
    </Container>
  );
}