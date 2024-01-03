const mobileToggle = document.getElementById("mobile-toggle");

mobileToggle.addEventListener("click", () => {
  document.querySelector(".nav-items").classList.toggle("active");
});

const navLinks = document.querySelectorAll(".nav-item").forEach((navItem) => {
  navItem.addEventListener("click", () => {
    document.querySelector(".nav-items").classList.toggle("active");
  });
});

document.getElementById("submit-btn").addEventListener("click", function () {
  sendToChatGPT();
});


function sendToChatGPT() {
  let value = document.getElementById("word-input").value;

  let body = {
    model: "gpt-3.5-turbo",
    messages: [{ role: "user", content: value }],
    tempreture: "1",
  };

  let headers = {
    Authorization: "Bearer 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",
  };

  axios
    .post("https://api.openai.com/v1/chat/completions", body, {
      headers: headers,
    })
    .then((response) => {
      let reply = response.data.choices[0].message.content;
      document.getElementById("reply-content").textContent = reply;
    });
}