// ===================================
// 1. SISTEMA SPA (SINGLE PAGE APPLICATION) BÁSICO
// ===================================

const SPAController = {
    // Inicializar SPA
    init: function() {
        console.log('SPA Controller inicializado');
        this.setupNavigationLinks();
    },

    // Configurar links de navegação
    setupNavigationLinks: function() {
        const links = document.querySelectorAll('nav a');
        links.forEach(link => {
            link.addEventListener('click', (e) => {
                // Remove classe ativa de todos os links
                links.forEach(l => l.classList.remove('active'));
                // Adiciona classe ativa ao link clicado
                e.target.classList.add('active');
            });
        });
    }
};

// ===================================
// 2. SISTEMA DE TEMPLATES JAVASCRIPT
// ===================================

const TemplateSystem = {
    // Criar card de projeto dinamicamente
    createProjectCard: function(project) {
        return `
            <div class="card fade-in">
                <img src="${project.image}" alt="${project.title}">
                <div class="card-content">
                    <h3>${project.title}</h3>
                    <p>${project.description}</p>
                    <div>
                        ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                    </div>
                    <button class="btn btn-primario" onclick="TemplateSystem.showProjectDetails('${project.id}')">
                        Ver Detalhes
                    </button>
                </div>
            </div>
        `;
    },

    // Mostrar detalhes do projeto em modal
    showProjectDetails: function(projectId) {
        const project = this.getProjectById(projectId);
        if (project) {
            ModalController.show('Detalhes do Projeto', `
                <h3>${project.title}</h3>
                <p>${project.fullDescription || project.description}</p>
                <p><strong>Tags:</strong> ${project.tags.join(', ')}</p>
            `);
        }
    },

    // Buscar projeto por ID (simulação)
    getProjectById: function(id) {
        // Simulação de dados
        const projects = {
            'edu': {
                id: 'edu',
                title: 'Educação para Todos',
                description: 'Reforço escolar e inclusão digital',
                fullDescription: 'Projeto completo de educação oferecendo reforço escolar, aulas de informática e atividades culturais.',
                tags: ['Educação', 'Crianças', 'Digital'],
                image: 'imagens/projeto-educacao.jpg'
            }
        };
        return projects[id];
    }
};

// ===================================
// 3. VALIDAÇÃO DE FORMULÁRIOS
// ===================================

const FormValidator = {
    // Inicializar validação
    init: function() {
        const forms = document.querySelectorAll('form');
        forms.forEach(form => {
            form.addEventListener('submit', (e) => this.validateForm(e));
            
            // Validação em tempo real
            const inputs = form.querySelectorAll('input, select, textarea');
            inputs.forEach(input => {
                input.addEventListener('blur', () => this.validateField(input));
                input.addEventListener('input', () => this.removeError(input));
            });
        });
    },

    // Validar formulário completo
    validateForm: function(event) {
        event.preventDefault();
        const form = event.target;
        let isValid = true;
        const errors = [];

        // Validar campos obrigatórios
        const requiredFields = form.querySelectorAll('[required]');
        requiredFields.forEach(field => {
            if (!this.validateField(field)) {
                isValid = false;
                errors.push(this.getFieldLabel(field));
            }
        });

        if (!isValid) {
            ToastController.show('Erro no formulário', 'erro');
            AlertController.show(
                `Por favor, corrija os seguintes campos: ${errors.join(', ')}`,
                'erro'
            );
            return false;
        }

        // Se válido, mostrar mensagem de sucesso
        ToastController.show('Formulário enviado com sucesso!', 'sucesso');
        AlertController.show(
            'Seu cadastro foi realizado com sucesso! Em breve entraremos em contato.',
            'sucesso'
        );
        AccessibilityController.announceMessage('Formulário enviado com sucesso', 'assertive');

        // Limpar formulário após 2 segundos
        setTimeout(() => {
            form.reset();
        }, 2000);

        return true;
    },

    // Validar campo individual
    validateField: function(field) {
        const value = field.value.trim();
        const fieldType = field.type;
        let isValid = true;
        let errorMessage = '';

        // Remover erro anterior
        this.removeError(field);

        // Validar campo obrigatório
        if (field.hasAttribute('required') && !value) {
            isValid = false;
            errorMessage = 'Este campo é obrigatório';
        }

        // Validar email
        if (fieldType === 'email' && value) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(value)) {
                isValid = false;
                errorMessage = 'E-mail inválido';
            }
        }

        // Validar CPF
        if (field.id === 'cpf' && value) {
            if (!this.validateCPF(value)) {
                isValid = false;
                errorMessage = 'CPF inválido';
            }
        }

        // Validar telefone
        if (field.id === 'telefone' || field.id === 'contato-telefone') {
            if (value && !this.validatePhone(value)) {
                isValid = false;
                errorMessage = 'Telefone inválido. Use o formato (00) 00000-0000';
            }
        }

        // Validar CEP
        if (field.id === 'cep' && value) {
            if (!this.validateCEP(value)) {
                isValid = false;
                errorMessage = 'CEP inválido. Use o formato 00000-000';
            }
        }

        // Validar data de nascimento (maior de 18 anos)
        if (field.id === 'data-nascimento' && value) {
            if (!this.validateAge(value)) {
                isValid = false;
                errorMessage = 'Você deve ter pelo menos 18 anos';
            }
        }

        // Validar tamanho mínimo
        if (field.hasAttribute('minlength') && value) {
            const minLength = parseInt(field.getAttribute('minlength'));
            if (value.length < minLength) {
                isValid = false;
                errorMessage = `Mínimo de ${minLength} caracteres`;
            }
        }

        // Mostrar erro se inválido
        if (!isValid) {
            this.showError(field, errorMessage);
            field.setAttribute('aria-invalid', 'true');
            AccessibilityController.announceMessage(`Erro no campo ${this.getFieldLabel(field)}: ${errorMessage}`, 'assertive');
        } else {
            field.setAttribute('aria-invalid', 'false');
        }

        return isValid;
    },

    // Validar CPF
    validateCPF: function(cpf) {
        cpf = cpf.replace(/[^\d]/g, '');
        
        if (cpf.length !== 11) return false;
        if (/^(\d)\1{10}$/.test(cpf)) return false;

        let sum = 0;
        let remainder;

        for (let i = 1; i <= 9; i++) {
            sum += parseInt(cpf.substring(i - 1, i)) * (11 - i);
        }

        remainder = (sum * 10) % 11;
        if (remainder === 10 || remainder === 11) remainder = 0;
        if (remainder !== parseInt(cpf.substring(9, 10))) return false;

        sum = 0;
        for (let i = 1; i <= 10; i++) {
            sum += parseInt(cpf.substring(i - 1, i)) * (12 - i);
        }

        remainder = (sum * 10) % 11;
        if (remainder === 10 || remainder === 11) remainder = 0;
        if (remainder !== parseInt(cpf.substring(10, 11))) return false;

        return true;
    },

    // Validar telefone
    validatePhone: function(phone) {
        const phoneRegex = /^\(\d{2}\)\s\d{4,5}-\d{4}$/;
        return phoneRegex.test(phone);
    },

    // Validar CEP
    validateCEP: function(cep) {
        const cepRegex = /^\d{5}-\d{3}$/;
        return cepRegex.test(cep);
    },

    // Validar idade mínima (18 anos)
    validateAge: function(dateString) {
        const birthday = new Date(dateString);
        const today = new Date();
        let age = today.getFullYear() - birthday.getFullYear();
        const monthDiff = today.getMonth() - birthday.getMonth();
        
        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthday.getDate())) {
            age--;
        }
        
        return age >= 18;
    },

    // Mostrar erro no campo
    showError: function(field, message) {
        field.classList.add('error');
        
        // Criar elemento de erro se não existir
        let errorElement = field.parentElement.querySelector('.error-message');
        if (!errorElement) {
            errorElement = document.createElement('span');
            errorElement.className = 'error-message';
            field.parentElement.appendChild(errorElement);
        }
        
        errorElement.textContent = message;
        errorElement.style.color = 'var(--cor-erro)';
        errorElement.style.fontSize = 'var(--tamanho-sm)';
        errorElement.style.display = 'block';
        errorElement.style.marginTop = '4px';
    },

    // Remover erro do campo
    removeError: function(field) {
        field.classList.remove('error');
        const errorElement = field.parentElement.querySelector('.error-message');
        if (errorElement) {
            errorElement.remove();
        }
    },

    // Obter label do campo
    getFieldLabel: function(field) {
        const label = field.parentElement.querySelector('label');
        return label ? label.textContent.replace('*', '').replace(':', '').trim() : field.name;
    }
};

// ===================================
// 4. MÁSCARAS DE INPUT
// ===================================

const InputMasks = {
    init: function() {
        // Máscara de CPF
        const cpfInput = document.getElementById('cpf');
        if (cpfInput) {
            cpfInput.addEventListener('input', (e) => this.cpfMask(e));
        }

        // Máscara de Telefone
        const phoneInputs = document.querySelectorAll('#telefone, #contato-telefone');
        phoneInputs.forEach(input => {
            input.addEventListener('input', (e) => this.phoneMask(e));
        });

        // Máscara de CEP
        const cepInput = document.getElementById('cep');
        if (cepInput) {
            cepInput.addEventListener('input', (e) => this.cepMask(e));
        }
    },

    // Máscara CPF: 000.000.000-00
    cpfMask: function(e) {
        let value = e.target.value.replace(/\D/g, '');
        value = value.replace(/(\d{3})(\d)/, '$1.$2');
        value = value.replace(/(\d{3})(\d)/, '$1.$2');
        value = value.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
        e.target.value = value;
    },

    // Máscara Telefone: (00) 00000-0000
    phoneMask: function(e) {
        let value = e.target.value.replace(/\D/g, '');
        value = value.replace(/^(\d{2})(\d)/g, '($1) $2');
        value = value.replace(/(\d)(\d{4})$/, '$1-$2');
        e.target.value = value;
    },

    // Máscara CEP: 00000-000
    cepMask: function(e) {
        let value = e.target.value.replace(/\D/g, '');
        value = value.replace(/^(\d{5})(\d)/, '$1-$2');
        e.target.value = value;
    }
};

// ===================================
// 5. MENU HAMBÚRGUER MOBILE
// ===================================

const MenuController = {
    init: function() {
        // Criar botão hambúrguer se não existir
        this.createMenuToggle();
        
        const menuToggle = document.querySelector('.menu-toggle');
        const navMenu = document.querySelector('nav ul');

        if (menuToggle && navMenu) {
            menuToggle.addEventListener('click', () => {
                navMenu.classList.toggle('menu-ativo');
                menuToggle.classList.toggle('active');
                
                // Alterar ícone do botão
                if (navMenu.classList.contains('menu-ativo')) {
                    menuToggle.innerHTML = '✕ Fechar Menu';
                } else {
                    menuToggle.innerHTML = '☰ Menu';
                }
            });

            // Fechar menu ao clicar em um link
            const menuLinks = navMenu.querySelectorAll('a');
            menuLinks.forEach(link => {
                link.addEventListener('click', () => {
                    if (window.innerWidth <= 576) {
                        navMenu.classList.remove('menu-ativo');
                        menuToggle.classList.remove('active');
                        menuToggle.innerHTML = '☰ Menu';
                    }
                });
            });
        }
    },

    createMenuToggle: function() {
        const nav = document.querySelector('nav');
        if (nav && !nav.querySelector('.menu-toggle')) {
            const menuToggle = document.createElement('button');
            menuToggle.className = 'menu-toggle';
            menuToggle.innerHTML = '☰ Menu';
            menuToggle.setAttribute('aria-label', 'Abrir menu de navegação');
            nav.insertBefore(menuToggle, nav.firstChild);
        }
    }
};

// ===================================
// 6. MODAL CONTROLLER
// ===================================

const ModalController = {
    init: function() {
        // Criar estrutura do modal se não existir
        if (!document.getElementById('modal')) {
            const modalHTML = `
                <div id="modal" class="modal">
                    <div class="modal-content">
                        <span class="modal-close">&times;</span>
                        <h2 id="modal-title"></h2>
                        <div id="modal-body"></div>
                    </div>
                </div>
            `;
            document.body.insertAdjacentHTML('beforeend', modalHTML);

            // Configurar evento de fechar
            const modal = document.getElementById('modal');
            const closeBtn = modal.querySelector('.modal-close');

            closeBtn.addEventListener('click', () => this.hide());
            
            modal.addEventListener('click', (e) => {
                if (e.target === modal) {
                    this.hide();
                }
            });

            // Fechar com ESC
            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape' && modal.style.display === 'flex') {
                    this.hide();
                }
            });
        }
    },

    show: function(title, content) {
        const modal = document.getElementById('modal');
        const modalTitle = document.getElementById('modal-title');
        const modalBody = document.getElementById('modal-body');

        modalTitle.textContent = title;
        modalBody.innerHTML = content;
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    },

    hide: function() {
        const modal = document.getElementById('modal');
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
};

// ===================================
// 7. TOAST CONTROLLER
// ===================================

const ToastController = {
    show: function(message, type = 'info') {
        // Remover toast anterior se existir
        const existingToast = document.querySelector('.toast');
        if (existingToast) {
            existingToast.remove();
        }

        // Criar toast
        const toast = document.createElement('div');
        toast.className = `toast toast-${type}`;
        toast.textContent = message;

        // Adicionar ao body
        document.body.appendChild(toast);

        // Remover após 3 segundos
        setTimeout(() => {
            toast.style.opacity = '0';
            setTimeout(() => {
                toast.remove();
            }, 300);
        }, 3000);
    }
};

// ===================================
// 8. ALERT CONTROLLER
// ===================================

const AlertController = {
    show: function(message, type = 'info') {
        // Criar alert
        const alert = document.createElement('div');
        alert.className = `alert alert-${type}`;
        alert.innerHTML = `
            <strong>${this.getAlertTitle(type)}</strong>
            <p>${message}</p>
            <button class="alert-close" onclick="this.parentElement.remove()">×</button>
        `;

        alert.style.position = 'relative';
        alert.querySelector('.alert-close').style.cssText = `
            position: absolute;
            top: 10px;
            right: 10px;
            background: none;
            border: none;
            font-size: 24px;
            cursor: pointer;
            color: inherit;
        `;

        // Inserir no início do main
        const main = document.querySelector('main');
        if (main) {
            main.insertBefore(alert, main.firstChild);

            // Auto-remover após 10 segundos
            setTimeout(() => {
                alert.style.opacity = '0';
                setTimeout(() => alert.remove(), 300);
            }, 10000);
        }
    },

    getAlertTitle: function(type) {
        const titles = {
            'sucesso': 'Sucesso!',
            'erro': 'Erro!',
            'aviso': 'Atenção!',
            'info': 'Informação'
        };
        return titles[type] || 'Aviso';
    }
};

// ===================================
// 9. SMOOTH SCROLL
// ===================================

const SmoothScroll = {
    init: function() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                const href = this.getAttribute('href');
                if (href !== '#' && href.length > 1) {
                    e.preventDefault();
                    const target = document.querySelector(href);
                    if (target) {
                        target.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                        });
                    }
                }
            });
        });
    }
};

// ===================================
// 10. LAZY LOADING DE IMAGENS
// ===================================

const LazyLoad = {
    init: function() {
        const images = document.querySelectorAll('img[loading="lazy"]');
        
        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        img.classList.add('loaded');
                        imageObserver.unobserve(img);
                    }
                });
            });

            images.forEach(img => imageObserver.observe(img));
        } else {
            // Fallback para navegadores antigos
            images.forEach(img => img.classList.add('loaded'));
        }
    }
};

// ===================================
// 11. CONTADOR DE CARACTERES
// ===================================

const CharacterCounter = {
    init: function() {
        const textareas = document.querySelectorAll('textarea[minlength], textarea[maxlength]');
        
        textareas.forEach(textarea => {
            const minLength = textarea.getAttribute('minlength');
            const maxLength = textarea.getAttribute('maxlength');
            
            // Criar contador
            const counter = document.createElement('div');
            counter.className = 'character-counter';
            counter.style.cssText = `
                font-size: var(--tamanho-sm);
                color: var(--cor-texto-claro);
                text-align: right;
                margin-top: 4px;
            `;
            textarea.parentElement.appendChild(counter);

            // Atualizar contador
            const updateCounter = () => {
                const length = textarea.value.length;
                let text = `${length} caractere(s)`;
                
                if (minLength) {
                    const remaining = minLength - length;
                    if (remaining > 0) {
                        text += ` (mínimo: ${minLength})`;
                        counter.style.color = 'var(--cor-erro)';
                    } else {
                        counter.style.color = 'var(--cor-sucesso)';
                    }
                }
                
                if (maxLength) {
                    text += ` / ${maxLength}`;
                }
                
                counter.textContent = text;
            };

            textarea.addEventListener('input', updateCounter);
            updateCounter();
        });
    }
};

// ===================================
// 12. CONFIRMAÇÃO DE SAÍDA DO FORMULÁRIO
// ===================================

const FormExitConfirmation = {
    init: function() {
        const forms = document.querySelectorAll('form');
        
        forms.forEach(form => {
            let formModified = false;

            // Detectar mudanças no formulário
            form.addEventListener('input', () => {
                formModified = true;
            });

            // Resetar ao enviar
            form.addEventListener('submit', () => {
                formModified = false;
            });

            // Avisar ao sair
            window.addEventListener('beforeunload', (e) => {
                if (formModified) {
                    e.preventDefault();
                    e.returnValue = '';
                    return '';
                }
            });
        });
    }
};

// ===================================
// 13. BUSCA NO SITE
// ===================================

const SearchController = {
    init: function() {
        // Criar campo de busca se não existir
        this.createSearchBox();
    },

    createSearchBox: function() {
        const nav = document.querySelector('nav');
        if (nav && !document.getElementById('search-box')) {
            const searchHTML = `
                <div id="search-box" style="display: none; padding: var(--espacamento-sm);">
                    <input type="search" id="site-search" placeholder="Buscar no site..." 
                           style="width: 100%; padding: var(--espacamento-sm); border-radius: 4px; border: 2px solid var(--cor-cinza-claro);">
                    <div id="search-results" style="margin-top: var(--espacamento-sm);"></div>
                </div>
            `;
            nav.insertAdjacentHTML('afterend', searchHTML);
        }
    }
};

// ===================================
// 14. ACESSIBILIDADE
// ===================================

const AccessibilityController = {
    init: function() {
        this.createSkipLink();
        this.createThemeToggle();
        this.setupKeyboardNavigation();
        this.setupAriaLabels();
        this.checkColorSchemePreference();
    },

    // Criar link "Pular para o conteúdo"
    createSkipLink: function() {
        if (!document.querySelector('.skip-to-main')) {
            const skipLink = document.createElement('a');
            skipLink.href = '#main-content';
            skipLink.className = 'skip-to-main';
            skipLink.textContent = 'Pular para o conteúdo principal';
            document.body.insertBefore(skipLink, document.body.firstChild);

            // Adicionar ID ao main se não existir
            const main = document.querySelector('main');
            if (main && !main.id) {
                main.id = 'main-content';
            }
        }
    },

    // Criar botão de alternância de tema
    createThemeToggle: function() {
        if (!document.getElementById('theme-toggle')) {
            const button = document.createElement('button');
            button.id = 'theme-toggle';
            button.className = 'theme-toggle';
            button.innerHTML = '🌙';
            button.setAttribute('aria-label', 'Alternar tema escuro/claro');
            button.setAttribute('title', 'Alternar tema');
            
            document.body.appendChild(button);

            button.addEventListener('click', () => this.toggleTheme());
        }
    },

    // Alternar tema escuro/claro
    toggleTheme: function() {
        const body = document.body;
        const button = document.getElementById('theme-toggle');
        
        if (body.classList.contains('dark-mode')) {
            body.classList.remove('dark-mode');
            button.innerHTML = '🌙';
            button.setAttribute('aria-label', 'Ativar tema escuro');
            localStorage.setItem('theme', 'light');
        } else {
            body.classList.add('dark-mode');
            button.innerHTML = '☀️';
            button.setAttribute('aria-label', 'Ativar tema claro');
            localStorage.setItem('theme', 'dark');
        }
    },

    // Verificar preferência de tema salva
    checkColorSchemePreference: function() {
        const savedTheme = localStorage.getItem('theme');
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        
        if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
            document.body.classList.add('dark-mode');
            const button = document.getElementById('theme-toggle');
            if (button) {
                button.innerHTML = '☀️';
                button.setAttribute('aria-label', 'Ativar tema claro');
            }
        }
    },

    // Configurar navegação por teclado
    setupKeyboardNavigation: function() {
        // Tab trap em modals
        const modal = document.getElementById('modal');
        if (modal) {
            modal.addEventListener('keydown', (e) => {
                if (e.key === 'Tab') {
                    const focusableElements = modal.querySelectorAll(
                        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
                    );
                    const firstElement = focusableElements[0];
                    const lastElement = focusableElements[focusableElements.length - 1];

                    if (e.shiftKey && document.activeElement === firstElement) {
                        e.preventDefault();
                        lastElement.focus();
                    } else if (!e.shiftKey && document.activeElement === lastElement) {
                        e.preventDefault();
                        firstElement.focus();
                    }
                }
            });
        }

        // Atalhos de teclado
        document.addEventListener('keydown', (e) => {
            // Alt + M = Menu
            if (e.altKey && e.key === 'm') {
                e.preventDefault();
                const nav = document.querySelector('nav a');
                if (nav) nav.focus();
            }

            // Alt + C = Conteúdo principal
            if (e.altKey && e.key === 'c') {
                e.preventDefault();
                const main = document.querySelector('main');
                if (main) {
                    main.setAttribute('tabindex', '-1');
                    main.focus();
                }
            }

            // Alt + T = Alternar tema
            if (e.altKey && e.key === 't') {
                e.preventDefault();
                this.toggleTheme();
            }
        });
    },

    // Configurar ARIA labels automaticamente
    setupAriaLabels: function() {
        // Adicionar aria-label em links sem texto
        document.querySelectorAll('a:not([aria-label])').forEach(link => {
            if (!link.textContent.trim()) {
                const href = link.getAttribute('href');
                if (href) {
                    link.setAttribute('aria-label', `Link para ${href}`);
                }
            }
        });

        // Adicionar role em elementos interativos
        document.querySelectorAll('.card').forEach(card => {
            card.setAttribute('role', 'article');
        });

        // Marcar região principal
        const main = document.querySelector('main');
        if (main && !main.hasAttribute('role')) {
            main.setAttribute('role', 'main');
        }

        // Marcar navegação
        const navs = document.querySelectorAll('nav');
        navs.forEach(nav => {
            if (!nav.hasAttribute('role')) {
                nav.setAttribute('role', 'navigation');
            }
            if (!nav.hasAttribute('aria-label')) {
                nav.setAttribute('aria-label', 'Navegação principal');
            }
        });

        // Adicionar aria-required em campos obrigatórios
        document.querySelectorAll('[required]').forEach(field => {
            field.setAttribute('aria-required', 'true');
        });

        // Adicionar aria-invalid em campos com erro
        document.querySelectorAll('.error').forEach(field => {
            field.setAttribute('aria-invalid', 'true');
        });
    },

    // Anunciar mensagens para leitores de tela
    announceMessage: function(message, priority = 'polite') {
        let announcer = document.getElementById('aria-announcer');
        
        if (!announcer) {
            announcer = document.createElement('div');
            announcer.id = 'aria-announcer';
            announcer.className = 'sr-only';
            announcer.setAttribute('role', 'status');
            announcer.setAttribute('aria-live', priority);
            announcer.setAttribute('aria-atomic', 'true');
            document.body.appendChild(announcer);
        }

        announcer.textContent = message;

        // Limpar após 3 segundos
        setTimeout(() => {
            announcer.textContent = '';
        }, 3000);
    }
};

// ===================================
// 15. INICIALIZAÇÃO GLOBAL
// ===================================

// Executar quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', function() {
    console.log('Inicializando aplicação...');

    // Inicializar todos os módulos
    SPAController.init();
    FormValidator.init();
    InputMasks.init();
    MenuController.init();
    ModalController.init();
    SmoothScroll.init();
    LazyLoad.init();
    CharacterCounter.init();
    FormExitConfirmation.init();
    SearchController.init();
    AccessibilityController.init();

    console.log('Aplicação inicializada com sucesso!');

    // Exibir toast de boas-vindas
    setTimeout(() => {
        ToastController.show('Bem-vindo(a) ao site da ONG Ação Social!', 'sucesso');
        AccessibilityController.announceMessage('Bem-vindo ao site da ONG Ação Social');
    }, 1000);
});

// ===================================
// 15. FUNÇÕES UTILITÁRIAS GLOBAIS
// ===================================

// Função para formatar data
function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR');
}

// Função para formatar moeda
function formatCurrency(value) {
    return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(value);
}

// Detectar dispositivo móvel
function isMobile() {
    return window.innerWidth <= 576;
}

// Scroll para o topo
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Export para uso externo (se necessário)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        SPAController,
        FormValidator,
        MenuController,
        ModalController,
        ToastController,
        AlertController
    };
}