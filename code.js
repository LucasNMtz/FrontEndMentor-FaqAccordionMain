// Accordion
const faqsContainers = document.querySelectorAll('.section__div-faqs-container'); 

faqsContainers.forEach(container => {
    const titleContainer = container.querySelector('.section-div__div-title-container');
    const content = container.querySelector('p');
    const icon = container.querySelector('.accordion-header-icon');

    titleContainer.addEventListener('click', function() {
        
        faqsContainers.forEach(otherContainer => {
            const otherIcon = otherContainer.querySelector('.accordion-header-icon');
            if (otherContainer !== container) {
                otherContainer.classList.remove('active');
                otherContainer.style.maxHeight = '58px';
                otherIcon.src = otherIcon.src.replace("-minus.svg", "-plus.svg");
            }
        });
        
        if (container.style.maxHeight === '169px') {
            container.classList.remove('active');
            container.style.maxHeight = '58px';
            icon.src = icon.src.replace("-minus.svg", "-plus.svg");
        }
        else{
            container.classList.toggle('active');
            container.style.maxHeight = '169px';
            icon.src = icon.src.replace("-plus.svg", "-minus.svg");
        }
    });
});
// Accordion