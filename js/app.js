for (var varNumber = 1 ; varNumber<=100; varNumber++) {

if (varNumber% 15===0 ) 
		{document.write(" FizzBuzz ");
		}
    else if (varNumber % 3 ===0) 
		{ document.write(" Fizz ");
	}
	else if(varNumber % 5===0) 
		{document.write(" Buzz ");
	} 

else {document.write(varNumber + " ");

}
}