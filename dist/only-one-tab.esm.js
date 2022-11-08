import React, { useState, useEffect } from 'react';
import { v4 } from 'uuid';

var OnlyOneTab = function OnlyOneTab(_ref) {
  var children = _ref.children,
    massage = _ref.massage;
  var localStorageKey = localStorage.getItem('tab');
  var _useState = useState(true),
    isCurrentTab = _useState[0],
    setisCurrentTab = _useState[1];
  var id = v4();
  useEffect(function () {
    localStorage.setItem('tab', id);
  }, []);
  window.addEventListener('storage', function () {
    if (localStorageKey === id) {
      setisCurrentTab(true);
    } else {
      setisCurrentTab(false);
    }
  });
  return React.createElement(React.Fragment, null, isCurrentTab ? children : React.createElement(React.Fragment, null, massage ? massage : React.createElement(React.Fragment, null, "Only One Tab Allowed")));
};

export default OnlyOneTab;
//# sourceMappingURL=only-one-tab.esm.js.map
