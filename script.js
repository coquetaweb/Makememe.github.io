const memes = [
  "memes/meme1.jpg",
  "memes/meme2.jpg",
  "memes/meme3.jpg"
];

let currentMemeIndex = 0;

function submitMeme() {
  const caption = document.getElementById("caption").value;
  if (caption.trim() === "") return;
  document.getElementById("submitted-caption").innerText = `Senin yazdığın: ${caption}`;
}

function nextMeme() {
  currentMemeIndex = (currentMemeIndex + 1) % memes.length;
  document.getElementById("meme-image").src = memes[currentMemeIndex];
  document.getElementById("caption").value = "";
  document.getElementById("submitted-caption").innerText = "";
}
