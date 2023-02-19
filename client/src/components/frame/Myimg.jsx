import React, { useEffect, useState } from 'react';
import styled from "styled-components";
export default function Myimg() {
    const [files, setFiles] = useState('');

    const onloadFile = (e) => {
        setFiles(URL.createObjectURL(e.target.files[0]));
    }

    const Img = styled.img`
        width:300px;
        height:300px;
        `;

    const form = styled.form`
        width:100%;
        height:100%;
        `;

    return (
        <section>
            <form method="post" enctype="multipart/form-data">
                <div className="button">
                </div>
                <input type="file" id="chooseFile" name="chooseFile" accept="image/*" onChange={onloadFile} />
                {/* <input type="file" id="chooseFile" name="chooseFile" accept="image/*" onchange={onloadFile} />
    <input type="file" id="chooseFile" name="chooseFile" accept="image/*" onchange={onloadFile} />
    <input type="file" id="chooseFile" name="chooseFile" accept="image/*" onchange={onloadFile} /> */}
                <div>{files && ( <Img alt="sample" src={files}/>)}</div>
            </form>
            
        </section>
    );
}


/**
 * 1. 배경사진 프레임이 있다고 가정하에 프레임을 배경에 맞게 움직일 수 있도록
 * 2. input태그를 이용해 사진을 하나씩 받을 수 있도록
 * 3. 리액트 라우터를 이용해서 다음 페이지로 이동할 수 있도록 
 * 
 * 
 * 아 어케하지 이거 form태그 여러개 있어도 문제아닌가
 */