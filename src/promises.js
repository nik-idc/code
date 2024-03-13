const waiter = () => {
  const rand1 = Math.random();
  return new Promise((resolve, reject) => {
    setInterval(() => {
      const rand2 = Math.random();
      if (rand2 > rand1) {
        resolve("yay!!");
      } else {
        reject("oh man :((");
      }
    }, 5000);
  });
};

const usingThen = () => {
  waiter()
    .then((val) => {
      console.log(`promise fullfilled!!`);
    })
    .catch((err) => {
      console.log(`promise rejected:((`);
    });
};

const usingAsync = async () => {
  try {
    await waiter();
    console.log(`promise fullfilled!!`);
  } catch (error) {
    console.log(`promise rejected:((`);
  }
};

const promises = async () => {
  usingThen();

  await usingAsync();
};

module.exports = promises;
