function eje2() {
var dado1, dado2, result, array = [0,0,0,0,0,0,0,0,0,0,0]

for(i=0; i<36000; i++)
{
    dado1 = parseInt(Math.random()*7)
    dado2 = parseInt(Math.random()*7)
result = dado1 + dado2
array[result-2]++
}
for(r=2; r<=12; r++)
{
    console.log(r+":"+array[r-2])
}
}