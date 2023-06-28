function random_hex_color_code() {
  let n = (Math.random() * 0xfffff * 1000000).toString(16);
  return "#" + n.slice(0, 6);
}

hexCodeButton = document.getElementById("hex-code-button");

hexCodeButton.addEventListener("click", function (e) {
  const color = random_hex_color_code();
  document.body.style.backgroundColor = color;
  hexCodeButton.textContent = color;
});
