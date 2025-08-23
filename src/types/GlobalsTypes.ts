export interface SplitTextProps {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
  ease?: string | ((t: number) => number);
  splitType?: "chars" | "words" | "lines" | "words, chars";
  from?: gsap.TweenVars;
  to?: gsap.TweenVars;
  threshold?: number;
  rootMargin?: string;
  textAlign?: React.CSSProperties["textAlign"];
  onLetterAnimationComplete?: () => void;
}

export interface FlipWordsProps {
  words: string[];
  duration?: number;
  className?: string;
}

export type TechItem = {
  icon?: React.ReactNode;
  title: string;
  id: string;
  href?: string;
};

export type Project = {
  id: string;
  title: string;
  description: string;
  image: string;
  href: string;
  tags: string[];
};

export type Article = {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  href: string;
};

export type LoadMoreListProps<T> = {
  items: T[];
  renderItem: (item: T, index: number) => React.ReactNode;
  initialCount?: number;
  incrementCount?: number;
  gridClassName?: string;
  keyField?: keyof T;
};
