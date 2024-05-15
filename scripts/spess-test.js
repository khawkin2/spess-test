import CharacterSheet from "./module/sheets/CharacterSheet.js";

Hooks.once("init", function(){
  console.log("test | Initializing spess-test");

  Actors.unregisterSheet("core", ActorSheet);
  Actors.registerSheet("spess-test", CharacterSheet, {makeDefault: true});
});
