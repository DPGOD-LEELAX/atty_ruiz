        // Mobile Menu Toggle
        document.querySelector('.mobile-menu').addEventListener('click', function() {
            document.querySelector('.nav-links').classList.toggle('active');
        });

        // Smooth Scrolling for Anchor Links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                if(targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if(targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                    
                    // Close mobile menu if open
                    document.querySelector('.nav-links').classList.remove('active');
                }
            });
        });

        // Sticky Header on Scroll
        window.addEventListener('scroll', function() {
            const header = document.querySelector('header');
            if(window.scrollY > 100) {
                header.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.1)';
            } else {
                header.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
            }
        });

        // Form Submission
        document.getElementById('consultation-form').addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your consultation request! I will contact you within 24 hours.');
            this.reset();
        });

        // Subscription Form
        document.querySelector('.footer-column form').addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for subscribing to my newsletter!');
            this.reset();
        });