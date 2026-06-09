const _0x1a2b3c = "STGR{qbag_hfr_ebg13_vgf_snxr}";
function _0x2d4e5f() {
  return _0x1a2b3c.replace(/[a-zA-Z]/g, (_0xc) => {
    const _0xb = _0xc <= "Z" ? 65 : 97;
    return String.fromCharCode(((_0xc.charCodeAt(0) - _0xb + 13) % 26) + _0xb);
  });
}
const _0x3f6a7d = "RkdURXtyZXZlcnNlX2VuZ2luZWVyX21hc3Rlcn0=";
function _0x4g8h9i() {
  try {
    return atob(_0x3f6a7d);
  } catch (_0xe) {
    return "FGTE{decode_error}";
  }
}
const _0x5j1k2l = [
  73, 74, 87, 72, 126, 106, 102, 102, 105, 128, 102, 99, 128, 119, 116, 122,
  128, 119, 109, 122, 126,
];
function _0x6m3n4o() {
  return String.fromCharCode(..._0x5j1k2l.map((_0xc) => _0xc - 5));
}
const _0x7p5q6r = "FGTE{y0u_f0und_m3_but_1m_f4k3}";
function _0x8s7t8u() {
  return _0x7p5q6r;
}
function getRandomDecoy() {
  const _0xm = [_0x2d4e5f, _0x4g8h9i, _0x6m3n4o, _0x8s7t8u];
  const _0xr = _0xm[Math.floor(Math.random() * _0xm.length)];
  return _0xr();
}
(function () {
  const _0x4f2a = [
    "map",
    "charCodeAt",
    "fromCharCode",
    "split",
    "reverse",
    "join",
  ];
  const _0x3b1c = {
    _0x1: [59, 59, 47, 63, 2, 28, 8, 8, 17, 59],
    _0x2: [23, 27, 17, 5, 48, 7, 25, 51, 25, 15],
    _0x3: [31, 13, 101, 101, 112, 75, 122, 102, 108],
    _0xa: 87,
    _0xb: 42,
    _0xc: "ctf_secret_2024",
    _0xk: "secret_key_2025",
  };
  const _0x7d8e = (_0xd, _0xk) => _0xd[_0x4f2a[0]]((_0xb) => _0xb ^ _0xk);
  const _0x9a2f = (_0xd, _0xk) =>
    _0xd[_0x4f2a[0]]((_0xb, _0xi) => _0xb ^ (_0xk + _0xi));
  const _0x6c3d = (_0xa) => String[_0x4f2a[2]](..._0xa);
  window._0x9e4c2a = function () {
    const _0x5e = [..._0x3b1c._0x1, ..._0x3b1c._0x2, ..._0x3b1c._0x3];
    const _0x6f = _0x9a2f(_0x5e, _0x3b1c._0xb);
    const _0x7g = _0x7d8e(_0x6f, _0x3b1c._0xa);
    return _0x6c3d(_0x7g);
  };
  const _0x8h9i = () => {
    const _0xa = performance.now();
    debugger;
    return performance.now() - _0xa > 100;
  };
  Object.defineProperty(window, "_0x7h3k", {
    get: function () {
      if (_0x8h9i()) {
        return "Nice try! \uD83D\uDE0F";
      }
      return _0x9e4c2a;
    },
    configurable: false,
  });
})();
