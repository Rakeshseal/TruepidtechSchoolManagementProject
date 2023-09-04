$( document ).ready(function(e) {
   
    /*Teacher Item Start*/
   $(".arrow-down1").click( function(){
     $(".arrow-up1").css("display", "block");
     $(".arrow-down1").css("display", "none");
     $(".item_li").css("display", "block");
   });

   $(".arrow-up1").click( function(){
    $(".arrow-down1").css("display", "block");
    $(".arrow-up1").css("display", "none");
    $(".item_li").css("display", "none");
  });
   
   /*Teacher Item End*/


   /*Form Item Start*/
   $(".arrow-down2").click( function(){
    $(".arrow-up2").css("display", "block");
    $(".arrow-down2").css("display", "none");
    $(".item_li2").css("display", "block");
  });

  $(".arrow-up2").click( function(){
   $(".arrow-down2").css("display", "block");
   $(".arrow-up2").css("display", "none");
   $(".item_li2").css("display", "none");
 });
  
  /*Form Item End*/


  /*Notifications Item Start*/
  $(".arrow-down3").click( function(){
    $(".arrow-up3").css("display", "block");
    $(".arrow-down3").css("display", "none");
    $(".item_li3").css("display", "block");
  });

  $(".arrow-up3").click( function(){
   $(".arrow-down3").css("display", "block");
   $(".arrow-up3").css("display", "none");
   $(".item_li3").css("display", "none");
 });
  
  /*Notifications Item End*/


  /*Events Item Start*/
  $(".arrow-down4").click( function(){
    $(".arrow-up4").css("display", "block");
    $(".arrow-down4").css("display", "none");
    $(".item_li4").css("display", "block");
  });

  $(".arrow-up4").click( function(){
   $(".arrow-down4").css("display", "block");
   $(".arrow-up4").css("display", "none");
   $(".item_li4").css("display", "none");
 });
  
  /*Events Item End*/


  /*Maps Item Start*/
  $(".arrow-down5").click( function(){
    $(".arrow-up5").css("display", "block");
    $(".arrow-down5").css("display", "none");
    $(".item_li5").css("display", "block");
  });

  $(".arrow-up5").click( function(){
   $(".arrow-down5").css("display", "block");
   $(".arrow-up5").css("display", "none");
   $(".item_li5").css("display", "none");
 });
  
  /*Maps Item End*/


  /*Charts Item Start*/
  $(".arrow-down6").click( function(){
    $(".arrow-up6").css("display", "block");
    $(".arrow-down6").css("display", "none");
    $(".item_li6").css("display", "block");
  });

  $(".arrow-up6").click( function(){
   $(".arrow-down6").css("display", "block");
   $(".arrow-up6").css("display", "none");
   $(".item_li6").css("display", "none");
 });
  
  /*Charts Item End*/

  /*left Menu Button Operation start*/

  //Menu button Function
 $(".menu_ico").click( function(){
   $(".left_sec").css("width", "60%");
   $(".x_ico").css("display", "block");
   $(".menu_ico").css("display", "none");
   $(".dash_cont").css("display", "block");
   
 });


 //X-Button Function

 $(".x_ico").click( function(){
  $(".left_sec").css("width", "20%");
  $(".menu_ico").css("display", "block");
  $(".x_ico").css("display", "none");
  $(".dash_cont").css("display", "none");
  
});


  /*left Menu Button Operation End*/



  /*Student Image Upload Function Start*/
  let studentImg = document.getElementById("student-img");
  let inputFile = document.getElementById("input-file");

  inputFile.onchange = function(){
    studentImg.src = URL.createObjectURL(inputFile.files[0]);
  }

  /*Student Image Upload Function End*/


  /* Notice View Function Start*/

  let Notice = document.querySelector("#notice");
  //  let DeleteBtn = document.getElementById("delete");

  $(".delete_Btn").click( function(){
     // Notice.parentNode.removeChild(td);
      Notice.css("display", "none");
  });


   /*Notice View Function End */       


 
});


         /*Student View Section Function Start*/

       //Class

       let infoDwn1 = document.querySelector(".infoClassArrowDwn");
  
       let infoUp1 = document.querySelector(".infoClassArrowUp");
       
       let classUl = document.querySelector(".class_ul");
       
       
     
       $(infoUp1).click(function(){
         $(infoDwn1).css("display","block");
         $(classUl).css("display","block");
         $(".class_li").css("height","auto");
         $(classUl).css("transition: ;","2.5s");
         $(infoUp1).css("display","none");
       });
     
       $(infoDwn1).click(function(p){
         $(infoUp1).css("display","block");
         $(classUl).css("display","none");
         $(classUl).css("transition: ;","2.5s");
         $(".class_li").css("height","0px");
         $(infoDwn1).css("display","none");
       });
       
       //Lower nusery
       $(".ln").click(function(){
         $(".class_type").text("Lower Nursery");
         $(classUl).css("display","none");
         $(infoDwn1).css("display","none");
         $(infoUp1).css("display","block");
     
         $(".A").css("display","block");
         $(".sci").css("display","none");
         $(".comm").css("display","none");
         
       });
     
       //Upper nusery
       $(".un").click(function(){
         $(".class_type").text("Upper Nursery");
         $(classUl).css("display","none");
         $(infoDwn1).css("display","none");
         $(infoUp1).css("display","block");
     
         $(".A").css("display","block");
         $(".sci").css("display","none");
         $(".comm").css("display","none");
         
       });
     
       //KG
       $(".kg").click(function(){
         $(".class_type").text("KG");
         $(classUl).css("display","none");
         $(infoDwn1).css("display","none");
         $(infoUp1).css("display","block");
     
         $(".A").css("display","block");
         $(".sci").css("display","none");
         $(".comm").css("display","none");
         
       });
     
       //Class-1
       $(".class_1").click(function(){
         $(".class_type").text("1");
         $(classUl).css("display","none");
         $(infoDwn1).css("display","none");
         $(infoUp1).css("display","block");
     
         $(".A").css("display","block");
         $(".sci").css("display","none");
         $(".comm").css("display","none");
         
       });
     
       //Class-2
       $(".class_2").click(function(){
         $(".class_type").text("2");
         $(classUl).css("display","none");
         $(infoDwn1).css("display","none");
         $(infoUp1).css("display","block");
     
         $(".A").css("display","block");
         $(".sci").css("display","none");
         $(".comm").css("display","none");
         
       });
     
       //Class-3
       $(".class_3").click(function(){
         $(".class_type").text("3");
         $(classUl).css("display","none");
         $(infoDwn1).css("display","none");
         $(infoUp1).css("display","block");
     
         $(".A").css("display","block");
         $(".sci").css("display","none");
         $(".comm").css("display","none");
         
       });
     
       //Class-4
       $(".class_4").click(function(){
         $(".class_type").text("4");
         $(classUl).css("display","none");
         $(infoDwn1).css("display","none");
         $(infoUp1).css("display","block");
     
         $(".A").css("display","block");
         $(".sci").css("display","none");
         $(".comm").css("display","none");
         
       });
     
       //Class-5
       $(".class_5").click(function(){
         $(".class_type").text("5");
         $(classUl).css("display","none");
         $(infoDwn1).css("display","none");
         $(infoUp1).css("display","block");
     
         $(".A").css("display","block");
         $(".sci").css("display","none");
         $(".comm").css("display","none");
         
       });
     
       //Class-6
       $(".class_6").click(function(){
         $(".class_type").text("6");
         $(classUl).css("display","none");
         $(infoDwn1).css("display","none");
         $(infoUp1).css("display","block");
     
         $(".A").css("display","block");
         $(".sci").css("display","none");
         $(".comm").css("display","none");
         
       });
     
       //Class-7
       $(".class_7").click(function(){
         $(".class_type").text("7");
         $(classUl).css("display","none");
         $(infoDwn1).css("display","none");
         $(infoUp1).css("display","block");
     
         $(".A").css("display","block");
         $(".sci").css("display","none");
         $(".comm").css("display","none");
         
       });
     
       //Class-8
       $(".class_8").click(function(){
         $(".class_type").text("8");
         $(classUl).css("display","none");
         $(infoDwn1).css("display","none");
         $(infoUp1).css("display","block");
     
         $(".A").css("display","block");
         $(".sci").css("display","none");
         $(".comm").css("display","none");
         
       });
     
       //Class-9
       $(".class_9").click(function(){
         $(".class_type").text("9");
         $(classUl).css("display","none");
         $(infoDwn1).css("display","none");
         $(infoUp1).css("display","block");
     
         $(".A").css("display","block");
         $(".sci").css("display","none");
         $(".comm").css("display","none");
         
       });
     
       //Class-10
       $(".class_10").click(function(){
         $(".class_type").text("10");
         $(classUl).css("display","none");
         $(infoDwn1).css("display","none");
         $(infoUp1).css("display","block");
     
         $(".A").css("display","block");
         $(".sci").css("display","none");
         $(".comm").css("display","none");
         
       });
     
       //Class-11
       $(".class_11").click(function(){
         $(".class_type").text("11");
         $(classUl).css("display","none");
         $(infoDwn1).css("display","none");
         $(infoUp1).css("display","block");
     
         $(".A").css("display","none");
         $(".sci").css("display","block");
         $(".comm").css("display","block");
       });
     
       //Class-12
       $(".class_12").click(function(){
         $(".class_type").text("12");
         $(classUl).css("display","none");
         $(infoDwn1).css("display","none");
         $(infoUp1).css("display","block");
     
         $(".A").css("display","none");
         $(".sci").css("display","block");
         $(".comm").css("display","block");
       });
     
         
       
     
       //Class End
     
     
       //Section
     
       
       let infoDwn2 = document.querySelector(".infoSecArrowDwn");
       
       let infoUp2 = document.querySelector(".infoSecArrowUp");
       let SecUl = document.querySelector(".Sec_ul");
     
       
       $(infoUp2).click(function(){
         $(infoDwn2).css("display","block");
         $(SecUl).css("display","block");
         $(".Sec_li").css("height","auto");
         $(SecUl).css("transition: ;","2.5s");
         $(infoUp2).css("display","none");
       });
     
       $(infoDwn2).click(function(p){
         $(infoUp2).css("display","block");
         $(SecUl).css("display","none");
         $(SecUl).css("transition: ;","2.5s");
         $(".Sec_li").css("height","0px");
         $(infoDwn2).css("display","none");
       });
       
       //A
       $(".A").click(function(){
         $(".Sec_type").text("A");
         $(SecUl).css("display","none");
         $(infoDwn2).css("display","none");
         $(infoUp2).css("display","block");
     
         $(".sub_tr_1").css("display","table-row");
         $(".sub_tr_1_1").css("display","table-row");
         $(".sub_tr_1_2").css("display","table-row");
         $(".sub_tr_2").css("display","none");
         $(".sub_tr_3").css("display","none");
         $(".sub_tr_2_1").css("display","none");
         $(".sub_tr_3_1").css("display","none");
       });
     
       //Science
       $(".sci").click(function(){
         $(".Sec_type").text("Science");
         $(SecUl).css("display","none");
         $(infoDwn2).css("display","none");
         $(infoUp2).css("display","block");
     
         $(".sub_tr_1").css("display","none");
         $(".sub_tr_2").css("display","table-row");
         $(".sub_tr_2_1").css("display","table-row");
         $(".sub_tr_3").css("display","none");
         $(".sub_tr_3_1").css("display","none");
         $(".sub_tr_1_1").css("display","none");
         $(".sub_tr_1_2").css("display","none");
       });
     
       //Commerce
       $(".comm").click(function(){
         $(".Sec_type").text("Commerce");
         $(SecUl).css("display","none");
         $(infoDwn2).css("display","none");
         $(infoUp2).css("display","block");
     
         $(".sub_tr_1").css("display","none");
         $(".sub_tr_2").css("display","none");
         $(".sub_tr_2_1").css("display","none");
         $(".sub_tr_3").css("display","table-row");
         $(".sub_tr_3_1").css("display","table-row");
         $(".sub_tr_1_1").css("display","none");
         $(".sub_tr_1_2").css("display","none");
       });
     
       /* Student View Section Function End*/




       /* User Image Upload Function Start*/
       let userImg = document.getElementById("user_image");
       let userInput = document.getElementById("user-input");

       userInput.onchange = function(){
        userImg.src = URL.createObjectURL(userInput.files[0]);
      }



       /* User Image Upload Function End*/

