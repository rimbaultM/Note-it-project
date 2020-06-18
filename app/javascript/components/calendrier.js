const calendar = () => {
    $(".calendar-nav").click(function(){
      $(".calendar").toggle();
      $(".detailsday").css("display","none");
      document.querySelectorAll('.days > li').forEach(daysclick);
      function daysclick(dayclick) {
        dayclick.classList.remove("thisdays2")
      }
      const days = document.querySelector(".days")
      days.insertAdjacentHTML('beforeend', "<div class=styleweek></div>")

    });
    const yearcalendar = new Date().getFullYear();
    const monthcalendar = new Date().getMonth();
    const daycalendar = new Date().getDate();
    const month = document.getElementById("month");
    const year = document.getElementById("year");
    const days = document.getElementById("days");
    const mois = ["JANVIER", "FEVRIER", "MARS", "AVRIL", "MAI", "JUIN", "JUILLET", "AOUT", "SEPTEMBRE", "OCTOBRE", "NOVEMBRE", "DECEMBRE"]
    month.innerText = mois[new Date().getMonth()];
    year.innerText = new Date().getFullYear();

    if (month.innerText == "JUIN" || month.innerText == "MAI" || month.innerText == "SEPTEMBRE" || month.innerText == "NOVEMBRE"){
      const day30 = ["01","02","03","04","05","06","07","08","09",10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];
      day30.forEach(adddays);
    }
    else if (month.innerText == "FEVRIER"){
      const day30 = ["01","02","03","04","05","06","07","08","09",10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28];
      day30.forEach(adddays)
    }
    else{
      const day30 = ["01","02","03","04","05","06","07","08","09",10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31];
      day30.forEach(adddays);
    }

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
}
export {calendar}


