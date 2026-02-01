/* TaxiExpress - Lógica de Interacción
  Funcionalidades: Scroll suave, validación de formulario y animaciones de entrada.
*/

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Desplazamiento Suave (Smooth Scroll) para los enlaces de navegación
    const links = document.querySelectorAll('.nav-links a, .btn');
    
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            
            // Solo actuar si es un enlace interno (empieza con #)
            if (href.startsWith('#')) {
                e.preventDefault();
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 70, // Offset por la altura del header
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // 2. Validación y Manejo del Formulario de Contacto
    const contactForm = document.querySelector('.contact-form form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Simulación de envío
            const submitBtn = contactForm.querySelector('button');
            const originalText = submitBtn.innerText;
            
            submitBtn.innerText = "Enviando...";
            submitBtn.disabled = true;
            submitBtn.style.backgroundColor = "#555";

            setTimeout(() => {
                alert("¡Gracias por contactar a TaxiExpress! Nos comunicaremos contigo a la brevedad.");
                contactForm.reset();
                submitBtn.innerText = originalText;
                submitBtn.disabled = false;
                submitBtn.style.backgroundColor = "";
            }, 1500);
        });
    }

    // 3. Efecto "Reveal" al hacer Scroll
    // Hace que los elementos aparezcan suavemente cuando el usuario baja por la página
    const revealElements = document.querySelectorAll('.card, .benefit-item, .section-title');
    
    const revealOnScroll = () => {
        const triggerBottom = window.innerHeight / 5 * 4;
        
        revealElements.forEach(el => {
            const elTop = el.getBoundingClientRect().top;
            
            if (elTop < triggerBottom) {
                el.style.opacity = "1";
                el.style.transform = "translateY(0)";
            }
        });
    };

    // Configuración inicial para el efecto reveal
    revealElements.forEach(el => {
        el.style.opacity = "0";
        el.style.transform = "translateY(30px)";
        el.style.transition = "all 0.6s ease-out";
    });

    window.addEventListener('scroll', revealOnScroll);
    reveal