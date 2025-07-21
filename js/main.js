document.addEventListener('DOMContentLoaded', () => {
  const faqItems = document.querySelectorAll('.contact__faq-item');

  faqItems.forEach(item => {
    const question = item.querySelector('.contact__faq-question');
    const answer = item.querySelector('.contact__faq-answer');

    question.addEventListener('click', () => {
      // Check if any other item is open and close it
      faqItems.forEach(otherItem => {
        if (otherItem !== item && otherItem.classList.contains('open')) {
          otherItem.classList.remove('open');
          otherItem.querySelector('.contact__faq-answer').classList.remove('open');
        }
      });

      item.classList.toggle('open');
      answer.classList.toggle('open');
    });
  });
});