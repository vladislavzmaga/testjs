let a = prompt("Ти будеш блять учить JavaScript?  Напиши да або ні і нажми ок");
if (
  a.toLowerCase() === "да" ||
  a.toLowerCase() === "yes" ||
  a.toLowerCase() === "ok"
) {
  alert("красава, напиши своєму братові він тобі поможе))))");
} else if (
  a.toLowerCase() === "no" ||
  a.toLowerCase() === "not" ||
  a.toLowerCase() === "нет" ||
  a.toLowerCase() === "ні"
) {
  alert(
    "Все з тобой понятно(((, ну і оставайся необразованим клубникозбирачем)))"
  );
} else {
  alert("ОБНОВИ СТОРІНКУ");
}
