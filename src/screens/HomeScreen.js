import data from "../data.js";
const HomeScreen = {
        render: () => {
            const { abbigliamenti } = data;
            return `
            <ul class="abbigliamenti">
              ${abbigliamenti.map( 
                  (abbigliamento) => `
            <li>
                <div class="abbigliamento">
                <a href="/#/abbigliamento/${abbigliamento._id}">
                   <img src="${abbigliamento.image} alt="${abbigliameto.nome}"/>
                 </a>
                 <div class="abbigliamento-nome">
                 <a href="/#/abbigliamento/1">
                   ${abbigliamento.nome}
                 </a>
                 </div>
                 <div class="abbigliamento-marca">
                  ${abbigliamento.marca}
                 </div>
                 <div class="product-price">
                  $${abbigliamento.price}
            
               </div>
              </div>
             </li>
                
              `
           )}
            `;
        },
};
export default HomeScreen;
