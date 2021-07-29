const axios = require('axios');
import { environment } from '../environment/environment';

document.addEventListener('DOMContentLoaded',async function(){

    console.log('hello axios');
    await axios.get(environment.API_URL + '/products').then((res: any) => {
    try {
        const dataProduct =  res;
        const products = dataProduct['data'];
        let block = document.querySelector('#divCrds');
        block.innerHTML='';

        for(let i =0 ;i<products.length;i++){
        let div = document.createElement('div');
        div.setAttribute('class','card');
        div.style.margin='3%';
        div.style.width='18rem';

          let img = document.createElement('img');
              img.src=products[i].imagePath;
              img.setAttribute('class','card-img-top');
              img.style.height='50%';
          let div1 = document.createElement('div');
          div1.setAttribute('class','card-body');
          div.appendChild(img);
          div.appendChild(div1);
          let h5 = document.createElement('h5');
          h5.setAttribute('class','card-title');
          h5.innerText=products[i].nameProduct;
          let p = document.createElement('p');
          p.setAttribute('class','card-text');
          p.innerText='Some quick example text to build on the card title and make up the bulk';

          div1.appendChild(img);
          div1.appendChild(h5);
          div1.appendChild(p);

          let divBtnStyle = document.createElement('div');
          let detailBtn = document.createElement('button');
          let price = document.createElement('button');
          let deleteBtn = document.createElement('button');

          deleteBtn.setAttribute('class','btn-style');
          divBtnStyle.setAttribute('class','btn-style');
          div1.appendChild(divBtnStyle);
          div1.appendChild(deleteBtn);

          deleteBtn.setAttribute('id',String(products[i].id));
          deleteBtn.setAttribute('name','BtnDelete');
          deleteBtn.setAttribute('type','button');
          deleteBtn.setAttribute('class','btn btn-primary');
          deleteBtn.innerText='Remove product';
          deleteBtn.style.background='yellow';
          deleteBtn.style.width='69%';

          detailBtn.setAttribute('id',String(products[i].nameProduct));
          detailBtn.setAttribute('name','BtnDetails');
          detailBtn.setAttribute('type','button');
          detailBtn.setAttribute('class','btn btn-primary');
          detailBtn.innerText='Details';
          detailBtn.style.background='#FFC107';
          divBtnStyle.appendChild(detailBtn);

          price.innerText=`${products[i].price}`;
          price.setAttribute('class','btn btn-primary');
          price.style.background='#FFC107';

          divBtnStyle.appendChild(price);
          block.appendChild(div);
        }

          PageDetails();
          Remove();

    } catch (err) {

        console.log('ERROR', err);
    }

});


});

function PageDetails() {
        let btns=document.getElementsByName('BtnDetails');
        console.log(btns);
            btns.forEach(btn=>{
                btn.onclick = async function(ev) {
                let prodId=String(btn.getAttribute('id'));          
                localStorage.setItem('objName',prodId);
                window.location.replace('http://localhost:9000/detail.html');
            }
      });
}

function Remove() {

    let btnsDelete=document.getElementsByName('BtnDelete');
    console.log('nnn');
    console.log(btnsDelete);
    console.log('nnn');
    btnsDelete.forEach(btn=> btn.onclick  = async function(ev){

    console.log(btn);

    let prodId=String(btn.getAttribute('id'));  
    console.log(prodId);

        await axios.delete(environment.API_URL + '/products/'+prodId).then((res: any) => {
            
        })
        window.location.replace('http://localhost:9000/index.html');
    });
}
