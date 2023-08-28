
let nameEl=document.getElementById("name");
let ageEl=document.getElementById("age");
let emailEl=document.getElementById("email");
let cityEl=document.getElementById("city");
let phoneEl=document.getElementById("phone");


let btnEl=document.getElementById("entry");

let divE=document.getElementById("enroll");




function displayResults(){

      if(nameEl.value=="" || ageEl.value=="" || emailEl.value=="" || cityEl.value=="" || phoneEl.value==""){
            window.alert("Enter all the fields");
      }
      
      else{
        
          if(isNaN(ageEl.value) || isNaN(phoneEl.value)){
                window.alert("Enter corret details")
          }
          else{
       
         let mainDiv=document.createElement("div");
         mainDiv.classList.add("enroll-container","d-flex","flex-row");
         divE.appendChild(mainDiv);
      
         let divEl=document.createElement("div");
         mainDiv.appendChild(divEl);

        
         let headEl=document.createElement("h3");
         headEl.textContent="Name: "+nameEl.value;
         headEl.classList.add("name-heading")
         divEl.appendChild(headEl);

         let para1=document.createElement("p");
         para1.textContent="Age: "+ageEl.value;
         divEl.appendChild(para1);

         let para2=document.createElement("p");
         para2.textContent="Email: "+emailEl.value;
         divEl.appendChild(para2);

         let para3=document.createElement("p");
         para3.textContent="City: "+cityEl.value;
         divEl.appendChild(para3);

         let para4=document.createElement("p");
         para4.textContent="phone: "+phoneEl.value;
         divEl.appendChild(para4);

        

         let divImg=document.createElement("div");
         divImg.classList.add("imgContainer");
         mainDiv.appendChild(divImg);

         let imgEl=document.createElement("img");

         imgEl.src="student.jpg";
         imgEl.classList.add("image");
         divImg.appendChild(imgEl);
       

         nameEl.value="";
         ageEl.value="";
         cityEl.value="";
         phoneEl.value="";
         emailEl.value="";
       }

   }

}


btnEl.addEventListener("click",function(event){
      event.preventDefault();
      //formValidation(event);
      displayResults();

});