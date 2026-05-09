import React from "react";
const getIcon = (el, props) => {
  if (!el) return el;
  if (React.isValidElement(el)) {
    return React.cloneElement(el, {
      ...props,
      // @ts-expect-error
      ...el.props
    });
  }
  return React.createElement(el, props);
};
export { getIcon };
//# sourceMappingURL=getIcon.mjs.map
