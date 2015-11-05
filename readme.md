# Messaging Animation
This is an easy to use library for animating messages on a devices. It is built to look like the iOS Messaging App but many devices can be used. Texts can be added to the home screen by calling ```addMessage("What's up?");``` in javascript.
![](http://i.imgur.com/DMKiDPQ.gif)

# Getting Started
```javascript
<script>
$( document ).ready(function() {
addMessage("What's up?");
addMessage(1000, 1500, "from-them", "Not much");
addMessage(2000, "from-me", "cool");
addMessage(2000, 2000, "from-them", "good convo");
});
</script>
```

```html
<!-- Alter this line of code below to change device and color -->
<div class="marvel-device iphone5s gold">
    <div class="top-bar"></div>
    <div class="sleep"></div>
    <div class="volume"></div>
    <div class="camera"></div>
    <div class="sensor"></div>
    <div class="speaker"></div>
    <div class="screen" style="background-color:white;width:100%;">
        <section id="textbox">
        </section>
        <div id="textBar">
            <div style="width:15%;" class="barItem">
                <i style="margin-left:4%;margin-top:3%;" id="cameraIcon" class="pull-left icono-camera"></i>
            </div>
            <div style="width:70%;" class="barItem">
                <div id="inputText" id="keyboardloc" class="pull-left" type="text">
                    <div style="padding-right:2%;"></div>
                </div>
            </div>
            <div style="width:15%;" class="barItem">
                <i style="margin-left:4%;margin-top:5%;" id="microphoneIcon" class="icono-microphone pull-right"></i>
            </div>
        </div>
    </div>
    <div class="home"></div>
    <div class="bottom-bar"></div>
</div>
```

# How to Use
####Methods
<b>addMessage() -></b> Suggests you pass some arguments <br />
<b>addMessage(text) -></b>  Shows the text on the user side <br />
<b>addMessage(direction,text) -></b>  Shows the text on the selected side <br />
<b>addMessage(timeToStart,direction,text) -></b>  Shows text on selected side after delay <br />
<b>addMessage(timeToStart,timetoWrite,direction,text) -></b>  Shows text after delay with set time of ellipsis <br />

####Parameters
<b>direction -></b>  is either "from-me" or "from-them" <br />
<b>text -></b> is whatever text you want to send <br />
<b>timeToStart -></b> is how long after the previous text to send <br />
<b>timeToWrite -></b> is how long the loading ellipsis should be displayed <br />

# Available devices to display
Change code to see on alternate devices
- marvel-device iphone5s gold
- marvel-device iphone5c green
- marvel-device ipad silver

Full device options available at 
https://marvelapp.github.io/devices.css/

# Necessary Libraries

```
jQuery
icono.min.css
marvel.css
```

# Built on top of libraries from
- https://marvelapp.github.io/devices.css/
- http://codepen.io/samuelkraft/
- http://jsfiddle.net/Roobyx/AT6v6/2/
- http://saeedalipoor.github.io/icono/
