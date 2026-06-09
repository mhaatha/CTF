// Utility functions for data processing
const _0x9f3a = {
  _0xa1: "RkdURXtmYWtlX2ZsYWdfMV9kb250X3VzZX0=",
  _0xb2: 0x42,
  _0xc3: [12, 45, 78, 91, 23, 56, 89, 34],
};

function _0xdecode1(_0xdata) {
  try {
    return atob(_0xdata);
  } catch (_0xe) {
    return null;
  }
}

function _0xprocess(_0xarr, _0xkey) {
  return _0xarr.map((_0xv) => _0xv ^ _0xkey);
}

function _0xvalidate(_0xinput) {
  const _0xregex = /^[A-Za-z0-9_]+$/;
  return _0xregex.test(_0xinput);
}

const _0xhelper = {
  _0xcheck: function (_0xval) {
    return _0xval.length > 10;
  },
  _0xformat: function (_0xstr) {
    return _0xstr.toUpperCase();
  },
};

// Export functions
window._0xutil1 = _0xdecode1;
window._0xutil2 = _0xprocess;
window.getFlagData = function () {
  return _0xdecode1(_0x9f3a._0xa1);
};
