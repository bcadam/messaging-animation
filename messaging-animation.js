// This variable is used to set a starting time. It is added to to keep the relative times.
var counter = 0;

// Adds time from starting time. Is a time since load. Also returns the new position.
function timerPosition(time) {
    counter = counter + time;
    return counter;
}

// When just adding to timer.
function addToTimer(time) {
    counter = counter + time;
}

function addMessage() {
    var numOfArguments = arguments.length;
    //console.log(numOfArguments);
    if (numOfArguments == 0) {
        addText('from-me', "Ya gotta pass an argument")
    }
    if (numOfArguments == 1) {
        addText('from-me', arguments[0])
    }
    if (numOfArguments == 2) {
        addText(arguments[0], arguments[1])
    }
    if (numOfArguments == 3) {
        addTextWithDelay(arguments[0], arguments[1], arguments[2])
    }
    if (numOfArguments == 4) {
        addTextWithDelayAndBubble(arguments[0], arguments[1], arguments[2], arguments[3])
    }
}

// Adds text to the screen without any loading bubbles or any delay
function addText(direction, text) {
    var newId = text.replace(/[^A-Z0-9]/ig, "_");
    newId = newId + parseInt(Math.random());

    $("#textbox").append("<span id='" + newId + "' class='textMessage'><div class='" + direction + "'><p>" + text + "</p></div><div class='clear'></div></span>");
    $("#textbox").scrollTop($("#textbox").scrollTop() + $("#" + newId).position().top);

}

// Adds a text with a delay but no loading ellipsis
// delay - time since previous message to insert text
// direction - either 'from-me' or 'from-them'
// text - message to be sent
function addTextWithDelay(delay, direction, text) {
    delay = timerPosition(delay);
    setTimeout(
        function() {
            addText(direction, text);
        }, delay);
}

// Adds a text with a delay and a loading ellipsis
// timeToStart - time since the starting of the previous text to start animation
// timeToWrite - how long the loading ellipsis should be displayed
// direction - either 'from-me' or 'from-them'
// text - message to be sent
function addTextWithDelayAndBubble(timeToStart, timeToWrite, direction, text) {
    var newId = text.replace(/[^A-Z0-9]/ig, "_");
    newId = newId + parseInt(Math.random());
    timeToStart = timerPosition(timeToStart);
    addToTimer(timeToWrite);
    timeToWrite = timeToWrite;
    setTimeout(
        function() {
            $("#textbox").append("<span id='" + newId + "' class='textMessage'><div class='" + direction + "'><p><b><div id='searching-ellipsis'><span>. </span><span>. </span><span>. </span></div></b></p></div><div class='clear'></div></span>");
            $("#textbox").scrollTop($("#textbox").scrollTop() + $("#" + newId).position().top);
            setTimeout(
                function() {
                    $('#' + newId).remove();
                    addText(direction, text);
                }, timeToWrite);
        }, timeToStart);
}
