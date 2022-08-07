function startClassification(){
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/8u0vYrt2E/model.json', modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}

function gotResults(error, results){
if (error){
console.error(error);
} else{
    console.log(results);
    random_number_r = Math.floor(Math.random() * 255) + 1
    random_number_g = Math.floor(Math.random() * 255) + 1
    random_number_b = Math.floor(Math.random() * 255) + 1
}
}

document.getElementById("audio_name").innerHTML = "I can hear - "+ results[0].label;
document.getElementById("audio").innerHTML = "Accuracy - "+ (results[0].confidence*100).toFixed(2)+"%";
document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
document.getElementById("result_accuracy").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";


if(results[0].label == "Roar")
{
img.src = 'lion.jpg'
}else if (results[0].label == "Barking"){
    img.src = 'dog.png'
}else if(results[0].label == "Meowing"){
    img.src = 'cat.webp'
}else if(results[0].label =="Mooing"){
    img.src = 'cow.jpg'
}else {
    img.src = 'ear.png'
}


