


const positions = ['downward dog', '3-legged dog', 'child\'s pose', 'puppy pose', 'mountain pose', 'crane pose',
 'low cobra', 'high cobra', 'warrior 1', 'warrior 2', 'warrior 3', 'forward fold', 'wide-leg forward fold',
 'low ninja', 'exalted warrior', 'cat pose', 'cow pose', 'pyramid', 'godess pose', 'pigeon pose'];

const durations = [10, 20, 30, 40, 50, 60];

const repetitions = [1, 2, 3, 4, 5];


function generate(){
    let p = positions[Math.floor(Math.random() * positions.length)];
    let d = durations[Math.floor(Math.random() * durations.length)];
    let r = repetitions[Math.floor(Math.random() * repetitions.length)];

    console.log(`Perform ${r} rep(s) of ${p} with a ${d}sec hold for each rep.`);

 }


generate();