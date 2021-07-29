const axios = require('axios');
import { environment } from '../../environment/environment';

(async function () {

    
    let confirmBtn=(<HTMLInputElement>document.querySelector('#confirmBtn'));
    console.log(confirmBtn);
    confirmBtn.onclick  = async  ()=>{

        let input=(<HTMLInputElement>document.querySelector('#inputSearch')).value;
        if(input !== null){
        await axios.get(environment.API_URL + '/products/'+input).then((res: any) => {
            
            try {
        
                const item = res;
                const searchElement = item['data'];
                if(searchElement['nameProduct'] !== undefined){
                console.log(res);
                let block = document.querySelector("#divCrds");
                block.innerHTML="";
                
                let div = document.createElement('div');
                div.setAttribute('class','card');
                div.style.margin="3%";
                div.style.width="18rem";
    
                  let img = document.createElement('img');
                      img.src=searchElement['imagePath'];
                      img.setAttribute('class','card-img-top');
                  let div1 = document.createElement('div');
                  div1.setAttribute('class','card-body');
    
                  div.appendChild(img);
                  div.appendChild(div1);
    
                  let h5 = document.createElement('h5');
                  h5.setAttribute('class','card-title');
                  h5.innerText=searchElement["nameProduct"];
                  let p = document.createElement('p');
                  p.setAttribute('class','card-text');
                  p.innerText="Some quick example text to build on the card title and make up the bulk o";
    
                  div1.appendChild(img);
                  div1.appendChild(h5);
                  div1.appendChild(p);
    
                  let divBtnStyle = document.createElement('div');
                  let detailBtn = document.createElement('button');
                  let price = document.createElement('button');
    
                  divBtnStyle.setAttribute('class','btn-style');
                  div1.appendChild(divBtnStyle);
    
                  detailBtn.setAttribute('id',`${searchElement["nameProduct"]}`);
                  detailBtn.setAttribute('name','BtnDetails');
                  detailBtn.setAttribute('type','button');
                  detailBtn.setAttribute('class','btn btn-primary');
                  detailBtn.innerText="Details";
                  detailBtn.style.background="blue";
    
                  divBtnStyle.appendChild(detailBtn);
    
                  price.innerText=`${searchElement["price"]}`;
                  price.setAttribute('class','btn btn-primary');
                  price.style.background="blue";
    
                  divBtnStyle.appendChild(price);
                  block.appendChild(div);
                }
                else{

                    let block = document.querySelector("#divCrds");
                    block.innerHTML='';
                    block.innerHTML='<h1>Product does not exist </h1>';
                }
    
            } catch (err) {
    
                console.log('ERROR', err);
                window.location.replace("http://127.0.0.1:9000/src/index.html");
            }

          })

       }}
         
}());