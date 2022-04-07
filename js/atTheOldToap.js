//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////
///                  At The Old Toad           ///////////
//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////

// console.log("....... At The Old Toad ........");

// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   getPotions() {
//     return `Returning all Potions: ${this.potions}`;
//   },
//   addPotion(potionName) {
//     this.potions.push(potionName);
//     console.log(this.potions);
//     return `Adding Potion: ${potionName}`;
//   },
//   removePotion(potionName) {
//     if (this.potions.includes(potionName)) {
//       const potionIndex = this.potions.indexOf(potionName);
//       this.potions.splice(potionIndex, 1);
//     }
//     return `Deleting book ${potionName}`;
//   },

//   updatePotionName(oldName, newName) {
//     if (this.potions.includes(oldName)) {
//       const potionIndex = this.potions.indexOf(oldName);
//       this.potions.splice(potionIndex, 1);
//       this.potions.splice(potionIndex, 0, newName);
//     }
//     return `Updating book ${oldName} to ${newName}`;
//   },
// };

// console.log(atTheOldToad.getPotions());

// console.log(atTheOldToad.addPotion("Invisibility"));
// console.log(atTheOldToad.addPotion("Power potion"));
// console.log("After adding: ", atTheOldToad.getPotions());

// console.log(atTheOldToad.removePotion("Dragon breath"));
// console.log(atTheOldToad.removePotion("Speed potion"));
// console.log("After deleting: ", atTheOldToad.getPotions());

// console.log(atTheOldToad.updatePotionName("Dragon breath", "Polymorth"));
// console.log(atTheOldToad.updatePotionName("Stone skin", "Invisibility"));
// console.log("After updatind: ", atTheOldToad.getPotions());

const atTheOldToad = {
  potions: [
    { name: "Speed potion", price: 460 },
    { name: "Dragon breath", price: 780 },
    { name: "Stone skin", price: 520 },
  ],

  getPotions() {
    return this.potions;
  },
  addPotion(newPotion) {
    // const names = Object.values(this.potions);
    const names = [];
    for (const potion of this.potions) {
      names.push(potion.name);
    }
    console.log(names);
    if (names.includes(newPotion.name)) {
      return `Error! Potion ${newPotion.name} is already in your inventory!`;
    }
    this.potions.push(newPotion);
  },
  removePotion(potionName) {
    // const potionIndex = this.potions.name.indexOf([potionName]);
    let potionIndex = this.potions.findIndex((el) => el.name === potionName);
    console.log("Name: ", potionName);
    console.log("Index: ", potionIndex);
    const names = [];
    for (const potion of this.potions) {
      names.push(potion.name);
    }
    console.log(names);

    if (potionIndex === -1) {
      return `Potion ${potionName} is not in inventory!`;
    }

    this.potions.splice(potionIndex, 1);
    return `Deleting potion ${potionName}`;
  },
  updatePotionName(oldName, newName) {
    // const potionIndex = this.potions.indexOf(oldName);
    let potionIndex = this.potions.findIndex((el) => el.name === oldName);
    console.log("Name to update: ", oldName);
    console.log("Index to update: ", potionIndex);

    if (potionIndex === -1) {
      return `Potion ${oldName} is not in inventory!`;
    }

    // const names = [];
    // for (const potion of this.potions) {
    //   names.push(potion.name);
    // }

    // names.splice(potionIndex, 1, newName);
    // console.log(names);

    // for (let i = 0; i < names.length; i += 1) {
    //   console.log(names[i]);
    //   // this.potions.name[i] = names[i];
    //   console.log(this.potions[i]);
    // }
    // let potionIndex2 = this.potions.findIndex((el) => el.name === oldName);
    // this.potions.name.splice(potionIndex2, 1, newName);

    // this.potions.splice(potionIndex2, 0, newName);
    console.log(".......POTION...... ", this.potions[0].name);
    this.potions[potionIndex].name = newName;

    return `Updating potion ${oldName} to ${newName}`;
  },
};

/////////////////////////////////////////////////////////////

console.table(atTheOldToad.getPotions());
atTheOldToad.addPotion({ name: "Invisibility", price: 620 });
console.table(atTheOldToad.getPotions());
// //"Error! Potion Dragon breath is already in your inventory!"
console.log(atTheOldToad.addPotion({ name: "Dragon breath", price: 700 }));
console.log(atTheOldToad.addPotion({ name: "Stone skin", price: 240 }));
console.table(atTheOldToad.getPotions());

console.log(atTheOldToad.removePotion("Dragon breath"));
console.log(atTheOldToad.removePotion("Speed potion"));
console.table(atTheOldToad.getPotions());

console.log(atTheOldToad.updatePotionName("Dragon breath", "Polymorth"));
console.log(
  atTheOldToad.updatePotionName("Stone skin", "Invulnerability potion")
);

console.table(atTheOldToad.getPotions());
