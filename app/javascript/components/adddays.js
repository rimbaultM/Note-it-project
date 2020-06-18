const adddays = () => {
  const yearcalendar = new Date().getFullYear();
      const monthcalendar = new Date().getMonth();
      const daycalendar = new Date().getDate();
      const month = document.getElementById("month");
      const year = document.getElementById("year");
      const days = document.getElementById("days");
      const mois = ["JANVIER", "FEVRIER", "MARS", "AVRIL", "MAI", "JUIN", "JUILLET", "AOUT", "SEPTEMBRE", "OCTOBRE", "NOVEMBRE", "DECEMBRE"]
      month.innerText = mois[new Date().getMonth()];
      year.innerText = new Date().getFullYear();

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
}
export {adddays}
