const layout = require("../layout");
const { getError } = require("../../helpers");

module.exports = ({ req, errors }) => {
  return layout({
    content: `
      <div class="container">
        <div class="columns is-centered">
          <div class="column">
            <form method="POST">
              <h1 class="title">Fazer Cadastro</h1>
              <div class="field">
                <label class="label">Email</label>
                <input required class="input" placeholder="Email" name="email" />
                <p class="help is-danger">${getError(errors, "email")}</p>
              </div>
              <div class="field">
                <label class="label">Senha</label>
                <input required class="input" placeholder="Senha" name="password" type="password" />
                <p class="help is-danger">${getError(errors, "password")}</p>
              </div>
              <div class="field">
                <label class="label">Confirmar Senha</label>
                <input required class="input" placeholder="Repita a Senha" name="passwordConfirmation" type="password" />
                <p class="help is-danger">${getError(
                  errors,
                  "passwordConfirmation"
                )}</p>
              </div>
              <button class="button is-primary">Submit</button>
            </form>
            <a href="/signin">Já é cadastrado? Entrar</a>
          </div>
        </div>
      </div>
    `,
  });
};
