function reversedChars (char1, char2, char3){
let asStr = (char1+char2+char3).toString()
let asStrRev = asStr.replace(`char3`,`char1`)
    console.log(asStrRev);
}
reversedChars('A','B','C');
//reversedChars('1','L','&');