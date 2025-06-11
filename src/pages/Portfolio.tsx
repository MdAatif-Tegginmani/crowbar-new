
import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, CheckCircle } from "lucide-react";

const Portfolio = () => {
  const domains = [
    {
      domain: "crowbarltd.com",
      type: "Primary",
      status: "Active",
      description: "Main corporate website and digital operations platform",
      technologies: ["React", "TypeScript", "Node.js", "Docker"],
      uptime: "99.9%",
      features: ["SSL Certificate", "CDN", "Load Balancer", "Auto-scaling"]
    },
    {
      domain: "api.crowbarltd.com",
      type: "API Gateway",
      status: "Active",
      description: "Micro-services API gateway and documentation portal",
      technologies: ["Express.js", "Redis", "MongoDB", "Kubernetes"],
      uptime: "99.95%",
      features: ["Rate Limiting", "Authentication", "Monitoring", "Caching"]
    },
    {
      domain: "raffle.crowbarltd.com",
      type: "Service",
      status: "Active",
      description: "Advanced raffle and lottery infrastructure platform",
      technologies: ["Vue.js", "PostgreSQL", "WebSockets", "Blockchain"],
      uptime: "99.8%",
      features: ["Real-time Results", "Audit Trail", "Fair Distribution", "Compliance"]
    },
    {
      domain: "ops.crowbarltd.com",
      type: "Operations",
      status: "Active",
      description: "Internal operations dashboard and monitoring system",
      technologies: ["Angular", "GraphQL", "InfluxDB", "Grafana"],
      uptime: "99.7%",
      features: ["24/7 Monitoring", "Alerts", "Analytics", "Reporting"]
    },
    {
      domain: "dev.crowbarltd.com",
      type: "Development",
      status: "Staging",
      description: "Development and testing environment for new features",
      technologies: ["Next.js", "Prisma", "Supabase", "Vercel"],
      uptime: "98.5%",
      features: ["CI/CD Pipeline", "Testing Suite", "Preview Deployments", "Code Review"]
    },
    {
      domain: "docs.crowbarltd.com",
      type: "Documentation",
      status: "Active",
      description: "Technical documentation and API reference portal",
      technologies: ["Docusaurus", "Markdown", "GitHub Actions", "Netlify"],
      uptime: "99.6%",
      features: ["Search", "Versioning", "Interactive Examples", "Multi-language"]
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active":
        return "bg-green-500";
      case "Staging":
        return "bg-yellow-500";
      case "Maintenance":
        return "bg-red-500";
      default:
        return "bg-gray-500";
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Primary":
        return "border-secondary text-secondary";
      case "API Gateway":
        return "border-blue-500 text-blue-500";
      case "Service":
        return "border-green-500 text-green-500";
      case "Operations":
        return "border-purple-500 text-purple-500";
      case "Development":
        return "border-yellow-500 text-yellow-500";
      case "Documentation":
        return "border-cyan-500 text-cyan-500";
      default:
        return "border-gray-500 text-gray-500";
    }
  };

  return (
    <Layout>
      <div className="py-20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="font-headline text-4xl lg:text-5xl font-bold mb-4">
              Domain <span className="text-secondary">Portfolio</span>
            </h1>
            <p className="font-body text-xl text-muted-foreground max-w-3xl mx-auto">
              Our comprehensive domain infrastructure powering industrial-strength 
              digital operations across multiple service endpoints.
            </p>
          </div>

          {/* Stats Overview */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            <div className="bg-primary text-primary-foreground p-6 industrial-shadow text-center">
              <div className="font-headline text-3xl font-bold text-secondary mb-2">6</div>
              <div className="font-body text-sm font-semibold">Active Domains</div>
            </div>
            <div className="bg-primary text-primary-foreground p-6 industrial-shadow text-center">
              <div className="font-headline text-3xl font-bold text-secondary mb-2">99.8%</div>
              <div className="font-body text-sm font-semibold">Avg Uptime</div>
            </div>
            <div className="bg-primary text-primary-foreground p-6 industrial-shadow text-center">
              <div className="font-headline text-3xl font-bold text-secondary mb-2">12</div>
              <div className="font-body text-sm font-semibold">Technologies</div>
            </div>
            <div className="bg-primary text-primary-foreground p-6 industrial-shadow text-center">
              <div className="font-headline text-3xl font-bold text-secondary mb-2">24/7</div>
              <div className="font-body text-sm font-semibold">Monitoring</div>
            </div>
          </div>

          {/* Domain Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {domains.map((domain, index) => (
              <Card key={index} className="industrial-shadow border-2 hover:border-secondary/50 transition-colors">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline" className={`font-mono text-xs ${getTypeColor(domain.type)}`}>
                      {domain.type}
                    </Badge>
                    <div className="flex items-center space-x-2">
                      <div className={`w-2 h-2 rounded-full ${getStatusColor(domain.status)}`}></div>
                      <span className="font-body text-xs font-medium">{domain.status}</span>
                    </div>
                  </div>
                  <CardTitle className="font-headline text-lg font-bold flex items-center">
                    <div className="w-3 h-3 bg-secondary industrial-shadow-orange mr-2"></div>
                    {domain.domain}
                  </CardTitle>
                  <CardDescription className="font-body text-sm">
                    {domain.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Uptime */}
                  <div className="flex items-center justify-between">
                    <span className="font-body text-sm font-medium">Uptime</span>
                    <span className="font-mono text-sm font-bold text-green-600">{domain.uptime}</span>
                  </div>

                  {/* Technologies */}
                  <div>
                    <span className="font-body text-sm font-medium mb-2 block">Technologies</span>
                    <div className="flex flex-wrap gap-1">
                      {domain.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="secondary" className="text-xs font-mono">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Features */}
                  <div>
                    <span className="font-body text-sm font-medium mb-2 block">Features</span>
                    <div className="space-y-1">
                      {domain.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2">
                          <CheckCircle className="h-3 w-3 text-green-500" />
                          <span className="font-body text-xs">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Button */}
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full industrial-shadow border-2 font-body font-semibold"
                  >
                    <ExternalLink className="h-3 w-3 mr-2" />
                    View Details
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional Info Section */}
          <div className="mt-20 bg-primary text-primary-foreground p-8 industrial-shadow">
            <div className="text-center">
              <h2 className="font-headline text-2xl font-bold mb-4">
                Need a Custom <span className="text-secondary">Domain Solution?</span>
              </h2>
              <p className="font-body text-muted-foreground mb-6 max-w-2xl mx-auto">
                Our portfolio demonstrates our capability to deliver robust, scalable 
                domain infrastructure. Let us design a custom solution for your needs.
              </p>
              <Button 
                className="industrial-shadow bg-secondary hover:bg-secondary/90 font-body font-semibold"
              >
                Discuss Your Requirements
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Portfolio;
