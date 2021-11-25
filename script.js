document.addEventListener('DOMContentLoaded', () => {

    //card options
    const cardArray = [
        {
            name: "aquaman",
            img: 'images/aquaman.png'
        },
        {
            name: "aquaman",
            img: 'images/aquaman.png'
        },
        {
            name: "batman",
            img: 'images/batman.png'
        },
        {
            name: "batman",
            img: 'images/batman.png'
        },
        {
            name: "cap",
            img: 'images/cap.png'
        },
        {
            name: "cap",
            img: 'images/cap.png'
        },
        {
            name: "flash",
            img: 'images/flash.png'
        },
        {
            name: "flash",
            img: 'images/flash.png'
        },
        {
            name: "ironman",
            img: 'images/ironman.png'
        },
        {
            name: "ironman",
            img: 'images/ironman.png'
        },
        {
            name: "spiderman",
            img: 'images/spiderman.png'
        },
        {
            name: "spiderman",
            img: 'images/spiderman.png'
        },
        {
            name: "strange",
            img: 'images/strange.png'
        },
        {
            name: "strange",
            img: 'images/strange.png'
        },
        {
            name: "superman",
            img: 'images/superman.png'
        },
        {
            name: "superman",
            img: 'images/superman.png'
        },
        {
            name: "widow",
            img: 'images/widow.png'
        },
        {
            name: "widow",
            img: 'images/widow.png'
        },
        {
            name: "wonder",
            img: 'images/wonder.png'
        },
        {
            name: "wonder",
            img: 'images/wonder.png'
        },
    ]

    cardArray.sort(() => 0.5 - Math.random());


    const grid = document.querySelector(".grid");
    const resultDisplay = document.querySelector('#result');
    var cardsChosen = [];
    var cardsChosenId = [];
    var cardsWon = [];

    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            var card = document.createElement('img');
            card.setAttribute('src', 'images/cardback.png');
            card.setAttribute('data-id', i);
            card.addEventListener('click', flipCard);
            grid.appendChild(card);
        }
    }

    //check for matches
    function checkForMatch() {
        var cards = document.querySelectorAll('img');
        const optionOneId = cardsChosenId[0];
        const optionTwoId = cardsChosenId[1];
        if (cardsChosen[0] === cardsChosen[1]) {
            alert("Match found!")
            cards[optionOneId].setAttribute('src', 'images/white.png');
            cards[optionTwoId].setAttribute('src', 'images/white.png');
            cardsWon.push(cardsChosen)
        } else {
            cards[optionOneId].setAttribute('src', 'images/cardback.png');
            cards[optionTwoId].setAttribute('src', 'images/cardback.png');
            alert("Sorry, Try again!")
        }
        cardsChosen = [];
        cardsChosenId = [];
        resultDisplay.textContent = cardsWon.length;
        if (cardsWon.length === cardArray / 2) {
            resultDisplay.textContent = "Congratulations, you found em all!";
        }
    }


    //flip card
    function flipCard() {
        var cardId = this.getAttribute('data-id');
        cardsChosen.push(cardArray[cardId].name);
        cardsChosenId.push(cardId);
        this.setAttribute('src', cardArray[cardId].img);
        if (cardsChosen.length === 2) {
            setTimeout(checkForMatch, 500);
        }
    }


    createBoard();



})