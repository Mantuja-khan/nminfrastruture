import { QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts
} from "@tanstack/react-router";
import { useEffect } from "react";
import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { SiteHeader } from "../components/site-header";
import { SiteFooter } from "../components/site-footer";
function NotFoundComponent() {
  return <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
    to="/"
    className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
  >
            Go home
          </Link>
        </div>
      </div>
    </div>;
}
function ErrorComponent({ error, reset }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);
  return <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
    onClick={() => {
      router.invalidate();
      reset();
    }}
    className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
  >
            Try again
          </button>
          <a
    href="/"
    className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
  >
            Go home
          </a>
        </div>
      </div>
    </div>;
}
const Route = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "NM Infrastructure \u2014 Construction & Architecture" },
      { name: "description", content: "NM Infrastructure builds landmark residential, commercial and industrial projects with quality craftsmanship and reliable delivery." },
      { name: "author", content: "NM Infrastructure" },
      { property: "og:title", content: "NM Infrastructure \u2014 Construction & Architecture" },
      { property: "og:description", content: "Building the spaces you want, with quality materials and expert planning." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" }
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss
      },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "preconnect", href: "https://api.fontshare.com" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap" },
      { rel: "stylesheet", href: "https://api.fontshare.com/v2/css?f[]=chillax@400,500,600,700&display=swap" }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent
});
function RootShell({ children }) {
  return <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>;
}
function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  const router = useRouter();
  const pathname = router.state.location.pathname;
  const transparentHeader = pathname === "/";
  return <QueryClientProvider client={queryClient}>
      <SiteHeader transparent={transparentHeader} />
      <main className="min-h-screen bg-background">
        <Outlet />
      </main>
      <SiteFooter />
    </QueryClientProvider>;
}
export {
  Route
};
