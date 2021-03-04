const layout = require("./layout");
const { getError } = require("./helpers");

module.exports = ({ errors }) => {
  return layout({
    content: `
      <div class="columns is-centered">
        <div class="column is-half">
        <div class="container">
          <h1 class="subtitle">Cadastrar sua Bike</h1>

          <form method="POST" enctype="multipart/form-data">
            <div class="field">
              <label class="label">Seu nome</label>
              <input class="input" name="owner">
              <p class="help is-danger">${getError(errors, "owner")}</p>
            </div>
            
            <div class="field">
              <label class="label">Locais que você frequenta</label>
              <input class="input" name="locals">
              <p class="help is-danger">${getError(errors, "locals")}</p>
            </div>
            
            <div class="field">
              <label class="label">Foto da sua Bike</label>            
              <input type="file" name="image" />
            </div>
            <br />
            <button class="button is-primary">Create</button>
          </form>
          </div>
        </div>
      </div>
    `,
  });
};
