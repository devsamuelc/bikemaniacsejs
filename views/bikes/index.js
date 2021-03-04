const layout = require('../layout');

module.exports = ({ bikes }) => {
  const renderedBikes = bikes
    .map(bike => {
      return `
        <div class="column">
          <div class="card bike-card">
            <figure>
              <img src="data:image/png;base64, ${bike.image}"/>
            </figure>
            <div class="card-content">
              <h3 class="subtitle">${bike.owner}</h3>
              <h5>${bike.locals}</h5>
            </div>
            <footer class="card-footer">
              <form action="/cart/bikes" method="POST">
                <input hidden value="${bike.id}" name="bikeId" />
              </form>
            </footer>
          </div>
        </div>
      `;
    })
    .join('\n');

  return layout({
    content: `
      
      <section>
        <div class="container">
          <div class="columns">
            <div class="column "></div>
            <div class="column is-four-fifths">
              <div>
                <h2 id="cadastro-title" class="title text-center">Ciclistas Cadastrados</h2>
                <div class="columns bikes">
                  ${renderedBikes}  
                </div>
              </div>
            </div>
            <div class="column "></div>
          </div>
        </div>
      </section>
    `
  });
};
