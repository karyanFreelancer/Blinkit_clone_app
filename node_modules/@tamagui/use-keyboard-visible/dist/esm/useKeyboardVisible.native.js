import React from "react";
import { Keyboard } from "react-native";
var useKeyboardVisible = function () {
  var [isKeyboardVisible, setKeyboardVisible] = React.useState(false);
  React.useEffect(function () {
    var keyboardDidShowListener = Keyboard.addListener("keyboardDidShow", function () {
      setKeyboardVisible(true);
    });
    var keyboardDidHideListener = Keyboard.addListener("keyboardDidHide", function () {
      setKeyboardVisible(false);
    });
    return function () {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);
  return isKeyboardVisible;
};
export { useKeyboardVisible };
//# sourceMappingURL=useKeyboardVisible.native.js.map
