let level = 1
scene.systemMenu.addEntry(() => `LEVEL (${level})`, 
() => {
    level = level + 1;
},
img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . 3 3 3 3 3 . . . . . . 
    . . . . 3 3 . . . 3 3 3 . . . . 
    . . . 3 3 . . . . . . 3 3 . . . 
    . . . 3 . . . . . . . . 3 3 . . 
    . . . 3 . . . . . . . . . 3 . . 
    . . . 3 . . . . . . . . . 3 . . 
    . . . 3 3 . . . . . . . . 3 . . 
    . . . . 3 3 . . . . . . 3 3 . . 
    . . . . . . 3 3 3 3 . 3 3 . . . 
    . . . . . . . . . 3 3 3 . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `);
