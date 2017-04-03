function makeStory() {
    // get form values (2 points)
    var adjective1 = document.getElementById('adjective1').value;
    var noun1 = document.getElementById('noun1').value;
    var adjective2 = document.getElementById('adjective2').value;
    var pluralnoun1 = document.getElementById('pluralnoun1').value;
    var pluralnoun2 = document.getElementById('pluralnoun2').value;
    var pluralnoun3 = document.getElementById('pluralnoun3').value;
    var singularnoun1 = document.getElementById('singularnoun1').value;
    var singularnoun2 = document.getElementById('singularnoun2').value;
    var pluralnoun4 = document.getElementById('pluralnoun4').value;
    var verb1 = document.getElementById('verb1').value;
    var singularnoun3 = document.getElementById('singularnoun3').value;



    // Set title of story. Use at least one form value in the title. (2 points)
     name = "Ain't No Fun";


    // Build story. you can add as many paragraphs as you like. (3 points)
     paragraph1 = "Guess who back in the " + adjective1 + " house. With a fat " + noun1 + " for your " + adjective2 + " mouth. " + pluralnoun1 + " recognize, " + pluralnoun2 + " do too. Cause when " + pluralnoun3 + " get skinless and pull a vodoo.  What you gon do? You really don't know.  So I advise you not to trust that " + singularnoun1 + ". Silly of me to fall in love with a " + singularnoun2 + ". Knowing too well, I'm too caught up with my grip. Now as the sun roates and my game grows bigger.  How many " + pluralnoun4 + " wanna " + verb1 + " this " + singularnoun3 + " named Snoop.";


    // Display story by putting title & paragraphs into appropriate divs. (3 points)
document.getElementById('one').innerHTML = paragraph1;
document.getElementById('title').innerHTML = name;
}
