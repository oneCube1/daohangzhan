// 网站数据
const sitesData = [
    // 一、需求收集和关键词调研
    {
        title: "谷歌下拉词",
        url: "https://www.searchsuggest.tips/",
        description: "获取Google搜索建议关键词，辅助长尾词挖掘。",
        longDescription: "通过模拟用户真实搜索行为，捕捉搜索引擎自动补全结果。支持多语言和多地区设置，帮助精准定位目标市场搜索习惯。",
        category: "research"
    },
    {
        title: "Toolify 榜单",
        url: "https://www.toolify.ai",
        description: "追踪AI工具全球排名榜单，发现工具趋势。",
        longDescription: "提供详细的使用量、增长率和用户反馈等关键指标。定期更新最新AI产品数据，助力开发者把握市场动向。",
        category: "research"
    },
    {
        title: "AI 导航站的需求列表",
        url: "https://theresanaiforthat.com",
        description: "收录8000+AI工具，快速查找垂直领域解决方案。",
        longDescription: "按功能和应用场景精细分类，支持多维度筛选。为每个工具提供简洁评价和替代方案推荐，节省选型时间。",
        category: "research"
    },
    {
        title: "关键词难度",
        url: "https://ahrefs.com/keyword-difficulty",
        description: "分析关键词SEO竞争度，优化内容策略。",
        longDescription: "综合考量搜索量、点击率和竞争对手强度，给出0-100分难度评分。提供相关数据可视化图表，帮助快速识别低竞争高收益关键词。",
        category: "research"
    },

    // 二、上站必备工具
    // 域名查询类
    {
        title: "Lean Domain Search",
        url: "https://leandomainsearch.com",
        description: "基于关键词快速生成可用域名组合。",
        longDescription: "支持一次性检查数百个域名的可注册状态。提供域名质量评分系统，帮助筛选易记且符合品牌定位的选项。",
        category: "tools",
        subcategory: "domain_search"
    },
    {
        title: "Query Domains",
        url: "https://query.domains",
        description: "批量查询域名注册状态，支持多后缀筛选。",
        longDescription: "自动检测域名到期时间和注册信息，便于抢注过期域名。提供域名价值评估工具，帮助判断二级市场域名投资价值。",
        category: "tools",
        subcategory: "domain_search"
    },
    {
        title: "Instant Domain Search",
        url: "https://instantdomainsearch.com",
        description: "实时域名可用性检测，即时反馈结果。",
        longDescription: "优化搜索速度，相比传统域名查询快10倍以上。集成热门关键词建议功能，启发创意域名灵感。",
        category: "tools",
        subcategory: "domain_search"
    },
    // 域名注册
    {
        title: "Spaceship",
        url: "https://spaceship.com",
        description: "高性价比域名注册，支持分期付款。",
        longDescription: "提供域名托管一站式服务，包含域名保护和自动续费。客户支持响应迅速，适合初创企业和个人开发者。",
        category: "tools",
        subcategory: "domain_register"
    },
    {
        title: "Porkbun",
        url: "https://porkbun.com",
        description: "新用户优惠力度大，提供隐私保护服务。",
        longDescription: "支持大量新顶级域名（TLDs），价格极具竞争力。域名管理界面简洁直观，上手容易，操作便捷。",
        category: "tools",
        subcategory: "domain_register"
    },
    {
        title: "Namecheap",
        url: "https://namecheap.com",
        description: "老牌域名商，附带免费Whois隐私保护。",
        longDescription: "常年提供特价域名促销活动，性价比高。支持一键配置DNS和邮件转发，简化域名技术配置流程。",
        category: "tools",
        subcategory: "domain_register"
    },
    // 代码&网站托管
    {
        title: "GitHub",
        url: "https://github.com",
        description: "代码版本控制与开源项目托管平台。",
        longDescription: "提供强大的协作功能，包括问题跟踪、代码审查和项目管理。支持GitHub Pages免费静态网站托管，适合个人项目和文档站点。",
        category: "tools",
        subcategory: "code_hosting"
    },
    {
        title: "Cloudflare",
        url: "https://cloudflare.com",
        description: "一站式域名解析/CDN/边缘计算服务。",
        longDescription: "免费套餐即包含高级DDoS防护和SSL证书。支持Cloudflare Pages和Workers，实现高性能网站部署和无服务器计算。",
        category: "tools",
        subcategory: "code_hosting"
    },
    {
        title: "Vercel",
        url: "https://vercel.com/templates",
        description: "极速部署前端项目，支持Serverless函数。",
        longDescription: "自动优化静态资产和图像，改善网站性能。集成强大的CI/CD工作流，实现前端代码的无缝部署和版本控制。",
        category: "tools",
        subcategory: "code_hosting"
    },
    // 数据后台查看
    {
        title: "Google Search Console",
        url: "https://search.google.com/search-console",
        description: "监控网站在Google的收录与SEO表现。",
        longDescription: "提供详细的搜索流量数据，包括点击率、展示次数和平均排名。及时发现网站索引和移动兼容性问题，避免搜索排名下降。",
        category: "tools",
        subcategory: "analytics"
    },
    {
        title: "Google Analytics",
        url: "https://analytics.google.com",
        description: "分析网站流量来源与用户行为。",
        longDescription: "跟踪转化率和用户旅程路径，优化销售漏斗。提供自定义报告和实时数据监控，满足各类网站分析需求。",
        category: "tools",
        subcategory: "analytics"
    },
    {
        title: "Bing Webmaster Tools",
        url: "https://www.bing.com/webmasters",
        description: "必应搜索引擎的站长数据监测平台。",
        longDescription: "支持网站地图提交和URL检查工具，加速内容索引。提供SEO报告和竞争对手分析，拓展搜索引擎优化策略。",
        category: "tools",
        subcategory: "analytics"
    },

    // 三、竞品调研
    {
        title: "AITDK",
        url: "https://aitdk.com",
        description: "逆向解析竞品流量来源与关键词布局。",
        longDescription: "提供竞争对手网站技术栈和营销工具使用情况分析。跟踪竞品网站历史变化，洞察其策略调整和发展路径。",
        category: "competitor"
    },
    {
        title: "Ahrefs外链检测",
        url: "https://ahrefs.com/free-seo-tools",
        description: "免费查询网站外链数量与质量。",
        longDescription: "分析反向链接的权威性和相关性，识别有价值的链接资源。提供竞争对手外链对比，发现潜在的链接建设机会。",
        category: "competitor"
    },
    {
        title: "SEMrush",
        url: "https://semrush.com",
        description: "全方位竞品SEO/SEM数据监测与分析平台。",
        longDescription: "提供深入的关键词缺口分析和内容创作建议。可追踪竞争对手的广告投放策略和预算分配，优化自身营销资源。",
        category: "competitor"
    },

    // 四、上站模板
    // 通用开发框架
    {
        title: "Rin动态博客",
        url: "https://github.com/openRin/Rin",
        description: "基于Cloudflare生态的轻量化博客系统。",
        longDescription: "利用Cloudflare Workers实现全球CDN加速，页面加载速度极快。支持Markdown写作和自定义主题，方便内容创作和品牌个性化展示。",
        category: "templates"
    },
    {
        title: "Next.js Boilerplate",
        url: "https://github.com/ixartz/Next-js-Boilerplate",
        description: "Next.js全栈开发模板，支持多路由模式。",
        longDescription: "内置TypeScript、ESLint和Prettier规范代码质量。集成Tailwind CSS和Jest测试框架，加速开发流程和保障代码稳定性。",
        category: "templates"
    },
    {
        title: "SaaS Boilerplate",
        url: "https://github.com/ixartz/SaaS-Boilerplate",
        description: "集成Tailwind+Shadcn UI的SaaS项目脚手架。",
        longDescription: "预设用户认证、订阅支付和权限管理系统。提供完整的管理后台和客户门户界面，减少SaaS产品开发时间。",
        category: "templates"
    },
    {
        title: "Next-JS-Landing-Page",
        url: "https://github.com/ixartz/Next-JS-Landing-Page-Starter-Template",
        description: "快速搭建营销型单页应用的免费模板。",
        longDescription: "优化的SEO结构设计，有利于搜索引擎收录和排名。包含多个现代UI组件，如特性展示、价格表和联系表单等营销必备元素。",
        category: "templates"
    },
    {
        title: "Astro模板",
        url: "https://github.com/ixartz/Astro-boilerplate",
        description: "静态博客/作品集建站方案，SEO友好且响应式。",
        longDescription: "利用Astro.js的部分水合技术，实现极致的页面加载性能。支持多种内容管理方式，适合创作者和设计师展示作品。",
        category: "templates"
    },
    // 垂直场景模板
    {
        title: "Viggle AI WebUI",
        url: "https://github.com/ai-aigc-studio/Viggle-AI-WebUI",
        description: "开源AI视频生成工具客户端。",
        longDescription: "支持多种AI模型接入，包括文本转视频和图像增强功能。提供友好的用户界面和批处理能力，降低AI视频创作门槛。",
        category: "templates"
    },
    {
        title: "HuntScreens",
        url: "https://github.com/daimajia/huntscreens",
        description: "自动截取ProductHunt/YC新品截图工具。",
        longDescription: "定时抓取最新产品页面，生成高质量展示图。支持自定义截图规则和输出格式，方便竞品分析和灵感收集。",
        category: "templates"
    },
    {
        title: "Smart Excel AI",
        url: "https://github.com/weijunext/smart-excel-ai",
        description: "通过AI生成复杂Excel公式的自动化工具。",
        longDescription: "支持自然语言描述转换为精确Excel函数。包含大量预设模板和实用案例，帮助非技术用户掌握数据分析技能。",
        category: "templates"
    },
    {
        title: "Green Screen Creator",
        url: "https://github.com/replicate/green-screen-creator",
        description: "视频背景绿幕替换与物体追踪工具。",
        longDescription: "无需专业摄影设备，通过AI自动分离前景和背景。支持实时预览和批量处理，适合内容创作者和营销团队使用。",
        category: "templates"
    },
    // SaaS专用模板
    {
        title: "Open SaaS",
        url: "https://github.com/wasp-lang/open-saas",
        description: "React+Node.js全栈开源SaaS基础框架。",
        longDescription: "使用Wasp语言简化后端开发，自动生成API和数据模型。内置多租户架构和用户管理系统，加速SaaS产品开发周期。",
        category: "templates"
    },
    {
        title: "JustShip",
        url: "https://github.com/ocluf/justship",
        description: "集成数据库/邮件/分析的SvelteKit SaaS模板。",
        longDescription: "配置Stripe支付网关和用户订阅管理系统。提供完整的用户生命周期管理功能，从注册到计费全流程覆盖。",
        category: "templates"
    },
    {
        title: "Supanuxt SaaS",
        url: "https://github.com/JavascriptMick/supanuxt-saas",
        description: "Nuxt3 + Supabase的全栈SaaS启动模板。",
        longDescription: "利用Supabase简化后端开发，包含认证和实时数据库功能。提供团队协作和权限管理系统，适合构建多用户SaaS应用。",
        category: "templates"
    },
    {
        title: "SaaSFly",
        url: "https://github.com/saasfly/saasfly",
        description: "支持Bun生态的Next.js SaaS快速启动模板。",
        longDescription: "采用Bun运行时提升开发和构建速度，比Node.js更高效。内置国际化支持和深色模式切换，提升用户体验和市场覆盖面。",
        category: "templates"
    },
    // 导航站模板
    {
        title: "Fre123导航站",
        url: "https://github.com/fre123-com/fre123-nav",
        description: "一键搭建免费资源聚合导航平台。",
        longDescription: "支持分类管理和自定义标签系统，结构清晰易用。内置SEO优化功能和站点地图生成器，提高搜索引擎可见性。",
        category: "templates"
    },
    {
        title: "WebStack静态导航",
        url: "https://github.com/WebStackPage/WebStackPage.github.io",
        description: "开源响应式导航站，支持自定义分类。",
        longDescription: "优雅的卡片式布局设计，适配各种屏幕尺寸。无需数据库，纯静态部署，维护成本低且加载速度快。",
        category: "templates"
    },
    {
        title: "Tap4 AI导航",
        url: "https://github.com/6677-ai/tap4-ai-webui",
        description: "开源AI工具目录建站方案，含数据管理后台。",
        longDescription: "专为AI工具分类设计，包含评分和评论系统。支持用户提交和审核流程，实现社区驱动的内容更新。",
        category: "templates"
    },
    {
        title: "GPTS Works",
        url: "https://github.com/all-in-aigc/gpts-works",
        description: "第三方GPTs商店模板，支持自定义AI应用展示。",
        longDescription: "提供GPT模型详细介绍和使用场景说明页面。包含评分和热门排行系统，帮助用户发现优质AI应用。",
        category: "templates"
    },

    // 五、资讯部分
    {
        title: "Reddit子社区",
        url: "https://liberating-doll-b8a.notion.site/Reddit-1a8e8aed91b18021839ecba8b74e530b",
        description: "聚合高活跃度创业讨论子版块。",
        longDescription: "精选初创企业和独立开发者常用Reddit社区资源。提供每个社区的特点、受众和参与指南，帮助精准投放内容。",
        category: "info"
    },
    {
        title: "谷歌SEO指南",
        url: "https://developers.google.com/search/docs/fundamentals/creating-helpful-content?hl=zh-cn",
        description: "官方发布的搜索引擎优化最佳实践文档。",
        longDescription: "详细讲解Google如何评估和排序网站内容质量。提供技术和内容双重优化方法，帮助提升自然搜索流量。",
        category: "info"
    },
    {
        title: "Ahrefs趋势网站",
        url: "https://ahrefs.com/websites#trending",
        description: "追踪全球流量增长最快的网站榜单。",
        longDescription: "提供流量来源分析和增长率数据，发现新兴网站趋势。可按行业和地区筛选，精准把握垂直领域发展动向。",
        category: "info"
    },
    {
        title: "AI视频SaaS工具库",
        url: "https://docs.google.com/spreadsheets/d/1QOdqq9KbjQj1JZO43vc1pir2rnEEsMUXzTDATrOCn2k/edit?gid=0",
        description: "200+AI视频工具商业模型分析表。",
        longDescription: "详细对比各工具的定价策略、功能特点和目标用户群。提供市场空白点分析，帮助创业者找到产品差异化机会。",
        category: "info"
    },
    {
        title: "500美元月收案例",
        url: "https://www.500mrr.com/",
        description: "收录个人开发者小规模盈利项目参考。",
        longDescription: "每个案例包含完整的创业历程和变现策略分享。提供具体的营销渠道和用户获取方法，适合副业创业者参考。",
        category: "info"
    },
    {
        title: "Hacker News讨论帖",
        url: "https://news.ycombinator.com/item?id=42373343",
        description: "2024年月入500美元副业项目经验分享。",
        longDescription: "汇集众多开发者的实战经验和教训，内容真实可靠。提供多种不同技术栈和商业模式的小型创业案例，覆盖面广。",
        category: "info"
    }
];

// DOM元素
const searchInput = document.getElementById('searchInput');
const cardsContainer = document.getElementById('cards-container');
const tabButtons = document.querySelectorAll('.tab-btn');

// 初始化页面
document.addEventListener('DOMContentLoaded', () => {
    renderCards(sitesData);
    setupEventListeners();
});

// 设置事件监听器
function setupEventListeners() {
    // 分类标签点击
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            // 更新活动状态
            tabButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            // 过滤和渲染
            const category = button.getAttribute('data-category');
            if (category === 'all') {
                renderCards(sitesData);
            } else {
                const filteredSites = sitesData.filter(site => site.category === category);
                renderCards(filteredSites);
            }
        });
    });
    
    // 搜索框
    searchInput.addEventListener('input', debounce(() => {
        const searchTerm = searchInput.value.trim().toLowerCase();
        if (searchTerm === '') {
            // 如果搜索框为空，显示当前选中分类的所有卡片
            const activeCategory = document.querySelector('.tab-btn.active').getAttribute('data-category');
            if (activeCategory === 'all') {
                renderCards(sitesData);
            } else {
                const filteredSites = sitesData.filter(site => site.category === activeCategory);
                renderCards(filteredSites);
            }
            return;
        }
        
        // 执行搜索
        const searchResults = sitesData.filter(site => {
            return (
                site.title.toLowerCase().includes(searchTerm) ||
                site.description.toLowerCase().includes(searchTerm) ||
                site.longDescription.toLowerCase().includes(searchTerm) ||
                site.url.toLowerCase().includes(searchTerm)
            );
        });
        
        renderCards(searchResults);
    }, 300));

    // 卡片展开/收起
    document.addEventListener('click', (e) => {
        if (e.target && e.target.classList.contains('toggle-details')) {
            const card = e.target.closest('.card');
            card.classList.toggle('expanded');
            
            // 更新按钮文本
            if (card.classList.contains('expanded')) {
                e.target.innerHTML = '收起详情 <i class="fas fa-chevron-up"></i>';
            } else {
                e.target.innerHTML = '展开详情 <i class="fas fa-chevron-down"></i>';
            }
        }
    });
}

// 防抖函数
function debounce(func, delay) {
    let timeout;
    return function() {
        const context = this;
        const args = arguments;
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(context, args), delay);
    };
}

// 渲染卡片
function renderCards(sites) {
    // 清空容器
    cardsContainer.innerHTML = '';
    
    // 检查是否有结果
    if (sites.length === 0) {
        cardsContainer.innerHTML = '<div class="no-results">没有找到匹配的网站</div>';
        return;
    }
    
    // 如果是工具分类且不是搜索结果，则按子分类组织
    const activeCategory = document.querySelector('.tab-btn.active')?.getAttribute('data-category');
    
    if (activeCategory === 'tools' && searchInput.value.trim() === '') {
        // 定义子分类信息
        const subcategories = [
            {
                id: 'domain_search',
                title: '1. 域名查询类',
                description: '搜索和检查可用域名的工具，帮助你找到理想的网站域名。'
            },
            {
                id: 'domain_register',
                title: '2. 域名注册',
                description: '提供域名注册、管理和保护服务的域名注册商。'
            },
            {
                id: 'code_hosting',
                title: '3. 代码&网站托管',
                description: '代码存储、版本控制和网站部署服务，支持前端项目和静态网站。'
            },
            {
                id: 'analytics',
                title: '4. 数据后台查看',
                description: '网站流量分析、搜索表现监测和用户行为跟踪工具。'
            }
        ];
        
        // 按子分类渲染
        subcategories.forEach(subcategory => {
            const subcategorySites = sites.filter(site => site.subcategory === subcategory.id);
            
            if (subcategorySites.length > 0) {
                const sectionElement = document.createElement('div');
                sectionElement.className = 'subcategory-section';
                
                sectionElement.innerHTML = `
                    <h2 class="subcategory-title">${subcategory.title}</h2>
                    <p class="subcategory-description">${subcategory.description}</p>
                    <div class="subcategory-container" id="${subcategory.id}-container"></div>
                `;
                
                cardsContainer.appendChild(sectionElement);
                
                // 渲染子分类下的卡片
                const subcategoryContainer = document.getElementById(`${subcategory.id}-container`);
                subcategorySites.forEach(site => {
                    const card = createCardElement(site);
                    subcategoryContainer.appendChild(card);
                });
            }
        });
    } else {
        // 基本卡片渲染逻辑（用于其他分类或搜索结果）
        sites.forEach(site => {
            const card = createCardElement(site);
            cardsContainer.appendChild(card);
        });
    }
}

// 创建卡片元素
function createCardElement(site) {
    const card = document.createElement('div');
    card.className = 'card';
    
    // 获取分类显示名称
    let categoryDisplay = '';
    switch(site.category) {
        case 'research':
            categoryDisplay = '需求调研';
            break;
        case 'tools':
            categoryDisplay = '上站工具';
            break;
        case 'competitor':
            categoryDisplay = '竞品调研';
            break;
        case 'templates':
            categoryDisplay = '上站模板';
            break;
        case 'info':
            categoryDisplay = '资讯';
            break;
        default:
            categoryDisplay = '其他';
    }
    
    // 获取子分类标签（如果存在）
    let subcategoryTag = '';
    if (site.subcategory) {
        let subcategoryName = '';
        switch(site.subcategory) {
            case 'domain_search':
                subcategoryName = '域名查询';
                break;
            case 'domain_register':
                subcategoryName = '域名注册';
                break;
            case 'code_hosting':
                subcategoryName = '网站托管';
                break;
            case 'analytics':
                subcategoryName = '数据分析';
                break;
        }
        subcategoryTag = `<span class="subcategory-tag">${subcategoryName}</span>`;
    }
    
    card.innerHTML = `
        <div class="card-content">
            <span class="card-category">${categoryDisplay}${subcategoryTag}</span>
            <h3 class="card-title">${site.title}</h3>
            <p class="card-description">${site.description}</p>
            <div class="card-details">
                <p>${site.longDescription}</p>
            </div>
            <div class="card-footer">
                <button class="toggle-details">展开详情 <i class="fas fa-chevron-down"></i></button>
                <a href="${site.url}" class="card-link" target="_blank">访问网站 <i class="fas fa-external-link-alt"></i></a>
            </div>
        </div>
    `;
    
    return card;
} 
