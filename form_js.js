// var classification = {

//     Freshman :['MATH 116 : Pre-Calculus Math I','CIS 105 : Principles of Computing ', 'Math 213: Calculus I'],
//     Sphomore  :['MAIH 251: Pre-Calculus Math II','CIS 121: Computer Science 1  ', 'ECON241: Principles of Macroeconomics'],
//     Jnior  :['ACCT 408 Internal Auditing','CIS 121: Computer Science 1  ', 'ENGL 222/MODL 222 World Literature'],
//     Senior  :['MAIH 251: Pre-Calculus Math II','CCYBR 291 Research  ', 'IDES 240: Computer-Aided Design for Designers '],
// }

// var main = document.getElementsById('main_menu');
// var sub  = document.getElementsById('sub_menu');

// main.addEventListener('change',function(){

//     if (classification.Freshman == 'Freshman'){


//     }


// })



function classification(that) 
{
    if (that.value == "Fresh") 
    {
        document.getElementById("Fresh_doc").style.display = "block";
    }
    else
    {
        document.getElementById("Fresh_doc").style.display = "none";
    }
    if (that.value == "Sphomore")
    {
        document.getElementById("Sphomore_doc").style.display = "block";
    }
    else
    {
        document.getElementById("Sphomore_doc").style.display = "none";
    }
    if (that.value == "Jnior")
    {
        document.getElementById("Jnior_doc").style.display = "block";
    }
    else
    {
        document.getElementById("Jnior_doc").style.display = "none";
    }
    if (that.value == "Senior")
    {
        document.getElementById("Senior_doc").style.display = "block";
    }
    else
    {
        document.getElementById("Senior_doc").style.display = "none";
    }
}
