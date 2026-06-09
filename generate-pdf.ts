import PDFDocument from "pdfkit";
import fs from "fs";
import path from "path";

function createResume() {
  const destPath = path.join(process.cwd(), "public", "Fazil_A_Resume.pdf");
  console.log(`Generating pristine single-page PDF at ${destPath}...`);

  // Create document: A4 is 595.28 x 841.89 points
  // Margins: Left/Right 28pt, Top/Bottom 15pt
  // This lets us fit the entire beautiful CV onto exactly one single page (Max height 841.89)
  const doc = new PDFDocument({
    size: "A4",
    margins: {
      top: 15,
      bottom: 15,
      left: 28,
      right: 28
    }
  });

  const stream = fs.createWriteStream(destPath);
  doc.pipe(stream);

  const primaryColor = "#000000"; // Deep black for high-contrast professional look
  const secondaryColor = "#334155"; // slate-700
  const accentColor = "#0284c7"; // sky-600
  const dividerColor = "#000000"; // Black thin dividers

  const leftX = 28;
  const rightX = 567.28;
  const contentWidth = rightX - leftX; // 539.28

  let currentY = 15; // Start close to the top

  // --- HEADER SECTION ---
  doc.fillColor(primaryColor).fontSize(18).font("Helvetica-Bold").text("Fazil A", leftX, currentY);
  currentY += 21;

  // Under header row: Left title, Right contacts
  doc.fontSize(8).font("Helvetica-Bold").fillColor(secondaryColor);
  doc.text("Associate Product Manager (APM) | CFA L1 Candidate | SRCC", leftX, currentY, {
    width: 330,
    align: "left"
  });

  // Render clickable links in blue & with underline on the right
  const contactTextY = currentY;
  doc.font("Helvetica").fontSize(8).fillColor(accentColor);
  
  // Custom manual calculation of widths to draw inline colored links:
  // "fazilabbaz@gmail.com | 8075833967 | LinkedIn"
  const emailStr = "fazilabbaz@gmail.com";
  const separator1 = " | ";
  const phoneStr = "8075833967";
  const separator2 = " | ";
  const linkedinStr = "LinkedIn";

  const emailWidth = doc.widthOfString(emailStr);
  const sep1Width = doc.widthOfString(separator1);
  const phoneWidth = doc.widthOfString(phoneStr);
  const sep2Width = doc.widthOfString(separator2);
  const liWidth = doc.widthOfString(linkedinStr);

  const totalContactWidth = emailWidth + sep1Width + phoneWidth + sep2Width + liWidth;
  let contactX = rightX - totalContactWidth;

  // Email
  doc.fillColor(accentColor).text(emailStr, contactX, contactTextY, {
    link: "mailto:fazilabbaz@gmail.com",
    underline: true
  });
  contactX += emailWidth;

  // Sep 1
  doc.fillColor(secondaryColor).text(separator1, contactX, contactTextY, { underline: false });
  contactX += sep1Width;

  // Phone
  doc.fillColor(secondaryColor).text(phoneStr, contactX, contactTextY);
  contactX += phoneWidth;

  // Sep 2
  doc.fillColor(secondaryColor).text(separator2, contactX, contactTextY);
  contactX += sep2Width;

  // LinkedIn
  doc.fillColor(accentColor).text(linkedinStr, contactX, contactTextY, {
    link: "https://www.linkedin.com/in/fazilabaz/",
    underline: true
  });

  currentY += 14;

  const checkPageBreak = (neededHeight: number) => {
    // A4 height is 841.89. Top margin is 15, bottom is 15. Max printable is ~826.89.
    // We break to a new page if neededHeight would cross the safe vertical limit (820pt).
    if (currentY + neededHeight > 820) {
      doc.addPage();
      currentY = 15; // reset to top margin on the new page
    }
  };

  // Helper to render section title with line underneath
  const renderSectionHeader = (title: string) => {
    checkPageBreak(25);
    currentY += 5; // Space above the section heading
    doc.fillColor(primaryColor).fontSize(8.5).font("Helvetica-Bold").text(title, leftX, currentY);
    currentY += 10; // Space to clear the text height
    doc.strokeColor(dividerColor).lineWidth(0.5).moveTo(leftX, currentY).lineTo(rightX, currentY).stroke();
    currentY += 5; // Space below the underline divider line
  };

  // Helper to render job role / education header with left info and right date
  const renderItemHeader = (leftText: string, rightText: string) => {
    const rightWidth = 95;
    const spacing = 10;
    const leftWidth = contentWidth - rightWidth - spacing; // 539.28 - 95 - 10 = 434.28

    // Dynamically downscale font size so leftText fits on EXACTLY one line
    let fSize = 8.0;
    doc.font("Helvetica-Bold");
    while (fSize >= 6.2) {
      doc.fontSize(fSize);
      const measuredWidth = doc.widthOfString(leftText);
      if (measuredWidth <= leftWidth) {
        break;
      }
      fSize -= 0.1;
    }

    doc.fontSize(fSize).font("Helvetica-Bold").fillColor(primaryColor);
    
    // Calculate actual Heights to prevent text overlap with the calculated font size
    const leftHeight = doc.heightOfString(leftText, { width: leftWidth, lineGap: 0.5 });
    const rightHeight = doc.heightOfString(rightText, { width: rightWidth, align: "right", lineGap: 0.5 });
    const actualHeight = Math.max(leftHeight, rightHeight);

    checkPageBreak(actualHeight + 2);

    doc.text(leftText, leftX, currentY, { width: leftWidth, lineGap: 0.5 });
    doc.text(rightText, rightX - rightWidth, currentY, { width: rightWidth, align: "right", lineGap: 0.5 });
    
    currentY += actualHeight + 2; // Use dynamic height plus 2pt padding
  };

  // Parsing & printing helper for inline bold markdown styles (e.g., **bold**)
  const renderRichBullet = (text: string, isSubBullet: boolean = false) => {
    const bulletX = leftX + (isSubBullet ? 18 : 8);
    const textX = leftX + (isSubBullet ? 28 : 16);
    const itemWidth = contentWidth - (isSubBullet ? 28 : 16);
    const bulletChar = isSubBullet ? "o" : "\u2022";
    const fontSize = isSubBullet ? 6.8 : 7.2;

    const parts = text.split("**");
    const cleanText = text.replace(/\*\*/g, "");
    
    doc.font("Helvetica").fontSize(fontSize);
    const blockHeight = doc.heightOfString(cleanText, {
      width: itemWidth,
      lineGap: 0.6,
      align: "left"
    });

    checkPageBreak(blockHeight + 1.5);

    doc.fillColor(primaryColor).fontSize(fontSize).font(isSubBullet ? "Helvetica" : "Helvetica-Bold");
    doc.text(bulletChar, bulletX, currentY, { width: 8 });

    // We start rendering inline parts
    for (let i = 0; i < parts.length; i++) {
      const isBold = (i % 2 === 1);
      doc.font(isBold ? "Helvetica-Bold" : "Helvetica");
      const isLast = (i === parts.length - 1);

      const opts: any = {
        width: itemWidth,
        lineGap: 0.6,
        align: "left"
      };
      if (!isLast) {
        opts.continued = true;
      }

      if (i === 0) {
        doc.text(parts[i], textX, currentY, opts);
      } else {
        doc.text(parts[i], opts);
      }
    }

    currentY += blockHeight + 1.2; // space below bullet item
  };

  // --- 1. EXPERIENCE SECTION ---
  renderSectionHeader("EXPERIENCE");

  // PINACA
  renderItemHeader(
    "Associate Product Manager (APM) – AI Data & Financial Intelligence Platform | PINACA TECHNOLOGIES, Chennai",
    "July 2024 - Present"
  );
  renderRichBullet("Led a **20-member** cross-functional team to deliver an **AI-powered Data Fusion & Decision platform** to solve fragmented investigations across BFSI and Law Enforcement Agencies (ED, ATS, ITD, NIA, IB etc.), enabling **25+ deployments, 50+ POCs, 100+ demos**, and influencing **₹300Cr+** deal pipeline.");
  renderRichBullet("Owned end-to-end productization of **ML-driven workflows** integrating **Bank Statement Analyzer, Communication Intelligence (CDR/IPDR), Multimedia Analysis (image/audio/video), Digital Forensic Analyzer, OSINT, and AI Chatbot** modules.");
  renderRichBullet("Conceptualised and launched a **Fraud Risk Management & Transaction Monitoring System** to address AML/CFT gaps in mid-sized banks, unlocking **₹50L-1 Cr** platform revenue across **5 banking clients**.");
  renderRichBullet("Directed a **40-member team** to scale an **External Digital Risk Protection & Fraud Threat Intelligence suite** to combat brand abuse and digital threats, driving adoption across **30+ enterprises** and generating **₹6–15 Cr ARR**.");
  renderRichBullet("Defined product strategy and roadmap for AI-powered modules by leveraging customer research, product analytics, and stakeholder inputs; translated requirements into **PRDs, user stories, and prioritized backlogs** to accelerate feature delivery and adoption.");

  currentY += 1.5;

  // VMOCK
  renderItemHeader(
    "Business Analyst (Product) – AI Powered Career Acceleration Platform | VMOCK, Gurgaon",
    "July 2022 - May 24"
  );
  renderRichBullet("Spearheaded product customization and strategy, resolving **20% of total client requests** and achieving the **highest number of product launches (21%)** in a **team of 7**, driving significant market expansion across **4 continents**.");
  renderRichBullet("Managed and scaled the **highest number of clients (33% of total clientele)** fostering trust and satisfaction in complex client relationships.");
  renderRichBullet("Analysed **100+ product features/metrics** to identify user pain points and derived insights on product friction/client churns, collaborating with **5+ internal teams** to resolve end-user issues and prioritize feature development, resulting in enhanced user experience.");
  renderRichBullet("Trained and mentored **4 Business Analysts, 1 Client Success Manager, and 3 Client Success Analysts**, demonstrating exceptional functional product knowledge and leadership skills.");

  currentY += 1.5;

  // ZOMATO
  renderItemHeader(
    "Associate (CDT - Process & Customer Experience) | ZOMATO, Gurgaon",
    "Sep. 2021 - July 2022"
  );
  renderRichBullet("Streamlined payment process, monetary settlements and refunds amounting to **₹5 Crores+** to related parties - suppliers, customers and third-party service providers including delivery and payment partners.");
  renderRichBullet("Performed root cause analysis and resolved vendor and customer escalations, payment disputes (chargebacks) and invoices/reports of multiple stakeholders.");
  renderRichBullet("Responsible for **3PL Project**: Scrutinized **1400+ unfulfilled orders worth ₹2.75L+** assigned to third-party logistics team over a span of **5 weeks** -");
  renderRichBullet("Identified breakpoints in order delivery, suggested improvements and training to overhaul logistic team’s performance; arrived at delivery partner’s pay-outs", true);
  renderRichBullet("Brought down unfulfilled orders rate further below **0.3**", true);
  renderRichBullet("Leveraged ties with restaurant and delivery partners, enhanced service quality by relaying feedback, escalating performance issues and ensuring compliance with KPI.");

  currentY += 1.5;

  // FACENOTE
  renderItemHeader(
    "Co-Founder (E-Learning Platform) | FACENOTE LEARNING, Kochi",
    "June 2021 - Aug. 2021"
  );
  renderRichBullet("Synthesized end-to-end product-market launch including finance and budget functions, product development, marketing and sales-channel verticals.");
  renderRichBullet("Autonomously hired and managed a **team of 20** (teachers and academic content creators) and delivered output with **35% savings in time**.");
  renderRichBullet("Conducted market research and survey on target customers; ideated top-down marketing strategies as well as bottom-up approaches at community and priority-market levels; built GTM strategy and executed market testing of product.");

  currentY += 1.5;

  // EPLATFORM TECH
  renderItemHeader(
    "Analyst Intern (Risk Management) | EPLATFORM TECH, Gurgaon",
    "May 2021"
  );
  renderRichBullet("Performed auditing compliance risk analysis using TPM Software, data review and analysis to obtain key insights and managed customer/vendor electronic data.");
  renderRichBullet("Scrutinized compliance data as per regulatory requirements of **over 1000 customers and vendors**, ensured KYC compliance of customers and communicated the same with Client (**PHILIPS, India**) as well as third-party connections.");

  currentY += 1.5;

  // TRAVEL TRIVIA
  renderItemHeader(
    "Content Writer Intern (Product Marketing) | TRAVEL TRIVIA (A.A.S. Flight Solutions Pvt Ltd.), Gurgaon",
    "Jan. 2018 - Feb. 2019"
  );
  renderRichBullet("Wrote **50+ 1200-word pieces** of product marketing (tourism package) content; edited and optimized itinerary for tourist destinations.");


  // --- 2. EDUCATION SECTION ---
  renderSectionHeader("EDUCATION");

  // CFA
  renderItemHeader(
    "Chartered Financial Analyst (CFA Level 1) | CFA Institute, USA",
    "May. 2026 - Present"
  );
  renderRichBullet("Coursework: Equity, Fixed Income, Derivatives, Alt. Investments, Portfolio Management, Financial Statement Analysis, Economics, Quantitative Methods");

  currentY += 1.5;

  // SRCC
  renderItemHeader(
    "Bachelor’s in Commerce Hons. (B. Com Hons.) | Shri Ram College of Commerce (SRCC), University of Delhi",
    "July 2018 - June 2021"
  );
  renderRichBullet("Grade: **8.18/10.00** | Majors: Finance and Economics");
  renderRichBullet("Coursework: Accounting, Auditing, Income Tax/GST, Marketing, Economics, Financial Reporting & Analysis and Financial Management");

  currentY += 1.5;

  // ICAI
  renderItemHeader(
    "Chartered Accountancy: Foundation Level Exam | Institute of Chartered Accountants of India (ICAI)",
    "August 2018"
  );

  currentY += 1.5;

  // Higher Secondary
  renderItemHeader(
    "Higher Secondary Examination | ASMM Higher Secondary School, Kerala | CGPA: 10/10",
    "May 2018"
  );

  currentY += 1.5;

  // Secondary SSE
  renderItemHeader(
    "Secondary School Examination (CBSE) | Vasavi Vidyalaya, Kerala | CGPA: 9.4",
    "May 2016"
  );


  // --- 3. SKILLS & EXPERTISE SECTION ---
  renderSectionHeader("SKILLS & EXPERTISE");
  renderRichBullet("**AI**: ChatGPT, Claude, Gemini, Lovable, Replit, Perplexity, Cursor, GitHub Copilot, NotebookLM, Prompt Engineering, LLM Evaluation, AI-assisted Prototyping");
  renderRichBullet("**Product**: Market Research, Product Strategy (Vision, PRD, Roadmap), Product Development, Stakeholder Management, GTM Strategy, Performance Monitoring");
  renderRichBullet("**Financial Expertise**: Financial Modeling & Valuation, Equity Research, Investor Presentation, Bloomberg, E-Filing, ITR and Tally ERP");
  renderRichBullet("**Technical Skills**: Advanced Excel, Power BI, Mixpanel, CleverTap, Python, SQL, R, Data Analytics, Wireframing (Whimsical, Figma, Balsamiq), JIRA, Notion");
  renderRichBullet("**Languages**: English (Proficient), Malayalam (Native), Tamil (Native), Hindi (Basic)");


  // --- 4. CERTIFICATIONS & WORKSHOPS SECTION ---
  renderSectionHeader("CERTIFICATIONS & WORKSHOPS");
  renderRichBullet("Product-Led Growth (PLG) Fundamentals (ProductLed)");
  renderRichBullet("Corporate Valuation (EDUCBA): Prepared DDM and DCF models, relative valuation (Enterprise & Equity Valuation) and fundamental analysis of stock");
  renderRichBullet("Capital IQ Fundamentals, Reading Financial Statements, Bloomberg Essentials (CORPORATE FINANCE INSTITUTE)");
  renderRichBullet("Data Analytics with R Programming (AICPA-CIMA): Built Linear Regression Model and Logistic Regression Model, Performed EDA & Visualization.");
  renderRichBullet("Financial Modeling using Excel (BAY STREET SCHOOL); Equity: Technical Analysis (STOCK WIZARD ACADEMY)");
  renderRichBullet("Modules: Public Policy, Policy and Impact Consulting, National Education Case Study - Global Governance Initiative’s 2 days Masterclass");


  // --- 5. ACHIEVEMENTS & POSITIONS OF RESPONSIBILITY ---
  renderSectionHeader("ACHIEVEMENTS & POSITIONS OF RESPONSIBILITIES");
  renderItemHeader(
    "Event Coordinator | Wings of Fire, Shri Ram College of Commerce",
    "July 2019 - May 2020"
  );
  renderRichBullet("Led a team of **75+ students** to execute CA Confluence 2020 involving **1200+ participants**, Adhyetha (Research Paper Competition) and Caso De Competetencia (Case Study Competition) involving **400+ participants** across India.", true);
  renderRichBullet("Finalist of **GENESIS** (Business Plan Competition) conducted by **The Commerce Society, SRCC & IIT Delhi**");
  renderRichBullet("Finalist of **SOCIO BEE 5.0**, **SAMARPAN** (Business Plan Competition) conducted by **NATIONAL SERVICE SCHEME (NSS), SRCC**");

  doc.end();

  stream.on("finish", () => {
    console.log("Pristine single-page resume PDF generated successfully!");
  });
}

createResume();
