import { T as TSS_SERVER_FUNCTION, c as createServerFn } from "./server.mjs";
import z from "zod";
import { eq, sql } from "drizzle-orm";
import { drizzle } from "drizzle-orm/neon-http";
import { pgTable, timestamp, text, varchar } from "drizzle-orm/pg-core";
import "@tanstack/history";
import "@tanstack/router-core/ssr/client";
import "@tanstack/router-core";
import "node:async_hooks";
import "@tanstack/router-core/ssr/server";
import "../../index.mjs";
import "tiny-invariant";
import "seroval";
import "react/jsx-runtime";
import "@tanstack/react-router/ssr/server";
import "@tanstack/react-router";
const createServerRpc = (serverFnMeta, splitImportFn) => {
  const url = "/_serverFn/" + serverFnMeta.id;
  return Object.assign(splitImportFn, {
    url,
    serverFnMeta,
    [TSS_SERVER_FUNCTION]: true
  });
};
const post = pgTable("post", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  title: varchar("title", { length: 40 }).notNull(),
  body: text("body").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().$onUpdate(() => /* @__PURE__ */ new Date()).notNull()
});
const InsertPost = typeof post.$inferInsert;
const schema = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  InsertPost,
  post
}, Symbol.toStringTag, { value: "Module" }));
const db = drizzle(process.env.DATABASE_URL, { schema });
const PostSchema = z.object({
  title: z.string().min(1),
  body: z.string().min(1)
});
const getPostsFn_createServerFn_handler = createServerRpc({
  id: "ba81a2f08b8460d6d32731a02f5cc3ee6edf9f1fc9b204ab97854cd1c33c008a",
  name: "getPostsFn",
  filename: "src/features/posts/server/functions.ts"
}, (opts, signal) => getPostsFn.__executeServer(opts, signal));
const getPostsFn = createServerFn({
  method: "GET"
}).handler(getPostsFn_createServerFn_handler, async () => {
  const response = await db.query.post.findMany({
    // eslint-disable-next-line no-shadow
    orderBy: (post2, {
      desc
    }) => [desc(post2.createdAt)]
  });
  return response;
});
const getPostFn_createServerFn_handler = createServerRpc({
  id: "e1747ee274d7c9e62d1e247b1c9d63ba1c87ccb3c24c5e9c64ebd6645768e683",
  name: "getPostFn",
  filename: "src/features/posts/server/functions.ts"
}, (opts, signal) => getPostFn.__executeServer(opts, signal));
const getPostFn = createServerFn({
  method: "GET"
}).inputValidator((d) => d).handler(getPostFn_createServerFn_handler, async ({
  data
}) => {
  const response = await db.query.post.findFirst({
    where: eq(post.id, data)
  });
  return response;
});
const createPostFn_createServerFn_handler = createServerRpc({
  id: "a296f4be6491c8715f96247562e7ce410d51fb0d5b3cb778e0e31a303c32e4d2",
  name: "createPostFn",
  filename: "src/features/posts/server/functions.ts"
}, (opts, signal) => createPostFn.__executeServer(opts, signal));
const createPostFn = createServerFn({
  method: "POST"
}).inputValidator(PostSchema).handler(createPostFn_createServerFn_handler, async ({
  data
}) => {
  await db.insert(post).values(data);
});
export {
  createPostFn_createServerFn_handler,
  getPostFn_createServerFn_handler,
  getPostsFn_createServerFn_handler
};
