import { createRouter, createRootRouteWithContext, createFileRoute, lazyRouteComponent, HeadContent, Scripts } from "@tanstack/react-router";
import { setupRouterSsrQueryIntegration } from "@tanstack/react-router-ssr-query";
import { jsx, jsxs } from "react/jsx-runtime";
import { QueryClient, queryOptions } from "@tanstack/react-query";
import { useTheme } from "next-themes";
import { Toaster as Toaster$1 } from "sonner";
import { IconLoader, IconAlertOctagon, IconAlertTriangle, IconInfoCircle, IconCircleCheck } from "@tabler/icons-react";
import { c as createServerFn, T as TSS_SERVER_FUNCTION, g as getServerFnById } from "./server.mjs";
import z from "zod";
import "@tanstack/history";
import "@tanstack/router-core/ssr/client";
import "@tanstack/router-core";
import "node:async_hooks";
import "@tanstack/router-core/ssr/server";
import "../../index.mjs";
import "tiny-invariant";
import "seroval";
import "@tanstack/react-router/ssr/server";
function getContext() {
  const queryClient = new QueryClient();
  return {
    queryClient
  };
}
const appCss = "/assets/styles-DcGuogfh.css";
const Toaster = ({ ...props }) => {
  const { theme = "system" } = useTheme();
  return /* @__PURE__ */ jsx(
    Toaster$1,
    {
      theme,
      className: "toaster group",
      icons: {
        success: /* @__PURE__ */ jsx(IconCircleCheck, { className: "size-4" }),
        info: /* @__PURE__ */ jsx(IconInfoCircle, { className: "size-4" }),
        warning: /* @__PURE__ */ jsx(IconAlertTriangle, { className: "size-4" }),
        error: /* @__PURE__ */ jsx(IconAlertOctagon, { className: "size-4" }),
        loading: /* @__PURE__ */ jsx(IconLoader, { className: "size-4 animate-spin" })
      },
      style: {
        "--normal-bg": "var(--popover)",
        "--normal-text": "var(--popover-foreground)",
        "--normal-border": "var(--border)",
        "--border-radius": "var(--radius)"
      },
      toastOptions: {
        classNames: {
          toast: "cn-toast"
        }
      },
      ...props
    }
  );
};
const Route$3 = createRootRouteWithContext()({
  head: () => ({
    meta: [
      {
        charSet: "utf-8"
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      },
      {
        title: "TanStack Start Starter"
      }
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss
      }
    ]
  }),
  shellComponent: RootDocument
});
function RootDocument({ children }) {
  return /* @__PURE__ */ jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsx("head", { children: /* @__PURE__ */ jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsx(Toaster, {}),
      /* @__PURE__ */ jsx(Scripts, {})
    ] })
  ] });
}
const $$splitComponentImporter$2 = () => import("./index-Bi5asDuE.mjs");
const Route$2 = createFileRoute("/")({
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const POST_QUERY_KEYS = {
  all: ["posts"],
  byId: (id) => [...POST_QUERY_KEYS.all, id]
};
const createSsrRpc = (functionId, importer) => {
  const url = "/_serverFn/" + functionId;
  const serverFnMeta = { id: functionId };
  const fn = async (...args) => {
    const serverFn = await getServerFnById(functionId);
    return serverFn(...args);
  };
  return Object.assign(fn, {
    url,
    serverFnMeta,
    [TSS_SERVER_FUNCTION]: true
  });
};
const PostSchema = z.object({
  title: z.string().min(1),
  body: z.string().min(1)
});
const getPostsFn = createServerFn({
  method: "GET"
}).handler(createSsrRpc("ba81a2f08b8460d6d32731a02f5cc3ee6edf9f1fc9b204ab97854cd1c33c008a"));
const getPostFn = createServerFn({
  method: "GET"
}).inputValidator((d) => d).handler(createSsrRpc("e1747ee274d7c9e62d1e247b1c9d63ba1c87ccb3c24c5e9c64ebd6645768e683"));
const createPostFn = createServerFn({
  method: "POST"
}).inputValidator(PostSchema).handler(createSsrRpc("a296f4be6491c8715f96247562e7ce410d51fb0d5b3cb778e0e31a303c32e4d2"));
const getPostsQueryOptions = () => queryOptions({
  queryKey: POST_QUERY_KEYS.all,
  queryFn: getPostsFn
});
const getPostByIdQueryOptions = (postId) => queryOptions({
  queryKey: POST_QUERY_KEYS.byId(postId),
  queryFn: () => getPostFn({ data: postId })
});
const $$splitComponentImporter$1 = () => import("./index-hXDyb8EF.mjs");
const Route$1 = createFileRoute("/posts/")({
  component: lazyRouteComponent($$splitComponentImporter$1, "component"),
  pendingComponent: Loading,
  loader: ({
    context
  }) => {
    context.queryClient.ensureQueryData(getPostsQueryOptions());
  }
});
function Loading() {
  return /* @__PURE__ */ jsx("div", { children: "Loading..." });
}
const $$splitComponentImporter = () => import("./_postId-DOKG57Rt.mjs");
const Route = createFileRoute("/posts/$postId")({
  component: lazyRouteComponent($$splitComponentImporter, "component"),
  pendingComponent: () => /* @__PURE__ */ jsx("div", { children: "Loading..." }),
  loader: async ({
    context,
    params
  }) => {
    const {
      postId
    } = params;
    await context.queryClient.ensureQueryData(getPostByIdQueryOptions(postId));
  }
});
const IndexRoute = Route$2.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$3
});
const PostsIndexRoute = Route$1.update({
  id: "/posts/",
  path: "/posts/",
  getParentRoute: () => Route$3
});
const PostsPostIdRoute = Route.update({
  id: "/posts/$postId",
  path: "/posts/$postId",
  getParentRoute: () => Route$3
});
const rootRouteChildren = {
  IndexRoute,
  PostsPostIdRoute,
  PostsIndexRoute
};
const routeTree = Route$3._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const rqContext = getContext();
  const router2 = createRouter({
    routeTree,
    context: { ...rqContext },
    defaultPreload: "intent"
  });
  setupRouterSsrQueryIntegration({ router: router2, queryClient: rqContext.queryClient });
  return router2;
};
const router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getRouter
}, Symbol.toStringTag, { value: "Module" }));
export {
  POST_QUERY_KEYS as P,
  Route as R,
  getPostByIdQueryOptions as a,
  createPostFn as c,
  getPostsQueryOptions as g,
  router as r
};
