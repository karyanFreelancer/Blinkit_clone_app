import React from "react";
var getIcon = function (el, props) {
  if (!el) return el;
  if (/* @__PURE__ */React.isValidElement(el)) {
    return /* @__PURE__ */React.cloneElement(el, {
      ...props,
      // @ts-expect-error
      ...el.props
    });
  }
  return /* @__PURE__ */React.createElement(el, props);
};
export { getIcon };
//# sourceMappingURL=getIcon.native.js.map
