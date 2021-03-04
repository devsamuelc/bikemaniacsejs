const express = require("express");
const { validationResult } = require("express-validator");
const multer = require("multer");

const { handleErrors, requireAuth } = require("./middlewares");
const bikesRepo = require("../../repositories/bikes");
const bikeCreate = require("../../views/new");
const bikesIndexTemplate = require("../../views/admin/bikes/index");
const bikesEditTemplate = require("../../views/admin/bikes/edit");
const { requireOwner, requireLocals } = require("./validators");

const router = express.Router();
const upload = multer({ storage: multer.memoryStorage() });

const app = express();

router.get("/admin", requireAuth, async (req, res) => {
  const bikes = await bikesRepo.getAll();
  res.send(bikesIndexTemplate({ bikes }));
});

router.get("/new", (req, res) => {
  res.send(bikeCreate({ req }));
});

router.post(
  "/new",
  upload.single("image"),
  [requireOwner, requireLocals],
  handleErrors(bikeCreate),
  async (req, res) => {
    const errors = validationResult(req);

    const image = req.file.buffer.toString("base64");
    const { owner, locals } = req.body;
    await bikesRepo.create({ owner, locals, image });

    res.redirect("/");
  }
);

router.get("/admin/bikes/:id/edit", requireAuth, async (req, res) => {
  const bike = await bikesRepo.getOne(req.params.id);

  if (!bike) {
    return res.send("bike not found!");
  }

  res.send(bikesEditTemplate({ bike }));
});

router.post("/admin/bikes/:id/edit"),
  requireAuth,
  upload.single("image"),
  [requireOwner, requireLocals],
  handleErrors(bikesEditTemplate, async (req) => {
    const bike = await bikesRepo.getOne(req.params.id);
    return { bike };
  }),
  async (req, res) => {
      const changes = req.body;

      if (req.file) {
        changes.image = req.file.buffer.toString('base64');
      }

      try {
        await bikesRepo.update(req.params.id, changes);
      } catch (err) {
        return res.send('Could not find item');
      }

      res.redirect('/admin');
  };

  router.post('/admin/bikes/:id/delete', requireAuth, async (req, res) => {
    await bikesRepo.delete(req.params.id);
  
    res.redirect('/admin');
  })
module.exports = router;
