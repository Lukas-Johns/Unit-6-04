let harold = 0
let jesse = 0
let kyle = 0
let matt = 0
document.getElementById('press').addEventListener('click', myInput)
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
