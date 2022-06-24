import styled, { css } from 'styled-components'
import { space, typography, layout, variant } from 'styled-system'

export const StyledButton = styled('button')(
{
  backgroundImage: 'linear-gradient(to right, #14163c 0%, #03217b 79%)',
  textTransform: 'uppercase',
  letterSpacing: '0.2rem',
  width: '65%',
  height: '3rem',
  border: 'none',
  color: 'white',
  borderRadius: '2rem',
  cursor: 'pointer', 
},
  variant({
    variants: {
      primary:{
        border: '1px solid red'
      },
      outline:{
        border: '1px solid blue'
      }
    }
  })


)
