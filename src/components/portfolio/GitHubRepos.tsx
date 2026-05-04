import { useEffect, useState } from "react";
import { GitFork, Star, ExternalLink } from "lucide-react";

// Update this to your GitHub username
const GITHUB_USERNAME = "pedrohernandez";
const REPO_COUNT = 6;

type Repo = {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  pushed_at: string;
};

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString("en-US", { month: "short", year: "numeric" });

const GitHubRepos = () => {
  const [repos, setRepos] = useState<Repo[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let active = true;
    fetch(
      `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=pushed&per_page=${REPO_COUNT}`,
    )
      .then((r) => {
        if (!r.ok) throw new Error(`GitHub responded ${r.status}`);
        return r.json();
      })
      .then((data: Repo[]) => active && setRepos(data))
      .catch((e) => active && setError(e.message));
    return () => {
      active = false;
    };
  }, []);

  return (
    <section
      id="github"
      className="relative py-24 lg:py-32 border-t border-border/60 bg-background"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-12 gap-8 mb-14">
          <div className="col-span-12 lg:col-span-5">
            <p className="text-[10px] tracking-[0.4em] uppercase text-gold mb-4">
              § 08 — Code & Repositories
            </p>
            <h2 className="font-display font-light text-4xl lg:text-5xl text-emerald-deep leading-[1.05]">
              Recent work on <em className="text-gold not-italic">GitHub</em>.
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-6 lg:col-start-7 self-end">
            <p className="text-foreground/75 text-lg leading-relaxed">
              A live feed of my most recently updated public repositories — automation
              scripts, QMS tooling experiments, and project-management utilities.
            </p>
            <a
              href={`https://github.com/${GITHUB_USERNAME}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-sm tracking-wider uppercase text-emerald-deep hover:text-gold transition-colors"
            >
              @{GITHUB_USERNAME} <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {error && (
          <div className="bg-cream p-8 text-sm text-muted-foreground border border-border/60 rounded-sm">
            Unable to load repositories ({error}). Update the GitHub username in{" "}
            <code className="text-emerald-deep">GitHubRepos.tsx</code>.
          </div>
        )}

        {!error && !repos && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
            {Array.from({ length: REPO_COUNT }).map((_, i) => (
              <div key={i} className="bg-cream p-8 h-48 animate-pulse" />
            ))}
          </div>
        )}

        {repos && repos.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
            {repos.map((repo) => (
              <a
                key={repo.id}
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-cream p-8 group hover:bg-cream-soft transition-colors duration-500 flex flex-col"
              >
                <div className="flex items-start justify-between gap-3 mb-4">
                  <h3 className="font-display text-xl text-emerald-deep group-hover:text-gold transition-colors">
                    {repo.name}
                  </h3>
                  <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-gold transition-colors flex-shrink-0 mt-1" />
                </div>
                <p className="text-sm text-foreground/75 leading-relaxed flex-1 mb-6">
                  {repo.description || "No description provided."}
                </p>
                <div className="flex items-center gap-5 text-xs text-muted-foreground tracking-wider">
                  {repo.language && (
                    <span className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-gold" />
                      {repo.language}
                    </span>
                  )}
                  <span className="flex items-center gap-1.5">
                    <Star className="w-3.5 h-3.5" /> {repo.stargazers_count}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <GitFork className="w-3.5 h-3.5" /> {repo.forks_count}
                  </span>
                  <span className="ml-auto uppercase text-[10px] tracking-[0.2em]">
                    {formatDate(repo.pushed_at)}
                  </span>
                </div>
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default GitHubRepos;
