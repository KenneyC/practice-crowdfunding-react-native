import * as React from "react"
import Svg, { G, Circle, Path } from "react-native-svg"

function CheckSVG(props) {
  return (
    <Svg width={64} height={64} xmlns="http://www.w3.org/2000/svg" {...props}>
      <G fill="none" fillRule="evenodd">
        <Circle fill="#3CB3AB" cx={32} cy={32} r={32} />
        <Path stroke="#FFF" strokeWidth={5} d="M20 31.86L28.093 40 44 24" />
      </G>
    </Svg>
  )
}

export default CheckSVG
