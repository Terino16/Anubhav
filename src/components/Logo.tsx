import React from 'react'

interface LogoType {
    text:string,
    imgsrc:string;
    bgcolor:string | undefined;
}

const Logo = ({text,imgsrc,bgcolor}:LogoType) => {
  return (
    <span className="flex items-center w-fit space-x-1 px-2 py-1 mx-1 my-1 border rounded-lg ">
        <img src={`${imgsrc}`} height={14} width={14} alt='Error' className={`bg-${bgcolor}`}/>
        <p>{text}</p>
        </span>
  )
}

export default Logo