import React, {CSSProperties, FC, useCallback} from 'react';
import {CloseModalButton, CreateMenu} from './styles';

interface Props {
    show : boolean,
    onCloseModal : (e:any) => void;
    style : CSSProperties;
    closeButton?: boolean;
}
const Menu : FC<Props> = ({closeButton,children, style, show, onCloseModal}) => {
    
    const stopPropagation = useCallback((e)=>{
        e.stopPropagation();
    },[])
    
    return(
        <CreateMenu onClick = {onCloseModal}>
            <div style = {style} onClick = {stopPropagation}>
                {closeButton && <CloseModalButton onClick = {onCloseModal}>&times;</CloseModalButton>}
            {children}
            </div>
        </CreateMenu>
    )
};

Menu.defaultProps = {
    closeButton : true,
}

export default Menu;