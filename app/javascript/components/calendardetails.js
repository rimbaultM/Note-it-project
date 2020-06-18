const calendardetails = () => {

  const month = document.getElementById("month");
  const year = document.getElementById("year");
  const mois = ["JANVIER", "FEVRIER", "MARS", "AVRIL", "MAI", "JUIN", "JUILLET", "AOUT", "SEPTEMBRE", "OCTOBRE", "NOVEMBRE", "DECEMBRE"]

  function selectdetails(detail){
    $(detail).click(function(){

      const detailsday = document.querySelector(".detailsday");
      while (detailsday.firstChild){
          detailsday.removeChild(detailsday.firstChild);
      }
        if (mois.indexOf(month.innerText) < 10) {
          const pickdate0 = (year.innerText + "-" + "0" + (mois.indexOf(month.innerText)+1) + "-" + detail.innerText)
          document.querySelectorAll("#testdate").forEach(notedates)
          function notedates(notedate){
            if (pickdate0 == notedate.innerText.trim()) {
              const titleparent = (notedate.parentNode.parentNode.parentNode.parentNode.parentNode.children[0]);
              detailsday.insertAdjacentHTML('beforeend', "<li class=calendargroupnotetitle >" + "Nom du Groupe: " + " " + titleparent.innerText.trim() + "</li>");

              const noteparent = (notedate.parentNode.parentNode.parentNode).children[0]
              detailsday.insertAdjacentHTML('beforeend', "<li class=calendarnotetitle >" + " " + noteparent.innerText.trim() + "</li>");
            }
          }
        }
        else {
          const pickdate1 = (year.innerText + "-" + (mois.indexOf(month.innerText)+1) + "-" + detail.innerText)
          console.log(pickdate1);
          detailsday.insertAdjacentHTML('beforeend', "<li>" + "date: " + " " + pickdate1 + "</li>");
        }
        if (detailsday.children[1].classList.contains("calendarnotetitle")){
          $(".detailsday").css("display","block");
        }
        else {
          $(".detailsday").css("display","none");
        }
    });
  }
  function selectnodetails(nodetail){
    $(nodetail).click(function(){
      const detailsday = document.querySelector(".detailsday");
      while (detailsday.firstChild){
          detailsday.removeChild(detailsday.firstChild);
      }
      $(".detailsday").css("display","block");
      detailsday.insertAdjacentHTML('beforeend', "<li class=nonotecalendar > Aucun Evenement </li>");
    });
  }

// -SANS COULEUR
  document.querySelectorAll('.days > li').forEach(selectnodetails);
  selectnodetails();

// -ROUGE

  document.querySelectorAll('.calendarred').forEach(selectdetails);
  selectdetails();

// -BLEU

  document.querySelectorAll('.calendarblue').forEach(selectdetails);
  selectdetails();

// -VERT

  document.querySelectorAll('.calendargreen').forEach(selectdetails);
  selectdetails();

// -COCHE SELECTION

  document.querySelectorAll('.days > li').forEach(daysclick);
  function daysclick(dayclick) {
    $(dayclick).click(function(){
      if (dayclick.classList.contains("thisdays2")){
        dayclick.classList.remove("thisdays2")
      }
      else {
        const daysalls = document.querySelectorAll('.days > li').forEach(dayalls);
        function dayalls(dayall) {
          dayall.classList.remove("thisdays2")
        }
        dayclick.classList.add("thisdays2")
      }
    });
  }


};
export {calendardetails}


