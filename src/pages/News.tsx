
import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowRight } from "lucide-react";

const News = () => {
  const featuredArticle = {
    title: "The Future of Industrial-Strength Micro-Services Architecture",
    excerpt: "Exploring how enterprise-grade micro-services are evolving to meet the demands of modern digital operations.",
    category: "Architecture",
    date: "2025-01-15",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&h=400&fit=crop",
    featured: true
  };

  const articles = [
    {
      title: "Scaling Raffle Infrastructure for High-Volume Events",
      excerpt: "Best practices for handling millions of participants while maintaining fairness and transparency.",
      category: "Infrastructure",
      date: "2025-01-10",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=250&fit=crop"
    },
    {
      title: "Digital Operations Monitoring: A Complete Guide",
      excerpt: "Comprehensive strategies for monitoring and maintaining digital operations at enterprise scale.",
      category: "Operations",
      date: "2025-01-08",
      readTime: "12 min read",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=250&fit=crop"
    },
    {
      title: "Security-First Development in Industrial Applications",
      excerpt: "How to build secure, auditable systems for mission-critical industrial applications.",
      category: "Security",
      date: "2025-01-05",
      readTime: "10 min read",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=250&fit=crop"
    },
    {
      title: "API Gateway Design Patterns for Micro-Services",
      excerpt: "Essential patterns and practices for building robust API gateways in distributed systems.",
      category: "Architecture",
      date: "2025-01-03",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=250&fit=crop"
    },
    {
      title: "Performance Optimization for Industrial Web Applications",
      excerpt: "Techniques for achieving sub-50ms response times in enterprise applications.",
      category: "Performance",
      date: "2024-12-28",
      readTime: "9 min read",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=250&fit=crop"
    },
    {
      title: "Disaster Recovery Planning for Digital Operations",
      excerpt: "Building resilient systems that can withstand and recover from critical failures.",
      category: "Operations",
      date: "2024-12-25",
      readTime: "11 min read",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=250&fit=crop"
    }
  ];

  const categories = ["All", "Architecture", "Infrastructure", "Operations", "Security", "Performance"];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Architecture":
        return "border-blue-500 text-blue-500";
      case "Infrastructure":
        return "border-green-500 text-green-500";
      case "Operations":
        return "border-purple-500 text-purple-500";
      case "Security":
        return "border-red-500 text-red-500";
      case "Performance":
        return "border-yellow-500 text-yellow-500";
      default:
        return "border-secondary text-secondary";
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <Layout>
      <div className="py-20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="font-headline text-4xl lg:text-5xl font-bold mb-4">
              News & <span className="text-secondary">Insights</span>
            </h1>
            <p className="font-body text-xl text-muted-foreground max-w-3xl mx-auto">
              Stay informed with the latest insights, best practices, and innovations 
              in industrial-strength digital operations and micro-services architecture.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === "All" ? "default" : "outline"}
                size="sm"
                className={`industrial-shadow font-body font-semibold ${
                  category === "All" 
                    ? "bg-secondary hover:bg-secondary/90" 
                    : "border-2 hover:border-secondary"
                }`}
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Featured Article */}
          <Card className="mb-16 industrial-shadow border-2 border-secondary overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2">
                <img 
                  src={featuredArticle.image} 
                  alt={featuredArticle.title}
                  className="w-full h-64 md:h-full object-cover"
                />
              </div>
              <div className="md:w-1/2 p-8">
                <Badge 
                  variant="outline" 
                  className={`mb-4 font-mono text-xs ${getCategoryColor(featuredArticle.category)}`}
                >
                  Featured • {featuredArticle.category}
                </Badge>
                <h2 className="font-headline text-2xl lg:text-3xl font-bold mb-4">
                  {featuredArticle.title}
                </h2>
                <p className="font-body text-muted-foreground mb-6">
                  {featuredArticle.excerpt}
                </p>
                <div className="flex items-center space-x-6 text-sm text-muted-foreground mb-6">
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4" />
                    <span className="font-mono">{formatDate(featuredArticle.date)}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4" />
                    <span className="font-mono">{featuredArticle.readTime}</span>
                  </div>
                </div>
                <Button className="industrial-shadow bg-secondary hover:bg-secondary/90 font-body font-semibold">
                  Read Full Article <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </Card>

          {/* Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <Card key={index} className="industrial-shadow border-2 hover:border-secondary/50 transition-colors overflow-hidden">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <Badge 
                    variant="outline" 
                    className={`w-fit mb-2 font-mono text-xs ${getCategoryColor(article.category)}`}
                  >
                    {article.category}
                  </Badge>
                  <CardTitle className="font-headline text-lg font-bold">
                    {article.title}
                  </CardTitle>
                  <CardDescription className="font-body text-sm">
                    {article.excerpt}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-3 w-3" />
                      <span className="font-mono">{formatDate(article.date)}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="h-3 w-3" />
                      <span className="font-mono">{article.readTime}</span>
                    </div>
                  </div>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full industrial-shadow border-2 font-body font-semibold"
                  >
                    Read Article <ArrowRight className="ml-2 h-3 w-3" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Newsletter CTA */}
          <div className="mt-20 bg-primary text-primary-foreground p-8 industrial-shadow text-center">
            <h2 className="font-headline text-2xl font-bold mb-4">
              Stay Updated with <span className="text-secondary">Industrial Insights</span>
            </h2>
            <p className="font-body text-muted-foreground mb-6 max-w-2xl mx-auto">
              Subscribe to our newsletter for the latest insights on digital operations, 
              micro-services architecture, and industrial-strength development practices.
            </p>
            <Button 
              className="industrial-shadow bg-secondary hover:bg-secondary/90 font-body font-semibold"
            >
              Subscribe to Newsletter
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default News;
