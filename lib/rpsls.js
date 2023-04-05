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