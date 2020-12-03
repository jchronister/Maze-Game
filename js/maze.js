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
        // this.end.style.cursor = this.pointer
    },
    startGame: function () {
        // Disable Start
        this.start.onclick = null;
        // Change Text
        this.status.innerText = "Game Started, Guide Crosshair to End";
        // Reset Colors 
        game.status.classList.remove("win");
        // Setup Boundary Limits
        this.outBounds.forEach((n) => {
            let e = n;
            e.classList.remove("youlose");
            e.onmouseenter = this.outOfBounds;
        });
        this.maze.onmouseleave = this.outOfBounds;
        // Setup Win
        this.end.onmouseenter = this.win;
        // Set Cursor
        this.start.style.cursor = "crosshair";
        this.maze.style.cursor = "crosshair";
        this.startTime = Date.now();
    },
    win: function () {
        // Winner Click the "Start" to begin!
        let time = Date.now() - game.startTime;
        game.status.innerText = "Winner in " + time + "ms, Congratulations. Click Start to Play Again!";
        game.status.classList.add("win");
        // Remove Event Handlers
        game.removeOutOfBoundsEventHandlers(false);
        game.end.onmouseenter = null;
        game.initalize();
    },
    outOfBounds: function (e) {
        // Out of Bounds Turns Red & Remove Event Handlers
        game.removeOutOfBoundsEventHandlers(true);
        // Click the "Start Over" to begin!
        game.status.innerText = "Sorry, Out of Bounds. Click Start to Try Again!";
        game.initalize();
        game.end.onmouseenter = null;
    },
    removeOutOfBoundsEventHandlers: function (lose) {
        game.outBounds.forEach((n) => {
            let e = n;
            // Out of Bounds Turns Red
            if (lose)
                e.classList.add("youlose");
            // Clear Event Handlers
            e.onmouseenter = null;
        });
        game.maze.onmouseleave = null;
        // Reset Pointer
        game.maze.style.cursor = game.pointer;
    },
    reset: function () {
    }
};
game.initalize();
