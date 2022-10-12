'use strict'

const gProjs = [
    {
        id: 'balloons-pop',
        name: 'Balloons POP',
        subName: 'Intro to CSS',
        title: 'Pop as many balloons as you can',
        desc: 'Balloons get rendered and positioned randomly, colored randomly and have their speed set randomly',
        url: 'https://ronenboxer.github.io/balloons-pop/',
        client: 'Microhard',
        publishedAt: 'Spetember 13th, 2022',
        lables: ['Layouts', 'CSS']
    },
    {
        id: 'whats-in-the-pic',
        name: 'What`s in the pic?',
        subName: 'CSS',
        title: 'A test for visual-motoric-memory skill',
        desc: 'Click the button that best describes the object in the picture',
        url: 'https://ronenboxer.github.io/whats-in-the-pic/',
        client: 'Outel',
        publishedAt: 'Spetember 17th, 2022',
        lables: ['Layouts', 'CSS']
    },
    {
        id: 'touchnums',
        name: 'Touch-Nums',
        subName: 'Matrixes',
        title: 'How quickly can you count?',
        desc: 'Click on the numbers in their right order. Game keeps track of time, and "benches" you for a few seconds (depends on the level) if you pick the wrong number.',
        url: 'https://ronenboxer.github.io/touchnums/',
        client: 'Loolge',
        publishedAt: 'Spetember 15th, 2022',
        lables: ['Layouts', 'CSS', 'Matrixes']
    },
    {
        id: 'pacman',
        name: 'Pacman',
        subName: 'DOM assignment',
        title: 'Better get them apples',
        desc: 'Same old pacman. the challange was to get the ghosts fly on a straight line. Board is hand made and to ends on X axis meet.',
        url: 'https://ronenboxer.github.io/pacman/',
        client: 'OK games',
        publishedAt: 'Spetember 18th, 2022',
        lables: ['Matrixes', 'keyboard events', 'DOM and model']
    },
    {
        id: 'game-of-life',
        name: 'Game of life',
        subName: 'Intro to HTML',
        title: `John Conwya's "Game of life"`,
        desc: `<p>The Game of Life, also known simply as Life, is a cellular automaton devised by the British mathematician John Horton Conway in 1970.
        One interacts with the Game of Life by creating an initial configuration and observing how it evolves. It is Turing complete and can simulate a universal constructor or any other Turing machine.
        The universe of the Game of Life is an infinite, two-dimensional orthogonal grid of square cells, each of which is in one of two possible states, live or dead (or populated and unpopulated, respectively). Every cell interacts with its eight neighbours, which are the cells that are horizontally, vertically, or diagonally adjacent. At each step in time, the following transitions occur:</p>
            <ul>
            <li>Any live cell with two or three live neighbours survives.</il>
            <li>Any dead cell with three live neighbours becomes a live cell.</il>
            <li>All other live cells die in the next generation. Similarly, all other dead cells stay dead.</il>
            </ul>
            <p>After researching about the game, I became fascinated with its special patterns and decided to challange myself by rendering it with special features. I was asked to have a 'Kill neighbours button' and add a 'Super Life' feature. My version also has on option to make the board globe-like, with its boundaries connected. The last thing I added was a med-state which colors the dying and being born cells</p>
            `,
        url: 'https://ronenboxer.github.io/game-of-life/',
        client: 'Pineapple',
        publishedAt: 'September 15th, 2022',
        lables: ['Matrixes', 'Neighbours count', 'DOM manipulations']
    },
    {
        id: 'safe-content',
        name: 'Safe content',
        subName: 'Flex and inputs',
        title: 'Nobody would know',
        desc: 'Log in page with personal content, log out and sign up. An admin has a management page set only for them. Only admins can see its content. Admins can remove users, make or unmake them admins etc.',
        url: 'https://ronenboxer.github.io/safe-content/',
        client: 'Some song',
        publishedAt: 'October 5th, 2022',
        lables: ['Layouts', 'DOM and model', 'MVC', 'Cards vs table', 'Responsitivy', 'Flex']
    },
    {
        id: 'book-shop',
        name: 'Bookshop',
        subName: 'Sort and Filter',
        title: 'Read - Succeed',
        desc: 'iOwn - An app for small businesses management. The owner can filter books by name, author, id, highest price and lowest rate. Books can be sorted by name, price or rate (up and down). Site offers table and cards view with all the CRUDL features.',
        url: 'https://ronenboxer.github.io/bookshop/',
        client: 'YDN',
        publishedAt: 'October 9th, 2022',
        lables: ['Layouts', 'DOM and model', 'MVC', 'Cards vs table', 'CRUDL', 'LAYOUTS', 'Flex']
    },
    {
        id: 'fazioli',
        name: 'Fazioli',
        subName: 'Bootstrap',
        title: 'The Ferrari of pianos',
        desc: 'A replica of Fazioli piano craftsmenship home page. Page contains nav bar, main content, footer and information.',
        url: 'https://ronenboxer.github.io/fazioli/',
        client: 'AHAMAY',
        publishedAt: 'October 11th, 2022',
        lables: ['Layouts', 'DOM and model', 'MVC', 'Cards vs table', 'CRUDL', 'LAYOUTS', 'jQuery', 'Bootsrap', 'Flex']
    },
    {
        id: 'minesweeper',
        name: 'Minesweeper',
        subName: '1st sprint',
        title: 'DO NOT STEP ON THE MINES',
        desc: `Good old minesweeper game. Flag the mines and step on the rest of the cells. Additional features:
        <ul>
        <li>Up to 3 lives lost</li>
        <li>Hint click that reveals a cell and its neighbours</li>
        <li>Safe click that flashes a safe cell to stop on</li>
        <li>Mega hint - sellect any two cells and the entire area will be revealed for 2 seconds</li>
        <li>Exterminate - eliminates up to 3 random mines</li>
        <li>Undo and redo buttons</li>
        <li>Toggle dark/light mode</li>
        <li>Toggle sound</li>
        <li>7 Boom mode</li>
        <li>Manual position mode</li>
        <li>1st right click to flag</li>
        <li>2nd right click to mark as unkown</li>
        <li>If a revealed cellis click, and it has the same amount of flags as neighours as the number of mines surrounding it, all unshown neighbours will be revealed </li>
        </ul>`,
        url: 'https://ronenboxer.github.io/minesweeper',
        client: 'John Bryce',
        publishedAt: 'September 28th, 2022',
        lables: ['Matrixes', 'DOM and model', 'Recurssion',]
    }
]


function getProjById(projId) {
    return gProjs.find(proj => proj.id === projId)
}

function getProjs() {
    return gProjs
}