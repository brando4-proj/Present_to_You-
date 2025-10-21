const cont = document.createElement("div");
const container = document. getElementById("container");
const querybox = document.createElement("div");
const msgbox = document.createElement("div");
const p = document.createElement("p");
const p4 = document.createElement("p");
const Quote = document.createElement("p");
const hr = document.createElement("hr");
const button = document.createElement("button");
const button2 = document.createElement("button");
const button3 = document.createElement("button");
const cont2 = document.createElement("div");
const lyrics = document.createElement("div");
const audio = document.createElement("audio");
const gift = document.createElement("p");


const audiolyrics = [{time: 0, text: "SORRY SA IMAGES"}, {time: 10, text: "Music coming in..."}, {time: 15, text: "3"}, {time: 20, text: "2"}, {time: 25, text: "1"}, {time: 28, text: "Enjoy"},{time: 32, text: "So are you happy now?"}, {time: 36, text: "Finally happy now, are you?"}, {time: 41, text: "Well, I'm just the same"}, {time: 44, text: "I feel like I lose everything"}, {time: 48, text: "Everything comes and goes as they wish, even without a goodbye"}, {time: 53, text: "If this are things are, I don't want to love anyone again"}, {time: 56, text: "I'm just going to take a trip down my old memory lane"}, {time: 1*60 + 4, text: "Under the orange sun"}, {time: 1*60 + 8, text: "We Dance together where there're no shadows"}, {time: 1*60 + 11, text: "There is no promised breakup there"}, {time: 1*60 + 15, text: "See you in my memory that is beautiful"}, {time: 1*60 + 20, text: "Forever Young"}, {time: 1*60 + 21, text: "Woo"}, {time: 1*60 + 28, text: "Forever we Young"}, {time: 1*60 + 29, text: "Woo"}, {time: 1*60 + 33, text: "It is a nightmare, I don't  want to wake up forever"}, {time: 1*60 + 38, text: "Islands, yes this is an island a small island made by you and me"}, {time: 1*60 + 40, text: "Yeah, um, forever young forever is like a sandcastle"}, {time: 1*60 + 45, text: "Goodbye is like an emergency alert"}, {time: 1*60 + 46, text: "Wake up in the morning, longing for you"}, {time: 1*60 + 48, text: "I'll pass through the infinite eternity"}, {time: 1*60 + 51, text: "To see you on the island again"}, {time: 1*60 + 53, text: "As someone once said to comfort me"}, {time: 1*60 + 57, text: "It's not easy to forget even a handful of memories"}, {time: 2*60 + 1, text: "A long time has passed, but the island still holds on to me"}, {time: 2*60 + 8, text: "Under the orange sun"}, {time: 2*60 + 12, text: "We dance together where there're no shadows"}, {time: 2*60 + 16, text: "There is no promised goodbye there"}, {time: 2*60 + 20, text: "See you in my memory that is beautiful"}, {time: 2*60 + 24, text: "We pillow our heads on each other"}, {time: 2*60 + 28, text: "and talk about things that are not sad"}, {time: 2*60 + 31, text: "There is no gloomy ending there"}, {time: 2*60 + 36, text: "I'll see you in the memory forever"}, {time: 2*60 + 39, text: "Forever young"}, {time: 2*60 + 41, text: "Woo"}, {time: 2*60 + 48, text: "Forever we are young"}, {time: 2*60 + 50, text: "Woo"}, {time: 2*60 + 53, text: "It is a nightmare, I don't want to wake up forever"}, {time: 2*60 + 57, text: "."}, {time: 2*60 + 58, text: ".."}, {time: 2*60 + 59, text: "..."}, {time: 2*60 + 60, text: "...."}, {time: 3*60 + 1, text: "01"}, {time: 3*60 + 2, text: "02"}, {time: 3*60 + 3, text: "03"}, {time: 3*60 + 4, text: "04"}, {time: 3*60 + 5, text: "05"}, {time: 3*60 + 6, text: "06"}, {time: 3*60 + 7, text: "07"}, {time: 3*60 + 8, text: "08"}, {time: 3*60 + 9, text: "09"}, {time: 3*60 + 10, text: "10"}, {time: 3*60 + 11, text: "11"}, {time: 3*60 + 12, text: "12"}, {time: 3*60 + 13, text: "13"}, {time: 3*60 + 14,  text: "14"},
 {time: 3*60 + 15, text: "15"},
 {time: 3*60 + 16, text: "16"},
 {time: 3*60 + 17, text: "17"},
 {time: 3*60 + 18, text: "18"},
 {time: 3*60 + 19, text: "19"},
 {time: 3*60 + 20, text: "20"},
 {time: 3*60 + 21, text: "21"},
 {time: 3*60 + 22, text: "22"},
 {time: 3*60 + 23, text: "23"},
 {time: 3*60 + 24, text: "24"},
 {time: 3*60 + 25, text: "25"},
 {time: 3*60 + 26, text: "26"},
 {time: 3*60 + 27, text: "27"},
 {time: 3*60 + 28, text: "28"},
 {time: 3*60 + 29, text: "29"},
 {time: 3*60 + 30, text: "30"},
 {time: 3*60 + 31, text: "31"},
 {time: 3*60 + 32, text: "32"},
 {time: 3*60 + 33, text: "33"},
 {time: 3*60 + 34, text: "34"},
 {time: 3*60 + 35, text: "35"},
 {time: 3*60 + 36, text: "36"},
 {time: 3*60 + 37, text: "37"},
 {time: 3*60 + 38, text: "38"},
 {time: 3*60 + 39, text: "39"},
 {time: 3*60 + 40, text: "40"},
 {time: 3*60 + 41, text: "😊"}]


const images = [{src:"images/1.jpg"}, {src:"images/2.jpg"}, {src:"images/3.jpg"}, {src:"images/4.jpg"}, {src:"images/5.jpg"}, {src:"images/6.jpg"}, {src:"images/7.jpg"}, {src:"images/8.jpg"}, {src:"images/9.jpg"}]

const arrow = document.createElement("p");


// for the container
setTimeout(() =>{
    document.body.appendChild(cont);
    cont.appendChild(querybox);
    querybox.appendChild(p);
    querybox.appendChild(gift);
    querybox.appendChild(hr);
    querybox.appendChild(button);
    
    cont.id = "container";
    querybox.className = "querybox";
    p.innerHTML = `<h3 style="font-weight: 300; color: #fff;">DO YOU WANT THIS?</h3>`;
    p.style.fontSize = "40px";
    gift.textContent = "🎁";
    gift.style.fontSize = "90px";
    button.id = "btn";
    button.textContent = "RECEIVE";
    button.style.fontSize = "35px";
    
    
    // when RECEIVE is clicked
    
    const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
   
   querybox.remove();
   
   const question = parseInt(prompt("How Old are you today? "));
   
   if(question <= 0){
         cont.textContent = "Try inputing something! ";
         cont.style.fontSize = "100px";
     }
   
   // for loop of boxes
   for(let i = 0; i < question; i++){
     const box = document.createElement("div");
     const p2 = document.createElement("p");
     cont.append(box);
     box.append(p2);
   
     box.className = "box";
     p2.textContent = `${i + 1}`;
     
     
     
     if(i === question - 1){
         p2.id = "number";
         i.id = "present";
     } else if(i === 0){
         i.id = "start";
     }
     
     
   }
   // end of for loop
   
   
   
   // this is where the scroll behvoir starts
   const start = cont.firstElementChild;
   const present = cont.lastElementChild;
   
   present.appendChild(button2);
   present.id = "btn2";
   button2.className = "button2";
   button2.textContent = "CLICK ME!";
   present.style.borderRadius = "20px";
   present.style.border = "60px groove #8a79FF";
     start.scrollIntoView({behavior:"smooth"});
     setTimeout(() => {
         present.scrollIntoView({behavior: "smooth"});
         
     },200);
     
     // this is the end of the scroll behavoir.
     
     
     
     
     //Start for another event
   btn2.addEventListener("click", () => {
       cont.remove();
       audio.src = "Eight.mp3";
       
       audio.play();
       document.body.appendChild(cont2);
       cont2.className = "cont2";
       cont2.appendChild(arrow);
       arrow.innerHTML = `<br><p style="font-family: cursive;">Timeline</p><span style="font-size: 100px; text-align: center;">⬇️</span>`;
       
       
       
      // the second for loop 
      for(let i = 0; i < images.length; i++){
      const image = document.createElement("img");
      const p3 = document.createElement("p");
      const hr = document.createElement("hr");
      const hr2 = document.createElement("hr");
      
      let Image = images[i].src;
      
      cont2.appendChild(image);
      cont2.appendChild(p3);
      cont2.appendChild(hr);
      cont2.appendChild(hr2);
      image.src = Image;
      image.className = "img";
      p3.className = "p3";
      p3.textContent = "CASSANDRA NICOLE R. TEOXON";
      
      
      }
      
      // end of for loop
      
      cont2.appendChild(lyrics);
      lyrics.className = "lyric";
      p.innerHTML = `MUSIC BY IU, EIGHT <br> <marquee direction="right"><p style="font-size: 25px;"> Wait until the music stops </p></marquee>`;
      p.style.fontSize = "20px"
      cont2.appendChild(p);
      p.className = "p4";
      cont2.appendChild(Quote);
      Quote.innerHTML = `<br> <i>"The only limit to our realization of tomorrow will be our doubts of today," by Franklin Delano Roosevelt</i> <br>`;
      Quote.className = "qt";
      
      
      
      
      
      
      
      // start of the audiotime update
      audio.ontimeupdate = () => {
         const currentTime = audio.currentTime;
      
      let Lyric = "";
      
      // 3rd for loop of audio
      for(let i = 0; i < audiolyrics.length; i++){
       
       if(currentTime >= audiolyrics[i].time){
         Lyric = audiolyrics[i].text;
       }
         
         lyrics.textContent = Lyric;
          
      }//end of for loop 3rd
      
      
      // on pause event
     audio.onpause = () => {
      p4.innerHTML = `<h1 style="font-size: 30px;">CLICK THE HEART!</h1>`    
      button3.textContent = "💙";
      button3.className = "button3";
      button3.id = "btn3";
      cont2.appendChild(p4);
      cont2.appendChild(button3);
      cont2.appendChild(msgbox);
      msgbox.style.display = "none";
      msgbox.className = "msg";
      msgbox.innerHTML = ``;
      
    
      
      
      
      //start for another Event
   const btn3 = document.getElementById("btn3");
   
   btn3.addEventListener("click", () => {
      
      msgbox.style.display = "block";
      msgbox.innerHTML = `<h1>HAPPY ${question} BIRTHDAY DEAR CASSIE !</h1> <p style="font-size: 30px; text-align: justify;"> given the chance, hello. mau man akong masyadong masabi pero congrats ta yaon ka na sa edad na arog kaini sana kung mag-abot man an aldaw, aram kung maabot man kita jan, sana makahanap ka man ning tawong mareciprocate kang feelings mo pero for now, mas magayon kung isipon mo mun-a ang sadiri mo saka sana nasa maayos ka man na ngunyan, tama?. may the happiest days also come to you and enjoy your life, good luck to the next chapter of your life as a person and as a college student.</p>`;
      
       
   }); //end of the event   
      
          
      };// end of the on pause event
      
      
       
      }// audiotimeupdate end
      
      
      
      
      // event that scroll from top
      const start = cont2.firstChild;
      
      start.scrollIntoView({top: "-0px", behavior: "smooth"});
      // end of the scroll
      
      
     
   
      
   });
   
   
   
   
}) //end of event.

    
}, 2000);//end of container


