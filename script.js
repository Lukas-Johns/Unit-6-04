let harold = 0
let jesse = 0
let kyle = 0
let matt = 0
/* Above are the different variables of the program. harold is representing a, jesse is representing b, kyle is representing h, and matt is representing the area. Below is a button that connects the button to the main function*/
document.getElementById('press').addEventListener('click', myInput)
/* Below is a function that first interprets the values for each variable in lines 8-14. parseInts help the variables function as numbers in an equation. Then it uses the variables in a formula to find an area for the trapezoid in line 15. Finally line 16 sends out an alert to sho the user the value of area */
function myInput () {
  harold = document.getElementById('value-a').value
  harold = parseInt(harold)
  jesse = document.getElementById('value-b').value
  jesse = parseInt(jesse)
  kyle = document.getElementById('value-c').value
  kyle = parseInt(kyle)
  matt = (((harold + jesse) / 2) * kyle)
  alert(matt)
}
