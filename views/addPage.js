const html = require("html-template-tag");
const { join } = require("path");
const layout = require("./layout");

module.exports = () =>
  layout(html`
    <h3>Add a Page</h3>
    <hr />
    <form method="POST" action="/wiki/">
      <div class="form-group">
        <div>
          <label for="name" class="col-sm-2 control-label">Author Name</label>
          <input name="name" type="text" placeholder="Name..." />
        </div>

        <div>
          <label for="email" class="col-sm-2 control-label">Email</label>
          <input name="email" type="text" placeholder="Email..." />
        </div>

        <div>
          <label for="title" class="col-sm-2 control-label">Page Title</label>
          <input name="title" type="text" placeholder="Page Title..." />
        </div>

        <div>
          <label for="content" class="col-sm-2 control-label">Content</label>
          <input name="content" type="text" placeholder="Content..." />
        </div>

        <div>
          <label for="status" class="col-sm-2 control-label">Status</label>
          <input name="status" type="text" placeholder="Status..." />
        </div>
      </div>

      <div class="col-sm-offset-2 col-sm-10">
        <button type="submit" class="btn btn-primary">submit</button>
      </div>
    </form>
  `);
