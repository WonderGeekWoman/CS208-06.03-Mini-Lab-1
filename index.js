function drawTriangle(triangleSize) {
    for (let i = 1; i <= triangleSize; i++) {
        let stars = "";
        for (let j = 0; j < i; j++) {
            stars += "*";
        } 
        console.log(stars);
    }
}
export default drawTriangle;