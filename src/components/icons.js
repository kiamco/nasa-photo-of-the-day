import React, { useState } from "react";
import { Button, Icon } from "semantic-ui-react";
import 'semantic-ui-css/semantic.min.css';
import Styled from 'styled-components'
function Icons(){
    const [isClick, setIsClick] = useState(false);
    const [like, setLike] = useState(0)

    const IconContainer = Styled.div`
    margin-top:10px;
    display:flex;
    justify-content:center;
    `;


    return(
        <IconContainer>
            <div class="ui labeled button" tabindex="0">
                <div onClick={() => setLike(like + 1)} class="ui red button">
                    <i class="heart icon"></i> Like
                </div>
                <a class="ui basic label">
                    {like}
                </a>
            </div>
        </IconContainer>
        
        // <IconContainer>
        //     <Icon name='heart outline' size='large' />
        //     <Icon name='comment outline' size='large' />
        // </IconContainer>
    );

}

export default Icons;