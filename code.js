var myArr=[9,7,9,0,7,8,387,123,456],i;
for(i=0;i<9;i++)
{
    if(myArr[i]%2==0)
        {
            console.log(myArr[i]);
        }
}

var trl=prompt("Em đã ăn cơm chưa?");
var myAnswer=[];
myAnswer.push(trl);
if(trl=="Yes")
{
    var a=prompt("Em có muốn ăn bánh ngọt tráng miệng không?");
    myAnswer.push(a);
    if(trl=="Yes")
    {
        var c=prompt("Vậy tôi đi mua bánh nhé?");
        myAnswer.push(c);
    }
}
else if(trl=="No")
{
    var b=prompt("Em muốn ăn cơm vơi sườn xào chua ngọt không?");
    myAnswer.push(b);
    if(trl=="Yes")
    {
        var d=prompt("Vậy để tôi nấu cho em nhé?");
        myAnswer.push(d);
    }
}
console.log(myAnswer);