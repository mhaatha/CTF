const _0xcfg = {
  _0xmin: 120,
  _0xmax: 150,
  _0xacc: 100,
  _0xtl: 50,
};
function _0xdf() {
  try {
    if (typeof window._0x9e4c2a === "function") {
      return window._0x9e4c2a();
    } else {
      if (typeof window._0x7h3k === "function") {
        return window._0x7h3k();
      }
    }
    return "Config module not loaded!";
  } catch (_0xe) {
    console.error("Decryption error:", _0xe);
    return getRandomDecoy();
  }
}
const SAMPLE_TEXTS = [
  "The quick brown fox jumps over the lazy dog. Programming is the art of telling another human what one wants the computer to do. In the world of cybersecurity, every character matters and timing is everything. Speed and accuracy are crucial skills for any developer.",
  "Typing speed is measured in words per minute. A word is typically defined as five characters including spaces. Professional typists can reach speeds of over 120 WPM consistently. However, maintaining accuracy while typing fast is the real challenge that separates beginners from experts.",
  "Cybersecurity challenges often require quick thinking and precise execution. Every keystroke counts when you're racing against time. The ability to type quickly and accurately can make the difference between success and failure in competitive programming and capture the flag competitions.",
];
let _0xst = {
  _0xt: "",
  _0xw: [],
  _0xws: [],
  _0xwi: 0,
  _0xstt: null,
  _0xti: null,
  _0xta: false,
  _0xcw: 0,
  _0xtw: 0,
};
const _0xel = {
  _0xtd: document.getElementById("_0x4d"),
  _0xif: document.getElementById("_0x5e"),
  _0xsb: document.getElementById("_0x6f"),
  _0xrb: document.getElementById("_0x7g"),
  _0xwp: document.getElementById("_0x1a"),
  _0xac: document.getElementById("_0x2b"),
  _0xtm: document.getElementById("_0x3c"),
  _0xrp: document.getElementById("_0x8h"),
  _0xrt: document.getElementById("_0x9i"),
  _0xrm: document.getElementById("_0xaj"),
  _0xfd: document.getElementById("_0xbk"),
};
function _0xi() {
  _0xel._0xsb.addEventListener("click", _0xstart);
  _0xel._0xrb.addEventListener("click", _0xreset);
  _0xel._0xif.addEventListener("input", _0xhi);
  console.log(
    "%c\uD83D\uDD0D Hint: The bot runs in your browser...",
    "color: #667eea; font-size: 14px; font-weight: bold;",
  );
  console.log(
    "%c\uD83E\uDD14 Perhaps you should look at how the validation works?",
    "color: #764ba2; font-size: 12px;",
  );
  console.log(
    "%c\uD83D\uDD75️ Multiple files might hold secrets...",
    "color: #667eea; font-size: 12px;",
  );
}
function _0xstart() {
  _0xst._0xt = SAMPLE_TEXTS[Math.floor(Math.random() * SAMPLE_TEXTS.length)];
  _0xst._0xw = _0xst._0xt.split(" ");
  _0xst._0xws = new Array(_0xst._0xw.length).fill("pending");
  _0xst._0xwi = 0;
  _0xst._0xstt = Date.now();
  _0xst._0xta = true;
  _0xst._0xcw = 0;
  _0xst._0xtw = _0xst._0xw.length;
  _0xdw();
  _0xel._0xif.value = "";
  _0xel._0xif.disabled = false;
  _0xel._0xif.focus();
  _0xel._0xrp.classList.add("_0xhd");
  _0xel._0xsb.disabled = true;
  _0xel._0xtm.textContent = _0xcfg._0xtl + "s";
  _0xel._0xtm.style.color = "white";
  _0xstimer();
}
function _0xdw() {
  let _0xh = "";
  _0xst._0xw.forEach((_0xw, _0xi) => {
    if (_0xi < _0xst._0xwi) {
      if (_0xst._0xws[_0xi] === "correct") {
        _0xh += `<span class="correct">${_0xw}</span> `;
      } else {
        _0xh += `<span class="incorrect">${_0xw}</span> `;
      }
    } else {
      if (_0xi === _0xst._0xwi) {
        _0xh += `<span class="current">${_0xw}</span> `;
      } else {
        _0xh += `${_0xw} `;
      }
    }
  });
  _0xel._0xtd.innerHTML = _0xh.trim();
}
function _0xhi(_0xe) {
  if (!_0xst._0xta) {
    return;
  }
  const _0xiv = _0xel._0xif.value;
  const _0xcw = _0xst._0xw[_0xst._0xwi];
  if (
    _0xiv.endsWith(" ") ||
    (_0xst._0xwi === _0xst._0xw.length - 1 && _0xiv === _0xcw)
  ) {
    const _0xtw = _0xiv.trim();
    if (_0xtw === _0xcw) {
      _0xst._0xcw++;
      _0xst._0xws[_0xst._0xwi] = "correct";
    } else {
      _0xst._0xws[_0xst._0xwi] = "incorrect";
    }
    _0xst._0xwi++;
    _0xel._0xif.value = "";
    if (_0xst._0xwi >= _0xst._0xw.length) {
      _0xfinish();
      return;
    }
    _0xdw();
  } else {
    let _0xh = "";
    _0xst._0xw.forEach((_0xw, _0xi) => {
      if (_0xi < _0xst._0xwi) {
        if (_0xst._0xws[_0xi] === "correct") {
          _0xh += `<span class="correct">${_0xw}</span> `;
        } else {
          _0xh += `<span class="incorrect">${_0xw}</span> `;
        }
      } else {
        if (_0xi === _0xst._0xwi) {
          let _0xwh = "";
          for (let _0xj = 0; _0xj < _0xw.length; _0xj++) {
            if (_0xj < _0xiv.length) {
              if (_0xiv[_0xj] === _0xw[_0xj]) {
                _0xwh += `<span class="correct">${_0xw[_0xj]}</span>`;
              } else {
                _0xwh += `<span class="incorrect">${_0xw[_0xj]}</span>`;
              }
            } else {
              _0xwh += _0xw[_0xj];
            }
          }
          _0xh += `<span class="current">${_0xwh}</span> `;
        } else {
          _0xh += `${_0xw} `;
        }
      }
    });
    _0xel._0xtd.innerHTML = _0xh.trim();
  }
  _0xus();
}
function _0xus() {
  const _0xet = (Date.now() - _0xst._0xstt) / 1000;
  const _0xwpm = _0xet > 0 ? Math.round((_0xst._0xcw / _0xet) * 60) : 0;
  const _0xtwd = _0xst._0xwi > 0 ? _0xst._0xwi : 1;
  const _0xacc = Math.round((_0xst._0xcw / _0xtwd) * 100);
  _0xel._0xwp.textContent = _0xwpm;
  _0xel._0xac.textContent = _0xacc + "%";
}
function _0xstimer() {
  _0xst._0xti = setInterval(() => {
    const _0xel2 = Math.floor((Date.now() - _0xst._0xstt) / 1000);
    const _0xrem = _0xcfg._0xtl - _0xel2;
    if (_0xrem <= 0) {
      _0xtup();
    } else {
      _0xel._0xtm.textContent = _0xrem + "s";
      if (_0xrem <= 10) {
        _0xel._0xtm.style.color = "#dc3545";
      } else {
        if (_0xrem <= 20) {
          _0xel._0xtm.style.color = "#ffc107";
        } else {
          _0xel._0xtm.style.color = "white";
        }
      }
    }
  }, 100);
}
function _0xtup() {
  if (!_0xst._0xta) {
    return;
  }
  _0xst._0xta = false;
  _0xel._0xif.disabled = true;
  _0xel._0xsb.disabled = false;
  clearInterval(_0xst._0xti);
  _0xel._0xrp.classList.remove("_0xhd");
  _0xel._0xrt.textContent = "\u231A️ Waktu Habis!";
  _0xel._0xrm.innerHTML = `
    <p style="color: #dc3545; font-weight: bold;">Waktu ${_0xcfg._0xtl} detik telah habis!</p>
    <p>Kamu belum menyelesaikan test tepat waktu.</p>
    <p style="margin-top: 15px; color: #764ba2;">💡 Hint: Ini hampir mustahil secara manual... mungkin ada cara lain? 👀</p>
  `;
  _0xel._0xfd.classList.add("_0xhd");
}
function _0xfinish() {
  if (!_0xst._0xta) {
    return;
  }
  _0xst._0xta = false;
  _0xel._0xif.disabled = true;
  _0xel._0xsb.disabled = false;
  clearInterval(_0xst._0xti);
  const _0xet = (Date.now() - _0xst._0xstt) / 1000;
  if (_0xet > _0xcfg._0xtl) {
    _0xtup();
    return;
  }
  const _0xfwpm = Math.round((_0xst._0xcw / _0xet) * 60);
  const _0xfacc = Math.round((_0xst._0xcw / _0xst._0xtw) * 100);
  _0xsr(_0xfwpm, _0xfacc, _0xet);
}
function _0xsr(_0xwpm, _0xacc, _0xtu) {
  _0xel._0xrp.classList.remove("_0xhd");
  const _0xwv = _0xwpm >= _0xcfg._0xmin && _0xwpm <= _0xcfg._0xmax;
  const _0xav = _0xacc === _0xcfg._0xacc;
  if (_0xwv && _0xav) {
    _0xel._0xrt.textContent = "\uD83C\uDF89 Selamat!";
    _0xel._0xrm.innerHTML = `
            <p>Kamu berhasil menyelesaikan tes dengan sempurna!</p>
            <p><strong>WPM:</strong> ${_0xwpm} | <strong>Accuracy:</strong> ${_0xacc}% | <strong>Time:</strong> ${_0xtu.toFixed(
              1,
            )}s</p>
        `;
    _0xel._0xfd.classList.remove("_0xhd");
    _0xel._0xfd.textContent = `🚩 Flag: ${_0xdf()}`;
  } else {
    _0xel._0xrt.textContent = "\u274C Belum Berhasil";
    let _0xmsg = `<p><strong>WPM:</strong> ${_0xwpm} | <strong>Accuracy:</strong> ${_0xacc}% | <strong>Time:</strong> ${_0xtu.toFixed(
      1,
    )}s</p>`;
    _0xmsg += `<p style="margin-top: 10px;"><strong>Words:</strong> ${_0xst._0xcw}/${_0xst._0xtw} benar</p>`;
    if (!_0xwv) {
      _0xmsg += `<p>⚠️ WPM harus antara ${_0xcfg._0xmin}-${_0xcfg._0xmax}</p>`;
    }
    if (!_0xav) {
      _0xmsg += `<p>⚠️ Accuracy harus ${_0xcfg._0xacc}%</p>`;
    }
    _0xmsg += `<p style="margin-top: 15px; color: #764ba2;">💡 Hint: Ini hampir mustahil secara manual... mungkin ada cara lain? 👀</p>`;
    _0xel._0xrm.innerHTML = _0xmsg;
    _0xel._0xfd.classList.add("_0xhd");
  }
}
function _0xreset() {
  _0xst = {
    _0xt: "",
    _0xw: [],
    _0xws: [],
    _0xwi: 0,
    _0xstt: null,
    _0xti: null,
    _0xta: false,
    _0xcw: 0,
    _0xtw: 0,
  };
  clearInterval(_0xst._0xti);
  _0xel._0xtd.textContent = "";
  _0xel._0xif.value = "";
  _0xel._0xif.disabled = true;
  _0xel._0xif.style.borderColor = "#dee2e6";
  _0xel._0xif.style.backgroundColor = "white";
  _0xel._0xsb.disabled = false;
  _0xel._0xwp.textContent = "0";
  _0xel._0xac.textContent = "100%";
  _0xel._0xtm.textContent = _0xcfg._0xtl + "s";
  _0xel._0xtm.style.color = "white";
  _0xel._0xrp.classList.add("_0xhd");
}
function _0xvt() {
  const _0xet = (Date.now() - _0xst._0xstt) / 1000;
  if (_0xet < 10) {
    console.warn("\u26A0️ Typing too fast! Suspicious activity detected.");
    return false;
  }
  return true;
}
function revealSecret() {
  const _0xts = Date.now();
  if (!revealSecret.lastCall) {
    revealSecret.lastCall = _0xts;
  } else {
    if (_0xts - revealSecret.lastCall < 1000) {
      return getRandomDecoy();
    }
  }
  revealSecret.lastCall = _0xts;
  return _0xdf();
}
document.addEventListener("DOMContentLoaded", _0xi);
