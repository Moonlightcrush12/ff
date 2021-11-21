
    var img=["https://i.postimg.cc/wjMnFtMX/father.jpg" , "https://i.postimg.cc/5ymDKL83/bro.jpg",
     "https://i.postimg.cc/JnL6wtrd/sister.jpg", "https://i.postimg.cc/bw5W5zSK/mother.jpg"]

     var name1=["Anurag","Rachit", "Arushi","Rinu"] 
     var i=0
     function change(){
        i++
        if(i==4){
      i=0
        }
      document.getElementById("hello1").innerHTML=name1[i]
      document.getElementById("img1").src=img[i]
     }
    

