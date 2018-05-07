
$(document).ready(function(){
 
 $("a").attr("href","http://www.codefactory.wien");

 $("code").css("color","red");

 $("ol>li").css("background-color", "#2a7b90");

 $("textarea").append("Express your opinion");

 $("img").attr("src","https://upload.wikimedia.org/wikipedia/de/thumb/5/50/DFB-Logo_1945.svg/100px-DFB-Logo_1945.svg.png");

 $("blockquote").css({"background-color":"orange","font-style":"italic"});

 $("h1#logo").css("color","black");

 $("span.gray").css("color","White");

 $(".date").remove();

$("#sidemenuone").append("<li> New Templates </li>");
$("#sidemenuone").append("<li> Order Template </li>");
$("#sidemenuone").append("<li> Contact Us </li>");

$("#quote").text("When someone says: 'I want a programming language in which I need only to say what I wish, and done', give him a lollipop.");


});