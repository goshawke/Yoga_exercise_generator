


const positions = ['downward dog', '3-legged dog', 'child\'s pose', 'puppy pose', 'mountain pose', 'crane pose',
 'low cobra', 'high cobra', 'warrior 1', 'warrior 2', 'warrior 3', 'forward fold', 'wide-leg forward fold',
 'low ninja', 'exalted warrior', 'cat pose', 'cow pose', 'pyramid', 'godess pose', 'pigeon pose'];

const durations = [10, 20, 30, 40, 50, 60];

const repetitions = [1, 2, 3, 4, 5];


/*
    Generates one randomized yoga exercise.
    Prints the exercise in the format - "Perform X rep(s) of Y with a Z sec hold for each rep."
*/
function generate(){
    let p = positions[Math.floor(Math.random() * positions.length)];
    let d = durations[Math.floor(Math.random() * durations.length)];
    let r = repetitions[Math.floor(Math.random() * repetitions.length)];

    console.log(`Perform ${r} rep(s) of ${p} with a ${d}sec hold for each rep.`);

 }

// testing
// generate();


/*
    Allows for a variable number of random yoga exerises to be printed to the console.
*/

function generate_x_exercises(x){
    if(x <= 0)
    {
        console.log("X must be at least 1 in order to generate yoga exercises. Try Again");
        return;
    }
    else if(x >= 100)
    {
        console.log("X must be less that 100. Any more than that is insane. Try Again");
        return;
    }
    for(let i = 0; i < x; i++)
    {
        generate();
    }
}

// testing
generate_x_exercises(10);