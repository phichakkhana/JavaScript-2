var btnMargin = 20
document.getElementById('ok').addEventListener('click', function(e){
    btnMargin += 10
    document.getElementById('no').style.marginLeft = `${btnMargin}px `
    document.getElementById('no').style.marginRight = `${btnMargin}px `
    document.getElementById('cancel').style.marginLeft = `${btnMargin}px`
    document.getElementById('cancel').style.marginRight = `${btnMargin}px`
    
}
)
document.getElementById('cancel').addEventListener('click', function(e){
    alert('cancel is clicked')
    
}
)

var text = ['ok','วิชานี้','ง่าย','สำหรับฉัน']
var count = 0
var changeText = document.getElementById('no')
changeText.addEventListener('dblclick', function (e) {
    if (count > 3) {
        count = 0
    }
    document.getElementById('ok').innerHTML = text[count]
    count++
}
)

function showCoords(event) {
    var x = event.clientX;
    var y = event.clientY;
    var coor = "X coords: " + x + ", Y coords: " + y;

    console.log(coor)
  }
function clearCoor() {
    var coor = "X coords: " + 0 + ", Y coords: " + 0;
  }