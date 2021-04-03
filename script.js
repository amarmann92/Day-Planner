var day = document.getElementById("day")
var currentDay= moment().format("MMMM Do YYYY")
day.textContent= currentDay
const hour= new Date().getHours()

const textareas= $("textarea")

for (let i = 0; i < textareas.length; i++) {
    if (i+9<hour) {
        $(textareas[i]).addClass("past")
    } else if (i+9>hour) {
        $(textareas[i]).addClass("future")
    } else {
        $(textareas[i]).addClass("present")
    }
}

$(".saveBtn").on("click",function(){
    console.log($(this).prev().val())
    const timeblock= $(this).prev().attr("id")
    const textvalue= $(this).prev().val()
    localStorage.setItem(timeblock, textvalue)
})

const times= ["9am","10am","11am","12pm","1pm","2pm","3pm","4pm","5pm"]
for (let i = 0; i < times.length; i++) {
    const gettime= localStorage.getItem(times[i])
    if (gettime) {
        $(`#${times[i]}`).val(gettime)
    }
}