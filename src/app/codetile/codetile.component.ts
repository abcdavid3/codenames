import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-codetile',
  templateUrl: './codetile.component.html',
  styleUrls: ['./codetile.component.scss']
})
export class CodetileComponent implements OnInit {

  tile = {
    team: "",
    word: "",
    selected: false
  }

  gameCardTitles = []
  gameCards = []
  wordList = [
    "africa",
    "agent",
    "air",
    "alien",
    "amazon",
    "angel",
    "antarctica",
    "apple",
    "arm",
    "back",
    "band",
    "bank",
    "bark",
    "beach",
    "belt",
    "berlin",
    "berry",
    "board",
    "bond",
    "boom",
    "bow",
    "box",
    "bug",
    "canada",
    "capital",
    "cell",
    "center",
    "china",
    "chocolate",
    "circle",
    "club",
    "compound",
    "copper",
    "crash",
    "cricket",
    "cross",
    "death",
    "dice",
    "dinosaur",
    "doctor",
    "dog",
    "dress",
    "dwarf",
    "eagle",
    "egypt",
    "engine",
    "england",
    "europe",
    "eye",
    "fair",
    "fall",
    "fan",
    "field",
    "file",
    "film",
    "fish",
    "flute",
    "fly",
    "forest",
    "fork",
    "france",
    "gas",
    "ghost",
    "giant",
    "glass",
    "glove",
    "gold",
    "grass",
    "greece",
    "green",
    "ham",
    "head",
    "himalaya",
    "hole",
    "hood",
    "hook",
    "human",
    "horseshoe",
    "hospital",
    "hotel",
    "ice",
    "ice cream",
    "india",
    "iron",
    "ivory",
    "jam",
    "jet",
    "jupiter",
    "kangaroo",
    "ketchup",
    "kid",
    "king",
    "kiwi",
    "knife",
    "knight",
    "lab",
    "lap",
    "laser",
    "lawyer",
    "lead",
    "lemon",
    "limousine",
    "leadlock",
    "log",
    "mammoth",
    "maple",
    "march",
    "mass",
    "mercury",
    "millionaire",
    "model",
    "mole",
    "moscow",
    "mouth",
    "mug",
    "needle",
    "net",
    "new york",
    "night",
    "note",
    "novel",
    "nurse",
    "nut",
    "oil",
    "olive",
    "olympus",
    "opera",
    "orange",
    "paper",
    "park",
    "part",
    "paste",
    "phoenix",
    "piano",
    "telescope",
    "teacher",
    "switch",
    "swing",
    "sub",
    "stick",
    "staff",
    "stadium",
    "sprint",
    "spike",
    "snowman",
    "slip",
    "shot",
    "shadow",
    "server",
    "ruler",
    "row",
    "rose",
    "root",
    "rome",
    "rock",
    "robot",
    "robin",
    "revolution",
    "rat",
    "racket",
    "queen",
    "press",
    "port",
    "pilot",
    "time",
    "tooth",
    "tower",
    "truck",
    "triangle",
    "trip",
    "turkey",
    "undertaker",
    "unicorn",
    "vacuum",
    "van",
    "wake",
    "wall",
    "war",
    "washer",
    "washington",
    "water",
    "wave",
    "well",
    "whale",
    "whip",
    "worm",
    "yard",
  ]
  constructor() { }

  ngOnInit(): void {
    this.shuffleArray(this.wordList)
  }
  shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    console.log(array)
    for (let i = 0; i < 30; i++) {
    this.gameCardTitles.push(array[i])
    }
    console.log(this.gameCardTitles)
    this.createCards(this.gameCardTitles);
}
  getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}
  createCards(words) {
    var redTeam = 8;
    var blueTeam = 8;
    var blackTeam = 1;
    for (let i = 0; i < words.length; i++) {
      this.gameCards[i] = {
        team: "",
        word: words[i],
        selected: false
      }
        var number = this.getRandomInt(0, 4);
        if (number == 0 && redTeam > 0) {
          redTeam = redTeam - 1;
          this.gameCards[i].team = "red";
        } else if (number == 1 && blueTeam > 0) {
          blueTeam = blueTeam - 1;
          this.gameCards[i].team = "blue";
        } else if (number == 1 && blackTeam > 0) {
          blackTeam = blackTeam - 1;
          this.gameCards[i].team = "black";
        } else {
          this.gameCards[i].team = "neutral";
        } 
    }
    console.log(this.gameCards);
}
}