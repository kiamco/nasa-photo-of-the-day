import React from 'react'
import { Dimmer, Loader, Image, Segment } from 'semantic-ui-react'
import Styled from 'styled-components';

const Load = () => {

    const LoadingContainer = Styled.div`
    height:100%
    `


    return (
    <div>
        <LoadingContainer>
            <Dimmer active>
                <Loader size='massive' content='Loading' />
            </Dimmer>
        </LoadingContainer>
    </div>)
    
}

export default Load