


const positions = ['downward dog', '3-legged dog', 'child\'s pose', 'puppy pose', 'mountain pose', 'crane pose',
 'low cobra', 'high cobra', 'warrior 1', 'warrior 2', 'warrior 3', 'forward fold', 'wide-leg forward fold',
 'low ninja', 'exalted warrior', 'cat pose', 'cow pose', 'pyramid', 'godess pose', 'pigeon pose'];

const durations = [10, 20, 30, 40, 50, 60];

const repetitions = [1, 2, 3, 4, 5];


const yoga_exercise = (p, d, r) => {
    return {
        _position: positions[p],
        _duration: durations[d],
        _repetition: repetitions[r],
        getPosition() {
            return this._position;
        }, 
        getDuration() {
            return this._duration;
        }, 
        getRepetition() {
            return this._repetition;
        },
        returnString() {
            return `Perform ${this.getRepetition()} rep(s) of ${this.getPosition()} with a ${this.getDuration()}sec hold for each rep.`
        }
    }
}

/*
    Generates one randomized yoga exercise and returns it.
    
*/
function generate(){
    let p = Math.floor(Math.random() * positions.length);
    let d = Math.floor(Math.random() * durations.length);
    let r = Math.floor(Math.random() * repetitions.length);
    let exercise = yoga_exercise(p, d, r)
    return exercise
 }

// testing
// console.log(generate().returnString());


/*
    Allows for a variable number of random yoga exerises to be printed to the console.
*/

function generate_x_exercises(x){
    let exercises = [];
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
        if(i === 0)
            exercises.push(generate());
        else{
            let next = generate();
            if(next.getPosition() === exercises[i-1].getPosition())
            {
                i--;
                continue;
            }
            else
            {
                exercises.push(next);
            }
                
        }
    }
    return exercises;

}

// testing
// let count = 1;
// for (x of generate_x_exercises(20))
//     {
//         console.log(count + '. ' + x.returnString());
//         count++;
//     }


function generate_randX_exercises(){
    return generate_x_exercises(Math.floor(Math.random() * 99) + 1);
}

// testing
let count = 1;
for (x of generate_randX_exercises())
    {
        console.log(count + '. ' + x.returnString());
        count++;
    }