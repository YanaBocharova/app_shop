const axios = require('axios');
import { environment } from '../../environment/environment';

document.addEventListener("DOMContentLoaded",async function(){

    console.log('hello detail');
    console.log(axios);
    let srch = localStorage.getItem('objName');   
    console.log(srch);

    await axios.get(environment.API_URL + '/products/'+srch).then((res: any) => {

    try {

        const  srchData = res;
        const  srchProd = srchData['data'];
        console.log(srchProd);
        let block = document.querySelector('#ProdSelected');
        block.innerHTML="";
        let div = document.createElement('div');
        div.setAttribute('class','card');
        div.style.margin="3%";
        div.style.width="18rem";

          let img = document.createElement('img');
              img.src=srchProd['imagePath'];
              img.setAttribute('class','card-img-top');
          let div1 = document.createElement('div');
          div1.setAttribute('class','card-body');

          div.appendChild(img);
          div.appendChild(div1);

          let h5 = document.createElement('h5');
          h5.setAttribute('class','card-title');
          h5.innerText=srchProd["nameProduct"];
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

          detailBtn.setAttribute('id',`${srchProd['nameProduct']}`);
          detailBtn.setAttribute('name','BtnDetails');
          detailBtn.setAttribute('type','button');
          detailBtn.setAttribute('class','btn btn-primary');
          detailBtn.innerText="Details";
          detailBtn.style.background="#FFC107";

          divBtnStyle.appendChild(detailBtn);
          price.innerText=`${srchProd['price']}`;
          price.setAttribute('class','btn btn-primary');
          price.style.background="#FFC107";
          divBtnStyle.appendChild(price);
          block.appendChild(div);

    } catch (err) {

        console.log('ERROR', err);
    }
});
});