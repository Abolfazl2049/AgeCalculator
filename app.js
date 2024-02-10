let day, month, year, dayN, monthN, yearN, hourN, mintueN, secondN, birthdate;

function inputGrabber() {
  day = parseInt(document.getElementById("Day").value);
  month = parseInt(document.getElementById("Month").value);
  year = parseInt(document.getElementById("Year").value);
  birthdate = new Date(year, month - 1, day);
}

function updateAge(day, month, year) {
  if (
    typeof day === "number" &&
    typeof month === "number" &&
    typeof year === "number" &&
    year < 2024 &&
    day <= 31 &&
    month <= 12 &&
    year >= 1800
  ) {
    setInterval(updateAgeInternals), 1000;
  } else {
    document.querySelector(".firstP").innerText = "*please Enter a valid date";
  }
}

function updateAgeInternals() {
  let dateNow = new Date();
  secondN = dateNow.getSeconds();
  mintueN = dateNow.getMinutes();
  hourN = dateNow.getHours();
  yearN = dateNow.getFullYear() - birthdate.getFullYear();
  dayN = dateNow.getDate() - birthdate.getDate();
  monthN = dateNow.getMonth() - birthdate.getMonth();

  if (dayN < 0) {
    monthN--;
    dayN += new Date(birthdate.getFullYear() + 1, 0, 0).getDate();
  }
  if (monthN < 0) {
    yearN--;
    monthN += 12;
  }

  document.querySelector(".firstP").textContent = "";
  document.getElementById("year-R").innerText = yearN;
  document.getElementById("month-R").innerText = monthN;
  document.getElementById("day-R").innerText = dayN;
  document.getElementById("hour-R").innerText = hourN;
  document.getElementById("mintue-R").innerText = mintueN;
  document.getElementById("second-R").innerText = secondN;
}

function triggerAnimation() {
  let but1Element = document.querySelector(".but-1");
  but1Element.classList.add("animation");
  setTimeout(() => {
    but1Element.classList.remove("animation");
  }, 3000);
}

inputGrabber();

document.querySelector(".but-1").addEventListener("click", function () {
  updateAge(day, month, year);
});

function expand() {
  if (screen.availWidth < 550) {
    if (document.querySelector(".container").style.height === "770px") {
      document.querySelector(".container").style.height = "500px";
      document.querySelector(".img-1").src =
        "assets/images/arrow_downward_FILL0_wght400_GRAD0_opsz24.svg";
      document.querySelector("#hour-R").style.margin = "50px";
      document.querySelector(".but-2").style.bottom = "unset";
      document.querySelector(".secondp").innerText = "Expand";
    } else {
      document.querySelector(".but-2").style.bottom = "10px";
      document.querySelector(".container").style.height = "770px";
      document.querySelector("#hour-R").style.margin = "0";
      document.querySelector(".img-1").src =
        "assets/images/arrow_upward_FILL0_wght400_GRAD0_opsz24.svg";
      document.querySelector(".secondp").innerText = "Collapse";
    }
  } else {
    if (document.querySelector(".container").style.height === "800px") {
      document.querySelector(".container").style.height = "530px";
      document.querySelector(".img-1").src =
        "assets/images/arrow_downward_FILL0_wght400_GRAD0_opsz24.svg";
      document.querySelector("#hour-R").style.margin = "50px";
      document.querySelector(".but-2").style.bottom = "unset";
      document.querySelector(".secondp").innerText = "Expand";
    } else {
      document.querySelector(".but-2").style.bottom = "10px";
      document.querySelector(".container").style.height = "800px";
      document.querySelector("#hour-R").style.margin = "0";
      document.querySelector(".img-1").src =
        "assets/images/arrow_upward_FILL0_wght400_GRAD0_opsz24.svg";
      document.querySelector(".secondp").innerText = "Collapse";
    }
  }
}
