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
    justify-content:left;
    `;


    return(
        <IconContainer>
            <div className="ui labeled button" tabindex="0">
                <div onClick={() => setLike(like + 1)} className="ui red button">
                    <i className="heart icon"></i>
                </div>
                <a className="ui basic label">
                    {like}
                </a>
            </div>
            <Button icon color="blue">
                <Icon name='comment outline' />
            </Button>
            <Button icon color="green">
                <Icon name='share square outline' />
            </Button>
        </IconContainer>
        
        // <IconContainer>
        //     <Icon name='heart outline' size='large' />
        //     <Icon name='comment outline' size='large' />
        // </IconContainer>
    );

}

export default Icons;