/**
 * Created by pramvvlocal on 19.01.2017.
 */


/*
 state ={
    id:20,
    question:"Place for a question please wait.",
    category:"misc",
    totalAnswers:10,
    totalQuestions:10,
};

function initPage(){
    $("#totalAnswers").html(0);
    $("#totalQuestions").html(0);
}
 */
$(document).ready(function() { main();});

function main() {

    $.getJSON('http://jservice.io/api/random', function(data) {
        $("#questionID").html(data[0].id);
        $("#totalQuestions").html( Number($("#totalQuestions").text())+1);
        $("#category").html(data[0].category['title']);
        $("#question").html(data[0].question);
    });
//bad solution how to solve this in another way?
    $("#buttonSkip").click( function(){
        $.getJSON('http://jservice.io/api/random', function(data) {
            $("#questionID").html(data[0].id);
            $("#totalQuestions").html( Number($("#totalQuestions").text())+1);
            $("#category").html(data[0].category['title']);
            $("#question").html(data[0].question);
        });
    });
}
/*
function saveJSON(dat) {
    state.id= dat[0]["id"];
    $("#ansPrompt").text(dat[0]["id"]);

}
*/