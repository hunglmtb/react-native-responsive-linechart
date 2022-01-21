import * as React from 'react';
import _ from 'lodash';
import cloneDeep from 'lodash.clonedeep';
import { G as OG } from 'react-native-svg'
import { isWeb } from './platform'

const createElement = (type: string) => {
  return class extends React.Component {
    render() {
      return React.createElement(type, this.props, this.props.children);
    }
  };
};

const convertProps = (props: any) => {
  const transforms = [];

  if (props.translateX || props.translateY) {
    const x = _.get(props, 'translateX', 0);
    const y = _.get(props, 'translateY', 0);
    transforms.push(`translate(${x}, ${y})`);
  }

  if (props.originX || props.originY) {
    const x = _.get(props, 'originX', 0);
    const y = _.get(props, 'originY', 0);
    transforms.push(`origin(${x}, ${y})`);
  }

  if (props.scaleX || props.scaleY) {
    const x = _.get(props, 'scaleX', 0);
    const y = _.get(props, 'scaleY', 0);
    transforms.push(`scale(${x}, ${y})`);
  }

  if (props.rotateX || props.rotateY) {
    const x = _.get(props, 'rotateX', 0);
    const y = _.get(props, 'rotateY', 0);
    transforms.push(`rotate(${x}, ${y})`);
  }

  if (props.skewX || props.skewY) {
    const x = _.get(props, 'skewX', 0);
    const y = _.get(props, 'skewY', 0);
    transforms.push(`skew(${x}, ${y})`);
  }

  if (props.scale) {
    transforms.push(`scale(${props.scale})`);
  }

  if (props.origin) {
    transforms.push(`origin(${props.origin})`);
  }

  if (props.translate) {
    transforms.push(`translate(${props.translate})`);
  }

  /*if (props.onPress) {
    transforms.push(`onclick(${props.onPress})`);
  }*/

  if (transforms.length === 0) {
    return props;
  }

  return {
    ..._.omit(props, [
      'scaleX',
      'scaleY',
      'scale',
      'translateX',
      'translateY',
      'translate',
      'skewX',
      'skewY',
      'skew',
      'originX',
      'originY',
      'origin',
      'onPress',
    ]),
    transform: transforms.join(' '),
  };
};

const convertGradientProps = (props: any) => {
  let newProps = cloneDeep(props);
  if (props.stopColor) {
    newProps['stop-color'] = props.stopColor;
  }
  if (props.stopOpacity) {
    newProps['stop-opacity'] = props.stopOpacity;
  }

  return newProps;
};

const createGroup = () => {
  return class extends React.Component {
    render() {
      return React.createElement(
        'g',
        convertProps(this.props),
        this.props.children
      );
    }
  };
};

const createGradient = (name: string) => {
  return class extends React.Component {
    render() {
      return React.createElement(
        name,
        convertGradientProps(this.props),
        this.props.children
      );
    }
  };
};

export default createElement('svg');

export const Circle = createElement('circle');
export const ClipPath = createElement('clipPath');
export const Defs = createElement('defs');
export const Ellipse = createElement('ellipse');
export const Image = createElement('image');
export const Line = createElement('line');
export const LinearGradient = createGradient('linearGradient');
export const Path = createElement('path');
export const Polygon = createElement('polygon');
export const Polyline = createElement('polyline');
export const RadialGradient = createGradient('radialGradient');
export const Rect = createElement('rect');
export const Stop = createElement('stop');
export const Svg = createElement('svg');
export const Symbol = createElement('symbol');
export const Text = createElement('text');
export const TextPath = createElement('textPath');
export const TSpan = createElement('tspan');
export const Use = createElement('use');


export const G          = (props: any) => isWeb?<g {...convertProps(props)}/>:<OG {...props} />
