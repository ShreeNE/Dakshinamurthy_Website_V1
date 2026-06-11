import { useState, useEffect, useCallback } from "react";
import { DomainContent, Article, TimelineStep, Quote, Comment, AnalyticsStats } from "../types/types";

/**
 * Custom hook encapsulating all database state fetching from the Express API.
 * Extracted from the original monolithic App.tsx to decouple data-layer concerns.
 */
export function useDatabase() {
  const [domains, setDomains] = useState<DomainContent[]>([]);
  const [articles, setArticles] = useState<Article[]>([]);
  const [timeline, setTimeline] = useState<TimelineStep[]>([]);
  const [quotes, setQuotes] = useState<Quote[]>([]);
  const [comments, setComments] = useState<Comment[]>([]);
  const [analytics, setAnalytics] = useState<AnalyticsStats>({
    pageViews: { home: 0, storytelling: 0, domains: 0, flow: 0, admin: 0 },
    totalInteractions: 0,
    totalComments: 0,
    activeSessions: 0,
    usersByRole: { admin: 0, user: 0 },
  });

  // Daily quote selection
  const [dailyQuote, setDailyQuote] = useState<Quote | null>(null);

  const loadDatabase = useCallback(() => {
    Promise.all([
      fetch("/api/v1/domains").then((r) => r.json()),
      fetch("/api/v1/articles").then((r) => r.json()),
      fetch("/api/v1/timeline").then((r) => r.json()),
      fetch("/api/v1/quotes").then((r) => r.json()),
      fetch("/api/v1/comments").then((r) => r.json()),
      fetch("/api/v1/analytics").then((r) => r.json()),
    ])
      .then(([doms, arts, lines, qts, comms, stats]) => {
        setDomains(doms);
        setArticles(arts);
        setTimeline(lines);
        setQuotes(qts);
        setComments(comms);
        setAnalytics(stats);

        if (qts.length > 0) {
          const randomIndex = Math.floor(Math.random() * qts.length);
          setDailyQuote(qts[randomIndex]);
        }
      })
      .catch((err) => console.error("Error loading spiritual database:", err));
  }, []);

  useEffect(() => {
    loadDatabase();
  }, [loadDatabase]);

  return {
    domains,
    articles,
    timeline,
    quotes,
    comments,
    analytics,
    dailyQuote,
    setArticles,
    setAnalytics,
    loadDatabase,
  };
}
