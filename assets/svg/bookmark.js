import * as React from "react"
import Svg, { G, Circle, Path } from "react-native-svg"

function BookmarkSVG(props) {
  return (
    <Svg width={56} height={56} xmlns="http://www.w3.org/2000/svg" {...props}>
      <G fill="none" fillRule="evenodd">
        <Circle fill="#2F2F2F" cx={28} cy={28} r={28} />
        <Path fill="#B1B1B1" d="M23 19v18l5-5.058L33 37V19z" />
      </G>
    </Svg>
  )
}

export default BookmarkSVG
