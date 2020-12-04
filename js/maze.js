"use strict";
const game = {
    start: document.getElementById("start"),
    end: document.getElementById("end"),
    outBounds: document.querySelectorAll(".boundary"),
    maze: document.getElementById("maze"),
    status: document.getElementById("status"),
    pointer: document.body.style.cursor,
    startTime: 0,
    initalize: function () {
        this.start.onclick = () => { game.startGame(); };
        this.start.style.cursor = "pointer";
    },
    startGame: function () {
        // Disable Start
        this.start.onclick = null;
        // Change Text
        this.status.innerText = "Game Started, Guide Crosshair to End";
        // Reset Colors 
        game.status.classList.remove("win");
        game.maze.classList.remove("youWin");
        // Setup Boundary Limits
        this.outBounds.forEach((n) => {
            n.classList.remove("youlose");
            n.onmouseenter = this.outOfBounds;
        });
        // Area Outside Maze
        this.maze.onmouseleave = this.outOfBounds;
        // Setup Win
        this.end.onmouseenter = this.win;
        // Set Cursor Style
        this.start.style.cursor = "crosshair";
        this.maze.style.cursor = "crosshair";
        // Time
        this.startTime = Date.now();
    },
    win: function () {
        // Winner Click the "Start" to begin!
        let time = Date.now() - game.startTime;
        game.status.innerText = "Winner in " + time + "ms, Congratulations. Click Start to Play Again!";
        game.status.classList.add("win");
        game.maze.classList.add("youWin");
        // Remove Event Handlers
        game.endGame(false);
    },
    outOfBounds: function (e) {
        // Out of Bounds Turns Red & Remove Event Handlers
        game.endGame(true);
        // Click the "Start Over" to begin!
        game.status.innerText = "Sorry, Out of Bounds. Click Start to Try Again!";
    },
    endGame: function (lose) {
        // Out of Bounds in Maze
        game.outBounds.forEach((n) => {
            // Out of Bounds Turns Red
            if (lose) {
                n.classList.add("youlose");
            }
            // Clear Event Handlers
            n.onmouseenter = null;
        });
        // Area Outside Maze
        game.maze.onmouseleave = null;
        game.end.onmouseenter = null;
        // Reset Pointer
        game.maze.style.cursor = game.pointer;
        game.initalize();
    },
};
game.initalize();
