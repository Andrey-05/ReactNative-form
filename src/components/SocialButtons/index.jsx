import React from 'react';
import {ButtonsContainer, ButtonsImg, ButtonArea} from './styles';

const SocialButtons = () => {
    return(
        <ButtonsContainer>
            <ButtonArea>
                <ButtonsImg source={{uri: 'https://cdn-icons-png.flaticon.com/512/25/25187.png'}}/>
            </ButtonArea>
            <ButtonArea>
                <ButtonsImg source={{uri: 'https://guiadobebe.com.br/wp-content/uploads/2016/07/logo-twitter-00000000000171A4.png'}}/>
            </ButtonArea>
            <ButtonArea>
                <ButtonsImg source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2048px-Google_%22G%22_Logo.svg.png'}}/>
            </ButtonArea>
        </ButtonsContainer>
    )
}

export default SocialButtons