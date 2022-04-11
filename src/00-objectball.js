function gameObject() {
   return {
   'home': {
         'teamName': 'Brooklyn Nets',
         'colors': ['Black', 'White'],
         'players': {
            'Alan Anderson': {
               number: 0,
               shoe: 16,
               points: 22,
               rebounds: 12,
               assists: 12,
               steals: 3,
               blocks: 1,
               slamDunks: 1
            },
            'Reggie Evans': {
               number: 30,
               shoe: 14,
               points: 12,
               rebounds: 12,
               assists: 12,
               steals: 12,
               blocks: 12,
               slamDunks: 7
            },
            'Brook Lopez': {
               number: 11,
               shoe: 17,
               points: 17,
               rebounds: 19,
               assists: 10,
               steals: 3,
               blocks: 1,
               slamDunks: 15
            },
            'Mason Plumlee': {
               number: 1,
               shoe: 19,
               points: 26,
               rebounds: 12,
               assists: 6,
               steals: 3,
               blocks: 8,
               slamDunks: 5
            },
            'Jason Terry': {
               number: 31,
               shoe: 15,
               points: 19,
               rebounds: 2,
               assists: 2,
               steals: 4,
               blocks: 11,
               slamDunks: 1
            }
         },
      }, 'away': {
         'teamName': 'Charolotte Hornets',
         'colors': ['Turquoise', 'Purple'],
         'players': {
            'Jeff Adrien': {
               number: 4,
               shoe: 18,
               points: 10,
               rebounds: 1,
               assists: 1,
               steals: 2,
               blocks: 7,
               slamDunks: 2
            },
            'Bismak Biyombo': {
               number: 0,
               shoe: 16,
               points: 12,
               rebounds: 4,
               assists: 7,
               steals: 7,
               blocks: 15,
               slamDunks: 10
            },
            'DeSagna Diop': {
               number: 2,
               shoe: 14,
               points: 24,
               rebounds: 12,
               assists: 12,
               steals: 4,
               blocks: 5,
               slamDunks: 5
            },
            'Ben Gordan': {
               number: 8,
               shoe: 15,
               points: 33,
               rebounds: 3,
               assists: 2,
               steals: 1,
               blocks: 1,
               slamDunks: 0
            },
            'Brendan Haywood': {
               number: 33,
               shoe: 15,
               points: 6,
               rebounds: 12,
               assists: 12,
               steals: 22,
               blocks: 5,
               slamDunks: 12
            }
         },
      }
   }
}

let game = gameObject()

function numPointsScored(playerInput) {
   let game = gameObject()
   debugger
   for (const teamKey in game) {
      const teamObj = game[teamKey]
      const playerObj = teamObj.players
      debugger
      for (const playerKey in playerObj) {
         if (playerKey === playerInput) {
            return playerObj[playerKey].points
         }
      }
   }
}

function shoeSize(playerName) {
   let game = gameObject();
   debugger
   for (const teamKey in game) {
      const teamObj = game[teamKey]
      const playerObj = teamObj.players
      debugger
      for (const playerKey in playerObj) {
         if (playerKey === playerName) {
            return playerObj[playerKey].shoe
         } 
      }
   }
}

function teamColors(team) {
   let game = gameObject();
   debugger
   for (const teamKey in game) {
      const teamObj = game[teamKey]
      const colorObj = teamObj.colors
      debugger
      if (teamKey === team)
      return colorObj
         }
}

function teamNames() {
   let game = gameObject();
   const nameArr = []
   for (const teamKey in game) {
      nameArr.push(game[teamKey]['teamName'])
   }
   return nameArr;
}


function playerNumbers(teamName) {
   let game = gameObject();
   const numbersArray = []
   for (let teamKey in game) {
      if (teamName == game[teamKey]['teamName']){
         let playersObj = game[teamKey]['players']
         for (let playerKey in playersObj) {
            numbersArray.push(playersObj[playerKey]['number'])
         }
      }
   }
   return numbersArray;
}

function playerStats(playerInput) {
   let game = gameObject();
   for (let teamKey in game) {
      debugger
      if (playerInput == game[teamKey]['players']) {
         debugger
         let player = game[teamKey]['players']
         debugger
         for (let playerKey in player) {
         }
      } 
   }
   return game[teamKey]['players'][playerKey]
}

function bigShoeRebounds(player) {
   if (shoeSize(player) > 19) {
      let rebObj = game[teamKey]['players']
      return rebObj.rebounds
   }
}

//function bigShoeRebounds() {
 //  let game = gameObject();
  // for (let teamKey in game) {
   //   const teamObj = game[teamKey]
    //  const playerObj = teamObj.players
     // for (let playerObj)
      //if (player.shoe > 19) { 
      //}  
   //}
//}

//


//function teamColors(color) {
//   let game = gameObject();
//  debugger
//   for (const teamKey in game) {
//      const teamObj = game[teamKey]
//      const colorObj = teamObj.colors
//      debugger
 //     for (const colorKey in colorObj) {
 //        debugger
 //        if (colorKey === color) {
 //           return colorObj[colors]
  //       }
   //   }
   //}
/////}