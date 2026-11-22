import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'ERPNext Business Guide | Syam Prasad K',
  description: 'A visual ERPNext guide to company setup, accounts, invoicing, sales, purchasing, manufacturing, and stock integration.',
};

const docs = 'https://docs.frappe.io/erpnext/';

const modules = [
  {
    id: 'company', title: 'Company setup', image: 'company', source: 'company-setup',
    detailHeading: 'What to prepare',
    detail: 'Bring a list of legal entities, branches, warehouses, business owners, and staff roles. Decide which branches share the same books and which entities require separate accounting. Agree on a cutover date so opening balances and stock quantities refer to the same point in time.',
    alt: 'ERPNext Company form showing company name, country, and currency',
    intro: 'The Company record defines which business entity owns its transactions, accounts, and inventory. Set it up before entering live orders or invoices.',
    workflow: "Set the company currency and fiscal year first so staff enter transactions against the right books. Review the accounts and warehouse defaults, then import your approved opening records and assign access.",
    check: 'Use staff accounts to verify which companies and warehouses each team can access.',
  },
  {
    id: 'accounts', title: 'Accounts', image: 'accounts', source: 'chart-of-accounts',
    detailHeading: 'A useful first review',
    detail: 'Give finance a handful of transactions it can trace from the original document to the ledger. Review a customer receipt, a supplier payment, and a bank entry together. Record which person owns reconciliation and which reports the business will use at month-end.',
    alt: 'ERPNext Chart of Accounts showing the account hierarchy',
    intro: 'Accounts is where your finance team follows receivables, payables, cash, and the general ledger. Start with the Chart of Accounts and agree on how to track branches, departments, or projects.',
    workflow: "Review the Chart of Accounts with finance, then configure payment modes and opening balances. Once the basics are in place, post sample transactions and trace them through the ledger and financial reports.",
    check: 'Have finance reconcile a sample customer balance, supplier balance, and bank balance before switching over.',
  },
  {
    id: 'invoices', title: 'Invoicing', image: 'invoice', source: 'sales-invoice',
    detailHeading: 'How to handle exceptions',
    detail: 'Agree on who can approve a draft, who can correct a submitted invoice, and who follows up on overdue balances. Use examples from your own business, such as an advance payment or an item returned after delivery, to make sure staff know what to do.',
    alt: 'ERPNext Sales Invoice form showing customer, posting date, and due date',
    intro: 'Use Sales Invoices to record what customers owe. Purchase Invoices capture what you owe suppliers. Both workflows can carry references back to their orders and delivery or receipt records.',
    workflow: "Start from the relevant customer or supplier record and confirm the posting date, quantities, rates, and payment terms. After submitting the invoice, record the payment and check that the outstanding amount matches what you expect.",
    check: 'Test a partial payment and a return or credit note, as well as a normal invoice.',
  },
  {
    id: 'sales', title: 'Sales', image: 'dashboard', source: 'selling',
    detailHeading: 'What staff should see',
    detail: 'Sales staff need to know the agreed price, promised date, and what has already been delivered or billed. Managers can use open orders to spot fulfilment delays and review them with the warehouse team. Start with a real order that ships in two batches.',
    alt: 'ERPNext Selling workspace with sales indicators, order trends, and transaction shortcuts',
    intro: 'The Selling module follows a customer from quotation through order and fulfilment. The Selling workspace gives staff quick access to those records and helps managers see what is still open.',
    workflow: "Turn an accepted quotation into a Sales Order so the agreed terms follow the transaction. Use the order to track what has shipped, what has been billed, and what still needs attention.",
    check: 'Try a partial delivery so the team can see which quantities are delivered, billed, or still open.',
  },
  {
    id: 'purchasing', title: 'Purchasing', image: 'purchasing', source: 'purchase-order',
    detailHeading: 'Where teams hand work over',
    detail: 'Purchasing confirms what was ordered, the warehouse records what actually arrived, and finance checks what the supplier charged. Agree on who handles damaged goods, short deliveries, and price differences so those cases have a clear owner.',
    alt: 'ERPNext Purchase Order showing actions for receipts, invoices, and payments',
    intro: 'Buying connects material requests and supplier orders with what actually arrives at the warehouse and what finance needs to pay.',
    workflow: "Approve a Purchase Order before committing to the supplier. When goods arrive, record the quantity received, then compare the supplier’s invoice with the order and receipt before approving payment.",
    check: 'Test a partial receipt and a price or quantity difference so staff know who reviews exceptions.',
  },
  {
    id: 'manufacturing', title: 'Manufacturing', image: 'manufacturing', source: 'work-order',
    detailHeading: 'What to decide before production',
    detail: 'Pick a product with a representative material list and document how the shop floor records work. Decide which warehouses hold raw materials, work in progress, and finished goods. Use the pilot batch to find out where staff need additional instructions or easier data entry.',
    alt: 'ERPNext manufacturing Work Order showing the item and quantity to produce',
    intro: 'Manufacturing links a Bill of Materials to production planning, work orders, shop-floor operations, and the movement of raw materials and finished goods.',
    workflow: "Start with the Bill of Materials and the operations needed to make the item. The Work Order gives staff the production quantity and a reference for recording material transfers, consumption, and finished stock.",
    check: 'Run a small production batch and compare actual material usage and output with the planned quantities.',
  },
  {
    id: 'stock', title: 'Stock and POS integration', image: 'stock', source: 'stock-entry',
    detailHeading: 'Keeping inventory consistent across locations',
    detail: 'Give each warehouse a clear purpose and agree on when staff record transfers, returns, and stock adjustments. Pick a product sold at more than one location and trace its quantity from the opening balance through a sale and a return. Compare ERPNext with the physical count.',
    alt: 'ERPNext Stock Entry form showing warehouse and material movement details',
    intro: 'Stock tracks inventory by warehouse, from receipts and internal transfers to deliveries and adjustments. Connect the POS profile to the correct warehouse so retail activity feeds into the same inventory records.',
    workflow: "Load verified opening quantities and tie each counter’s POS profile to its supplying warehouse. Run a test sale and return, then use the stock ledger to check what changed and when it posted.",
    check: 'Confirm when stock is posted for your chosen POS invoice mode and check the quantities after a test shift.',
  },
];

const screenshotSizes = {
  login: [1280, 800], desk: [1440, 900], invoice: [1440, 900], dashboard: [1440, 810],
  company: [1440, 900], accounts: [1440, 900], purchasing: [1440, 900], manufacturing: [1172, 631], stock: [1280, 653],
};

function GuideScreenshot({ name, alt, caption, source, compact = false }) {
  const [width, height] = screenshotSizes[name];

  return (
    <figure className="guide-screenshot">
      <a href={`/erpnext/${name}.webp`} aria-label={`Open full-size image of ${caption}`}>
        <Image src={`/erpnext/${name}.webp`} alt={alt} width={width} height={height} sizes={compact ? '(min-width: 76rem) 550px, (min-width: 48rem) 44vw, 90vw' : '(min-width: 76rem) 475px, (min-width: 56rem) 40vw, (min-width: 38rem) 512px, 85vw'} />
      </a>
      <figcaption>{caption} · <a href={source}>Source</a></figcaption>
    </figure>
  );
}

export default function ERPNextPage() {
  return (
    <article className="portfolio-shell portfolio-section project-detail">
      <Link className="portfolio-back" href="/#skills">Back to skills</Link>
      <header className="erp-guide-hero">
        <div>
          <h1>ERPNext for business owners</h1>
          <p className="project-detail-summary">See how ERPNext connects your company, accounts, sales, purchasing, production, and stock. Each section shows what your team will use, what to set up, and what to test before launch.</p>
        </div>
        <GuideScreenshot name="dashboard" alt={modules[3].alt} caption="ERPNext Selling workspace" source={docs + 'selling'} compact />
      </header>

      <nav className="guide-contents" aria-label="Guide contents">
        <a href="#introduction">Introduction</a>
        {modules.map(({ id, title }) => <a key={id} href={`#${id}`}>{title}</a>)}
        <a href="#rollout">Implementation and customization</a>
      </nav>

      <section id="introduction" className="guide-chapter">
        <h2>Introduction to ERPNext</h2>
        <p>ERPNext gives teams a shared record of what the business buys, sells, makes, stores, and owes. A single customer order can inform delivery, billing, and stock reporting without each team entering the same information again.</p>
        <h3>Sign in and find your workspace</h3>
        <p>Open your company’s ERPNext address and sign in with your assigned account. Use Desk to open a workspace or search for a record such as an item, customer, or invoice. What appears depends on your role.</p>
        <div className="guide-image-pair">
          <GuideScreenshot name="login" alt="ERPNext sign-in form" caption="ERPNext sign-in" source="https://erpnext-demo.frappe.cloud/login" compact />
          <GuideScreenshot name="desk" alt="Desk showing available Frappe apps after signing in" caption="Frappe Desk" source="https://docs.frappe.io/framework/user/en/desk/navigation/desktop" compact />
        </div>
      </section>

      <div className="erp-solutions">
        {modules.map(({ id, title, intro, workflow, check, image, alt, source, detailHeading, detail }) => (
          <section key={id} id={id} className="erp-solution" aria-labelledby={`${id}-title`}>
            <h2 id={`${id}-title`}>{title}</h2>
            <GuideScreenshot name={image} alt={alt} caption={title} source={docs + source} />
            <div className="erp-solution-copy">
              <p>{intro}</p>
              <h3>{detailHeading}</h3>
              <p>{detail}</p>
              <p>{workflow}</p>
              <h3>Before go-live</h3>
              <p>{check}</p>
            </div>
          </section>
        ))}
      </div>

      <section id="rollout" className="guide-chapter">
        <h2>Implementation and customization</h2>
        <p>I set up and implement ERPNext, customize the workflows that need to work differently, and build dashboards around the numbers your team uses to make decisions.</p>
        <dl className="guide-checklist">
          <div><dt>Set up and implement</dt><dd>Choose the modules, clean and migrate data, configure permissions, and have staff run realistic test transactions.</dd></div>
          <div><dt>Customize the workflow</dt><dd>Adapt forms, DocTypes, approvals, print formats, automations, and integrations. Package larger changes in a Frappe app.</dd></div>
          <div><dt>Build custom dashboards</dt><dd>Define KPIs with the people who use them, connect them to posted transactions, and check the output against source reports.</dd></div>
          <div><dt>Plan the rollout</dt><dd>Assign owners, reconcile opening records, rehearse migration and backup recovery, and give users time to practice before switching over.</dd></div>
        </dl>
      </section>
      <Link className="portfolio-button portfolio-button--primary" href="/#contact">Discuss an ERPNext project</Link>
    </article>
  );
}
