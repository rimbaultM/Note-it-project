const calendarprev = () => {
    const yearcalendar = new Date().getFullYear();
    const next = document.getElementById("next");
    const prev = document.getElementById("prev");
    const month = document.getElementById("month");
    const year = document.getElementById("year");
    const days = document.getElementById("days");
    const testdate = document.getElementById("testdate")
    const mois = ["JANVIER", "FEVRIER", "MARS", "AVRIL", "MAI", "JUIN", "JUILLET", "AOUT", "SEPTEMBRE", "OCTOBRE", "NOVEMBRE", "DECEMBRE"]
    const day30 = ["01","02","03","04","05","06","07","08","09",10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31];
      prev.addEventListener("click", function() {
      document.querySelectorAll('#days > li').forEach(eachdaysstart);
      function eachdaysstart(eachday){
        eachday.classList.remove("calendarblue");
        eachday.classList.remove("calendarred");
        eachday.classList.remove("calendargreen");
      }
      if (month.innerText == "JANVIER") {
        month.innerText = mois[11];
        var thisyear = parseInt(year.innerText, 10);
        document.querySelectorAll('#testdate').forEach(listest);
        function listest(listestrr) {
          const testdatetest = listestrr.innerText.trim();
          document.querySelectorAll('#days > li').forEach(eachdays);
          function eachdays(eachday){
            if (((thisyear-1)+"-" +(mois.indexOf(month.innerText)+1)+"-"+ eachday.innerText) == testdatetest) {
              if ((listestrr.parentNode.parentNode.parentNode.parentNode.childNodes[1]).classList.contains('notes-title-blue')) {
                eachday.classList.add("calendarblue");
              }
              else if ((listestrr.parentNode.parentNode.parentNode.parentNode.childNodes[1]).classList.contains('notes-title-red')) {
                eachday.classList.add("calendarred");
              }
              else if ((listestrr.parentNode.parentNode.parentNode.parentNode.childNodes[1]).classList.contains('notes-title-green')) {
                eachday.classList.add("calendargreen");
              }
            }
          }
        }
        return year.innerText = thisyear -1;
      }
      else {
        var prevmonth = (function () {
        var thismonthprev = month.innerText;
        var thismonthprevnumber = mois.indexOf(thismonthprev);
        return function () {thismonthprevnumber -= 1; return thismonthprevnumber}
        })();
        month.innerText = mois[prevmonth()];
        if (mois.indexOf(month.innerText) < 10) {
          document.querySelectorAll('#testdate').forEach(listest);
          function listest(listestrr) {
            const testdatetest = listestrr.innerText.trim();
            document.querySelectorAll('#days > li').forEach(eachdays);
            function eachdays(eachday){
              if ((year.innerText+"-"+ "0" +(mois.indexOf(month.innerText)+1)+"-"+ eachday.innerText) == testdatetest) {
                if ((listestrr.parentNode.parentNode.parentNode.parentNode.childNodes[1]).classList.contains('notes-title-blue')) {
                eachday.classList.add("calendarblue");
                }
                else if ((listestrr.parentNode.parentNode.parentNode.parentNode.childNodes[1]).classList.contains('notes-title-red')) {
                  eachday.classList.add("calendarred");
                }
                else if ((listestrr.parentNode.parentNode.parentNode.parentNode.childNodes[1]).classList.contains('notes-title-green')) {
                  eachday.classList.add("calendargreen");
                }
              }
            }
          }
        }
        else {
          document.querySelectorAll('#testdate').forEach(listest);
          function listest(listestrr) {
            const testdatetest = listestrr.innerText.trim();
            document.querySelectorAll('#days > li').forEach(eachdays);
            function eachdays(eachday){
              if ((year.innerText+"-"+ (mois.indexOf(month.innerText)+1)+"-"+ eachday.innerText) == testdatetest) {
                if ((listestrr.parentNode.parentNode.parentNode.parentNode.childNodes[1]).classList.contains('notes-title-blue')) {
                eachday.classList.add("calendarblue");
                }
                else if ((listestrr.parentNode.parentNode.parentNode.parentNode.childNodes[1]).classList.contains('notes-title-red')) {
                  eachday.classList.add("calendarred");
                }
                else if ((listestrr.parentNode.parentNode.parentNode.parentNode.childNodes[1]).classList.contains('notes-title-green')) {
                  eachday.classList.add("calendargreen");
                }
              }
            }
          }
        }
        if (month.innerText == "AVRIL" ||  month.innerText == "JUIN" || month.innerText == "SEPTEMBRE" || month.innerText == "NOVEMBRE"){
          const daysyup = document.querySelector(".yup");
          daysyup.classList.remove("yup");
          daysyup.classList.add("nope");
        }
        else if (month.innerText == "FEVRIER"){
          const daysyup = document.querySelectorAll(".yup");

          daysyup.classList.remove("yup");
          daysyup.classList.add("nope");
        }
        else {
          const daysyup = document.querySelector(".nope");
          daysyup.classList.remove("nope");
          daysyup.classList.add("yup");
        }
      }
    });

}
export {calendarprev}
