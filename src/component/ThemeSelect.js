import React from 'react'
import styled from 'styled-components'

const Select = styled.select`
  margin: 2rem 0.5rem;
  padding: 0rem 0.5rem;
  font-family: Roboto;
  font-size: 1rem;
  border: 1px solid ${props => props.theme.light};
  box-shadow: 0px 0px 0px 1px rgba(0, 0, 0, 0.1);
  background: ${props => props.theme.light};
  border-radius: 2px;
`

export const SelectOpt = styled.option`
  font-family: Roboto;
  font-size: 1rem;
  text-align:center;
`

export default class ThemeSelect extends React.Component{
    render(){
        return(
            <div>
                <Select onChange={e => this.props.handleThemeChange(e)}>
                    <SelectOpt value='theme1'> 
                        Theme1
                    </SelectOpt>
                    <SelectOpt vauue='theme2'>
                        Theme2
                    </SelectOpt>
                </Select>
            </div>
        )
    }
}

