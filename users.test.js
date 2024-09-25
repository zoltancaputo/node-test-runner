import assert from "node:assert";
import test from "node:test";
import { getUser } from "./users.js";

test("dumb test", () => {
    const user = getUser()
    const expectedUser = { name: "Zoltan, Age: 48, " }

    assert.deepEqual(user , expectedUser)
})

