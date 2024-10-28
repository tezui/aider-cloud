import { Button } from "@/components/ui/button";
import { Terminal, Sparkles, GitBranch, MessageSquare, Lock, Zap } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <div className="flex-1 bg-gradient-to-b from-background to-secondary">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <nav className="flex items-center justify-between mb-16">
            <div className="flex items-center gap-2">
              <Terminal className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold">Aider Cloud</span>
            </div>
            <div className="flex items-center gap-4">
              <Link href="/login">
                <Button variant="ghost">Login</Button>
              </Link>
              <Link href="/signup">
                <Button>Get Started</Button>
              </Link>
            </div>
          </nav>

          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              AI Pair Programming in the{" "}
              <span className="text-primary">Cloud</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              Experience the power of AI-assisted coding with real-time collaboration.
              Write better code faster with your AI programming partner.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/signup">
                <Button size="lg" className="w-full sm:w-auto">
                  <Sparkles className="mr-2 h-4 w-4" />
                  Start Coding Free
                </Button>
              </Link>
              <a href="https://github.com/Aider-AI/aider" target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                  <GitBranch className="mr-2 h-4 w-4" />
                  View on GitHub
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Why Choose Aider Cloud?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<MessageSquare className="h-6 w-6" />}
              title="Natural Conversations"
              description="Chat naturally with AI about your code. No complex commands needed."
            />
            <FeatureCard
              icon={<Lock className="h-6 w-6" />}
              title="Secure & Private"
              description="Your code stays private. Enterprise-grade security for your projects."
            />
            <FeatureCard
              icon={<Zap className="h-6 w-6" />}
              title="Instant Setup"
              description="Start coding in seconds. No complex configuration required."
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-background">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <Terminal className="h-5 w-5" />
              <span className="font-semibold">© 2024 Aider Cloud</span>
            </div>
            <div className="flex gap-6">
              <Link href="/privacy" className="text-sm text-muted-foreground hover:text-primary">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-sm text-muted-foreground hover:text-primary">
                Terms of Service
              </Link>
              <a 
                href="https://github.com/Aider-AI/aider"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-primary"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}

function FeatureCard({ icon, title, description }: { 
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="p-6 rounded-lg border bg-card">
      <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
}