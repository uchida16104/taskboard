document.getElementById("copy").addEventListener("click", async () => {
  const html = document.getElementById("content").innerHTML;
  await navigator.clipboard.writeText(html);
  alert("Rendered HTML copied to clipboard");
});
