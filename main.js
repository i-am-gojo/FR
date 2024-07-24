camera=document.getElementById("camera")
Webcam.set({
    width:350,
    height:300,
    image_format:'jpeg',
    jpeg_quality:100
});
Webcam.attach('#camera')
function selfie(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="si" src="'+data_uri+'">'
    })
}
console.log(ml5.version)
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/ceRWXMa_-/model.json",modelLoaded)
function modelLoaded(){
    console.log("model started loading")
}

function check(){
    img=document.getElementById("si")
    classifier.classify(img,gotResult)
}



function gotResult(error,result){
    if(error){
        console.error(error)
    }
    else{
        console.log(result)
        document.getElementById("ron").innerHTML="This is "+result[0].label;
        document.getElementById("roa").innerHTML=(result[0].confidence.toFixed(3))*100+"%"
        var synt=window.speechSynthesis
    speak_data="this is "+result[0].label
    var utterthis=new SpeechSynthesisUtterance(speak_data)
    synt.speak(utterthis)
}
}

    