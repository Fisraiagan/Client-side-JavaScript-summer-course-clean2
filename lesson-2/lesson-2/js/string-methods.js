 let output = document.querySelector('p');
        
        /* STEP 1: String Length */
    let step1 = 'this is a string';
    console.log('The length of the string is ' + step1.length);
    output.textContent = 'The length of the string is ' + step1.length;
        /* STEP 2: Retrieving a Specific String Character */
        // Note - the first character of a string is at index 0, not 1
        // Note - if you try to retrieve a character at an index that doesn't exist, you get undefined
        let step2 =  'Boris Diaw';
        let firstLetter = step2[0];
        output.textContent = 'The first letter of the string is ' + firstLetter;
        
        
        /* STEP 3: Extracting Part of a String */
        // Note - the first character of a string is at index 0, not 1
        // Note - if the substring is not found within the string, indexOf() returns -1
        let step3 = step2.indexOf('Dia');


        let step3B = step2.slice(6, 9);
        output.textContent = 'The substring is ' + step3B;
        // Note - if you don't specify where to end the slice, the method returns the rest of the string

        /* STEP 4: Changing Case */
        let step4 = 'JavaScript';
        let step4A = step4.toUpperCase();
        output.textContent = 'The string in uppercase is ' + step4A;
        let step4B = step4.toLowerCase();
        output.textContent = 'The string in lowercase is ' + step4B;

        /* STEP 5: Updating Parts of a String */
        let step5 = 'Barrie ON';
        let step5A = step5.replace('ON', 'Ontario');
        output.textContent = 'The updated string is ' + step5A;