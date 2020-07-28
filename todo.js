
//adding a strike through effect when the event is clicked ie just completed
$("ul").on("click","li",function(){
    $(this).toggleClass("strike");
});

//deleting an element
$("ul").on("click",".delete",function(){
    $(this).parent().fadeOut(500,function(){
        $(this).remove();
    });
    event.stopPropagation();
});

//converting text input to an element (li) in the list
$("input[type='text']").on("keypress",function(event){

    if(event.which===13){
        //if to do is not empty
        if(true){
            var content= $(this).val();
            $("ul").append("<li><span class=\"delete\"><i class=\"fas fa-trash\"></i></span>"+content+"</li>");
        }
        $(this).val("");
    }
});

//adding the form toggler
$("#plus").on("click", function(){
    $("input[type='text']").fadeToggle();
});