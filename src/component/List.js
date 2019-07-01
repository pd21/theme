import React from 'react'
import styled, { keyframes, ThemeProvider } from 'styled-components'

const Applist = styled.li`
   ${ (props) => `list-style-type: ${props.poku ? 'square' : 'upper-roman'}`}
   width:50%;
   margin-left:2%;
`



class List extends React.Component{
    render(){
        let temp = this.props.primary;
        return(
            <div>
                {/* {this.props.primary && <Applist primary>poku</Applist>} */}
                <Applist poku={this.props.primary}>f</Applist>
                <Applist poku={this.props.primary}>g</Applist>
                <Applist poku={this.props.primary}> h</Applist>
            </div>
        )
    }
}

export default List