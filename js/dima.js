console.log("Приветствую!");
alert("Hallo!");
console.log("Не пугайтесь!");
alert("Совершенно секретно!");

console.log("Вашему вниманию досье на одного человека:");
confirm("Вы готовы?");

const person = {
  name: "Dmitry",
  sex: "male",
  city: "Dnipro",
  age: 18,
  isProgramer: true,
  programLavel: "101%",
  skills: ["cooking", "reading", "programing 24/7", "dreaming of programing all night"]
};

for (const key in person) {
    console.log(key, ":", person[key]);
}

const isComing = confirm("Подтвердите, что Вам все понятно");
console.log(isComing);

console.log("Да, Мы все понятно объяснили!")
console.log("ah so.. danke")

const [...skillInArr] = person.skills;
console.log("Еще разок навыки:");
console.table(skillInArr);

const value = prompt("Ваша оценка досье от 1 до 10:");
console.log("Ваша оценка: ", value);

console.log("Всем спасибо! До свидания!")
alert("Auf Wiedersehen!");