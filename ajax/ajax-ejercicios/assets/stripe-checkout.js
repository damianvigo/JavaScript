import STRIPE_KEYS from './stripe-keys.js';
// console.log(STRIPE_KEYS);

const d = document,
  $tacos = d.getElementById('tacos'),
  $template = d.getElementById('taco-template').content,
  /* En el template lo que me interesa es el el contenido del template, NO la referencia de la etiqueta del DOM */
  $fragment = d.createDocumentFragment(),
  fetchOptions = {
    headers: {
      Authorization: `Bearer ${STRIPE_KEYS.secret}`,
    },
  };

let products, prices; // variables de inicio vacias para luego agregarles el resultado de las peticiones fetch

Promise.all([fetch('https://api.stripe.com/v1/products', fetchOptions), fetch('https://api.stripe.com/v1/prices', fetchOptions)])
  // esperando que respondan cada uno de los endpoints y cuando responda:
  // por cada una de las respuestas creo un nuevo array.
  .then((responses) => Promise.all(responses.map((res) => res.json())))
  .then((json) => {
    console.log(json);
    products = json[0].data;
    prices = json[1].data;
    console.log(products, prices);

    prices.forEach((el) => {
      let productData = products.filter((product) => product.id === el.product);
      console.log(productData);

      $template.querySelector('.taco').setAttribute('data-price', el.id);
      $template.querySelector('img').src = productData[0].images[0];
      $template.querySelector('img').alt = productData[0].name;
      $template.querySelector('figcaption').innerHTML = `${productData[0].name}
        <br />
        ${el.unit_amount_decimal} ${el.currency}
      `

      let $clone = d.importNode($template, true);
      $fragment.appendChild($clone);
    });

    $tacos.appendChild($fragment);
  })
  .catch((err) => {
    console.log(err);
    let message = err.statusText || 'Ocurrio un erro al conectarse con la API de Stripe';
    $tacos.innerHTML = `<p>Error ${err.status}: ${message}</p>`;
  });
