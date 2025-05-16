// FAQ Logic

document.addEventListener("DOMContentLoaded", () => {
  const faqItems = document.querySelectorAll(".faq__item");

  faqItems.forEach(item => {
    const question = item.querySelector(".faq__question");

    question.addEventListener("click", () => {
      item.classList.toggle("active");

      faqItems.forEach(i => {
        if (i !== item) i.classList.remove("active");
      });
    });
  });
});


// BURGER MENU