import React, { useEffect, useState } from 'react';
import styled from "styled-components";


const Img = styled.img`
  width:122.28px;
  height:81.47px;
  `;

const Form = styled.form`
width:100%;
height:100%;
`;

const Label = styled.label`
  background-color:#FF6600;
  border-radius: 4px;
  color: white;
  cursor: pointer;
`;

const Input = styled.input`
    display:none;
`;


export default function Myimg(props) {
    const [files, setFiles] = useState({File1 : "", File2 : "", File3: "", File4: ""});
    const onloadFile = (e) => {
        const image = e.target.id;
        const imgURL = URL.createObjectURL(e.target.files[0]);
        setFiles({...files, [image]:imgURL})
    }
    console.log(files);

    return (
        <section>
            <form method="post" enctype="multipart/form-data">
                <div>
                    {!files.File1 && <Label for="File1">+</Label>}
                    {!files.File2 && <Label for="File2">+</Label>}
                    {!files.File3 && <Label for="File3">+</Label>}
                    {!files.File4 && <Label for="File4">+</Label>}
                </div>
                <Input type="file" id="File1" name="chooseFile" accept="image/*" onChange={onloadFile} />
                <Input type="file" id="File2" name="chooseFile" accept="image/*" onChange={onloadFile} />
                <Input type="file" id="File3" name="chooseFile" accept="image/*" onChange={onloadFile} />
                <Input type="file" id="File4" name="chooseFile" accept="image/*" onChange={onloadFile} />
            </form>
            {files.File1 && <div><Img alt="sample" src={files.File1} /></div>}
            {files.File2 && <div><Img alt="sample" src={files.File2} /></div>}
            {files.File3 && <div><Img alt="sample" src={files.File3} /></div>}
            {files.File4 && <div><Img alt="sample" src={files.File4} /></div>}
        </section>
    );
}
