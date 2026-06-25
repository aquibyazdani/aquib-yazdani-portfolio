// Single source of truth for all blog posts.
// content blocks are rendered sequentially by BlogPostPage.

export type BlogContentBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; level: 2 | 3; text: string }
  | { type: "list"; items: string[]; ordered?: boolean }
  | { type: "code"; language: string; text: string }
  | { type: "quote"; text: string }
  | { type: "divider" };

export type BlogPost = {
  id: number;
  slug: string;
  title: string;
  subtitle: string;
  date: string;         // "MMMM D, YYYY"
  readingTime: string;  // "6 min read"
  tags: string[];
  coverAccent: string;  // hex — used to tint the cover gradient
  published: boolean;
  content: BlogContentBlock[];
};

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    slug: "building-toi-epaper-for-10m-daily-users",
    title: "Building TOI ePaper for 10M+ Daily Active Users",
    subtitle:
      "How we architected, optimized, and scaled the Times of India digital ePaper — from a blank React project to India's most-read digital newspaper.",
    date: "June 10, 2026",
    readingTime: "8 min read",
    tags: ["React", "SSR", "Performance", "Architecture"],
    coverAccent: "#d3e97a",
    published: true,
    content: [
      {
        type: "paragraph",
        text: "When I joined Harns Technologies in 2021, one of my first large-scale assignments was the Times of India ePaper platform — a product that would eventually serve 10M+ digital daily active users and sit inside an ecosystem with 60M+ monthly active app users. This is the story of the decisions we made, the performance bottlenecks we hit, and how we resolved them.",
      },
      { type: "heading", level: 2, text: "Starting From Scratch" },
      {
        type: "paragraph",
        text: "We started with a blank React project. The requirement was clear: build a digital replica of the print newspaper that loads fast, works across devices, integrates ads revenue, and can be reused across multiple regional ePaper properties. That last point turned out to be the most architecturally important decision we made.",
      },
      {
        type: "paragraph",
        text: "Instead of building a monolithic app, we designed a shared component library from day one — pages, navigation, search, text-to-speech, and ad slots were all isolated into composable units. This allowed us to launch three additional regional ePapers on top of the same architecture, each with different branding but zero duplicated logic.",
      },
      { type: "heading", level: 2, text: "SSR + Context API for State" },
      {
        type: "paragraph",
        text: "The platform is server-side rendered. SSR was non-negotiable for two reasons: SEO (news content needs to be crawlable) and first-contentful-paint (users landing on the ePaper via Google search should see content immediately, not a spinner).",
      },
      {
        type: "paragraph",
        text: "For state management we went with React Context API rather than Redux — the app state is mostly read-heavy (current edition, selected page, zoom level) with infrequent mutations. Context avoided Redux boilerplate without sacrificing the ability to share state deeply across the component tree.",
      },
      { type: "heading", level: 2, text: "The Archive Problem: 20 Seconds → Under 1 Second" },
      {
        type: "paragraph",
        text: "The archive view — a grid of every past edition going back years — was our biggest performance crisis. The initial implementation loaded and rendered every edition card into the DOM simultaneously. On a slow connection or low-end device, this caused a 20+ second render block that made the page completely unusable.",
      },
      {
        type: "paragraph",
        text: "The fix was list virtualization. We only rendered the cards currently within (or near) the viewport, and destroyed cards that scrolled far out of view. The result: DOM nodes dropped from several thousand to under a hundred at any time. Render time collapsed to under one second — a 20× improvement that unblocked the archive product launch entirely.",
      },
      {
        type: "list",
        items: [
          "Only visible rows rendered — DOM size stayed constant regardless of total data",
          "Scroll position maintained perfectly via item height estimation",
          "Lazy hydration for individual cards below the fold",
          "Image lazy-loading combined with virtual scroll for bandwidth savings",
        ],
      },
      { type: "heading", level: 2, text: "Text-to-Speech Accessibility" },
      {
        type: "paragraph",
        text: "One feature I'm particularly proud of is the text-to-speech reader, built using the Web Speech API. Readers could highlight any article and have it read aloud — useful for accessibility and for commuters who want to consume news hands-free. The implementation required careful handling of browser compatibility, playback controls, and pitch/rate settings, all without any third-party TTS library.",
      },
      { type: "heading", level: 2, text: "Ads, Analytics, and Revenue" },
      {
        type: "paragraph",
        text: "Integrating Google AdSense and GTM into an SSR React app without degrading Core Web Vitals is genuinely tricky. Ad scripts are notorious for layout shift (CLS) and blocking the main thread (TBT). We deferred all ad initialization until after first contentful paint, used fixed-size ad slot placeholders to prevent layout shift, and loaded GTM asynchronously with a nonce-based CSP strategy.",
      },
      { type: "heading", level: 2, text: "Key Takeaways" },
      {
        type: "list",
        items: [
          "Design for reuse early — a shared component library across 4 ePapers saved months of future work",
          "List virtualization is essential for any data-heavy scrollable surface",
          "SSR + careful hydration strategy is the right default for content-heavy news products",
          "Defer third-party scripts aggressively to protect Core Web Vitals",
          "Web Speech API can deliver real accessibility value without external dependencies",
        ],
      },
    ],
  },
  {
    id: 2,
    slug: "zustand-over-prop-drilling-practical-guide",
    title: "Replacing Prop Drilling with Zustand: A Practical Guide",
    subtitle:
      "How Zustand's sliced stores and reusable selectors fixed the highest-churn screens in an enterprise arbitration platform — and why it beats both Redux and Context for mid-size apps.",
    date: "May 15, 2026",
    readingTime: "7 min read",
    tags: ["React", "Zustand", "State Management", "TypeScript"],
    coverAccent: "#d3a07a",
    published: true,
    content: [
      {
        type: "paragraph",
        text: "State management is one of those decisions that feels low-stakes early in a project and high-stakes six months in. At AAA's dispute resolution platform, we inherited a React codebase with deeply prop-drilled state — filter configs, pagination state, and async data passed through 5–6 component layers. Refactoring to Zustand was one of the most impactful engineering decisions I made there.",
      },
      { type: "heading", level: 2, text: "The Problem With Deep Prop Drilling" },
      {
        type: "paragraph",
        text: "Prop drilling isn't just an aesthetics problem. When state lives several layers up from where it's used, every intermediate component becomes a pass-through. Add a new field to that state and you touch files that conceptually have nothing to do with the feature. Worse, every re-render of the parent causes re-renders all the way down the tree — even for components whose relevant slice of state hasn't changed.",
      },
      { type: "heading", level: 2, text: "Why Zustand Over Redux or Context?" },
      {
        type: "list",
        items: [
          "Zero boilerplate — no actions, reducers, or action creators",
          "Fine-grained subscriptions — components only re-render when their specific slice changes",
          "TypeScript-first — store type is inferred from the create() call",
          "Works outside React — useful for utility functions that need to read state",
          "No Provider wrapper needed — global store is just a hook",
        ],
      },
      { type: "heading", level: 2, text: "Sliced Store Pattern" },
      {
        type: "paragraph",
        text: "For larger stores, Zustand recommends a sliced pattern — each domain of state is defined in its own slice and combined into one store. This keeps files manageable without fragmenting state into multiple separate stores.",
      },
      {
        type: "code",
        language: "typescript",
        text: `// filterSlice.ts
export type FilterSlice = {
  filters: CaseFilters;
  setFilter: (key: keyof CaseFilters, value: string) => void;
  resetFilters: () => void;
};

const defaultFilters: CaseFilters = { status: "all", type: "all", dateRange: null };

export const createFilterSlice = (set: SetState): FilterSlice => ({
  filters: defaultFilters,
  setFilter: (key, value) =>
    set((s) => ({ filters: { ...s.filters, [key]: value } })),
  resetFilters: () => set({ filters: defaultFilters }),
});

// store.ts
export const useCaseStore = create<FilterSlice & PaginationSlice>()((...a) => ({
  ...createFilterSlice(...a),
  ...createPaginationSlice(...a),
}));`,
      },
      { type: "heading", level: 2, text: "Selectors Prevent Unnecessary Re-renders" },
      {
        type: "paragraph",
        text: "The most important Zustand pattern for performance is using selectors. Rather than subscribing to the entire store, a component subscribes to only the specific fields it uses. Zustand compares the selector's output by reference equality on each state update, skipping the re-render if nothing changed.",
      },
      {
        type: "code",
        language: "typescript",
        text: `// BAD — subscribes to entire store, re-renders on any change
const { filters, pagination } = useCaseStore();

// GOOD — only re-renders when filters.status changes
const status = useCaseStore((s) => s.filters.status);

// GOOD — selector for derived value
const activeFilterCount = useCaseStore(
  (s) => Object.values(s.filters).filter(Boolean).length
);`,
      },
      { type: "heading", level: 2, text: "Results" },
      {
        type: "paragraph",
        text: "After the refactor, the highest-churn screens (case filter panel + results table + pagination) went from being the buggiest to the most stable. Redundant re-renders were eliminated. New filter fields could be added in one file without touching intermediary components. And junior engineers could understand the state shape in seconds — just open the store file.",
      },
      {
        type: "quote",
        text: "The best state management solution is the one that makes state changes obvious and co-located with the components that care about them.",
      },
    ],
  },
  {
    id: 3,
    slug: "zustand-vs-redux-toolkit-honest-breakdown",
    title: "Zustand vs Redux Toolkit: The Honest Breakdown Nobody Gives You",
    subtitle:
      "My team picked Redux Toolkit. Three months later we ripped it out. Not because it was bad — because it was too much for what we actually needed. Here's the full breakdown.",
    date: "June 20, 2026",
    readingTime: "7 min read",
    tags: ["React", "Zustand", "Redux Toolkit", "State Management", "TypeScript"],
    coverAccent: "#d3a07a",
    published: true,
    content: [
      {
        type: "paragraph",
        text: "My team picked Redux Toolkit at the start of a new project. The decision was easy — it's the official Redux recommendation, it has great DevTools, and everyone on the team already knew it. Three months later we ripped it out. Not because Redux Toolkit is bad. Because it was too much for what we actually needed. This is the honest breakdown I wish someone had given us before we started.",
      },
      {
        type: "paragraph",
        text: "Zustand just crossed Redux Toolkit in weekly npm downloads in 2025. That's not a coincidence. Developers have been quietly making the same switch. The question is whether the switch makes sense for your project — and the answer depends on more than bundle size.",
      },
      { type: "heading", level: 2, text: "The Numbers" },
      {
        type: "paragraph",
        text: "Zustand 5.0 ships at 486 bytes gzipped. Redux Toolkit ships at 13.6KB gzipped. That's a 28× size difference. On a throttled device, Zustand parses approximately 4× faster. These numbers matter on mobile — they don't move the needle on desktop.",
      },
      {
        type: "list",
        items: [
          "Zustand — 486B gzipped, ~3 files of boilerplate, surgical re-renders by default",
          "Redux Toolkit — 13.6KB gzipped, ~15 files of boilerplate, re-renders need manual reselect",
          "Zustand crossed Redux Toolkit in weekly npm downloads in 2025",
          "Same counter: RTK needs 15 files, Zustand needs 3",
        ],
      },
      {
        type: "paragraph",
        text: "But bundle size isn't the real argument. The real difference shows up in three places: boilerplate, re-renders, and DevTools. Let's take each one.",
      },
      { type: "heading", level: 2, text: "Boilerplate: 15 Files vs 3" },
      {
        type: "paragraph",
        text: "The boilerplate gap sounds trivial until you're onboarding someone at 11pm before a release. Here's the same feature — a modal toggle — implemented in both.",
      },
      {
        type: "code",
        language: "typescript",
        text: `// Redux Toolkit — modal toggle
// modalSlice.ts
import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "modal",
  initialState: { isOpen: false },
  reducers: {
    openModal: (state) => { state.isOpen = true; },
    closeModal: (state) => { state.isOpen = false; },
  },
});

export const { openModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer;

// store.ts — add to combineReducers
// hooks.ts — typed useAppDispatch + useAppSelector
// Component usage:
const isOpen = useAppSelector((s) => s.modal.isOpen);
const dispatch = useAppDispatch();
dispatch(openModal());`,
      },
      {
        type: "code",
        language: "typescript",
        text: `// Zustand — same modal toggle, one file
import { create } from "zustand";

const useModalStore = create<{
  isOpen: boolean;
  open: () => void;
  close: () => void;
}>()((set) => ({
  isOpen: false,
  open: () => set({ isOpen: true }),
  close: () => set({ isOpen: false }),
}));

// Component usage — that's it
const { isOpen, open, close } = useModalStore();`,
      },
      {
        type: "paragraph",
        text: "For a modal. The Redux Toolkit version touches 4 files minimum. The Zustand version is self-contained. Multiply this across 20 features and you understand why teams are switching.",
      },
      { type: "heading", level: 2, text: "Re-renders: Surgical vs Manual" },
      {
        type: "paragraph",
        text: "This is where Zustand's design philosophy becomes concrete. By default, a component re-renders when any part of the store it reads changes. Redux Toolkit has the same problem without Reselect. Zustand's selector pattern is surgical — subscribe to exactly what you need.",
      },
      {
        type: "code",
        language: "typescript",
        text: `// Bad — re-renders whenever ANY store value changes
const { filters, pagination, user } = useAppStore();

// Good — only re-renders when filters.status changes
const status = useAppStore((s) => s.filters.status);

// Good — derived selector, re-renders only when count changes
const activeCount = useAppStore(
  (s) => Object.values(s.filters).filter(Boolean).length
);

// Zustand compares selector output by reference equality —
// no extra memoization library required.`,
      },
      {
        type: "paragraph",
        text: "I migrated a high-churn dashboard from prop-drilled Context to Zustand and the render noise disappeared overnight. The case filter panel, results table, and pagination — all previously re-rendering in lockstep — became independent. Each component subscribed to its own slice and re-rendered in isolation.",
      },
      { type: "heading", level: 2, text: "DevTools: Where Redux Toolkit Genuinely Wins" },
      {
        type: "paragraph",
        text: "This is the honest part nobody says. Redux DevTools — time-travel debugging, action replay, state export — is not replicated by Zustand. If you're in a regulated industry (legal, finance, healthcare), debugging a race condition from three async actions ago is invaluable. Redux's action log is a linear, inspectable history of your entire state. Zustand's middleware logger exists but it's basic.",
      },
      {
        type: "list",
        items: [
          "Time-travel debugging — step backwards through state changes",
          "Action replay — reproduce bugs from production logs",
          "State export/import — share exact app state with teammates",
          "Diff view — see exactly what changed per dispatch",
        ],
      },
      {
        type: "paragraph",
        text: "If your team lives in Redux DevTools every day, don't switch. If you've opened it twice in six months, it's not a real argument for keeping Redux Toolkit.",
      },
      { type: "heading", level: 2, text: "The Modern Pattern: TanStack Query + Zustand" },
      {
        type: "paragraph",
        text: "Here's what I actually reach for now, and why it covers 90% of React apps with almost zero overhead.",
      },
      {
        type: "quote",
        text: "Most 'state management' problems are actually server state problems. Conflating the two is what leads to 80-line Redux slices managing data that should just be a cache.",
      },
      {
        type: "paragraph",
        text: "TanStack Query handles everything that comes from the server: fetching, caching, background refetching, stale-while-revalidate, optimistic updates. Zustand handles everything that is genuinely client-side: UI state, filters, selections, modals, multi-step wizard progress.",
      },
      {
        type: "code",
        language: "typescript",
        text: `// TanStack Query — server state
const { data: cases, isLoading } = useQuery({
  queryKey: ["cases", filters],
  queryFn: () => fetchCases(filters),
  staleTime: 30_000,
});

// Zustand — client state
const filters = useCaseStore((s) => s.filters);
const setFilter = useCaseStore((s) => s.setFilter);

// No manual loading state. No Redux thunks.
// No normalization. Just: what does the server give us,
// and what has the user selected locally.`,
      },
      { type: "heading", level: 2, text: "When to Use Redux Toolkit" },
      {
        type: "list",
        items: [
          "Large teams (10+ engineers) where consistent patterns matter more than flexibility",
          "Complex async orchestration — Redux-Saga or Redux-Thunk with heavy side effects",
          "Codebases already deep in Redux where migration cost exceeds benefit",
          "Regulated industries where DevTools time-travel is a debugging requirement",
          "Apps with normalized entity caching (Redux Toolkit's createEntityAdapter is excellent)",
        ],
      },
      { type: "heading", level: 2, text: "When to Use Zustand" },
      {
        type: "list",
        items: [
          "Small to medium teams who ship fast and hate boilerplate",
          "Apps where 80%+ of state comes from a server (pair with TanStack Query)",
          "Greenfield projects — start simple, scale up only when you hit real limits",
          "When you need state outside of React components (utility functions, event handlers)",
          "Micro-frontends — each remote can own its store without global provider hell",
        ],
      },
      { type: "heading", level: 2, text: "The Mistake I Still See Constantly" },
      {
        type: "paragraph",
        text: "Teams adding Redux Toolkit to a three-person startup that ships every two weeks. Six months later they're maintaining 80-line slices for a modal toggle. The framework isn't the problem. The mismatch between tool complexity and actual problem complexity is the problem.",
      },
      {
        type: "paragraph",
        text: "Pick the tool that stays out of your way. For most teams in 2026, that's TanStack Query + Zustand. For teams with genuinely complex async state and large codebases, Redux Toolkit earns its weight. Know which situation you're actually in before you start typing.",
      },
      {
        type: "quote",
        text: "The best state management setup is the one your newest team member can understand on day one without reading documentation.",
      },
    ],
  },
];
