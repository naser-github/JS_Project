'use strict';

const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
      [
        'Neuer',
        'Pavard',
        'Martinez',
        'Alaba',
        'Davies',
        'Kimmich',
        'Goretzka',
        'Coman',
        'Muller',
        'Gnarby',
        'Lewandowski',
      ],
      [
        'Burki',
        'Schulz',
        'Hummels',
        'Akanji',
        'Hakimi',
        'Weigl',
        'Witsel',
        'Hazard',
        'Brandt',
        'Sancho',
        'Gotze',
      ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
      team1: 1.33,
      x: 3.25,
      team2: 6.5,
    },

    callPlayer(...num){
      allPlayers.length;

      allPlayers[num] && console.log(allPlayers[num]);
      console.log(allPlayers[num], game.score.length);
    }
  
  };

//1
const [team_a, team_b] = game.players;

//2
const [gk_a, ...fieldPlayers_a] = game.players[0];
const [gk_b, ...fieldPlayers_b] = game.players[1];

//3
const [...allPlayers] = [...team_a, ...team_b];

//4
team_a.push('sub_1','sub_2','sub_3');
allPlayers.push('sub_1','sub_2','sub_3');
//5

const {team1, x:draw, team2} = game.odds;

game.callPlayer(21);
