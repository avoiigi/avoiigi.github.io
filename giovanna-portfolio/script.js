// Configurações e estado global
let currentTheme = localStorage.getItem('theme') || 'light';

// Inicialização quando a página carrega
document.addEventListener('DOMContentLoaded', function() {
    initializeTheme();
    initializeSmoothScrolling();
    initializeSkillsAnimation();
    initializeSkillsFilter();
    initializeContactForm();
    initializeScrollAnimations();
    initializeNavbarScroll();
});

// Theme Toggle Functionality
function initializeTheme() {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    
    // Aplicar tema salvo
    if (currentTheme === 'dark') {
        body.setAttribute('data-theme', 'dark');
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    }
    
    themeToggle.addEventListener('click', function() {
        if (currentTheme === 'light') {
            currentTheme = 'dark';
            body.setAttribute('data-theme', 'dark');
            themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        } else {
            currentTheme = 'light';
            body.removeAttribute('data-theme');
            themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
        }
        
        localStorage.setItem('theme', currentTheme);
    });
}

// Smooth Scrolling Navigation
function initializeSmoothScrolling() {
    const navLinks = document.querySelectorAll('.nav-link, .btn[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                const offsetTop = targetElement.offsetTop - 70; // Account for fixed navbar
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Skills Progress Animation
function initializeSkillsAnimation() {
    const skillBars = document.querySelectorAll('.skill-progress');
    
    const animateSkills = () => {
        skillBars.forEach(bar => {
            const rect = bar.getBoundingClientRect();
            const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
            
            if (isVisible && !bar.classList.contains('animated')) {
                const width = bar.getAttribute('data-width');
                bar.style.width = width + '%';
                bar.classList.add('animated');
            }
        });
    };
    
    // Animate skills when they come into view
    window.addEventListener('scroll', animateSkills);
    animateSkills(); // Check on initial load
}

// Skills Filter Functionality
function initializeSkillsFilter() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const skillCategories = document.querySelectorAll('.skill-category');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');
            
            const filter = this.getAttribute('data-filter');
            
            skillCategories.forEach(category => {
                if (filter === 'all') {
                    category.style.display = 'block';
                    setTimeout(() => {
                        category.style.opacity = '1';
                        category.style.transform = 'translateY(0)';
                    }, 100);
                } else {
                    const categoryType = category.getAttribute('data-category');
                    if (categoryType === filter) {
                        category.style.display = 'block';
                        setTimeout(() => {
                            category.style.opacity = '1';
                            category.style.transform = 'translateY(0)';
                        }, 100);
                    } else {
                        category.style.opacity = '0';
                        category.style.transform = 'translateY(20px)';
                        setTimeout(() => {
                            category.style.display = 'none';
                        }, 300);
                    }
                }
            });
        });
    });
}

// Contact Form Handling
function initializeContactForm() {
    const form = document.getElementById('contactForm');
    
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(form);
            const name = formData.get('name');
            const email = formData.get('email');
            const message = formData.get('message');
            
            // Validate form
            if (!name || !email || !message) {
                showNotification('Por favor, preencha todos os campos.', 'error');
                return;
            }
            
            if (!isValidEmail(email)) {
                showNotification('Por favor, insira um email válido.', 'error');
                return;
            }
            
            // Simulate form submission (replace with actual form handling)
            showNotification('Mensagem enviada com sucesso! Entrarei em contato em breve.', 'success');
            form.reset();
            
            // In real implementation, you would send the data to your server
            // Example with mailto (opens email client):
            const subject = encodeURIComponent('Contato via Portfólio - ' + name);
            const body = encodeURIComponent(`Nome: ${name}\\nEmail: ${email}\\n\\nMensagem:\\n${message}`);
            window.location.href = `mailto:ggkiehair@gmail.com?subject=${subject}&body=${body}`;
        });
    }
}

// Email validation helper
function isValidEmail(email) {
    const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
    return emailRegex.test(email);
}

// Notification system
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-message">${message}</span>
            <button class="notification-close">&times;</button>
        </div>
    `;
    
    // Add styles for notification
    notification.style.cssText = `
        position: fixed;
        top: 90px;
        right: 20px;
        max-width: 400px;
        padding: 15px 20px;
        border-radius: 10px;
        color: white;
        font-weight: 500;
        z-index: 10000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    `;
    
    if (type === 'success') {
        notification.style.background = 'linear-gradient(135deg, #10B981, #059669)';
    } else if (type === 'error') {
        notification.style.background = 'linear-gradient(135deg, #EF4444, #DC2626)';
    } else {
        notification.style.background = 'linear-gradient(135deg, #3B82F6, #2563EB)';
    }
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Close button functionality
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', () => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => notification.remove(), 300);
    });
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => notification.remove(), 300);
        }
    }, 5000);
}

// Scroll Animations
function initializeScrollAnimations() {
    const animatedElements = document.querySelectorAll(
        '.timeline-item, .project-card, .skill-category, .education-item'
    );
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in', 'visible');
            }
        });
    }, observerOptions);
    
    animatedElements.forEach(element => {
        element.classList.add('fade-in');
        observer.observe(element);
    });
}

// Navbar scroll behavior
function initializeNavbarScroll() {
    const navbar = document.querySelector('.navbar');
    let lastScrollTop = 0;
    
    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > lastScrollTop && scrollTop > 100) {
            // Scrolling down
            navbar.style.transform = 'translateY(-100%)';
        } else {
            // Scrolling up
            navbar.style.transform = 'translateY(0)';
        }
        
        lastScrollTop = scrollTop;
    });
}

// Active navigation link highlighting
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + current) {
            link.classList.add('active');
        }
    });
}

// Update active nav link on scroll
window.addEventListener('scroll', updateActiveNavLink);

// Project cards hover effect enhancement
document.addEventListener('DOMContentLoaded', function() {
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.boxShadow = '0 20px 40px rgba(0,0,0,0.1)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
        });
    });
});

// Typing animation for hero subtitle (optional enhancement)
function initializeTypingAnimation() {
    const subtitle = document.querySelector('.hero-subtitle');
    if (!subtitle) return;
    
    const text = subtitle.textContent;
    subtitle.textContent = '';
    subtitle.style.borderRight = '2px solid white';
    
    let i = 0;
    const typeWriter = () => {
        if (i < text.length) {
            subtitle.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        } else {
            setTimeout(() => {
                subtitle.style.borderRight = 'none';
            }, 1000);
        }
    };
    
    setTimeout(typeWriter, 1000);
}

// Initialize typing animation when hero section is visible
const heroObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            initializeTypingAnimation();
            heroObserver.unobserve(entry.target);
        }
    });
});

const heroSection = document.querySelector('.hero');
if (heroSection) {
    heroObserver.observe(heroSection);
}

// Utility functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Smooth scroll to top function
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Add scroll to top button
function addScrollToTopButton() {
    const scrollButton = document.createElement('button');
    scrollButton.innerHTML = '<i class="fas fa-chevron-up"></i>';
    scrollButton.className = 'scroll-to-top';
    scrollButton.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: linear-gradient(135deg, #667eea, #764ba2);
        color: white;
        border: none;
        cursor: pointer;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        z-index: 1000;
    `;
    
    scrollButton.addEventListener('click', scrollToTop);
    document.body.appendChild(scrollButton);
    
    // Show/hide button based on scroll position
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            scrollButton.style.opacity = '1';
            scrollButton.style.visibility = 'visible';
        } else {
            scrollButton.style.opacity = '0';
            scrollButton.style.visibility = 'hidden';
        }
    });
}

// Initialize scroll to top button
addScrollToTopButton();

// Performance optimization: debounced scroll handler
const debouncedScroll = debounce(() => {
    updateActiveNavLink();
}, 10);

window.addEventListener('scroll', debouncedScroll);

console.log('🚀 Portfólio carregado com sucesso! Desenvolvido para Giovanna Santos.');