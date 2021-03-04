const layout = require("../layout");
const { getError } = require("../../helpers");

module.exports = ({ bike, errors }) => {
  return layout({
    content: `
      <div class="columns is-centered">
        <div class="column is-half">
          <h1 class="subtitle">Editar Cadastro</h1>

          <form method="POST" enctype="multipart/form-data">
            <div class="field">
              <label class="label">Nome</label>
              <input value="${
                bike.owner
              }" class="input" placeholder="Nome" name="owner">
              <p class="help is-danger">${getError(errors, "owner")}</p>
            </div>
            
            <div class="field">
              <label class="label">Localidades</label>
              <input value="${
                bike.locals
              }" class="input" placeholder="Localidades" name="locals">
              <p class="help is-danger">${getError(errors, "locals")}</p>
            </div>
            
            <div class="field">
              <label class="label">Foto da sua Bike</label>            
              <input type="file" name="image" />
            </div>
            <br />
            <button class="button is-primary">Edit</button>
          </form>
        </div>
      </div>
    `,
  });
};
