const container_once_faq = document.querySelectorAll('.container-once-faq');
container_once_faq.forEach((once_faq)=>{
  const faqToggle = () => {
    container_once_faq.forEach((item)=>{
      if(item  !== once_faq) {
        item.classList.remove('active')
      }
    })
    once_faq.classList.toggle('active');
  }
  once_faq.addEventListener('click', faqToggle, false);
})
