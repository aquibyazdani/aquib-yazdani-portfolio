import PageLoader from "@/components/PageLoader";

// Covers every route: the App Router reuses the nearest loading state for
// nested segments while their content is fetched.
export default function Loading() {
  return <PageLoader />;
}
