function charBox(edgeLength) {

    if( typeof edgeLength == 'number' && edgeLength >= 0) {

        box=[]
        for (let i=0; i<edgeLength; i++) {
            if (i==0 || i==(edgeLength-1)) {
                row = Array(edgeLength).fill('#')
            } else {
                row = ["#", ...Array(edgeLength-2).fill(""),"#"]
            }
            box.push(row)
        }
        if (box.length==0) box.push([])
        return box
    } else {
        return -1
    }
}

console.log(charBox(4))
console.log(charBox(2))
console.log(charBox(1))
console.log(charBox(0))
console.log(charBox(-11))
console.log(charBox(true))
console.log(charBox("this"))
console.log(charBox(6))