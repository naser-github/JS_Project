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
      team1: 3,
      x: 12,
      team2: 3,
    },
  };

  //1
  for(const [i, scorer] of game.scored.entries() ){
      console.log(`goal ${i}, scored by  ${scorer}`);
  }

  //2
  let sum=0;
  for (const avg of Object.values(game.odds)){
      //console.log(avg);
      sum+=avg;
  }
  console.log(sum/Object.values(game.odds).length);

  //3
  for (const [team, odd] of Object.entries(game.odds) ){
    console.log(`odd of victory ${game.team}: ${odd}`);
  }

  //bonus
  const score=[];
  for(const [key,scorer] of game.scored.entries()){
    if (score[scorer])
      score[scorer]++;
    else
      score[scorer]=1;
  }

  console.log(score);
    
