import _Object$entries from "@babel/runtime-corejs2/core-js-version2/object/entries";
export default function splitComponentProps(props, Component) {
  var componentPropTypes = Component.propTypes;
  var parentProps = {};
  var childProps = {};

  _Object$entries(props).forEach(function (_ref) {
    var propName = _ref[0],
        propValue = _ref[1];

    if (componentPropTypes[propName]) {
      parentProps[propName] = propValue;
    } else {
      childProps[propName] = propValue;
    }
  });

  return [parentProps, childProps];
}