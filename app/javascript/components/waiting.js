const waiting = () => {

    $(".avatar-note-waiting").hover(function(){
      $(".explain-waiting").css("display","block");
      }, function(){
      $(".explain-waiting").css("display","none");
    })


    // $(".avatar-note-waiting").click(function(){
    //   $(".explain-waiting").css("display","block");
    // })
}
 export {waiting}
