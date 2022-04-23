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

function main_menu(that) 
{
    if (that.value == "Freshmen") 
    {
        document.getElementById("adc").style.display = "block";
    }
    else
    {
        document.getElementById("adc").style.display = "none";
    }
    if (that.value == "pan")
    {
        document.getElementById("pc").style.display = "block";
    }
    else
    {
        document.getElementById("pc").style.display = "none";
    }
    if (that.value == "pass")
    {
        document.getElementById("ps").style.display = "block";
    }
    else
    {
        document.getElementById("ps").style.display = "none";
    }
}
