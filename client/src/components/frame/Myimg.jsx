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
    const onloadFile = (e) => {
        e.preventDefault();
        (URL.createObjectURL(e.target.files[0]));
        props.upload(props.id, true, files);
    }

    console.log(props.id);

    return (
        <section>
            <form method="post" enctype="multipart/form-data">
                
                    {!files && <Label for="chooseFile1">+231123312312123</Label>}
                    {!files && <Label for="chooseFile2">+231123312312123</Label>}
                    {!files && <Label for="chooseFile3">+</Label>}
                    {!files && <Label for="chooseFile4">+</Label>}
                
                <Input type="file" id="chooseFile1" name="chooseFile" accept="image/*" onChange={onloadFile} />
                <Input type="file" id="chooseFile2" name="chooseFile" accept="image/*" onChange={onloadFile} />
                <Input type="file" id="chooseFile3" name="chooseFile" accept="image/*" onChange={onloadFile} />
                <Input type="file" id="chooseFile4" name="chooseFile" accept="image/*" onChange={onloadFile} />
            </form>
            {files && <div><Img alt="sample" src={files} /></div>}
        </section>
    );
}
