# MWP - CS445 - JavaScript 03
## The Maze Game
This exercise practices JavaScript events and the Document Object Model (DOM). You will write `maze.js` to implement the maze behavior.

The difficulty is in having move the mouse through without touching any walls. When the mouse cursor touches a wall, all walls turn red and a "You lose" message shows. Touching the Start button with the mouse removes the red coloring from the walls.
The maze walls are 5 div elements. 
```html
<div id="maze">
    <div id="start">S</div>
    <div class="boundary" id="boundary1"></div>
    <div class="boundary"></div>
    <div class="boundary"></div>
    <div class="boundary"></div>
    <div class="boundary"></div>
    <div id="end">E</div>
</div>
```
When the user moves the mouse onto a single wall of the maze's walls (mouseover), that wall along with other walls will turn red.  
* Write your JS code unobtrusively, without modifying `maze.html`.
* You'll need to attach an event handler to each div that represents a wall of the maze.
* Make it so that when the user clicks the mouse on the Start square (a div with an id of start), the maze state will reset. That is, if the maze boundary walls are red, they will all return to their normal color, so that the user can try to get through the maze again.
  
**Extra requirement:** It's too easy to cheat: Just move your mouse around the outside of the maze!  
* Fix this by making it so that if the user moves the mouse anywhere outside the maze after clicking the Start area, the walls will light up red and the player will lose the game. 



