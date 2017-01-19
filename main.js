/**
 * Created by pramvvlocal on 19.01.2017.
 */
var state;
var tempid;
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
$(document).ready(function() {
        getData();
    }
);

function getData() {

    /* why I cannot change global ogbject from callback fucntion?*/
    /* read this information
     http://stackoverflow.com/questions/23667086/why-is-my-variable-unaltered-after-i-modify-it-inside-of-a-function-asynchron
     http://stackoverflow.com/questions/14220321/how-do-i-return-the-response-from-an-asynchronous-call/14220323#14220323

     Bad things to program with JavaScript we should Asynchronous word!

    * */
    $.getJSON('http://jservice.io/api/random', function(data) {
        $("#questionID").html(data[0].id);
        $("#totalQuestions").html();
        $("#category").html(data[0].category['title']);
        $("#question").html(data[0].question);


       /* state.id = data[0]["id"];
        tempid = 34; */


      /* saveJSON(data);*/

       // $("#ansPrompt").text(data[0]["id"]);
    });
}
/*
function saveJSON(dat) {
    state.id= dat[0]["id"];
    $("#ansPrompt").text(dat[0]["id"]);

}
*/