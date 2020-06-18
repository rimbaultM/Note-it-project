import {calendardetails} from "../components/calendardetails";

const calendarnext = () => {
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
      days.insertAdjacentHTML('beforeend', "<li>" + value + "</li>")
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

    next.addEventListener("click", function() {
    $(".detailsday").css("display","none");
    document.querySelectorAll('#days > li').forEach(eachdaysstart);
    function eachdaysstart(eachday){
      eachday.classList.remove("calendarblue");
      eachday.classList.remove("calendarred");
      eachday.classList.remove("calendargreen");
      eachday.classList.remove("thisdays");
    }

      if (month.innerText == "DECEMBRE") {
        month.innerText = mois[0];
        var thisyear = parseInt(year.innerText, 10);
        const reloadcalendar = document.getElementById("days");
        while (reloadcalendar.firstChild){
          reloadcalendar.removeChild(reloadcalendar.firstChild);
        }
        const day30 = ["01","02","03","04","05","06","07","08","09",10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31];
        day30.forEach(adddays);

        return year.innerText = thisyear +1;
      }
      else {
        var nextmonth = (function () {
        var thismonth = month.innerText;
        var thismonthnumber = mois.indexOf(thismonth);
        return function () {thismonthnumber += 1; return thismonthnumber}
        })();
        month.innerText = mois[nextmonth()];

        if (month.innerText == "AVRIL" ||  month.innerText == "JUIN" || month.innerText == "SEPTEMBRE" || month.innerText == "NOVEMBRE"){
          const reloadcalendar = document.getElementById("days");
          while (reloadcalendar.firstChild){
            reloadcalendar.removeChild(reloadcalendar.firstChild);
          }
          const day30 = ["01","02","03","04","05","06","07","08","09",10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];
          day30.forEach(adddays);
          calendardetails();
        }
        else if (month.innerText == "FEVRIER"){
          const reloadcalendar = document.getElementById("days");
          while (reloadcalendar.firstChild){
            reloadcalendar.removeChild(reloadcalendar.firstChild);
          }
          const day30 = ["01","02","03","04","05","06","07","08","09",10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28];
          day30.forEach(adddays);
          calendardetails();
        }
        else {
          const reloadcalendar = document.getElementById("days");
          while (reloadcalendar.firstChild){
            reloadcalendar.removeChild(reloadcalendar.firstChild);
          }
          const day30 = ["01","02","03","04","05","06","07","08","09",10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31];
          day30.forEach(adddays);
          calendardetails();
        }
      }

    });
};
 export {calendarnext}
