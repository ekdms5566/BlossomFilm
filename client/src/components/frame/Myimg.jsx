import React, { useEffect, useMemo, useState } from 'react';
import styled from "styled-components";

const Grid = styled.div`
display:grid;
width:100%;
height: 100%;
grid-template-columns: repeat(2, 1fr);
grid-template-rows: repeat(2, 1fr);   
margin: 21px 0px 0px 14px;
 
section {
    
}
`;

const Img = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    transform: translate(50, 50);
    width: 100%;
    height: 100%;
    object-fit: cover;
    margin: auto;
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

const ImgWrapper = styled.div`
    position: relative;
    width: 122px;
    height: 81px;
`;

export default function Myimg(props) {
    const [files, setFiles] = useState({File1 : "", File2 : "", File3: "", File4: ""});

    let fileArr = Object.keys(files).map(item => files[item]);
    const comFileUpload = fileArr.filter((file) => file === "");
     useEffect(() => {
        props.isUpload(comFileUpload.length);
        
     },[files])

     useMemo(() => {
        console.log(props.myref());
        setFiles({...files,File1:"",File2:"",File3:"",File4:""});
    },[props.myref()])


    const onloadFile = (e) => {
        const image = e.target.id;
        const imgURL = files && URL.createObjectURL(e.target.files[0]);
        setFiles({...files, [image]:imgURL});
       
    }
    return (
        <section>
            <form method="post" enctype="multipart/form-data">
                <Grid>
                <section>
                    {!files.File1 && <Label for="File1">+</Label>}
                    {files.File1 && <ImgWrapper><Img alt="sample" src={files.File1} /></ImgWrapper>}
                </section>            
                <section>
                    {!files.File2 && <Label for="File2">+</Label>}
                    {files.File2 && <ImgWrapper><Img alt="sample" src={files.File2} /></ImgWrapper>}
                    </section>
                    <section>
                    {!files.File3 && <Label for="File3">+</Label>}
                    {files.File3 && <ImgWrapper><Img alt="sample" src={files.File3} /></ImgWrapper>}
                    </section>
                    <section>
                    {!files.File4 && <Label for="File4">+</Label>}
                    {files.File4 && <ImgWrapper><Img alt="sample" src={files.File4} /></ImgWrapper>}
                    </section>
                </Grid>
                <Input type="file" id="File1" name="chooseFile" accept="image/*" onChange={onloadFile} />
                <Input type="file" id="File2" name="chooseFile" accept="image/*" onChange={onloadFile} />
                <Input type="file" id="File3" name="chooseFile" accept="image/*" onChange={onloadFile} />
                <Input type="file" id="File4" name="chooseFile" accept="image/*" onChange={onloadFile} />
            </form>
            {/* {files.File2 && <div><Img alt="sample" src={files.File2} /></div>}
            {files.File3 && <div><Img alt="sample" src={files.File3} /></div>}
            {files.File4 && <div><Img alt="sample" src={files.File4} /></div>} */}
        </section>
    );
}
