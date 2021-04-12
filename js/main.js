"use script";

{
  const theme = function () {
    document.getElementById("theme").innerHTML = arrrandom(arrtheme);
  };

  var moji = function () {
    document.getElementById("moji").innerHTML = arrrandom(hiragana);
  };

  const maru = function (i) {
    document.getElementById;
  };

  document.getElementById("next").addEventListener("click", () => {
    const bnext = document.getElementById("next");
    bnext.disabled = true;
    bnext.style.opacity = "0.4";
    theme();
    const setmaru = document.getElementById("moji");
    setmaru.innerHTML = "◯";
    let count = 0;
    const next = () => {
      setmaru.style.fontSize = String(150 - count++) + "px";
      var id = setTimeout(next, 10);
      if (count > 150) {
        clearTimeout(id);
        setmaru.style.fontSize = "150px";
        moji();
        bnext.disabled = false;
        bnext.style.opacity = "1";
      }
    };
    next();
  });

  document.getElementById("reset").addEventListener("click", () => {
    for (let i = 1; i < 7; i++) {
      document.getElementById("pp" + String(i)).innerHTML = "0";
    }
  });

  const player = function (num) {
    document.getElementById("pb" + num).addEventListener("click", () => {
      let point = document.getElementById("pp" + num);
      point.innerHTML = Number(point.innerHTML) + 1;
    });
  };

  for (let i = 1; i < 7; i++) {
    player(String(i));
  }

  const hiragana = [
    "あ",
    "い",
    "う",
    "え",
    "お",
    "か",
    "き",
    "く",
    "け",
    "こ",
    "さ",
    "し",
    "す",
    "せ",
    "そ",
    "た",
    "ち",
    "つ",
    "て",
    "と",
    "な",
    "に",
    "ぬ",
    "ね",
    "の",
    "は",
    "ひ",
    "ふ",
    "へ",
    "ほ",
    "ま",
    "み",
    "む",
    "め",
    "も",
    "や",
    "ゆ",
    "よ",
    "ら",
    "り",
    "る",
    "れ",
    "ろ",
    "わ",
  ];

  const arrtheme = [
    "家にあるもの",
    "学校にあるもの",
    "有名人",
    "地名",
    "植物",
    "動物",
    "小物",
    "生活必需品",
    "キャラクター",
    "食べ物",
    "メーカー",
  ];

  const arrrandom = function (arr) {
    const length = arr.length;
    const random = Math.floor(Math.random() * length);
    return arr[random];
  };
}
