const { check } = require("express-validator");
const usersRepo = require("../../repositories/users");

module.exports = {
  requireOwner: check("owner")
  .trim()
  .isLength({ min: 2, max: 100 })
  .withMessage('Favor trocar seu nome para um nome menor brother.'),
  requireLocals: check("locals")
  .trim()
  .isLength({ min: 8, max: 60})
  .withMessage('Para facilitar os encontros, insira seus locais favoritos'),
  requireEmail: check("email")
    .trim()
    .normalizeEmail()
    .isEmail()
    .withMessage("Must be a valid E-mail address")
    .custom(async (email) => {
      const existingUser = await usersRepo.getOneBy({ email });
      if (existingUser) {
        throw new Error("Email in use");
      }
    }),
  requirePassword: check("password")
    .trim()
    .isLength({ min: 4, max: 20 })
    .withMessage("Must be between 4 and 20 characters"),
  requirePasswordConfirmation: check("passwordConfirmation")
    .trim()
    .isLength({ min: 4, max: 20 })
    .withMessage("Must be between 4 and 20 characters")
    .custom((passwordConfirmation, { req }) => {
      if (passwordConfirmation !== req.body.password) {
        throw new Error("Passwords must match");
      } else {
        return true;
      }
    }),
  requireValidEmail: check("email")
    .trim()
    .normalizeEmail()
    .isEmail()
    .withMessage("Must provide a valid email address")
    .custom(async (email) => {
      const user = await usersRepo.getOneBy({ email });
      if (!user) {
        throw new Error("Email not found");
      }
    }),
  requireValidPasswordForUser: check("password")
    .trim()
    .custom(async (password, { req }) => {
      const user = await usersRepo.getOneBy({ email: req.body.email });
      if (!user) {
        throw new Error("Invalid password");
      }
      const validPassword = await usersRepo.comparePasswords(
        user.password,
        password
      );
      if (!validPassword) {
        throw new Error("Invalid password");
      }
    }),
};
