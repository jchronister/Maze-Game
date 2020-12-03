interface gameInfo {

  start:HTMLElement
  end: HTMLElement
  outBounds: NodeList
  maze: HTMLElement
  status: HTMLElement
  pointer: string
  startTime: number
  initalize: () => void
  win: () => void
  outOfBounds: (e: Event) => void
  startGame: () => void
  endGame: (l: boolean) => void

}

const game : gameInfo = {

  start: <HTMLElement> document.getElementById("start"),
  end: <HTMLElement> document.getElementById("end"),
  outBounds: <NodeList> document.querySelectorAll(".boundary"),
  maze: <HTMLElement> document.getElementById("maze"),
  status: <HTMLElement> document.getElementById("status"),
  pointer: document.body.style.cursor,
  startTime: 0,

  initalize: function () {
    this.start.onclick = () => {game.startGame()}
    this.start.style.cursor = "pointer"
  },

  startGame: function () {

    // Disable Start
    this.start.onclick = null

    // Change Text
    this.status.innerText = "Game Started, Guide Crosshair to End"

    // Reset Colors 
    game.status.classList.remove("win")

    // Setup Boundary Limits
    this.outBounds.forEach(
      
      (n: Node) : void => {
        (n as HTMLElement).classList.remove("youlose");
        (n as HTMLElement).onmouseenter = this.outOfBounds;
      }
    
    )

    // Area Outside Maze
    this.maze.onmouseleave = this.outOfBounds

    // Setup Win
    this.end.onmouseenter = this.win

    // Set Cursor Style
    this.start.style.cursor = "crosshair"
    this.maze.style.cursor = "crosshair"

    // Time
    this.startTime = Date.now()
  },

  win: function () {

    // Winner Click the "Start" to begin!
    let time = Date.now() - game.startTime
    game.status.innerText = "Winner in " + time + "ms, Congratulations. Click Start to Play Again!"
    game.status.classList.add("win")  

    // Remove Event Handlers
    game.endGame(false)

  },

  outOfBounds: function (e) {

    // Out of Bounds Turns Red & Remove Event Handlers
    game.endGame(true)
    
    // Click the "Start Over" to begin!
    game.status.innerText = "Sorry, Out of Bounds. Click Start to Try Again!"

  },

  endGame: function (lose: boolean) {

    // Out of Bounds in Maze
    game.outBounds.forEach((n: Node) => {

        // Out of Bounds Turns Red
        if (lose) {(n as HTMLElement).classList.add("youlose");}

        // Clear Event Handlers
        (n as HTMLElement).onmouseenter = null;
      }
      
    )  
 
    // Area Outside Maze
    game.maze.onmouseleave = null
    game.end.onmouseenter = null

    // Reset Pointer
    game.maze.style.cursor = game.pointer

    game.initalize()
  },

}
game.initalize()