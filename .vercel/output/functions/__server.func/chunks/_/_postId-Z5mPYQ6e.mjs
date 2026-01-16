import { jsx } from "react/jsx-runtime";
import { useSuspenseQuery } from "@tanstack/react-query";
import { R as Route, a as getPostByIdQueryOptions } from "./router-eOfdhlN_.mjs";
import "@tanstack/react-router";
import "@tanstack/react-router-ssr-query";
import "next-themes";
import "sonner";
import "@hugeicons/react";
import "@hugeicons/core-free-icons";
import "./server.mjs";
import "@tanstack/history";
import "@tanstack/router-core/ssr/client";
import "@tanstack/router-core";
import "node:async_hooks";
import "@tanstack/router-core/ssr/server";
import "../../index.mjs";
import "tiny-invariant";
import "seroval";
import "@tanstack/react-router/ssr/server";
import "zod";
function RouteComponent() {
  const {
    postId
  } = Route.useParams();
  const {
    data: post
  } = useSuspenseQuery(getPostByIdQueryOptions(postId));
  return /* @__PURE__ */ jsx("div", { children: post?.title });
}
export {
  RouteComponent as component
};
