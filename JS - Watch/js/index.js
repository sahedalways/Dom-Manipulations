function myTime() {
    let myDate = new Date();

    let hr,
      min =
        myDate.getMinutes() < 10
          ? "0" + myDate.getMinutes()
          : myDate.getMinutes();
    let second =
      myDate.getSeconds() < 10
        ? "0" + myDate.getSeconds()
        : myDate.getSeconds();
    let minute = myDate.getHours() >= 12 ? "PM" : "AM";

    if (myDate.getHours() == 0) {
      hr = 12;
    } else if (myDate.getHours > 12) {
      hr = myDate.getHours() - 12;
    } else {
      hr = myDate.getHours();
    }

    let currentTime = hr + ":" + min + ":" + second + " " + minute;

    document.getElementsByClassName("hour")[0].innerHTML = currentTime;

    const myDay = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    const myMonth = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    let day = myDate.getDate();

    let currentDate =
      myDay[myDate.getDay()] +
      " " +
      "," +
      " " +
      myMonth[myDate.getMonth()] +
      " " +
      day;

    document.getElementsByClassName("date")[0].innerHTML = currentDate;
  }

  setInterval(function () {
    myTime();
  }, 1000);