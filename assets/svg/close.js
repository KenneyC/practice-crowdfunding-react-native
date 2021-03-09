import * as React from "react"
import Svg, { G, Path } from "react-native-svg"

function CloseSVG(props) {
  const { color } = props;

  return (
    <Svg width={14} height={15} xmlns="http://www.w3.org/2000/svg" {...props}>
      <G fill={color ?? "#FFF"} fillRule="evenodd">
        <Path d="M2.404.782l11.314 11.314-2.122 2.122L.282 2.904z" />
        <Path d="M.282 12.096L11.596.782l2.122 2.122L2.404 14.218z" />
      </G>
    </Svg>
  )
}

export default CloseSVG
