import * as React from "react"
import Svg, {G, Path, Rect} from "react-native-svg"
import {
    defaultBackgroundColor,
    defaultColor,
    defaultFill,
    defaultSize,
    defaultStrokeWidth,
    IconProps
} from "../interface/icon-constants.interface";


const XSquare: React.FC<IconProps> = (props) => {

    // Set Default Props
    const fill = props.fill || defaultFill;
    const color = props.color || defaultColor;
    const backgroundColor = props.backgroundColor || defaultBackgroundColor;
    const size = props.size || defaultSize;
    const strokeWidth = props.strokeWidth || defaultStrokeWidth;

    return (
        <Svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
        >
            <G
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <Rect x={3} y={3} width={18} height={18} rx={2} ry={2} fill={fill ? color : 'none'}
                      stroke={fill ? backgroundColor : color}/>
                <Path d="M9 9l6 6M15 9l-6 6" fill={fill ? color : 'none'} stroke={color}/>
            </G>
        </Svg>
    );
}

export default XSquare;