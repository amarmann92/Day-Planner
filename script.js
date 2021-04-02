var day = document.getElementById("day")
var currentDay= moment().format("MMMM Do YYYY")
day.textContent= currentDay

$(".saveBtn").on("click",function(){
    console.log($(this).prev().val())
    const timeblock= $(this).prev().attr("id")
    const textvalue= $(this).prev().val()
    localStorage.setItem(timeblock, textvalue)
})

const times= ["9am","10am","11am","12pm","1pm","2pm","3pm","4pm","5pm"]