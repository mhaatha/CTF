const _0xsession = {
  _0xid: null,
  _0xuser: null,
  _0xexp: 3600000,
};
function _0xcreateSession(_0xuid) {
  _0xsession._0xid = Math.random().toString(36).substring(2);
  _0xsession._0xuser = _0xuid;
  _0xsession._0xstart = Date.now();
  return _0xsession._0xid;
}
function _0xvalidateSession() {
  if (!_0xsession._0xid) {
    return false;
  }
  const _0xelapsed = Date.now() - _0xsession._0xstart;
  return _0xelapsed < _0xsession._0xexp;
}
function _0xdestroySession() {
  _0xsession._0xid = null;
  _0xsession._0xuser = null;
}
const _0xhiddenData = {
  _0xa: [28, 25, 19, 24, 90],
  _0xb: [63, 60, 62, 57, 95],
  _0xc: [27, 60, 59, 60, 82],
};
function _0xrevealHidden() {
  const _0xall = [
    ..._0xhiddenData._0xa,
    ..._0xhiddenData._0xb,
    ..._0xhiddenData._0xc,
  ];
  return String.fromCharCode(..._0xall.map((_0xv) => _0xv ^ 51));
}
window._0xsessionMgr = {
  create: _0xcreateSession,
  validate: _0xvalidateSession,
  destroy: _0xdestroySession,
  reveal: _0xrevealHidden,
};
