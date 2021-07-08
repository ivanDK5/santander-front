const $forms = document.querySelectorAll(".signup-form");
const senEmail= (e)=>{
    console.log(e);
    e.preventDefault();
    const email= e.tarjet.querySelector("input").value;
    getTemplate()
    .then((response)=>{
        console.log(response)
    })
    .catch((error) => {
        console.log(error, "error al obtener el templete");
      })
}

const getTemplate=()=>{
    return fetch("./template.html")
    .then((response)=> response.text());
}
for(let i =0;i<$forms.lenght;i++){
   
    $forms[i].addEventListener("submit",sendEmail);
  
 
}