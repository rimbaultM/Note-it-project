const invitation = () => {
    $(".invitation").click(function(){
      $(".invitation-block").toggle();
    });
}
export {invitation}



    // $(".invitation").toggle(
    //   function () {
    //   $(".invitation-block").css("display","block")
    //   },
    //   function () {
    //   $(".invitation-block").css("display","none")
    //   }
    // );



// $(".invitation").click(function () {
//       $(".invitation-block").css("display","block");
//     })
//     $(".invitation").click(function () {
//       $(".invitation-block").css("display","none");
//     })
