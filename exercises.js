/* I wrote these in JS as it's easy to run them in the console of any browser. */

const convertToLeet = (input) => input.replace(/[aA]/g, 4)
                                      .replace(/[eE]/g, 3)
                                      .replace(/[iI]/g, 1)
                                      .replace(/[oO]/g, 0)
                                      .replace(/[sS]/g, 5)
                                      .replace(/[tT]/g, 7)
                                      .replace(/[bD]/g, 5);

/* Examples */
convertToLeet("Let's have some fun.") === "L37'5 h4v3 50m3 fun."
convertToLeet("C is for cookie, that's good enough for me") === "C 15 f0r c00k13, 7h47'5 g00d 3n0ugh f0r m3"
convertToLeet("By the power of Grayskull!") === "By 7h3 p0w3r 0f Gr4y5kull!"

/* This next one isn't as pretty as I'd like, but I wrote it quickly, and it works. */
const compressRepeatingChars = (input) => {
	let output = "";
  let lastChar = null;
  let count = 0;
  for(let i = 0; i < input.length; i++) {
    const char = input[i];
    if(lastChar === char) {
      count++;
    } else {
      if(lastChar) output += lastChar + count;
      lastChar = char;
      count = 1;
    }
  }
  return lastChar ? output + lastChar + count : output;
}

/* Examples */
compressRepeatingChars("aaabbdcccccf") === "a3b2d1c5f1"
compressRepeatingChars("hhhhhqqlllllllhhhppp") === "h5q2l7h3p3"


/* I found another version of the same exercise which I did back in October 2018 */
const toLeet = (input) => input.replace(/[aA]/g, '4')
                               .replace(/[eE]/g, '3')
                               .replace(/[iI]/g, '1')
                               .replace(/[oO]/g, '0')
                               .replace(/[sS]/g, '5')
                               .replace(/[tT]/g, '7');

// Given a string like aaabbdcccccf, write a function that transform it to: a3b2d1c5f1
// Please note: aabbaa → a2b2a2 not a4b2
const countRep5 = (input) => {
    let output = '', lastInput = null, counter = '';
    for(let i = 0; i < input.length; i++) {
        if(input[i] !== lastInput) {
            lastInput = input[i];
            output += counter + lastInput;
            counter = 1;
        } else {
            counter++;
        }
    }
    return output+counter;
}

// an alternate version of the above code:
input.split(/[.]+/g).map((x)=>x[0]+x.length).join('')

