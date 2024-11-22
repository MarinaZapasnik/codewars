// Write a function that will take a key of X and place it in the middle of Y repeated N times.

// Extra challege (not tested): You can complete this with under 70 characters without using regex. 
// Challenge yourself to do this. It wont be best practices but it will work.

// Rules:

// If X cannot be placed in the middle, return X.

// N will always be > 0.

// SOLUTION

function middleMe(N, X, Y) {
    let createStr = '';
    let middle = N / 2;

    if (N % 2 === 1) {
        return X;
    }
    for (let i = 1; i <= middle; i++) {
        createStr = createStr + Y;
    }
    return createStr + X + createStr;
}