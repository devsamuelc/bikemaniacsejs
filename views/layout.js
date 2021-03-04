module.exports = ({ content }) => {
  return `
    <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Bike Maniacs || A página dos ciclistas Santamarienses</title>

        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.min.css"></link>
        <link rel="stylesheet" href="/styles/global.css"></link>
      </head>

      <body>
        <header>
          <div class="headerContainer">
            <h1>Bike Maniacs</h1>
          </div>
        </header>

      
        <div class="jumbotronContainer">
        <div class="jumbotron">
        <div class="container">
          <h1 class="display-4 center">A página dos ciclistas de Santa Maria!</h1>
          <p class="lead">Cadastre sua bicicleta aqui e encontre outros ciclistas nas redes sociais!</p>
          <hr class="my-4">
          <p class="lead">
            <a class="btn btn-primary btn-lg" href="/new" role="button">Cadastrar</a>
          </p>
          </div>
        </div>
        </div>

        ${content}
      </body>
    </html>
  `;
};
