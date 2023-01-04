import React from 'react';
import { Wrapper } from './styled';
import Image from "next/image";
import GoogleLogo from '../../../public/googleLogo.svg'

export const GoogleAuthButton = () => {
    return (
        <Wrapper>
            <Image src={GoogleLogo} alt={"decor"} width={25} height={25}/>
        </Wrapper>
    );
};

