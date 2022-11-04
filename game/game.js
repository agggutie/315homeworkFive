var GAMES = [
   {
    gameTitle: "The Last of Us",
    gameThumbImg: "louThumbImg.jpeg",
    gameDescription: "Joel, a hardened survivor, is hired to smuggle Ellie, a 14-year-old girl, out of an oppressive quarantine zone. What starts as a small job soon becomes a brutal, heartbreaking journey, as they both must traverse the U.S. and depend on each other for survival.",
    gameRating: "M",
    gameRelease: "2013",
   },
   {
    gameTitle: "Halo Infinite",
    gameThumbImg: "haloThumbImg.jpeg",
    gameDescription: "When all hope is lost and humanity's fate hangs in the balance, the Master Chief is ready to confront the most ruthless foe he's ever faced. Step inside the armor of humanity's greatest hero to experience an epic adventure and explore the massive scale of the Halo ring.",
    gameRating: "T",
    gameRelease: "2021",
   },
   {
    gameTitle: "Slay the Spire",
    gameThumbImg: "slayThumbImg.jpeg",
    gameDescription: "Slay the Spire is a game in which you climb The Spire, ascending its floors through three acts (four acts if you collect the keys), encountering many enemies, bosses, and events along the way. The paths through each act all lead to a final floor where a challenging boss encounter awaits.",
    gameRating: "PEGI 7+",
    gameRelease: "2017",
   },
   {
    gameTitle: "Dead by Daylight",
    gameThumbImg: "dbdThumbImg.jpeg",
    gameDescription: "Dead by Daylight is a multiplayer (4vs1) horror game where one player takes on the role of the savage Killer, and the other four players play as Survivors, trying to escape the Killer and avoid being caught, tortured and killed. Survivors play in third-person and have the advantage of better situational awareness.",
    gameRating: "M",
    gameRelease: "2016",
   },
   {
    gameTitle: "Batman Arkham Knight",
    gameThumbImg: "batmanThumbImg.jpeg",
    gameDescription: "Arkham Knight's main story follows Scarecrow, the Arkham Knight, and Deathstroke, who have made an alliance on Halloween night, and plan to drown Gotham City in fear toxin and unmask Batman.",
    gameRating: "M",
    gameRelease: "2015",
   },
   {
    gameTitle: "Pokemon Black and White",
    gameThumbImg: "pokemonThumbImg.jpeg",
    gameDescription: "The game's story features the villainous Team Plasma, a team who want to liberate Pokémon from the hardship of battles and see owning Pokémon as a form of slavery. The player also has to battle the region's Gyms to obtain the eight badges needed to challenge the Pokémon League, just like the previous generations.",
    gameRating: "E",
    gameRelease: "2010",
   },
   {
    gameTitle: "Dragon Age: Inquisition",
    gameThumbImg: "dragonThumbImg.jpeg",
    gameDescription: "The story follows a player character known as the Inquisitor on a journey to settle the civil unrest in the continent of Thedas and close a mysterious tear in the sky called the Breach, which is unleashing dangerous demons upon the world.",
    gameRating: "M",
    gameRelease: "2014",
   },
   {
    gameTitle: "As Dusk Falls",
    gameThumbImg: "adfThumbImg.jpeg",
    gameDescription: "As Dusk Falls is a narrative game that takes you through the lives of 2 families that become entangled when a robbery goes wrong. ",
    gameRating: "M",
    gameRelease: "2022",
   },
   {
    gameTitle: "Trek to Yomi",
    gameThumbImg: "ttyThumbImg.jpeg",
    gameDescription: "Based in Japan and set in the Edo period, the game follows a young warrior named Hiroki who goes on a journey to confront the people responsible for the destruction of his village.",
    gameRating: "M",
    gameRelease: "2022",
   },
   {
    gameTitle: "Scorn",
    gameThumbImg: "scornThumbImg.jpeg",
    gameDescription: "Scorn is an atmospheric first-person horror adventure game set in a nightmarish universe of odd forms and somber tapestry.",
    gameRating: "M",
    gameRelease: "2022",
   },
   
];

function loadData(){
    $.each(GAMES, function(index, game){
        $("#app").append(`
        <div class="container">
        <div id="${index}" class="game-holder">
        <h4>${game.gameTitle}</h4>

        <div class="game-image">
            <img src="images/${game.gameThumbImg}" alt="${game.gameTitle}">
        </div>
        <div class="brief-rating">
            <div class="brief-des">
                <p>${game.gameDescription}</p>
            </div>
            <div class="rating">
                <p>Rating: ${game.gameRating}</p>
            </div>
            <div class="release">
                <p>${game.gameRelease}</p>
            </div>
        </div>
    </div>
    </div>
    
    `);
    })

    // for(let i = 0; i < GAMES.length; i++){
    //     console.log(GAMES[i].gameTitle)
    // }
}

function gameListeners (){

}

$(document).ready(function(){
    loadData();
});