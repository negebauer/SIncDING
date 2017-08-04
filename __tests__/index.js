// const updateNotifier = require("update-notifier")
// const pkg = require("../package.json")
const Session = require("../lib/session")
// const siding = require("../lib/siding")
// const error = require("../lib/error")
// const log = require("./log")

let credentials

beforeAll(() => {
  try {
    credentials = require("./.env.json")
  } catch (err) {
    console.error(
      "Credentials required to run tests\nCreate a .env.json file in ./__tests__ as specified in README.md"
    )
    test.one("ERROR: No credentials", () => {})
    // process.exit(1)
  }
})

test("has valid credentials", () => {
  expect(credentials.username).toBeTruthy()
  expect(credentials.password).toBeTruthy()
})

// test("logins", async () => {
//   const session = new Session(credentials.username, credentials.password)
//   await session.login()
// })
