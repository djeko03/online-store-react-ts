import Image from "next/image";
import React from "react";

interface IProps {
    src: string;
    width: number;
    height: number;
}

export const MyImage: React.FC<IProps> = ({
    src,
    width,
    height,
                 }) => {

    return(
        <Image layout={'intrinsic'} src={src} width={width} height={height}/>
    )
}