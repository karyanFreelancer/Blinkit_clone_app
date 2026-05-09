import React from "react";
import { useCurrentColor } from "./useCurrentColor.mjs";
const useGetThemedIcon = props => {
  const color = useCurrentColor(props.color);
  return el => {
    if (!el) return el;
    if (React.isValidElement(el)) {
      return React.cloneElement(el, {
        ...props,
        color,
        // @ts-expect-error
        ...el.props
      });
    }
    return React.createElement(el, props);
  };
};
export { useGetThemedIcon };
//# sourceMappingURL=useGetThemedIcon.mjs.map
