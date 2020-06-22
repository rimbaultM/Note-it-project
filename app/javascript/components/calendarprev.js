import {calendardetails} from "../components/calendardetails";

const calendarprev = () => {
    const yearcalendar = new Date().getFullYear();
    const monthcalendar = new Date().getMonth();
    const daycalendar = new Date().getDate();
    const next = document.getElementById("next");
    const prev = document.getElementById("prev");
    const month = document.getElementById("month");
    const year = document.getElementById("year");
    const days = document.getElementById("days");
    const testdate = document.getElementById("testdate")
    const mois = ["JANVIER", "FEVRIER", "MARS", "AVRIL", "MAI", "JUIN", "JUILLET", "AOUT", "SEPTEMBRE", "OCTOBRE", "NOVEMBRE", "DECEMBRE"]

    function adddays(value) {
      days.insertAdjacentHTML('beforeend', "<li class=dateindex>" + value + "</li>")
      if (mois.indexOf(month.innerText) < 10) {
        document.querySelectorAll('#testdate').forEach(listest);
        function listest(listestrr) {
          const testdatetest = listestrr.innerText.trim();
          if ((year.innerText+"-"+ "0" +(mois.indexOf(month.innerText)+1)+"-"+ value) == testdatetest) {
            document.querySelectorAll('#days > li:last-child').forEach(addactive);
            function addactive(li) {
              if ((listestrr.parentNode.parentNode.parentNode.parentNode.parentNode.childNodes[1]).classList.contains('notes-title-blue')) {
                li.classList.add("calendarblue");
              }
              else if ((listestrr.parentNode.parentNode.parentNode.parentNode.parentNode.childNodes[1]).classList.contains('notes-title-red')) {
                li.classList.add("calendarred");
              }
              else if ((listestrr.parentNode.parentNode.parentNode.parentNode.parentNode.childNodes[1]).classList.contains('notes-title-green')) {
                li.classList.add("calendargreen");
              }
            }
          }
          if ((year.innerText+"-"+ "0" +(mois.indexOf(month.innerText)+1)+"-"+ value) == (`${yearcalendar}-0${monthcalendar+1}-${daycalendar}`)) {
          document.querySelectorAll('#days > li:last-child').forEach(thisdays)
            function thisdays(day){
              if (days.classList.contains('calendarred') || days.classList.contains('calendarblue') || days.classList.contains('calendargreen') ) {
                day.classList.add("thisdays2")
              }
              else  {
                day.classList.add("thisdays")
              }
            }
          }
        }
      }
      else {
        document.querySelectorAll('#testdate').forEach(listest);
        function listest(listestrr) {
          const testdatetest = listestrr.innerText.trim();
          if ((year.innerText+"-" +(mois.indexOf(month.innerText)+1)+"-"+ value) == testdatetest) {
            document.querySelectorAll('#days > li:last-child').forEach(addactive);
            function addactive(li) {
              if ((listestrr.parentNode.parentNode.parentNode.parentNode.parentNode.childNodes[1]).classList.contains('notes-title-blue')) {
                li.classList.add("calendarblue");
              }
              else if ((listestrr.parentNode.parentNode.parentNode.parentNode.parentNode.childNodes[1]).classList.contains('notes-title-red')) {
                li.classList.add("calendarred");
              }
              else if ((listestrr.parentNode.parentNode.parentNode.parentNode.parentNode.childNodes[1]).classList.contains('notes-title-green')) {
                li.classList.add("calendargreen");
              }
            }
          }
          if ((year.innerText+"-"+ "0" +(mois.indexOf(month.innerText)+1)+"-"+ value) == (`${yearcalendar}-${monthcalendar+1}-${daycalendar}`)) {
            document.querySelectorAll('#days > li:last-child').forEach(thisdays)
            function thisdays(day){
              day.classList.add("thisdays")
            }
          }
        }
      }
    }

    prev.addEventListener("click", function() {
      $(".detailsday").css("display","none");
    document.querySelectorAll('#days > li').forEach(eachdaysstart);
    function eachdaysstart(eachday){
      eachday.classList.remove("calendarblue");
      eachday.classList.remove("calendarred");
      eachday.classList.remove("calendargreen");
      eachday.classList.remove("thisdays");
    }

      if (month.innerText == "JANVIER") {
        month.innerText = mois[11];
        var thisyear = parseInt(year.innerText, 10);
        const reloadcalendar = document.getElementById("days");
        while (reloadcalendar.firstChild){
          reloadcalendar.removeChild(reloadcalendar.firstChild);
        }
        const day30 = ["","01","02","03","04","05","06","07","08","09",10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31];
        day30.forEach(adddays);

        return year.innerText = thisyear -1;
      }
      else {
        var prevmonth = (function () {
        var thismonthprev = month.innerText;
        var thismonthprevnumber = mois.indexOf(thismonthprev);
        return function () {thismonthprevnumber -= 1; return thismonthprevnumber}
        })();
        month.innerText = mois[prevmonth()];

        if (month.innerText == "JANVIER"){
          const reloadcalendar = document.getElementById("days");
          while (reloadcalendar.firstChild){
            reloadcalendar.removeChild(reloadcalendar.firstChild);
          }
          const day30 = ["","","01","02","03","04","05","06","07","08","09",10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31];
          day30.forEach(adddays);
          calendardetails();
          const daysstyleweek = document.querySelector(".days")
          days.insertAdjacentHTML('beforeend', "<div class=styleweek></div>")
        }

        else if (month.innerText == "FEVRIER"){
          const reloadcalendar = document.getElementById("days");
          while (reloadcalendar.firstChild){
            reloadcalendar.removeChild(reloadcalendar.firstChild);
          }
          const day30 = ["","","","","","01","02","03","04","05","06","07","08","09",10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29];
          day30.forEach(adddays);
          calendardetails();
          const daysstyleweek = document.querySelector(".days")
          days.insertAdjacentHTML('beforeend', "<div class=styleweek></div>")
        }
        else if (month.innerText == "MARS"){
          const reloadcalendar = document.getElementById("days");
          while (reloadcalendar.firstChild){
            reloadcalendar.removeChild(reloadcalendar.firstChild);
          }
          const day30 = ["","","","","","","01","02","03","04","05","06","07","08","09",10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31];
          day30.forEach(adddays);
          calendardetails();
          const daysstyleweek = document.querySelector(".days")
          days.insertAdjacentHTML('beforeend', "<div class=styleweek></div>")
        }
        else if (month.innerText == "AVRIL" ){
          const reloadcalendar = document.getElementById("days");
          while (reloadcalendar.firstChild){
            reloadcalendar.removeChild(reloadcalendar.firstChild);
          }
          const day30 = ["","","01","02","03","04","05","06","07","08","09",10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];
          day30.forEach(adddays);
          calendardetails();
          const daysstyleweek = document.querySelector(".days")
          days.insertAdjacentHTML('beforeend', "<div class=styleweek></div>")
        }
        else if (month.innerText == "MAI"){
          const reloadcalendar = document.getElementById("days");
          while (reloadcalendar.firstChild){
            reloadcalendar.removeChild(reloadcalendar.firstChild);
          }
          const day30 = ["","","","","01","02","03","04","05","06","07","08","09",10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31];
          day30.forEach(adddays);
          calendardetails();
          const daysstyleweek = document.querySelector(".days")
          days.insertAdjacentHTML('beforeend', "<div class=styleweek></div>")
        }
        else if (month.innerText == "JUIN"){
          const reloadcalendar = document.getElementById("days");
          while (reloadcalendar.firstChild){
            reloadcalendar.removeChild(reloadcalendar.firstChild);
          }
          const day30 = ["01","02","03","04","05","06","07","08","09",10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];
          day30.forEach(adddays);
          calendardetails();
          const daysstyleweek = document.querySelector(".days")
          days.insertAdjacentHTML('beforeend', "<div class=styleweek></div>")
        }
        else if (month.innerText == "JUILLET"){
          const reloadcalendar = document.getElementById("days");
          while (reloadcalendar.firstChild){
            reloadcalendar.removeChild(reloadcalendar.firstChild);
          }
          const day30 = ["","","01","02","03","04","05","06","07","08","09",10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31];
          day30.forEach(adddays);
          calendardetails();
          const daysstyleweek = document.querySelector(".days")
          days.insertAdjacentHTML('beforeend', "<div class=styleweek></div>")
        }
        else if (month.innerText == "AOUT"){
          const reloadcalendar = document.getElementById("days");
          while (reloadcalendar.firstChild){
            reloadcalendar.removeChild(reloadcalendar.firstChild);
          }
          const day30 = ["","","","","","01","02","03","04","05","06","07","08","09",10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31];
          day30.forEach(adddays);
          calendardetails();
          const daysstyleweek = document.querySelector(".days")
          days.insertAdjacentHTML('beforeend', "<div class=styleweek></div>")
        }
        else if (month.innerText == "SEPTEMBRE"){
          const reloadcalendar = document.getElementById("days");
          while (reloadcalendar.firstChild){
            reloadcalendar.removeChild(reloadcalendar.firstChild);
          }
          const day30 = ["","01","02","03","04","05","06","07","08","09",10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];
          day30.forEach(adddays);
          calendardetails();
          const daysstyleweek = document.querySelector(".days")
          days.insertAdjacentHTML('beforeend', "<div class=styleweek></div>")
        }
        else if (month.innerText == "OCTOBRE"){
          const reloadcalendar = document.getElementById("days");
          while (reloadcalendar.firstChild){
            reloadcalendar.removeChild(reloadcalendar.firstChild);
          }
          const day30 = ["","","","01","02","03","04","05","06","07","08","09",10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31];
          day30.forEach(adddays);
          calendardetails();
          const daysstyleweek = document.querySelector(".days")
          days.insertAdjacentHTML('beforeend', "<div class=styleweek></div>")
        }
        else if (month.innerText == "NOVEMBRE"){
          const reloadcalendar = document.getElementById("days");
          while (reloadcalendar.firstChild){
            reloadcalendar.removeChild(reloadcalendar.firstChild);
          }
          const day30 = ["","","","","","","01","02","03","04","05","06","07","08","09",10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];
          day30.forEach(adddays);
          calendardetails();
          const daysstyleweek = document.querySelector(".days")
          days.insertAdjacentHTML('beforeend', "<div class=styleweek></div>")
        }
        else if (month.innerText == "DECEMBRE"){
          const reloadcalendar = document.getElementById("days");
          while (reloadcalendar.firstChild){
            reloadcalendar.removeChild(reloadcalendar.firstChild);
          }
          const day30 = ["","01","02","03","04","05","06","07","08","09",10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31];
          day30.forEach(adddays);
          calendardetails();
          const daysstyleweek = document.querySelector(".days")
          days.insertAdjacentHTML('beforeend', "<div class=styleweek></div>")
        }

      }

    });
};
export {calendarprev}
