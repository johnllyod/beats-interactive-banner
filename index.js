var shopNowBtn = document.getElementById("ShopNow");

function OpenFeatureDetails(e) {
  let featureDetail = document.getElementById("FeatureDetail");
  let shopNowBG = document.getElementById("ShopNowBG");
  let detailIcon = document.getElementById("DetailIcon");
  let detailText = document.getElementById("DetailText");

  let fdBtn = [4];
  fdBtn[0] = document.getElementById("FeatureDetail1");
  fdBtn[1] = document.getElementById("FeatureDetail2");
  fdBtn[2] = document.getElementById("FeatureDetail3");
  fdBtn[3] = document.getElementById("FeatureDetail4");

  if (featureDetail.classList.contains("hideDetail")) {
    featureDetail.classList.remove("hideDetail");
    featureDetail.classList.add("showDetail");
  }

  if (shopNowBtn.classList.contains("shopNowDown")) {
    shopNowBtn.classList.remove("shopNowDown");
    shopNowBtn.classList.add("shopNowUp");
  }

  if (shopNowBG.classList.contains("shopNowDown")) {
    shopNowBG.classList.remove("shopNowDown");
    shopNowBG.classList.add("shopNowUp");
  }

  for (let i = 0; i < 4; i++) {
    if (fdBtn[i].id == e.id) {
      fdBtn[i].classList.remove("borderCircle");
      fdBtn[i].classList.add("borderCircleClicked");
      fdBtn[i].children[0].classList.remove("fullCircle");
      fdBtn[i].children[0].classList.add("fullCircleClicked");
      fdBtn[i].children[1].classList.remove("verticalLine");
      fdBtn[i].children[1].classList.add("verticalLineClicked");
    } else {
      fdBtn[i].classList.remove("borderCircleClicked");
      fdBtn[i].classList.add("borderCircle");
      fdBtn[i].children[0].classList.remove("fullCircleClicked");
      fdBtn[i].children[0].classList.add("fullCircle");
      fdBtn[i].children[1].classList.remove("verticalLineClicked");
      fdBtn[i].children[1].classList.add("verticalLine");
    }
  }

  if (e.id == "FeatureDetail1") {
    detailIcon.src = "images/battery.svg";
    detailText.innerHTML = "Up to 40 hours of listening time.";
  } else if (e.id == "FeatureDetail2") {
    detailIcon.src = "images/call_and_control.svg";
    detailText.innerHTML = "Take calls and take control.";
  } else if (e.id == "FeatureDetail3") {
    detailIcon.src = "images/audio.svg";
    detailText.innerHTML = "Supports Spatial Audio.";
  } else if (e.id == "FeatureDetail4") {
    detailIcon.src = "images/compatible.svg";
    detailText.innerHTML = "Compatible with Apple & Android.";
  }
}

function ChangeColor(c) {
  let root = document.querySelector(":root");
  let beatProduct = document.getElementById("BeatProduct");

  if (c == 1) {
    root.style.setProperty("--bg1", "#BEBEBE");
    root.style.setProperty("--bg2", "#949494");
    root.style.setProperty("--btn1", "#313131");
    beatProduct.src = "images/beats_black.png";
    shopNowBtn.href =
      "https://www.beatsbydre.com/uk/headphones/solo3-wireless/MX472/black";
  } else if (c == 2) {
    root.style.setProperty("--bg1", "#e13a2d");
    root.style.setProperty("--bg2", "#262626");
    root.style.setProperty("--btn1", "#83211b");
    beatProduct.src = "images/beats_red.png";
    shopNowBtn.href =
      "https://www.beatsbydre.com/uk/headphones/solo3-wireless/MX472/citrus-red";
  } else if (c == 3) {
    root.style.setProperty("--bg1", "#DBC5C3");
    root.style.setProperty("--bg2", "#522a25");
    root.style.setProperty("--btn1", "#54402c");
    beatProduct.src = "images/beats_rosegold.png";
    shopNowBtn.href =
      "https://www.beatsbydre.com/uk/headphones/solo3-wireless/MX472/rose-gold";
  } else if (c == 4) {
    root.style.setProperty("--bg1", "#8b6a4d");
    root.style.setProperty("--bg2", "#54402c");
    root.style.setProperty("--btn1", "#616961");
    beatProduct.src = "images/beats_gold.png";
    shopNowBtn.href =
      "https://www.beatsbydre.com/uk/headphones/solo3-wireless/MX472/gold";
  } else if (c == 5) {
    root.style.setProperty("--bg1", "#646464");
    root.style.setProperty("--bg2", "#414141");
    root.style.setProperty("--btn1", "#C1C1C2");
    beatProduct.src = "images/beats_silver.png";
    shopNowBtn.href =
      "https://www.beatsbydre.com/uk/headphones/solo3-wireless/MX472/silver";
  }
}
