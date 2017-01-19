/**
 * Created by pramvvlocal on 19.01.2017.
 */


$(document).ready(function() { main();});

function main() {
    function newQuestion() {
        $.getJSON('http://jservice.io/api/random', function(data) {
            $("#questionID").html(data[0].id);
            $("#totalQuestions").html( Number($("#totalQuestions").text())+1);
            $("#category").html(data[0].category.title);
            $("#question").html(data[0].question);
            var answerText = data[0].answer;
            var answerArr = answerText.split('');
            var tryAnsArr = [];
            for (var i = 0; i<answerArr.length; i++) {
                $("#letters").append("<button type='button' class='btn btn-warning'>"+answerArr[i]+"</button>");
            }

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
