-- Create storage bucket for public images
INSERT INTO storage.buckets (id, name, public) VALUES ('public-images', 'public-images', true);

-- Create storage policies for public images
CREATE POLICY "Public images are publicly accessible" 
ON storage.objects 
FOR SELECT 
USING (bucket_id = 'public-images');

CREATE POLICY "Anyone can upload to public images" 
ON storage.objects 
FOR INSERT 
WITH CHECK (bucket_id = 'public-images');

-- Seed sections and translations for Home page
DO $$
DECLARE
    home_page_id UUID;
    hero_section_id UUID;
    hub_cards_section_id UUID;
    values_section_id UUID;
    about_page_id UUID;
    about_hero_section_id UUID;
    timeline_section_id UUID;
    arms_page_id UUID;
    arms_grid_section_id UUID;
BEGIN
    -- Get page IDs
    SELECT id INTO home_page_id FROM pages WHERE slug = 'home';
    SELECT id INTO about_page_id FROM pages WHERE slug = 'about';
    SELECT id INTO arms_page_id FROM pages WHERE slug = 'arms';

    -- Create sections for Home page
    INSERT INTO sections (page_id, component_type, ordering) 
    VALUES (home_page_id, 'hero', 1) RETURNING id INTO hero_section_id;
    
    INSERT INTO sections (page_id, component_type, ordering) 
    VALUES (home_page_id, 'hub-cards', 2) RETURNING id INTO hub_cards_section_id;
    
    INSERT INTO sections (page_id, component_type, ordering) 
    VALUES (home_page_id, 'values', 3) RETURNING id INTO values_section_id;

    -- Create sections for About page
    INSERT INTO sections (page_id, component_type, ordering) 
    VALUES (about_page_id, 'hero', 1) RETURNING id INTO about_hero_section_id;
    
    INSERT INTO sections (page_id, component_type, ordering) 
    VALUES (about_page_id, 'timeline', 2) RETURNING id INTO timeline_section_id;

    -- Create sections for Arms page
    INSERT INTO sections (page_id, component_type, ordering) 
    VALUES (arms_page_id, 'domain-grid', 1) RETURNING id INTO arms_grid_section_id;

    -- Insert translations for Home Hero section
    INSERT INTO translations (section_id, lang_code, content) VALUES
    (hero_section_id, 'en', '{
        "title": "Building the Future of Technology",
        "subtitle": "Democratizing innovation through inclusive, accessible solutions that empower diverse communities and promote social equity.",
        "primaryCta": {
            "text": "Start Your Project",
            "url": "https://monynha.online"
        },
        "secondaryCta": {
            "text": "Explore Our Ecosystem",
            "url": "/arms"
        }
    }'),
    (hero_section_id, 'pt-br', '{
        "title": "Construindo o Futuro da Tecnologia",
        "subtitle": "Democratizando a inovação através de soluções inclusivas e acessíveis que empoderam comunidades diversas e promovem equidade social.",
        "primaryCta": {
            "text": "Comece Seu Projeto",
            "url": "https://monynha.online"
        },
        "secondaryCta": {
            "text": "Explore Nosso Ecossistema",
            "url": "/arms"
        }
    }');

    -- Insert translations for Home Hub Cards section
    INSERT INTO translations (section_id, lang_code, content) VALUES
    (hub_cards_section_id, 'en', '{
        "title": "Monynha Ecosystem",
        "subtitle": "Integrated platforms powering innovation and community",
        "cards": [
            {
                "icon": "Code",
                "title": "Tech Hub",
                "description": "Development platform for building scalable applications",
                "url": "https://monynha.online"
            },
            {
                "icon": "Store",
                "title": "Store",
                "description": "Marketplace for digital products and services",
                "url": "https://store.monynha.me"
            },
            {
                "icon": "Globe",
                "title": "Platform",
                "description": "Infrastructure and tools for digital transformation",
                "url": "https://platform.monynha.me"
            },
            {
                "icon": "Users",
                "title": "Community",
                "description": "Connect with developers and creators worldwide",
                "url": "https://community.monynha.me"
            }
        ]
    }'),
    (hub_cards_section_id, 'pt-br', '{
        "title": "Ecossistema Monynha",
        "subtitle": "Plataformas integradas potencializando inovação e comunidade",
        "cards": [
            {
                "icon": "Code",
                "title": "Hub Tecnológico",
                "description": "Plataforma de desenvolvimento para aplicações escaláveis",
                "url": "https://monynha.online"
            },
            {
                "icon": "Store",
                "title": "Loja",
                "description": "Marketplace para produtos e serviços digitais",
                "url": "https://store.monynha.me"
            },
            {
                "icon": "Globe",
                "title": "Plataforma",
                "description": "Infraestrutura e ferramentas para transformação digital",
                "url": "https://platform.monynha.me"
            },
            {
                "icon": "Users",
                "title": "Comunidade",
                "description": "Conecte-se com desenvolvedores e criadores mundialmente",
                "url": "https://community.monynha.me"
            }
        ]
    }');

    -- Insert translations for Home Values section
    INSERT INTO translations (section_id, lang_code, content) VALUES
    (values_section_id, 'en', '{
        "title": "Our Core Values",
        "values": [
            {
                "icon": "Heart",
                "title": "Inclusion",
                "description": "Technology that celebrates diversity and empowers all communities"
            },
            {
                "icon": "Shield",
                "title": "Resistance",
                "description": "Standing against inequality through technological democratization"
            },
            {
                "icon": "Zap",
                "title": "Innovation",
                "description": "Pushing boundaries to create accessible solutions for everyone"
            }
        ]
    }'),
    (values_section_id, 'pt-br', '{
        "title": "Nossos Valores Fundamentais",
        "values": [
            {
                "icon": "Heart",
                "title": "Inclusão",
                "description": "Tecnologia que celebra a diversidade e empodera todas as comunidades"
            },
            {
                "icon": "Shield",
                "title": "Resistência",
                "description": "Lutando contra a desigualdade através da democratização tecnológica"
            },
            {
                "icon": "Zap",
                "title": "Inovação",
                "description": "Expandindo limites para criar soluções acessíveis para todos"
            }
        ]
    }');

    -- Insert translations for About Hero section
    INSERT INTO translations (section_id, lang_code, content) VALUES
    (about_hero_section_id, 'en', '{
        "title": "About Monynha",
        "subtitle": "More than technology—we embody resistance, pride, and technological democratization. Our identity celebrates diversity, LGBTQIA+ culture, and Brazilian peripheral origins.",
        "description": "We speak directly to underrepresented communities, promoting open and accessible technology for all. Through our integrated ecosystem of platforms, we''re building a more inclusive digital future."
    }'),
    (about_hero_section_id, 'pt-br', '{
        "title": "Sobre a Monynha",
        "subtitle": "Mais que tecnologia—incorporamos resistência, orgulho e democratização tecnológica. Nossa identidade celebra diversidade, cultura LGBTQIA+ e origens periféricas brasileiras.",
        "description": "Falamos diretamente com comunidades sub-representadas, promovendo tecnologia aberta e acessível para todos. Através do nosso ecossistema integrado de plataformas, estamos construindo um futuro digital mais inclusivo."
    }');

    -- Insert translations for About Timeline section
    INSERT INTO translations (section_id, lang_code, content) VALUES
    (timeline_section_id, 'en', '{
        "title": "Our Journey",
        "events": [
            {
                "year": "2020",
                "title": "Foundation",
                "description": "Started as a vision to democratize technology for underrepresented communities"
            },
            {
                "year": "2021",
                "title": "First Platform",
                "description": "Launched our development hub, empowering creators with accessible tools"
            },
            {
                "year": "2022",
                "title": "Community Growth",
                "description": "Built a thriving community of diverse developers and innovators"
            },
            {
                "year": "2023",
                "title": "Ecosystem Expansion",
                "description": "Integrated multiple platforms to create a comprehensive tech ecosystem"
            },
            {
                "year": "2024",
                "title": "Global Impact",
                "description": "Reaching communities worldwide with inclusive technology solutions"
            }
        ]
    }'),
    (timeline_section_id, 'pt-br', '{
        "title": "Nossa Jornada",
        "events": [
            {
                "year": "2020",
                "title": "Fundação",
                "description": "Começou como uma visão para democratizar tecnologia para comunidades sub-representadas"
            },
            {
                "year": "2021",
                "title": "Primeira Plataforma",
                "description": "Lançamos nosso hub de desenvolvimento, empoderando criadores com ferramentas acessíveis"
            },
            {
                "year": "2022",
                "title": "Crescimento da Comunidade",
                "description": "Construímos uma comunidade próspera de desenvolvedores e inovadores diversos"
            },
            {
                "year": "2023",
                "title": "Expansão do Ecossistema",
                "description": "Integramos múltiplas plataformas para criar um ecossistema tecnológico abrangente"
            },
            {
                "year": "2024",
                "title": "Impacto Global",
                "description": "Alcançando comunidades mundialmente com soluções tecnológicas inclusivas"
            }
        ]
    }');

    -- Insert translations for Arms Grid section
    INSERT INTO translations (section_id, lang_code, content) VALUES
    (arms_grid_section_id, 'en', '{
        "title": "Monynha Arms",
        "subtitle": "Six interconnected domains powering the future of technology",
        "domains": [
            {
                "icon": "Code",
                "title": "Development Hub",
                "description": "Core platform for building and deploying applications",
                "url": "https://monynha.online",
                "color": "primary"
            },
            {
                "icon": "Store",
                "title": "Marketplace",
                "description": "Digital products and services ecosystem",
                "url": "https://store.monynha.me",
                "color": "secondary"
            },
            {
                "icon": "Globe",
                "title": "Platform",
                "description": "Infrastructure and enterprise solutions",
                "url": "https://platform.monynha.me",
                "color": "accent"
            },
            {
                "icon": "Users",
                "title": "Community",
                "description": "Developer and creator community hub",
                "url": "https://community.monynha.me",
                "color": "primary"
            },
            {
                "icon": "BookOpen",
                "title": "Documentation",
                "description": "Comprehensive guides and API references",
                "url": "https://docs.monynha.me",
                "color": "secondary"
            },
            {
                "icon": "Zap",
                "title": "Innovation Lab",
                "description": "Experimental features and cutting-edge research",
                "url": "https://lab.monynha.me",
                "color": "accent"
            }
        ]
    }'),
    (arms_grid_section_id, 'pt-br', '{
        "title": "Braços da Monynha",
        "subtitle": "Seis domínios interconectados potencializando o futuro da tecnologia",
        "domains": [
            {
                "icon": "Code",
                "title": "Hub de Desenvolvimento",
                "description": "Plataforma central para construir e implantar aplicações",
                "url": "https://monynha.online",
                "color": "primary"
            },
            {
                "icon": "Store",
                "title": "Marketplace",
                "description": "Ecossistema de produtos e serviços digitais",
                "url": "https://store.monynha.me",
                "color": "secondary"
            },
            {
                "icon": "Globe",
                "title": "Plataforma",
                "description": "Infraestrutura e soluções empresariais",
                "url": "https://platform.monynha.me",
                "color": "accent"
            },
            {
                "icon": "Users",
                "title": "Comunidade",
                "description": "Hub da comunidade de desenvolvedores e criadores",
                "url": "https://community.monynha.me",
                "color": "primary"
            },
            {
                "icon": "BookOpen",
                "title": "Documentação",
                "description": "Guias abrangentes e referências de API",
                "url": "https://docs.monynha.me",
                "color": "secondary"
            },
            {
                "icon": "Zap",
                "title": "Laboratório de Inovação",
                "description": "Recursos experimentais e pesquisa de ponta",
                "url": "https://lab.monynha.me",
                "color": "accent"
            }
        ]
    }');

END $$;

-- Insert sample products
INSERT INTO products (key, default_lang, hero_image, demo_url, is_published) VALUES
('boteco-pro', 'en', '/images/products/boteco-pro-hero.jpg', 'https://demo.boteco.pro', true),
('barnostri', 'en', '/images/products/barnostri-hero.jpg', 'https://demo.barnostri.com', true),
('assistina', 'en', '/images/products/assistina-hero.jpg', 'https://demo.assistina.com', true);

-- Insert product translations
DO $$
DECLARE
    boteco_id UUID;
    barnostri_id UUID;
    assistina_id UUID;
BEGIN
    SELECT id INTO boteco_id FROM products WHERE key = 'boteco-pro';
    SELECT id INTO barnostri_id FROM products WHERE key = 'barnostri';
    SELECT id INTO assistina_id FROM products WHERE key = 'assistina';

    -- Boteco Pro translations
    INSERT INTO product_translations (product_id, lang_code, name, description, features, faq) VALUES
    (boteco_id, 'en', 'Boteco Pro', 'Advanced bar and restaurant management system with real-time analytics and inventory control.', 
     '[{"title": "Real-time Analytics", "description": "Track sales and performance metrics in real-time"}, {"title": "Inventory Management", "description": "Automated stock control and reorder notifications"}, {"title": "Staff Management", "description": "Schedule shifts and track employee performance"}]',
     '[{"question": "How does inventory tracking work?", "answer": "Our system automatically tracks inventory levels and sends alerts when items are running low."}, {"question": "Can I integrate with existing POS systems?", "answer": "Yes, Boteco Pro integrates with most major POS systems through our API."}]'),
    (boteco_id, 'pt-br', 'Boteco Pro', 'Sistema avançado de gestão para bares e restaurantes com análises em tempo real e controle de estoque.',
     '[{"title": "Análises em Tempo Real", "description": "Acompanhe vendas e métricas de performance em tempo real"}, {"title": "Gestão de Estoque", "description": "Controle automatizado de estoque e notificações de reposição"}, {"title": "Gestão de Equipe", "description": "Agenda turnos e acompanha performance dos funcionários"}]',
     '[{"question": "Como funciona o rastreamento de estoque?", "answer": "Nosso sistema rastreia automaticamente os níveis de estoque e envia alertas quando os itens estão acabando."}, {"question": "Posso integrar com sistemas POS existentes?", "answer": "Sim, o Boteco Pro integra com a maioria dos principais sistemas POS através da nossa API."}]');

    -- Barnostri translations
    INSERT INTO product_translations (product_id, lang_code, name, description, features, faq) VALUES
    (barnostri_id, 'en', 'Barnostri', 'Community-driven platform for connecting local businesses with their neighborhoods.',
     '[{"title": "Local Discovery", "description": "Help customers find and connect with local businesses"}, {"title": "Community Features", "description": "Build stronger relationships between businesses and customers"}, {"title": "Event Management", "description": "Organize and promote local events and activities"}]',
     '[{"question": "How do I list my business?", "answer": "Simply create an account and follow our business verification process."}, {"question": "Is there a fee for using Barnostri?", "answer": "Basic listings are free, with premium features available for a small monthly fee."}]'),
    (barnostri_id, 'pt-br', 'Barnostri', 'Plataforma comunitária para conectar negócios locais com seus bairros.',
     '[{"title": "Descoberta Local", "description": "Ajude clientes a encontrar e conectar com negócios locais"}, {"title": "Recursos Comunitários", "description": "Construa relacionamentos mais fortes entre negócios e clientes"}, {"title": "Gestão de Eventos", "description": "Organize e promova eventos e atividades locais"}]',
     '[{"question": "Como faço para listar meu negócio?", "answer": "Simplesmente crie uma conta e siga nosso processo de verificação de negócios."}, {"question": "Há uma taxa para usar o Barnostri?", "answer": "Listagens básicas são gratuitas, com recursos premium disponíveis por uma pequena taxa mensal."}]');

    -- Assistina translations
    INSERT INTO product_translations (product_id, lang_code, name, description, features, faq) VALUES
    (assistina_id, 'en', 'Assistina', 'AI-powered virtual assistant for small businesses and entrepreneurs.',
     '[{"title": "Smart Automation", "description": "Automate routine tasks and workflows"}, {"title": "Customer Support", "description": "24/7 AI-powered customer service"}, {"title": "Analytics Dashboard", "description": "Comprehensive business insights and reporting"}]',
     '[{"question": "What languages does Assistina support?", "answer": "Assistina currently supports English, Portuguese, Spanish, and French."}, {"question": "Can Assistina integrate with my existing tools?", "answer": "Yes, we offer integrations with popular business tools and platforms."}]'),
    (assistina_id, 'pt-br', 'Assistina', 'Assistente virtual com IA para pequenas empresas e empreendedores.',
     '[{"title": "Automação Inteligente", "description": "Automatize tarefas rotineiras e fluxos de trabalho"}, {"title": "Suporte ao Cliente", "description": "Atendimento ao cliente 24/7 com IA"}, {"title": "Dashboard de Análises", "description": "Insights abrangentes de negócios e relatórios"}]',
     '[{"question": "Quais idiomas a Assistina suporta?", "answer": "A Assistina atualmente suporta inglês, português, espanhol e francês."}, {"question": "A Assistina pode integrar com minhas ferramentas existentes?", "answer": "Sim, oferecemos integrações com ferramentas e plataformas de negócios populares."}]');

END $$;