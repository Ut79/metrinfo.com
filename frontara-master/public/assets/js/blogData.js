const blogPosts = [
    {
      id: "1",                     // Unique identifier used to fetch the post
      title: "Salesforce Best Practices",         // Title displayed on the page
      meta: "Posted on May 7, 2025 | By Admin", // Meta info like date and author
      content: `
        <p>Salesforce is a powerful CRM platform, but using it efficiently requires adherence to best practices. Here are some of the key ones:</p>
        <h2>1. Use Declarative Tools First</h2>
        <p>Try to use Flows, Validation Rules, and Process Builder before jumping into Apex code.</p>
        <h2>2. Bulkify Your Code</h2>
        <p>Apex should be written to handle many records at once to avoid hitting governor limits.</p>
        <h2>3. Naming Conventions</h2>
        <p>Consistent naming makes it easier for teams to read, understand, and maintain code.</p>
      `
    },
    {
      id: "2",
      title: "Top 5 Web Development Trends in 2025",
      meta: "Posted on April 20, 2025 | By Dev Team",
      content: `
        <p>The web is evolving faster than ever. Here are the top 5 trends you should know:</p>
        <ul>
          <li>WebAssembly adoption</li>
          <li>Progressive Web Apps (PWAs)</li>
          <li>AI-powered UX customization</li>
          <li>Voice search optimization</li>
          <li>Serverless architectures</li>
        </ul>
      `
    },
    {
      id: "3",
      title: "Mobile App Development: Native vs. Hybrid",
      meta: "Posted on March 15, 2025 | By Mobile Team",
      content: `
        <p>When starting mobile development, choosing between native and hybrid can be tricky:</p>
        <h2>Native Apps</h2>
        <p>Offer the best performance and user experience, but cost more and take longer.</p>
        <h2>Hybrid Apps</h2>
        <p>Cheaper and faster to build but may compromise on performance.</p>
      `
    },
    {
        id: "4",
        title: "Boosting Productivity with Agentforce Service Agent",
        meta: "Posted on May 7, 2025 | By Utkarsh",
        content: `
          <p>Agentforce Service Agent is a cutting-edge productivity solution within Salesforce Service Cloud. It empowers support agents to resolve customer issues faster by integrating AI-powered insights, automated workflows, and a unified workspace.</p>
      
          <h2>Key Features</h2>
          <ul>
            <li><strong>Smart Case Routing:</strong> Ensures each case is automatically assigned to the most qualified agent using Omni-Channel routing rules and agent capacity models. <a href="https://help.salesforce.com/s/articleView?id=sf.omnichannel_overview.htm&type=5" target="_blank">Learn more about Omni-Channel</a>.</li>
            <li><strong>Einstein Article Recommendations:</strong> Uses AI to suggest relevant knowledge articles in real time based on case content, helping agents respond more effectively. <a href="https://help.salesforce.com/s/articleView?id=sf.knowledge_einstein_article_suggestions.htm&type=5" target="_blank">See Einstein Article Suggestions</a>.</li>
            <li><strong>Integrated Agent Console:</strong> Provides a customizable workspace that consolidates email, chat, phone, and case records into a single view for streamlined handling. <a href="https://help.salesforce.com/s/articleView?id=sf.agent_console.htm&type=5" target="_blank">About the Agent Console</a>.</li>
            <li><strong>Macros and Quick Actions:</strong> Automate repetitive tasks such as case updates, email responses, and status changes. <a href="https://help.salesforce.com/s/articleView?id=sf.macros_overview.htm&type=5" target="_blank">Explore Macros</a>.</li>
          </ul>
      
          <h2>Business Value</h2>
          <p>Agentforce not only enhances agent efficiency but also improves customer satisfaction and reduces operational costs. By enabling faster resolutions, it helps organizations meet SLAs and scale their support functions effectively.</p>
      
          <h2>Real-World Impact</h2>
          <p>For example, a global e-commerce company integrated Agentforce tools such as Omni-Channel, Macros, and Knowledge Suggestions. As a result, they observed:</p>
          <ul>
            <li>35% faster first-response time</li>
            <li>25% improvement in case resolution rate</li>
            <li>Significant agent productivity gain due to AI-based recommendations</li>
          </ul>
      
          <h2>Recommended Configuration Steps</h2>
          <ol>
            <li>Enable and configure Omni-Channel for skill-based routing.</li>
            <li>Set up the Service Console with Lightning App Builder for agents.</li>
            <li>Train agents to use Macros, Quick Text, and Article Recommendations.</li>
          </ol>
      
          <p>For detailed setup guidance, refer to the <a href="https://trailhead.salesforce.com/content/learn/modules/service_cloud_agent_console" target="_blank">Service Cloud Agent Console Trailhead</a>.</p>
      
          <p>By combining intelligent automation with a user-centric console, Agentforce Service Agent positions your support team for long-term success in delivering exceptional customer service.</p>
        `
      }
      
  ];
  