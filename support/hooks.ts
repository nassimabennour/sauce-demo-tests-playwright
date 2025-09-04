import { createBdd } from "playwright-bdd";
const { Before, After } = createBdd();
/*
Before(async () => {
  // Action avant chaque scénario (ex: vider localStorage)
});

After(async ({}, scenario) => {
  // Action après chaque scénario (ex: log, capture, etc.)
});
*/