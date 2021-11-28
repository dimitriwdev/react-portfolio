if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("./serviceWorker.js")
      .then((reg) => console.log("SW Success: ", reg.scope))
      .catch((err) => console.log("SW Error: ", err));
  });
}
