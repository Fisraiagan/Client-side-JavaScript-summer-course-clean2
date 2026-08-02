/* STEP 1: Number types (integer, float, and double)
        //@ts-nocheckdeclare and initialize an integer and a float, then in the console, reveal the number type with typeof(varName) 
        */
        let para = document.querySelector('p');
        // Note - there are also different number systems: binary, octal, and hexadecimal

            let myInt =10;
            let myFloat = 3.14;
            let typeTest = console.log(typeof myInt); // number
            typeTest = console.log(typeof myFloat); // number
            let binNum = 0b1010; // binary for 10
            console.log('binary number'+ typeof binNum); // number
            let octNum = 0o12; // octal for 10
            console.log('octal number'+ typeof octNum); // number
            let hexNum = 0xA; // hexadecimal for 10
            console.log('hexadecimal number'+ typeof hexNum); // number

        /* STEP 2: Arithmetic operators
        + (addition), - (subtraction), * (multiplication), / (division), % (remainder or modulo), ** (exponent) */
               let step2A= 5 % 3;
               para.textContent = 'The remainder of 5 divided by 3 is ' + step2A;
                console.log('The remainder of 5 divided by 3 is ' + step2A); // 2
        // Try declaring and initializing a couple of variables as numbers


        /* OR… num1 * num2 / 8 + 2 - 0.5; */

        /* Keep in mind operator precedence, just like you were taught in math class (/, *, +, -)
        num1 + num2 * 5 - 25 ... is not 575 ... it is 215 */
        
        /* If you want to avoid this precedence, use parenthesis
        (num1 + num2) * 5 - 25 */
            let step2B = (10 + 5 )* (2 - 8); // -90
            para.textContent = 'The result of the expression is ' + step2B;
        /* STEP 3: Increment and decrement operators
        ++ and -- are mostly found inside loops to move a counter variable to the next value when needed, either up or down. */
            //Postfix increment
            let num = 5;
            let num2 = num++; // num2 is 5, then num becomes 6
            console.log('num2 is ' + num2);
            console.log('num is ' + num);
            // Prefix increment
            let num3 = ++num; // num becomes 7, then num3 is 7
            console.log('num3 is ' + num3);
            console.log('num is ' + num);


        // Note 1 - you cannot increment/decrement a number directly
        // Note 2 - typing num++ or num-- in the console will output the number before incrementing or decrmenting - try ++num or --num, instead

        /* STEP 4: Assignment Operators
        = (assignment), += (addition assignment), -= (subtraction assignment), *= (multiplication assignment), /= (division assignment) */
            let num4 = 10;
            num4 /= 2
            console.log('division assignment: ' + num4 ); // 5
            let num5 = 10;
            num5 += 5
            console.log('addition assignment: ' +num5); // 15);

        /* STEP 5: Comparison Operators
        ===	(strict equality), !==	(strict-non-equality), == (equality), < (less than), > (greater than), <= (less than or equal to), >=	(greater than or equal to) */

