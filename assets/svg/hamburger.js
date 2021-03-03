import * as React from "react"
import Svg, { Path } from "react-native-svg"

function HamburgerSVG(props) {
  return (
    <Svg width={20} height={19} viewBox="0 0 13 16" xmlns="http://www.w3.org/2000/svg" {...props} preserveAspectRatio="none">
      <Path
        d="M0 0h16v3H0zm0 6h16v3H0zm0 6h16v3H0z"
        fill="#FFF"
        fillRule="evenodd"
      />
    </Svg>
  )
}

export default HamburgerSVG
