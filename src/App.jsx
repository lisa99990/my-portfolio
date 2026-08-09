import { useState, useEffect } from 'react'
import './App.css'
import img1 from './assets/Evolution of AI 1.jpg'
import img2 from './assets/Evolution of AI 2.jpg'
import img3 from './assets/Evolution of AI 3.jpg'
import img4 from './assets/Evolution of AI 4.jpg'
import pdfMLvsDL from './assets/Machine Learning vs Deep Learning.pdf'
import pdfAdapting from './assets/Adapting to Challenges PDF.pdf'
import pdfCommunication from './assets/pdfCommunication.pdf'
import pdfResearch from './assets/AI Model Verification and Validation .pdf'
import pdfNewsletter from './assets/Newsletter on Commercial Usage of AI.pdf'

const artifacts = [
  {
    title: 'Evolution of AI (1943–2026): A Historical Timeline',
    preview:
      'A researched, visually organized timeline tracing AI from its origins in 1943 to today’s reasoning-focused systems.',
    highlights: ['Research-driven', 'Visual storytelling', 'AI history'],
    introduction:
      "Artificial Intelligence did not emerge overnight, it is the product of over eighty years of theoretical breakthroughs, technical failures, funding collapses, and periodic leaps forward. This artifact presents a researched, visually organized timeline tracing AI's development from its mathematical origins in 1943 through the current era of autonomous, reasoning-capable AI systems in 2026.",
    description:
      "This is a designed digital timeline covering major milestones in AI history, including the creation of the first artificial neuron models, the Turing Test, the Dartmouth Conference, both AI winters, the rise of expert systems, the backpropagation breakthrough, the transformer architecture, and the recent emergence of large language models and autonomous AI agents. Each milestone entry includes the year, a title, and a brief explanation of its significance to the broader field. The timeline concludes with a full reference list crediting the academic and industry sources used.",
    objective:
      "To research, design, and present a comprehensive timeline that highlights the key milestones, influential figures, and pivotal moments in AI's evolution, including the historical context behind AI winters and the advancements driven by deep learning and cloud computing, in order to demonstrate research synthesis skills and build a deeper, historically grounded understanding of the field and its impact on industry.",
    process:
      "I began by researching credible academic and industry sources covering AI's history, including Our World in Data, IBM, IEEE Computer Society, and primary sources such as Turing's 1950 paper \"Computing Machinery and Intelligence\" and Vaswani et al.'s 2017 \"Attention Is All You Need.\" I identified and cross-referenced key milestones spanning 1943 to 2026, paying attention to cause-and-effect relationships within the field's history, for example, how the 1973 Lighthill Report contributed to funding cuts and the first AI winter, or how the 2017 transformer architecture enabled the rapid development of large language models. I then organized these milestones chronologically and designed the timeline visually in Canva for readability, using consistent formatting for dates, headlines, and descriptions. Finally, I compiled a full reference list and used Grammarly to proofread the final text.",
    tools:
      "Canva (design and layout), research drawn from Our World in Data, IBM, IEEE Computer Society, and Coursera, plus primary academic sources (Turing, 1950; Vaswani et al., 2017). AI tools (Claude, ChatGPT) supported research and organization, and Grammarly was used for proofreading.",
    value:
      "Unique Value: This artifact demonstrates my ability to research and synthesize complex technical history from multiple credible sources into a clear, visually accessible narrative. More importantly, it shows that I understand AI's cyclical patterns, including how overhyped expectations led to real funding collapses during the AI winters, which gives me a historically grounded perspective on today's AI developments rather than a hype-driven one. This combination of research rigor and design clarity is a skill that translates directly into technical writing, onboarding materials, and stakeholder communication.\n\nRelevance: For employers, collaborators, or teams working in AI/ML, this artifact is relevant because it signals I can distill complex, fast-moving technical fields into content that both technical and non-technical audiences can understand. This is directly useful in roles involving training, documentation, technical communication, or any context where a team needs to be brought up to speed on why the field has evolved the way it has.",
    link: 'https://canva.link/zjrlt0ojs4hkiox',
    references: [
      'Bender, E., & Our World in Data. (2022, December 6). A brief history of artificial intelligence. Our World in Data. https://ourworldindata.org/brief-history-of-ai',
      'Coursera. (2026, April 22). The history of artificial intelligence. https://www.coursera.org/articles/history-of-ai',
      'IBM. (n.d.). The history of artificial intelligence. https://www.ibm.com/think/topics/history-of-artificial-intelligence',
      'IEEE Computer Society. (2025, March 11). The evolution of AI: From foundations to future prospects. https://www.computer.org/publications/tech-news/research/evolution-of-ai',
      'McCarthy, J., Minsky, M. L., Rochester, N., & Shannon, C. E. (1955). A proposal for the Dartmouth Summer Research Project on Artificial Intelligence. Dartmouth College.',
      'OpenAI. (2023). GPT-4 technical report. arXiv. https://arxiv.org/abs/2303.08774',
      'Russell, S., & Norvig, P. (2021). Artificial intelligence: A modern approach (4th ed.). Pearson.',
      'Swiss Cyber Institute. (2026, January 21). History of artificial intelligence. https://swisscyberinstitute.com/blog/history-artificial-intelligence/',
      "Turing, A. M. (1950). Computing machinery and intelligence. Mind, 59(236), 433–460. https://doi.org/10.1093/mind/LIX.236.433",
      'Vaswani, A., Shazeer, N., Parmar, N., Uszkoreit, J., Jones, L., Gomez, A. N., Kaiser, Ł., & Polosukhin, I. (2017). Attention is all you need. Advances in Neural Information Processing Systems, 30.'
    ],
    images: [img1, img2, img3, img4],
  },
  {
    title: 'Comparative Analysis of Machine Learning and Deep Learning Applications',
    preview:
      'A formal APA-style report comparing traditional machine learning and deep learning through real-world applications in housing and autonomous navigation.',
    highlights: ['APA report', 'AI comparison', 'Practical analysis'],
    introduction:
      'This report explores the fundamental distinctions between traditional machine learning (ML) and deep learning (DL), two pillars of modern artificial intelligence. It contrasts their operational approaches, data requirements, and architectural complexities, providing a foundational understanding for evaluating AI methodologies in practical scenarios.',
    description:
      'The artifact is a formal, APA-formatted report that evaluates two distinct real-world applications: house price prediction (utilizing traditional ML) and autonomous vehicle navigation (utilizing DL). It includes a detailed justification of why specific algorithms are suited to particular problem domains based on data structure and task complexity.',
    objective:
      'The objective was to synthesize theoretical knowledge of AI frameworks with practical application analysis, demonstrating the ability to select the appropriate technological approach based on problem-specific constraints.',
    process:
      'The process involved conducting a comparative study of the definitions, approaches, and real-world examples of both ML and DL. I researched industry use cases to justify architectural choices, drafted the report following APA 7 guidelines, and refined the logical arguments to explain the technical incompatibility of mismatched approaches.',
    tools:
      'Generative AI was used to brainstorm, structure content, and format the technical document. Reference materials included academic sources, the AIMultiple blog, and Fireship video summaries.',
    value:
      'Unique Value: Unlike a simple summary, this artifact provides a comparative framework that highlights not only why a model works, but why alternative models are fundamentally unsuitable for specific tasks, offering a deeper analytical perspective.\n\nRelevance: This is highly relevant to my career as a software developer and student of data analytics, as it demonstrates technical literacy in modern AI architectures and the ability to contribute to informed, data-driven strategy in a corporate environment.',
    pdf: pdfMLvsDL,
    references: [
      'Dilmegani, C. (2026, March 10). Top 50 deep learning use cases & case studies. AIMultiple.',
      'Fireship. (2021, September 9). Machine learning explained in 100 seconds [Video]. YouTube.',
      'Source Material. (n.d.). Introduction to machine learning and deep learning: Definitions, approaches, and examples.',
      'Ji-Hyun, S., Young-Hum, C., & Young-Hum, C. (2022). Machine-Learning-Based Coefficient of Performance Prediction Model for Heat Pump Systems. Applied Sciences, 12(1), 362.',
      'Zhang, M., Zhang, M., Amaitik, N., Wang, Z., Xu, Y., Xu, Y., Maisuradze, A., Peschl, M., & Tzovaras, D. (2022). Predictive Maintenance for Remanufacturing Based on Hybrid-Driven Remaining Useful Life Prediction. Applied Sciences, 12(7), 3218.'
    ],
  },
  {
    title: 'Learning from the Biblical Leaders in Facing Leadership Challenges through Faith',
    preview:
      'A reflective essay connecting Moses (Exodus 3:11–12) and Esther (Esther 4:14) to modern leadership challenges, grounded in practical AI project experience.',
    highlights: ['Reflective essay', 'Biblical leadership', 'Leadership development', 'Faith-based'],
    pdf: pdfAdapting,
    pdfTitle: 'Adapting to Challenges',
    introduction:
      "This artifact reflects my learning journey on how various biblical leaders managed to solve different leadership issues with the help of their faith, wisdom, and resilience. The focus will be on the examples of Moses and Esther and how their stories are relevant to modern-day leadership problems.",
    description:
      "The main task of this artifact was to reflect upon various leadership situations and relate them to the two biblical passages: Exodus 3:11-12 and Esther 4:14. It was important to connect the stories of the biblical leaders to my own leadership experience in leading an AI consulting project and preparing for my future career endeavors. I show how the ability to seek God’s wisdom, adapt, and make brave decisions could enhance one’s performance as a leader.",
    objective:
      "To apply biblical leadership concepts to real-life situations; to reflect on personal leadership growth due to faith and self-awareness; to demonstrate that courage, adaptability, and strategic thinking are vital elements of effective leadership; and to improve writing and reflective analysis skills.",
    process:
      '1. Analyzing the biblical references to Esther and Moses; 2. Reflecting on personal situations connected with teamwork, decision-making, and career development; 3. Linking lessons from Scripture with personal leadership challenges; 4. Formulating responses that show critical thought and practical understanding of faith; 5. Revising the assignment to comply with APA 7 formatting.',
    tools:
      'Microsoft Word; Bible Gateway (NIV); Claude AI (grammar correction); ChatGPT (idea generation)',
    value:
      "Unique Value: Demonstrates the capability to apply faith-based leadership principles in practice by focusing on application rather than summary. Relevance: Highlights adaptability, ethical decision-making, and communication as critical leadership skills applicable to modern business and AI project contexts.",
    references: [
      'Biblica. (2011). Holy Bible, New International Version. Zondervan. https://www.biblegateway.com/versions/New-International-Version-NIV-Bible/',
      'Northouse, P. G. (2022). Leadership: Theory and practice (9th ed.). SAGE Publications.',
      'Yukl, G. (2020). Leadership in organizations (9th ed.). Pearson.'
    ],
  },
  {
  title: 'Effective Communication in Leadership: Building Clarity, Trust, and Team Alignment',
  preview:
    'A reflective essay exploring the importance of clear communication in leadership by connecting biblical teachings with a real-world software development experience.',
  highlights: [
    'Leadership communication',
    'Biblical reflection',
    'Team collaboration',
    'Professional development'
  ],
  pdf: pdfCommunication,
  pdfTitle: 'Effective Communication in Leadership',
  introduction:
    "This artifact reflects on the importance of effective communication in leadership and how clear, intentional messaging promotes trust, collaboration, and team alignment. Drawing from the biblical teachings in 1 Corinthians 14:8–9 and Genesis 11:6–7, I examine my communication style, identify areas for improvement, and relate these lessons to a real-world software development project where ineffective communication led to confusion and delays.",
  description:
    "The primary focus of this artifact was to evaluate my communication practices as a leader and understand how communication influences team performance. I reflected on a workplace experience where changing software requirements were not communicated consistently, resulting in duplicated work and project delays. By connecting this experience with biblical principles, I demonstrate how clear communication, active listening, documentation, and feedback can strengthen leadership effectiveness and improve organizational outcomes.",
  objective:
    "To evaluate and improve my personal communication style; to understand how clear communication fosters trust, collaboration, and shared understanding within teams; to apply biblical leadership principles to professional communication practices; and to develop practical strategies for preventing misunderstandings and improving team alignment.",
  process:
    "1. Studied the biblical passages from 1 Corinthians 14:8–9 and Genesis 11:6–7; 2. Reflected on my communication style and leadership experiences; 3. Analyzed a software development project where inconsistent communication caused confusion; 4. Identified practical strategies such as active listening, documentation, feedback loops, and regular team check-ins; 5. Connected biblical principles with professional leadership practices and revised the reflection following APA 7 formatting.",
  tools:
    "Microsoft Word; Bible Gateway (NIV); ChatGPT (brainstorming and grammar improvement); APA 7th Edition Guidelines",
  value:
    "Unique Value: Demonstrates the ability to integrate biblical leadership principles with practical workplace experiences, emphasizing communication as both a leadership competency and a means of building trust and accountability. Relevance: Highlights communication, collaboration, active listening, and team alignment as essential leadership skills applicable to software engineering, project management, Agile development, and cross-functional teamwork.",
  references: [
    'Biblica. (2011). Holy Bible, New International Version. Zondervan. https://www.biblegateway.com/versions/New-International-Version-NIV-Bible/',
    'Covey, S. R. (2020). The 7 Habits of Highly Effective People (30th Anniversary ed.). Simon & Schuster.',
    'Maxwell, J. C. (2007). The 21 Irrefutable Laws of Leadership (10th Anniversary ed.). Thomas Nelson.',
    'Northouse, P. G. (2022). Leadership: Theory and Practice (9th ed.). SAGE Publications.'
  ],
},
{
  title: 'Developing Retrieval-Augmented Generation Systems from PDFs: A Case Study Analysis',
  preview:
    'A formal case-study analysis of a RAG-based LLM project that examines data preparation, model selection, validation, ethics, and monitoring.',
  highlights: ['RAG systems', 'Case study', 'Responsible AI', 'LLM evaluation'],
  pdf: pdfResearch,
  pdfTitle: 'AI Model Verification and Validation',
  introduction:
    'This document investigates the building process and assessment of a Retrieval-Augmented Generation (RAG) system, where PDF files serve as the external source of knowledge, and checks the ways that the project has implemented steps of data preprocessing, model picking, as well as validation, ethics, and monitoring while contrasting them with mandatory machine-learning practices.',
  description:
    'The artifact presents a formal case-study analysis of the exploration done by Khan et al. (2024) that discusses the development of RAG-based LLM systems with the help of PDF files. In particular, it discusses the conversion of PDF files into structured texts, segmentation of documents, the taking of vector embeddings, the application of semantic retrieval, alongside working with GPT and Llama models. It investigates the project quality testing of delivered results, application of ethical measures, as well as keeping the knowledge base up-to-date.',
  objective:
    'The aim was to study a documented real-life AI initiative and analyze how its growth phase dealt with data preparation, model selection, validation, performance examination, ethics, and deployment of the usage. The study was also expected to discover the strengths and weaknesses of the used strategy and find the methods which can be employed in other AI and machine learning projects.',
  process:
    'The methodology was based on a review of the provided RAG case study and an analysis of the phases of its development. I analyzed the document preprocessing and embedding phase, justified the use of RAG with GPT and Llama models, and researched the qualitative methods employed for assessing the quality of the response and retrieval relevance of the information. As a result, I compared the provided practices with course recommendations and found areas for improvement in quantitative evaluation, analysis of fairness, protection of privacy, and monitoring.',
  tools:
    'The work studied the technology of Retrieval-Augmented Generation, based on the use of large language models, OAI GPT models, open-source Llama models, vector embeddings, semantic similarity search, vector databases, and PDF document processing. There were employed various Generative AI technologies throughout the report writing process, including Claude used for paragraph formatting and grammar checking.',
  value:
    'Unique Value: This document serves not only as an ordinary summary of the Generative AI project but rather provides deep understanding of all the life cycle of AI, starting from data preparation and architecture choice and ending with validation, ethical safety measures, and post-deployment support.\n\nRelevance: This artifact is particularly pertinent for me as a software developer and a student of the analytics of data. The usage of RAG-based as well as LLM-assisted applications has exponentially increased in order to generate context-specific data. In my case, it is a clear illustration of my skill in evaluating various types of AI and defining technical and ethical risks and applying the concepts of responsible AI in my future software and machine-learning practices.',
  references: [
    'Khan, A. A., Hasan, M. T., Kemell, K.-K., Rasku, J., & Abrahamsson, P. (2024). Developing Retrieval Augmented Generation (RAG) based LLM Systems from PDFs: An experience report (arXiv:2410.15944). arXiv. https://doi.org/10.48550/arXiv.2410.15944',
    'Project: Generative AI Applications with RAG and LangChain | Coursera. https://www.coursera.org/learn/project-generative-ai-applications-with-rag-and-langchain?specialization=ibm-generative-ai-engineering',
    'How Can E-Commerce Affect The Retail Industry? https://dxminds.com/how-can-ecommerce-affect-the-retail-industry/',
    '4G LTE Antenna Manufacturer: A Comprehensive Guide - 2019. https://www.rfelement.com/news_c-92.html'
  ],
},
{
  title: 'The Signal Layer: Your Monthly Report on Commercial AI',
  preview:
    'A newsletter analyzing commercial AI applications in healthcare, finance, and legal services, with emphasis on human oversight and responsible adoption.',
  highlights: ['Newsletter', 'Commercial AI', 'Industry analysis', 'Responsible AI'],
  pdf: pdfNewsletter,
  pdfTitle: 'Newsletter on Commercial Usage of AI',
  introduction:
    'This newsletter examines the impact of recent advancements in commercial AI across healthcare, finance, and legal services. It highlights products that are shifting from general assistance to specialized business tasks and emphasizes the importance of human oversight, governance, reliability, and responsible use.',
  description:
    'The artifact is a newsletter titled The Signal Layer: Your Monthly Report on Commercial AI. It analyzes three recent developments in commercial AI: OpenAI Health in ChatGPT, Payouts.com Digital Employee AI agents, and Harvey AI agents. Each section explains how these innovations are transforming workflows, shaping decision-making, enabling automation, and creating both opportunity and risk for organizations.',
  objective:
    'The aim was to investigate and assess AI implementations in healthcare, finance, and legal services and explore their implications for business processes and decision-making. The research was also designed to communicate complex AI insights in a concise and accessible newsletter format while considering how increasing AI autonomy may shape future business use cases.',
  process:
    'The research involved analyzing recent AI technologies in healthcare, finance, and legal services, selecting relevant examples of commercial AI use, and presenting how each tool supports execution, decision-making, and the transformation of ordinary business routines. I then organized the material into a newsletter structure with industry sections, a comparison component, and a conclusion.',
  tools:
    'Claude (Anthropic) was used for research support, idea development, and APA-style formatting assistance. The newsletter drew on company announcements, news releases, and industry publications related to OpenAI Health in ChatGPT, Payouts.com Digital Employee AI agents, Harvey legal AI agents, large language models, AI automation, and third-party AI product certification.',
  value:
    'Unique Value: This document goes beyond general AI trends by using concrete examples to show how AI is increasingly taking on more responsibility in commercial activities. The comparison across healthcare, finance, and legal services demonstrates that responsible adoption depends not only on technical capability but also on human review, monitoring, and governance.\n\nRelevance: This report is particularly relevant to my future career in technology as a software developer and data analytics student because it demonstrates my ability to evaluate emerging AI technologies and communicate their practical implications clearly.',
  references: [
    'OpenAI. (2026, July 23). Launching Health in ChatGPT. https://openai.com/index/health-in-chatgpt/',
    'FinTech Global. (2026, July 14). Payouts.com launches Digital Employee AI agents. https://fintech.global/2026/07/14/payouts-com-launches-digital-employee-ai-agents/',
    'Harvey. (2026, August 4). The first certified AI agents in legal: Harvey achieves AIUC-1 [Press release]. https://www.harvey.ai/newsroom'
  ],
},
]

function App() {
  const [selectedArtifact, setSelectedArtifact] = useState(0)
  const [view, setView] = useState('home')
  const activeArtifact = artifacts[selectedArtifact]
  const [imageIndex, setImageIndex] = useState(0)

  const showArtifact = (index) => {
    setSelectedArtifact(index)
    setView('artifact')
    requestAnimationFrame(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    })
  }

  useEffect(() => {
    setImageIndex(0)
  }, [selectedArtifact])

  useEffect(() => {
    if (view === 'artifact') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }, [view, selectedArtifact])

  const goToArtifacts = (e) => {
    e.preventDefault()
    setView('home')
    requestAnimationFrame(() => {
      const target = document.getElementById('artifacts')
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    })
  }

  return (
    <div className="app-shell">
      <header className="topbar">
        <a href="#home" className="brand" onClick={(e) => {e.preventDefault(); setView('home')}}>
          Lisa Rajkarnikar
        </a>
        <nav className="nav-links">
          <a href="#home" onClick={(e) => {e.preventDefault(); setView('home')}}>Home</a>
          <a href="#artifacts" onClick={goToArtifacts}>Artifacts</a>
          <a href="https://www.linkedin.com/in/lisarajkarnikar" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </nav>
      </header>

      <main>
        {view === 'artifact' ? (
          <section className="artifact-page">
            <button className="secondary-btn back-btn" onClick={() => setView('artifacts')}>
              ← Back to Artifacts
            </button>
            <div className="artifact-page-card">
              <h1>{activeArtifact.title}</h1>
              <p className="eyebrow">Artifact details</p>
              {activeArtifact.link && (
                <p className="artifact-link">
                  <strong>🔗 View the Timeline:</strong>{' '}
                  <a href={activeArtifact.link} target="_blank" rel="noreferrer">
                    {activeArtifact.link}
                  </a>
                </p>
              )}
              {activeArtifact.pdf && (
                <div className="artifact-pdf-panel">
                      <div className="artifact-pdf-panel-header">
                        <div>
                          <p className="artifact-pdf-label">PDF preview</p>
                          <h4>{activeArtifact.pdfTitle || 'PDF preview'}</h4>
                        </div>
                    <a
                      className="pdf-view-btn"
                      href={activeArtifact.pdf}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Open full PDF
                    </a>
                  </div>
                  <div className="artifact-pdf-embed">
                    <iframe
                      src={`${activeArtifact.pdf}#toolbar=0&navpanes=0`}
                      title="Machine Learning vs Deep Learning PDF"
                      frameBorder="0"
                      loading="lazy"
                    />
                  </div>
                </div>
              )}

              {activeArtifact.images && activeArtifact.images.length > 0 && (
                <div className="artifact-image-viewer">
                  <img
                    src={activeArtifact.images[imageIndex]}
                    alt={`${activeArtifact.title} - image ${imageIndex + 1}`}
                    onClick={() => setImageIndex((imageIndex + 1) % activeArtifact.images.length)}
                  />
                  <div className="image-help">Click image to view next</div>
                  <div className="image-indicator">
                    {activeArtifact.images.map((_, i) => (
                      <span key={i} className={`dot ${i === imageIndex ? 'active' : ''}`} />
                    ))}
                  </div>
                </div>
              )}
              {activeArtifact.introduction && (
                <div className="artifact-section-row">
                  <h4>Introduction</h4>
                  <p>{activeArtifact.introduction}</p>
                </div>
              )}
              {activeArtifact.description && (
                <div className="artifact-section-row">
                  <h4>Description</h4>
                  <p>{activeArtifact.description}</p>
                </div>
              )}
              {activeArtifact.objective && (
                <div className="artifact-section-row">
                  <h4>Objective</h4>
                  <p>{activeArtifact.objective}</p>
                </div>
              )}
              {activeArtifact.process && (
                <div className="artifact-section-row">
                  <h4>Process</h4>
                  <p>{activeArtifact.process}</p>
                </div>
              )}
              {activeArtifact.tools && (
                <div className="artifact-section-row">
                  <h4>Tools and Technologies Used</h4>
                  <p>{activeArtifact.tools}</p>
                </div>
              )}
              {activeArtifact.value && (
                <div className="artifact-section-row">
                  <h4>Value Proposition</h4>
                  <p>{activeArtifact.value}</p>
                </div>
              )}
              {activeArtifact.references && activeArtifact.references.length > 0 && (
                <div className="artifact-section-row artifact-reference-list">
                  <h4>References</h4>
                  <ul>
                    {activeArtifact.references.map((reference, index) => (
                      <li key={index}>{reference}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </section>
        ) : (
          <>
            <section id="home" className="hero-section">
          <div className="hero-copy">
            <h1>Creating thoughtful digital experiences that turn ideas into impact.</h1>
            <p className="hero-text">
              As a graduate student pursuing advanced knowledge in artificial intelligence and machine learning, I am developing my leadership perspective at the intersection of software engineering, data-driven innovation, and emerging AI technologies. My academic journey has strengthened my ability to evaluate AI/ML concepts, explore responsible applications of intelligent systems, and connect technical learning with real-world business challenges. I aspire to grow into an AI/ML leader who can bridge technical expertise, continuous learning, and strategic thinking to help organizations adopt AI responsibly and effectively.
            </p>
            <p className="hero-text bio-text">
             With experience in building scalable microservices and cloud-based 
             applications using Java and modern frontend technologies, 
             I contribute to delivering reliable, high-performance systems across enterprise environments.
             I focus on modern software practices and emerging AI technologies, 
             including Generative AI and Model Context Protocol (MCP),
              to transform traditional systems into intelligent, adaptive, and efficient solutions.
              Beyond technical delivery, I am passionate about creating practical and responsible 
              technology that aligns with real organizational needs and enhances everyday user experiences.
            </p>
            <div className="hero-actions">
              <a href="#artifacts" className="primary-btn">
                Explore artifacts
              </a>
              <a href="#artifacts" className="secondary-btn">
                See how I work
              </a>
            </div>
          </div>

          <div className="hero-card">
            <div className="hero-card-copy">
              <h2>Professional Snapshot</h2>
              <ul>
                <li>Building scalable enterprise web applications</li>
                <li>Insurance, financial, e-discovery, and healthcare domain experience</li>
                <li>Enthusiast in AI integration, Generative AI, LLM-powered applications, and Model Context Protocol (MCP)</li>
                <li>Experienced in cross-functional collaboration and fast learning</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="value-proposition" className="value-section">
          <div className="section-heading">
            <p className="eyebrow">Personal value proposition</p>
            <h2>Solving business challenges with AI, data, and enterprise software.</h2>
          </div>
          <div className="value-card">
            <p>
             I bring over eight years of experience developing enterprise software and am expanding this foundation through continued learning in artificial intelligence, machine learning, and data analytics. As I develop toward an AI/ML leadership role, I am focused on understanding how intelligent technologies can be applied to complex business challenges and transformed into practical, scalable, and user-centered solutions. Through my academic work and hands-on projects, I am strengthening my ability to evaluate AI technologies, make data-informed decisions, and consider ethical and responsible AI practices. My goal is to combine my software engineering experience with growing AI/ML expertise to contribute to innovative solutions that create meaningful value for organizations and the people they serve.
             </p>
          </div>
        </section>

        <section id="target-audience" className="value-section">
          <div className="section-heading">
            <p className="eyebrow">Target audience</p>
            <h2>Designed for professionals and organizations shaping the future of responsible AI.</h2>
          </div>
          <div className="value-card">
            <p>
              This portfolio is designed for <strong>AI/ML professionals, technology leaders, hiring managers, academic faculty, researchers, and organizations exploring responsible AI adoption</strong>. It showcases my journey as a graduate student building on a strong software engineering foundation while developing deeper expertise in artificial intelligence, machine learning, data analytics, and emerging technologies. Through my academic work, professional experience, and AI-focused projects, I aim to demonstrate not only my technical growth but also my ability to connect AI/ML concepts with practical business challenges, ethical considerations, and future-oriented technology leadership. This portfolio reflects my goal of continuing to learn, contribute, and grow into a leader who can help organizations use AI responsibly to create meaningful and sustainable impact.
            </p>
          </div>
        </section>

        <section className="skills-section" aria-label="Technical skills">
          <div className="section-heading">
            <p className="eyebrow">Technical skills</p>
            <h2>Focused expertise across software engineering, AI, and cloud platforms.</h2>
          </div>

          <div className="skills-groups">
            <div className="skill-group">
              <h3>Backend, Frontend, APIs & Databases</h3>
              <div className="skills-grid">
                <span>Java</span>
                <span>Spring Boot</span>
                <span>Microservices</span>
                <span>Hibernate</span>
                <span>REST APIs</span>
                <span>React</span>
                <span>Angular</span>
                <span>TypeScript</span>
                <span>JavaScript</span>
                <span>SQL</span>
                <span>SQL Server</span>
                <span>MySQL</span>
                <span>MongoDB</span>
                <span>Redis</span>
              </div>
            </div>

            <div className="skill-group">
              <h3>AI, ML & Assisted Development</h3>
              <div className="skills-grid">
                <span>Python</span>
                <span>Machine Learning</span>
                <span>Generative AI</span>
                <span>Agentic AI</span>
                <span>MCP</span>
                <span>LLM Integration</span>
                <span>GitHub Copilot</span>
                <span>Claude</span>
                <span>LLM Tools</span>
                <span>Prompt Engineering</span>
                <span>AI Pair Programming</span>
              </div>
            </div>

            <div className="skill-group">
              <h3>Cloud & DevOps</h3>
              <div className="skills-grid">
                <span>Cloud Computing</span>
                <span>AWS</span>
                <span>Docker</span>
                <span>Kubernetes</span>
                <span>CI/CD</span>
                <span>Git & GitHub</span>
              </div>
            </div>
          </div>
        </section>

        <section id="artifacts" className="artifacts-section">
          <div className="section-heading">
            <p className="eyebrow">Artifact showcase</p>
            <h2>Each artifact tells the story behind the finished work.</h2>
            <p>
              These pieces are more than deliverables. They show the objective, the
              process, the tools, and the value behind each step of the journey.
            </p>
          </div>

          <div className="artifact-layout">
            <div className="artifact-list" aria-label="Artifact options">
              {artifacts.map((artifact, index) => (
                <button
                  key={artifact.title}
                  type="button"
                  className="artifact-card"
                  onClick={() => showArtifact(index)}
                  aria-label={`Open details for ${artifact.title}`}
                >
                  <div className="artifact-card-content">
                    <div className="artifact-card-top">
                      <span className="artifact-pill">Featured artifact</span>
                      <span className="artifact-pill accent">Click to explore</span>
                    </div>
                    <span className="artifact-index">0{index + 1}</span>
                    <h3>{artifact.title}</h3>
                    <p className="artifact-preview">{artifact.preview}</p>
                    <div className="artifact-tags">
                      {artifact.highlights?.map((highlight) => (
                        <span key={highlight} className="artifact-tag">
                          {highlight}
                        </span>
                      ))}
                    </div>
                    <span className="artifact-cta">View full details →</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </section>
      </>
    )}
      </main>
    </div>
  )
}

export default App
