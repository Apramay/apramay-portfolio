import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, ExternalLink, Github, Linkedin, Mail, ChevronDown } from "lucide-react";
import { useState } from "react";
import {
  SalesRevenueDashboard,
  MarketingPerformanceDashboard,
  InvestmentTrendsDashboard,
} from "@/components/Dashboards";

/**
 * Design System: Modern Technical Authority
 * - Bold Space Grotesk typography for headers
 * - Indigo-to-purple gradient accents
 * - Smooth animations and micro-interactions
 * - Technical elements (code, tools, metrics) prominently featured
 * - Interactive dashboards showcasing analytical skills
 */

export default function Home() {
  const [expandedExperience, setExpandedExperience] = useState<string | null>(null);
  const [activeDashboard, setActiveDashboard] = useState<"sales" | "marketing" | "investment">("sales");

  const experiences = [
    {
      id: "jinee",
      company: "Jinee Inc",
      location: "Philadelphia, PA",
      role: "Product Analyst",
      period: "Jan 2025 – Present",
      description: "Business Requirements, Analytics, & Workflow Optimization",
      achievements: [
        { metric: "45%", description: "uplift in adoption", detail: "Analyzed cross-platform feature usage for 1,000 users by building Tableau dashboards and segmenting behavioral cohorts" },
        { metric: "30%", description: "improvement in onboarding throughput", detail: "Improved funnel conversion by consolidating requirements and realigning engineering sprints" },
        { metric: "90%", description: "reduction in content generation labor", detail: "Developed GenAI-based automation that increased client self-service adoption 60%" },
        { metric: "25%", description: "error reduction in reporting", detail: "Strengthened enterprise reporting accuracy by designing SQL pipelines and Snowflake data transformation logic" },
      ],
      skills: ["Tableau", "SQL", "Snowflake", "Python", "Jira"],
    },
    {
      id: "astral",
      company: "Astral Insights",
      location: "Philadelphia, PA",
      role: "Consultant (Capstone)",
      period: "Jan 2024 – May 2024",
      description: "Industry Profitability Modeling & KPI Analysis",
      achievements: [
        { metric: "20%", description: "forecast accuracy improvement", detail: "Evaluated maritime industry profitability by surveying 100+ stakeholders and building KPI models" },
        { metric: "75", description: "insights delivered", detail: "Summarized market data by constructing dashboards informing go-to-market and revenue projections" },
      ],
      skills: ["Power BI", "Excel", "Stakeholder Analysis", "Data Mapping"],
    },
    {
      id: "parkgenius",
      company: "Park Genius",
      location: "Philadelphia, PA",
      role: "Product Analyst (Intern)",
      period: "Jul 2023 – Dec 2023",
      description: "Requirements Gathering & Feasibility Research",
      achievements: [
        { metric: "45%", description: "validation score", detail: "Assessed GPS-enabled reservation feasibility by drafting business plan, workflows, and prototype specifications" },
        { metric: "66%", description: "refinement in feature list", detail: "Improved discovery insights by conducting 50+ user interviews across multiple customer segments" },
      ],
      skills: ["Requirements Gathering", "User Research", "Business Planning"],
    },
    {
      id: "infosys",
      company: "Infosys Limited",
      location: "Bengaluru, India",
      role: "Associate Consultant",
      period: "Nov 2021 – Jul 2022",
      description: "Business Process Optimization & Cloud Transition",
      achievements: [
        { metric: "30%", description: "system downtime reduction", detail: "Coordinated a 5-member team through SAP cloud migration with zero post-migration issues" },
        { metric: "$2M", description: "support cost savings", detail: "Migrated 200 on-prem servers with 99.99% uptime" },
      ],
      skills: ["SAP", "Cloud Migration", "Team Coordination", "Confluence"],
    },
    {
      id: "tcs",
      company: "Tata Consultancy Services",
      location: "Kolkata, India",
      role: "Business Analyst",
      period: "Jul 2019 – Nov 2021",
      description: "Global Deployment & Business System Improvement",
      achievements: [
        { metric: "99.99%", description: "uptime across 160+ countries", detail: "Coordinated infrastructure operations by directing a 10-member team on cloud deployments" },
        { metric: "80%", description: "workflow cycle time improvement", detail: "Redesigned account-creation process for faster processing duration" },
      ],
      skills: ["Cloud Deployment", "Team Leadership", "Process Optimization"],
    },
  ];

  const skills = [
    { category: "Analytics & BI", items: ["Tableau", "Power BI", "Excel (Advanced)"] },
    { category: "Data & Databases", items: ["SQL", "Snowflake", "Python", "R", "Data Mapping"] },
    { category: "Product & Process", items: ["Requirements Gathering", "Stakeholder Analysis", "UAT", "Jira", "Confluence"] },
    { category: "Technical", items: ["SAP", "Cloud Migration", "Business Process Optimization"] },
  ];

  const projects = [
    {
      title: "Cross-Platform Feature Adoption Analysis",
      company: "Jinee Inc",
      description: "Built comprehensive Tableau dashboards analyzing feature usage patterns across 1,000 users, identifying behavioral cohorts and driving 45% uplift in adoption rates.",
      metrics: ["1,000 users analyzed", "45% adoption uplift", "Real-time dashboards"],
      tools: ["Tableau", "SQL", "Python"],
    },
    {
      title: "Maritime Industry Profitability Model",
      company: "Astral Insights",
      description: "Developed KPI models and forecasting dashboards for maritime industry profitability analysis. Conducted 100+ stakeholder interviews and delivered 75 actionable insights.",
      metrics: ["100+ stakeholders", "75 insights", "20% forecast accuracy"],
      tools: ["Power BI", "Excel", "Stakeholder Analysis"],
    },
    {
      title: "GenAI-Powered Content Automation",
      company: "Jinee Inc",
      description: "Engineered GenAI-based automation system that reduced content generation labor by 90% and increased client self-service adoption to 60%.",
      metrics: ["90% labor reduction", "60% adoption increase", "Automated workflows"],
      tools: ["Python", "GenAI", "Automation"],
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Apramay Gyan
          </div>
          <div className="flex gap-6 items-center">
            <a href="#experience" className="text-sm hover:text-accent transition-colors">Experience</a>
            <a href="#dashboards" className="text-sm hover:text-accent transition-colors">Dashboards</a>
            <a href="#skills" className="text-sm hover:text-accent transition-colors">Skills</a>
            <a href="#projects" className="text-sm hover:text-accent transition-colors">Projects</a>
            <a href="#contact" className="text-sm hover:text-accent transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-32">
        {/* Background Image */}
        <div className="absolute inset-0 -z-10">
          <img
            src="/images/hero-bg.jpg"
            alt="Hero background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-white/90"></div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text Content */}
            <div className="space-y-6">
              <div className="space-y-2">
                <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                  Product & Business Analyst
                </h1>
                <p className="text-xl text-muted-foreground">
                  Transforming data into strategic insights for enterprise growth
                </p>
              </div>

              <p className="text-lg text-foreground/80 leading-relaxed">
                MBA-educated analyst with 5+ years of experience driving business transformation through data-driven decision making. Specialized in product analytics, business process optimization, and cross-functional leadership across global teams.
              </p>

              {/* Key Metrics */}
              <div className="grid grid-cols-3 gap-4 pt-4">
                <div className="bg-white/60 backdrop-blur rounded-lg p-4 border border-indigo-200 hover:shadow-lg transition-all">
                  <div className="text-2xl font-bold text-indigo-600">5+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
                <div className="bg-white/60 backdrop-blur rounded-lg p-4 border border-purple-200 hover:shadow-lg transition-all">
                  <div className="text-2xl font-bold text-purple-600">160+</div>
                  <div className="text-sm text-muted-foreground">Countries Managed</div>
                </div>
                <div className="bg-white/60 backdrop-blur rounded-lg p-4 border border-indigo-200 hover:shadow-lg transition-all">
                  <div className="text-2xl font-bold text-indigo-600">$2M+</div>
                  <div className="text-sm text-muted-foreground">Cost Savings</div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex gap-4 pt-4">
                <Button className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white">
                  View Resume <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
                <Button variant="outline" className="border-indigo-300 text-indigo-600 hover:bg-indigo-50">
                  Get in Touch
                </Button>
              </div>
            </div>

            {/* Right: Visual Element */}
            <div className="hidden lg:block">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-lg blur-3xl opacity-20"></div>
                <div className="relative bg-white/80 backdrop-blur rounded-lg p-8 border border-indigo-200 space-y-4">
                  <div className="space-y-2">
                    <div className="text-sm font-mono text-indigo-600">// Core Competencies</div>
                    <div className="space-y-1 text-sm font-mono">
                      <div className="text-foreground">const analyst = {'{}'}</div>
                      <div className="ml-4">analytics: ["Tableau", "Power BI", "SQL"],</div>
                      <div className="ml-4">databases: ["Snowflake", "Python", "R"],</div>
                      <div className="ml-4">expertise: ["Product", "Process", "Data"],</div>
                      <div className="text-foreground">{'}'}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dashboards Section */}
      <section id="dashboards" className="py-20 bg-gradient-to-b from-secondary/50 to-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4 mb-12">
            <h2 className="text-4xl font-bold text-foreground">Interactive Analytics Dashboards</h2>
            <div className="w-16 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full"></div>
            <p className="text-lg text-muted-foreground">
              Explore interactive dashboards showcasing real-world data analysis and visualization skills. Built with Kaggle datasets to demonstrate proficiency in data interpretation and business insights.
            </p>
          </div>

          {/* Dashboard Selector */}
          <div className="flex gap-3 mb-8 flex-wrap">
            <Button
              onClick={() => setActiveDashboard("sales")}
              className={`transition-all ${
                activeDashboard === "sales"
                  ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white"
                  : "bg-secondary text-foreground hover:bg-secondary/80"
              }`}
            >
              Sales & Revenue
            </Button>
            <Button
              onClick={() => setActiveDashboard("marketing")}
              className={`transition-all ${
                activeDashboard === "marketing"
                  ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white"
                  : "bg-secondary text-foreground hover:bg-secondary/80"
              }`}
            >
              Marketing Performance
            </Button>
            <Button
              onClick={() => setActiveDashboard("investment")}
              className={`transition-all ${
                activeDashboard === "investment"
                  ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white"
                  : "bg-secondary text-foreground hover:bg-secondary/80"
              }`}
            >
              Investment Trends
            </Button>
          </div>

          {/* Dashboard Content */}
          <div className="bg-white rounded-lg shadow-lg p-8 border border-border">
            {activeDashboard === "sales" && <SalesRevenueDashboard />}
            {activeDashboard === "marketing" && <MarketingPerformanceDashboard />}
            {activeDashboard === "investment" && <InvestmentTrendsDashboard />}
          </div>

          {/* Dashboard Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <Card className="p-6 bg-gradient-to-br from-indigo-50 to-purple-50 border-indigo-200">
              <h3 className="font-bold text-foreground mb-2">Sales & Revenue</h3>
              <p className="text-sm text-muted-foreground">E-commerce dataset analysis showing revenue trends, product performance, and order metrics.</p>
            </Card>
            <Card className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 border-purple-200">
              <h3 className="font-bold text-foreground mb-2">Marketing Performance</h3>
              <p className="text-sm text-muted-foreground">Multi-platform ad campaign analysis with ROI metrics and spend efficiency insights.</p>
            </Card>
            <Card className="p-6 bg-gradient-to-br from-pink-50 to-red-50 border-pink-200">
              <h3 className="font-bold text-foreground mb-2">Investment Trends</h3>
              <p className="text-sm text-muted-foreground">Startup funding analysis by stage and year, showing market trends and investment patterns.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-secondary/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4 mb-12">
            <h2 className="text-4xl font-bold text-foreground">Professional Experience</h2>
            <div className="w-16 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full"></div>
          </div>

          <div className="space-y-4">
            {experiences.map((exp) => (
              <Card
                key={exp.id}
                className="overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer border-l-4 border-l-indigo-600"
                onClick={() => setExpandedExperience(expandedExperience === exp.id ? null : exp.id)}
              >
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-foreground">{exp.role}</h3>
                      <p className="text-indigo-600 font-semibold">{exp.company}</p>
                      <p className="text-sm text-muted-foreground">{exp.location} • {exp.period}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-muted-foreground">{exp.description}</p>
                      <ChevronDown className={`w-5 h-5 text-indigo-600 mt-2 transition-transform ${expandedExperience === exp.id ? 'rotate-180' : ''}`} />
                    </div>
                  </div>

                  {/* Expanded Content */}
                  {expandedExperience === exp.id && (
                    <div className="mt-6 pt-6 border-t border-border space-y-4 animate-in fade-in slide-in-from-top-2 duration-300">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {exp.achievements.map((achievement, idx) => (
                          <div key={idx} className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-lg p-4 border border-indigo-200">
                            <div className="text-2xl font-bold text-indigo-600 mb-1">{achievement.metric}</div>
                            <div className="text-sm font-semibold text-foreground mb-2">{achievement.description}</div>
                            <p className="text-xs text-muted-foreground">{achievement.detail}</p>
                          </div>
                        ))}
                      </div>

                      {/* Skills Tags */}
                      <div className="flex flex-wrap gap-2 pt-4">
                        {exp.skills.map((skill) => (
                          <span key={skill} className="px-3 py-1 bg-indigo-100 text-indigo-700 text-xs font-semibold rounded-full">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4 mb-12">
            <h2 className="text-4xl font-bold text-foreground">Technical Skills & Expertise</h2>
            <div className="w-16 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skillGroup) => (
              <Card key={skillGroup.category} className="p-6 hover:shadow-lg transition-all duration-300 border-t-2 border-t-purple-600">
                <h3 className="text-lg font-bold text-foreground mb-4">{skillGroup.category}</h3>
                <ul className="space-y-2">
                  {skillGroup.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-foreground/80">
                      <div className="w-2 h-2 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-secondary/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4 mb-12">
            <h2 className="text-4xl font-bold text-foreground">Featured Projects</h2>
            <div className="w-16 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <Card key={project.title} className="overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col">
                <div className="bg-gradient-to-r from-indigo-600 to-purple-600 h-2"></div>
                <div className="p-6 flex flex-col flex-grow space-y-4">
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-1">{project.title}</h3>
                    <p className="text-sm text-indigo-600 font-semibold">{project.company}</p>
                  </div>

                  <p className="text-foreground/80 text-sm flex-grow">{project.description}</p>

                  {/* Metrics */}
                  <div className="flex flex-wrap gap-2">
                    {project.metrics.map((metric) => (
                      <span key={metric} className="px-2 py-1 bg-indigo-50 text-indigo-700 text-xs font-semibold rounded">
                        {metric}
                      </span>
                    ))}
                  </div>

                  {/* Tools */}
                  <div className="flex flex-wrap gap-2 pt-2 border-t border-border">
                    {project.tools.map((tool) => (
                      <span key={tool} className="text-xs text-muted-foreground font-mono bg-muted px-2 py-1 rounded">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4 mb-12">
            <h2 className="text-4xl font-bold text-foreground">Education</h2>
            <div className="w-16 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="p-6 border-l-4 border-l-indigo-600">
              <h3 className="text-xl font-bold text-foreground mb-2">Master of Business Administration (MBA)</h3>
              <p className="text-indigo-600 font-semibold mb-1">Temple University, Fox School of Business</p>
              <p className="text-muted-foreground">Philadelphia, PA • May 2024</p>
            </Card>

            <Card className="p-6 border-l-4 border-l-purple-600">
              <h3 className="text-xl font-bold text-foreground mb-2">Bachelor of Engineering, Power Engineering</h3>
              <p className="text-purple-600 font-semibold mb-1">Jadavpur University</p>
              <p className="text-muted-foreground">Kolkata, India • May 2019</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Connect?</h2>
          <p className="text-indigo-100 text-lg mb-8 max-w-2xl mx-auto">
            I'm actively exploring opportunities with forward-thinking organizations. Let's discuss how I can drive impact through data-driven insights and strategic analysis.
          </p>

          <div className="flex flex-wrap gap-4 justify-center mb-8">
            <a href="mailto:apramaygyan.mba@gmail.com" className="inline-flex items-center gap-2 bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition-colors">
              <Mail className="w-5 h-5" />
              Email Me
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-white/20 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/30 transition-colors border border-white/30">
              <Linkedin className="w-5 h-5" />
              LinkedIn
            </a>
            <a href="tel:+12672374477" className="inline-flex items-center gap-2 bg-white/20 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/30 transition-colors border border-white/30">
              <ExternalLink className="w-5 h-5" />
              +1 (267) 237-4477
            </a>
          </div>

          <div className="text-white/80 text-sm">
            <p>Philadelphia, PA • MBA • apramaygyan.mba@gmail.com</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground/5 py-8 border-t border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-muted-foreground text-sm">
          <p>© 2025 Apramay Gyan. Crafted with attention to detail.</p>
        </div>
      </footer>
    </div>
  );
}
