//bmi = suly kgban / magasság méterben négyzetre emelve
document.getElementById("btn").onclick = function () {
  bmi =
    document.getElementById("weight").value /
    (document.getElementById("height").value / 100) ** 2;
  alert(bmi);
};
