// bai1
function allLongestStrings() {
    let arr = ["BINH", "HUNG", "PHUOC","CAO", "KHANH"];
    let newArr=[];
    for (let i = 0 ; i < arr.length ; i++) {
        if(arr[i].split("").length > 4) {
            newArr.push(arr[i]);
        }
    }
    console.log(newArr);
}
allLongestStrings();
// bai 2
function alternatingSums() {
    let inPut = [60, 40, 55, 75, 64];
    let sum1 = 0;
    let sum2 = 0;
    for (let i = 0; i < inPut.length ; i++){
        if(i % 2 == 0) {
            sum2 += inPut[i];
        }
        else {
            sum1 += inPut[i];
        }
    }
    console.log(sum2,sum1);
}
alternatingSums();
// bai3
function randomColor() {
    let color = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];
    let input = document.querySelector(".text");
    const random1 =color[Math.floor((Math.random() * color.length))];
    const random2 =color[Math.floor((Math.random() * color.length))];
    const random3 =color[Math.floor((Math.random() * color.length))];
    const random4 =color[Math.floor((Math.random() * color.length))];
    const random5 =color[Math.floor((Math.random() * color.length))];
    const random6 =color[Math.floor((Math.random() * color.length))];
    input.innerHTML =`#`+ random1 + random2 + random3 + random4 + random5 + random6;
    document.body.style.background = `#${random1}${random2}${random3}${random4}${random5}${random6}`;
}