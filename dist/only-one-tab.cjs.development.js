'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var uuid = require('uuid');

var OnlyOneTab = function OnlyOneTab(_ref) {
  var children = _ref.children,
    massage = _ref.massage;
  var localStorageKey = localStorage.getItem('tab');
  var _useState = React.useState(true),
    isCurrentTab = _useState[0],
    setisCurrentTab = _useState[1];
  var id = uuid.v4();
  React.useEffect(function () {
    localStorage.setItem('tab', id);
  }, []);
  window.addEventListener('storage', function () {
    if (localStorageKey === id) {
      setisCurrentTab(true);
    } else {
      setisCurrentTab(false);
    }
  });
  return React__default.createElement(React__default.Fragment, null, isCurrentTab ? children : React__default.createElement(React__default.Fragment, null, massage ? massage : React__default.createElement(React__default.Fragment, null, "Only One Tab Allowed")));
};

exports.default = OnlyOneTab;
//# sourceMappingURL=only-one-tab.cjs.development.js.map
