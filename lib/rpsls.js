/**
 * RULES[player][opponent] returns the result of player vs. opponent
 */
const RULES = {
    'rock': {
        'rock': 'tie',
        'paper': 'lose',
        'scissors': 'win',
        'lizard': 'win',
        'spock': 'lose'
    },
    'paper': {
        'rock': 'win',
        'paper': 'tie',
        'scissors': 'lose',
        'lizard': 'lose',
        'spock': 'win'
    },
    'scissors': {
        'rock': 'lose',
        'paper': 'win',
        'scissors': 'tie',
        'lizard': 'win',
        'spock': 'lose'
    },
    'lizard': {
        'rock': 'lose',
        'paper': 'win',
        'scissors': 'lose',
        'lizard': 'tie',
        'spock': 'win'
    },
    'spock': {
        'rock': 'win',
        'paper': 'lose',
        'scissors': 'win',
        'lizard': 'lose',
        'spock': 'tie'
    }
};

/**
 * RPS function
 * @param {*} shot 
 * @returns JSON {player: , opponent: , result: } if called with a shot, else {player: }
 * @throws `RangeError` if shot is out of range
 */
export function rps(shot) {
    const options = ['rock', 'paper', 'scissors'];