/* STEP 1: Declare variables
		Use a-z, 0-9, A-Z and underscores, avoiding reserved names
		All program variables are generally declared at the beginning */
        let myName;
        let myCourse;
        let string;
        let para = document.querySelector('p');

		/* STEP 2: Initialize variables
		Don't confuse a variable with no value with one that doesn't exist at all */
        myName = 'Chris Hagan';
        myCourse = 'COMP1073';
        string = 'My name is ' + myName + ' and I am taking ' + myCourse + '.';

		/* STEP 3: Updating variables
		Once a variable has been declared, this can be done any time */
        myName ='Francis Hagan';
        myCourse = 'client side JavaScript';
        string =myName + ' ' +myCourse;
        para.textContent = string;
		// STEP 4: Variable types (use typeof in the console)
		// Numbers
        let numCourses = 5;
        para.textContent = 'I am taking ' + numCourses + ' courses this term.';
		console.log(typeof numCourses); // number
        // Strings (use '' or "")
        let stringCourse = 'client side JavaScript';
        para.textContent = stringCourse;
		// Booleans
        let isFun = true;
        let compare = 5 > 3;
        para.textContent = 'Is client side JavaScript fun? ' + isFun;
        console.log(typeof compare); // boolean
		// Arrays
		let myArrays = ['HTML', 'CSS', 'JavaScript'];
        para.textContent = 'I am learning ' + myArrays[2];
		// Objects
        let myObject = {fName: 'Chris', lName: 'Hagan', course: 'COMP1073'};
        console.log(myObject.fName); // Chris
        

		// STEP 5: Typing (JavaScript is a loosely-typed language)
