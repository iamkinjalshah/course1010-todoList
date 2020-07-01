
// Plus Button
$(".fa-plus-square").on("click", function() {
    $("input").fadeToggle(1000, function() {
        $(this).toggleClass("hideInputBox");
    });
});

// Completed To-Do
$("ul").on("click", ".span_completed", function() {
    $(this).parent().toggleClass("completed");
});

// Delete To-Do
$("ul").on("click", ".span_trash", function() {
    $(this).parent().fadeOut(1000, function() {
        $(this).remove();
    });
});

// Edit To-Do
$("ul").on("click", ".span_edit", function() {
    var newToDo = prompt("Edit your To-Do");
    if(newToDo) {
        $(this).siblings(".span_toDoTxt").text(newToDo);
    }
});

// Add To-Do
$("input").keypress(function(event) {
    var keyPressed = event.originalEvent.key;
    if(keyPressed === "Enter") {
        var inputTxt = $("input").val();
        if(inputTxt) {
            $("ul").append(getSpanHTMLs(inputTxt));
            $(this).val("");
        } else {
            alert("A To-Do must not be empty!"); 
        }
    }
});

function getSpanHTMLs(inputTxt) {

    var html = "<li> <span class='span_toDoTxt'>" + inputTxt + "</span>" +
        "<span class='span_trash' title='Delete'><i class='fa fa-trash' aria-hidden='true'></i></span>" +
        "<span class='span_edit' title='Edit'><i class='fa fa-pencil-square' aria-hidden='true'></i></span>" +
        "<span class='span_completed' title='Done/Undo'><i class='fa fa-check-square' aria-hidden='true'></i></span>"
    + "</li>";

    return html;
}
