// Performance monitoring and analytics
(function () {
  const _0xmetrics = {
    _0xstart: 0,
    _0xend: 0,
    _0xevents: [],
  };
  function _0xtrack(_0xevent) {
    _0xmetrics._0xevents.push({
      _0xtype: _0xevent,
      _0xts: Date.now(),
    });
  }
  function _0xgetMetrics() {
    return {
      _0xtotal: _0xmetrics._0xevents.length,
      _0xduration: 0,
    };
  }

  // Fake flag checker
  const _0xfakeChecker = (_0xflag) => {
    const _0xpattern = /FGTE\{[a-zA-Z0-9_]+\}/;
    return _0xpattern.test(_0xflag);
  };

  // Obfuscated string
  const _0xdata = [
    70, 71, 84, 69, 123, 110, 111, 116, 95, 116, 104, 101, 95, 114, 101, 97,
    108, 95, 111, 110, 101, 125,
  ];
  window._0xmonitor = {
    track: _0xtrack,
    get: _0xgetMetrics,
    check: _0xfakeChecker,
    data: String.fromCharCode(..._0xdata),
  };
})();
