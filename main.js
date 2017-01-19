/**
 * Created by pramvvlocal on 19.01.2017.
 */


$(document).ready(function() { main();});
//for random shifting of a array
function compareRandom(a, b) {
    return Math.random() - 0.5;
}


function main() {
    function newQuestion() {
        $.getJSON('http://jservice.io/api/random', function(data) {
            $("#questionID").html(data[0].id);
            $("#totalQuestions").html( Number($("#totalQuestions").text())+1);
            $("#category").html(data[0].category.title);
            $("#question").html(data[0].question);
            var answerText = data[0].answer;
            var answerArr = answerText.split('').sort(compareRandom);
            var tryAnsArr = [];
            for (var i = 0; i<answerArr.length; i++) {
                $("#letters").append("<button type='button' class='btn btn-warning'>"+answerArr[i]+"</button>");
            }
            $(".btn-warning").click(function() {
                tryAnsArr.push($(this).text());
                $("#tryAns").append("<button type='button' class='btn btn-info'>"+$(this).text()+"</button>");
                $(this).remove();
            });
            //click on bt-info does not work
            $(".btn-info").click(function() {
                $("#letters").append("<button type='button' class='btn btn-danger'>"+$(this).text()+"</button>");
                $(this).remove();
            });


        });
    }
    newQuestion();
     //
    $("#buttonSkip").click( function(){
        newQuestion();
        $("#tryAns").html('');
        $("#letters").html('');
        });
    }
