const layout = require('../layout');

module.exports = ({ bikes }) => {
  const renderedBikes = bikes
    .map(bike => {
      return `
      <tr>
        <td>${bike.owner}</td>
        <td>${bike.locals}</td>
        <td>
          <a href="/admin/bikes/${bike.id}/edit">
            <button class="button is-link">
              Edit
            </button>
          </a>
        </td>
        <td>
          <form method="POST" action="/admin/bikes/${bike.id}/delete">
            <button class="button is-danger">Delete</button>
          </form>
        </td>
      </tr>
    `;
    })
    .join('');

  return layout({
    content: `
      <div class="control">
        <h1 class="subtitle">Bikes</h1>  
        <a href="/new" class="button is-primary">New Bike</a>
      </div>
      <table class="table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Price</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          ${renderedBikes}
        </tbody>
      </table>
    `
  });
};
