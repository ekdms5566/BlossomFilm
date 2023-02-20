
import styled from "styled-components";
import Myimg from "./Myimg";
import React, { useEffect, useRef, useState } from "react";

const Container = styled.div`
background-image: url("http://image.dongascience.com/Photo/2020/03/5bddba7b6574b95d37b6079c199d7101.jpg");
background-repeat: no-repeat;
z-index:1;
position: absolute;
`;
const Grid = styled.div`
display:grid;
width:100%;
height: 100%;
grid-template-columns: 100px 100px;    
`;

const OutContainer = styled.div`
overflow:hidden;
position:relative;
width:1000px;
height:1000px;
`;
export default function Fourcuts() {
    const containerRef = useRef(null); // 드래그 할 영역 네모 박스 Ref
    const dragComponentRef = useRef(null); // // 움직일 드래그 박스 Ref
    const [originPos, setOriginPos] = useState({ x: 0, y: 0 }); // 드래그 전 포지션값 (e.target.offset의 상대 위치)
    const [clientPos, setClientPos] = useState({ x: 0, y: 0 }); // 실시간 커서위치인 e.client를 갱신하는값
    const [pos, setPos] = useState({ left: 0, top: 0 }); // 실제 drag할 요소가 위치하는 포지션값
    const handleDrag = (e) => {
       
    }
    const dragStartHandler = (e) => {
        console.log(clientPos);
        // console.log(e);
      };

    //   const dragHandler = (e) => {
    //   };

    useEffect(() => {
        console.log(dragComponentRef);
        dragComponentRef.current.style = `left:${clientPos.x}px; top:${ clientPos.y}px;`;
    },[clientPos])
      const dragEndHandler = (e) => {
        console.log(clientPos);
        const clientPosTemp = { ...clientPos };
        clientPosTemp["x"] = e.clientX;
        clientPosTemp["y"] = e.clientY;
        setClientPos(clientPosTemp);
        // dragComponentRef.current.style = `left:${clientPos.x}px; top:${ clientPos.y}px;`;
        console.log(e);
      };

      const closeup = (e) => {
        console.log(e);
        dragComponentRef.current.style = `width:1000px; height:1000px;`;
        

      }

    return (
        <OutContainer className="container" ref={containerRef}>
        <Container className="dragcomponent"
        draggable="true" 
        ref={dragComponentRef}
        onDragStart={(e) => dragStartHandler(e)}
        onDragEnd={(e) => dragEndHandler(e)}
        style={{ left: pos.left, top: pos.top }}>
            <Grid>
              <img src="img/프레임.png">
                <Myimg></Myimg>
              </img>
            {/* <Myimg/>
            <Myimg/>
            <Myimg/>
            <Myimg/> */}
            </Grid>
        </Container>
        <button onClick={closeup}>확대ㅁㄴㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇ</button>
        </OutContainer>
    );
}

