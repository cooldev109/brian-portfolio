
import React from 'react';
import { Github } from 'lucide-react';

const SimpleFooter: React.FC = () => {
  return (
    <footer className="py-8 border-t border-border/40 bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center gap-4">
          <div className="flex items-center justify-center gap-6">
            <a
              href="https://github.com/cooldev109"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
          </div>
          <p className="text-sm text-muted-foreground text-center">
            © {new Date().getFullYear()} Brian Le. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default SimpleFooter;
