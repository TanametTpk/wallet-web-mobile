import React from 'react'
import styled from 'styled-components'

const Container = styled.div`

    background-color: white;

`

const Board: React.FC = ({ children }) => {
    return (
        <Container>
            { children }
        </Container>
    )
}

export default Board
