/**
 * Created by pramvvlocal on 19.01.2017.
 */

var state ={
    totalAnswers:10,
    totalQuestions:10,
};

function initPage(){
    $("#totalAnswers").html(String(state.totalAnswers));
    $("#totalQuestions").html(state.totalQuestions);
    $("#category").html("<h2>Cool!</h2>");
    $("#question").html("Who is Artem?");
}

$(document).ready(function() {
        initPage();
    }
);

function getData () {


}
