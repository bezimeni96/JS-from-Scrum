const firstPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve();
    reject()
  }, 2000);
})

firstPromise.then(() => console.log("Success!")).catch((err) => console.log("Error!"));