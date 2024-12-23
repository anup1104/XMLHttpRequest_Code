const APIUrl = "https://api.github.com/users/hiteshchoudhary";

const xhr = new XMLHttpRequest();

xhr.onreadystatechange = ()=>{
    console.log(xhr.readyState);
    if(xhr.readyState === 4){
        const data= xhr.responseText;
        const imagesrc = (JSON.parse(data).avatar_url);
        
        
    }
}

xhr.open('GET', APIUrl);

xhr.send();

