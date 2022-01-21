import { Platform } from 'react-native'
import {G as OG} from 'react-native-svg'
import {Circle as OCircle} from 'react-native-svg'
import {ClipPath as OClipPath} from 'react-native-svg'
import {Defs as ODefs} from 'react-native-svg'
import {Ellipse as OEllipse} from 'react-native-svg'
import {Image as OImage} from 'react-native-svg'
import {Line as OLine} from 'react-native-svg'
import {LinearGradient as OLinearGradient} from 'react-native-svg'
import {Path as OPath} from 'react-native-svg'
import {Polygon as OPolygon} from 'react-native-svg'
import {Polyline as OPolyline} from 'react-native-svg'
import {RadialGradient as ORadialGradient} from 'react-native-svg'
import {Rect as ORect} from 'react-native-svg'
import {Stop as OStop} from 'react-native-svg'
import {Svg as OSvg} from 'react-native-svg'
import {Symbol as OSymbol} from 'react-native-svg'
import {Text as OText} from 'react-native-svg'
import {TextPath as OTextPath} from 'react-native-svg'
import {TSpan as OTSpan} from 'react-native-svg'
import {Use as OUse} from 'react-native-svg'

import {Circle as WCircle} from './svg'
import {ClipPath as WClipPath} from './svg'
import {Defs as WDefs} from './svg'
import {Ellipse as WEllipse} from './svg'
import {Image as WImage} from './svg'
import {Line as WLine} from './svg'
import {LinearGradient as WLinearGradient} from './svg'
import {Path as WPath} from './svg'
import {Polygon as WPolygon} from './svg'
import {Polyline as WPolyline} from './svg'
import {RadialGradient as WRadialGradient} from './svg'
import {Rect as WRect} from './svg'
import {Stop as WStop} from './svg'
import {Svg as WSvg} from './svg'
import {Symbol as WSymbol} from './svg'
import {Text as WText} from './svg'
import {TextPath as WTextPath} from './svg'
import {TSpan as WTSpan} from './svg'
import {Use as WUse} from './svg'

export const isWeb = Platform.OS==="web"

export const Circle     = isWeb?WCircle:OCircle;
export const ClipPath   = isWeb?WClipPath:OClipPath;
export const Defs       = isWeb?WDefs:ODefs
export const Ellipse    = isWeb?WEllipse:OEllipse
export const Image      = isWeb?WImage:OImage
export const Line       = isWeb?WLine:OLine
export const LinearGradient = isWeb?WLinearGradient:OLinearGradient
export const Path = isWeb?WPath:OPath
export const Polygon = isWeb?WPolygon:OPolygon
export const Polyline = isWeb?WPolyline:OPolyline
export const RadialGradient = isWeb?WRadialGradient:ORadialGradient
export const Rect = isWeb?WRect:ORect
export const Stop = isWeb?WStop:OStop
export const Svg = isWeb?WSvg:OSvg
export const Symbol = isWeb?WSymbol:OSymbol
export const Text = isWeb?WText:OText
export const TextPath = isWeb?WTextPath:OTextPath
export const TSpan = isWeb?WTSpan:OTSpan
export const Use = isWeb?WUse:OUse

