 const output = document.querySelector('p');
    
    /* STEP 1: Creating Strings */

    let step1A = 'This is "a" string.';
    output.textContent = step1A;

    let step1B = "This is 'also' a string.";
    output.textContent = step1B;
    // Note - whether you use 'single' or "double" quotes is a personal preference - try to be consistent

    /* STEP 2: Escaping Characters */
    let step2a = 'it\'s a string with an apostrophe';
    output.textContent = step2a;

    /* STEP 3: Concatenation */


    /* STEP 4: Numbers and Strings */
        let step4A = 'faranheit ' + 42 + '.';
        console.log(typeof (step4A)); // string
    // numbers can be converted to strings

    // strings can be converted to numbers, too
        
    // and back again, if we want