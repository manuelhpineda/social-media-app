import breakpoints from './breakpoints'
import colors from './colors'
import typography from './typography'
import space from './space'

export const theme = {
  colors,
  breakpoints,
  ...typography,
  space,
}

export const devices = {
  sm: `@media screen and (min-width: ${breakpoints[0]})`,
  md: `@media screen and (min-width: ${breakpoints[1]})`,
  lg: `@media screen and (min-width: ${breakpoints[2]})`,
  xl: `@media screen and (min-width: ${breakpoints[3]})`,
  xxl: `@media screen and (min-width: ${breakpoints[4]})`,
}
