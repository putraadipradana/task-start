import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useSuspenseQuery, useQueryClient, useMutation } from "@tanstack/react-query";
import { g as getPostsQueryOptions, P as POST_QUERY_KEYS, c as createPostFn } from "./router-eOfdhlN_.mjs";
import { Link } from "@tanstack/react-router";
import { format } from "date-fns";
import z from "zod";
import { useForm } from "@tanstack/react-form";
import * as React from "react";
import { useState, useMemo } from "react";
import { toast } from "sonner";
import { Button as Button$1 } from "@base-ui/react/button";
import { cva } from "class-variance-authority";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { Input as Input$1 } from "@base-ui/react/input";
import { HugeiconsIcon } from "@hugeicons/react";
import { Loading03Icon } from "@hugeicons/core-free-icons";
import { Drawer as Drawer$1 } from "vaul";
import { Separator as Separator$1 } from "@base-ui/react/separator";
import { mergeProps } from "@base-ui/react/merge-props";
import { useRender } from "@base-ui/react/use-render";
import { Avatar as Avatar$1 } from "@base-ui/react/avatar";
import "@tanstack/react-router-ssr-query";
import "next-themes";
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
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
const buttonVariants = cva(
  "focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 rounded-md border border-transparent bg-clip-padding text-sm font-medium focus-visible:ring-[3px] aria-invalid:ring-[3px] [&_svg:not([class*='size-'])]:size-4 inline-flex items-center justify-center whitespace-nowrap transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none shrink-0 [&_svg]:shrink-0 outline-none group/button select-none",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/80",
        outline: "border-border bg-background hover:bg-muted hover:text-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 aria-expanded:bg-muted aria-expanded:text-foreground shadow-xs",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 aria-expanded:bg-secondary aria-expanded:text-secondary-foreground",
        ghost: "hover:bg-muted hover:text-foreground dark:hover:bg-muted/50 aria-expanded:bg-muted aria-expanded:text-foreground",
        destructive: "bg-destructive/10 hover:bg-destructive/20 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/20 text-destructive focus-visible:border-destructive/40 dark:hover:bg-destructive/30",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-9 gap-1.5 px-2.5 in-data-[slot=button-group]:rounded-md has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
        xs: "h-6 gap-1 rounded-[min(var(--radius-md),8px)] px-2 text-xs in-data-[slot=button-group]:rounded-md has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3",
        sm: "h-8 gap-1 rounded-[min(var(--radius-md),10px)] px-2.5 in-data-[slot=button-group]:rounded-md has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5",
        lg: "h-10 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-3 has-data-[icon=inline-start]:pl-3",
        icon: "size-9",
        "icon-xs": "size-6 rounded-[min(var(--radius-md),8px)] in-data-[slot=button-group]:rounded-md [&_svg:not([class*='size-'])]:size-3",
        "icon-sm": "size-8 rounded-[min(var(--radius-md),10px)] in-data-[slot=button-group]:rounded-md",
        "icon-lg": "size-10"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
function Button({
  className,
  variant = "default",
  size = "default",
  ...props
}) {
  return /* @__PURE__ */ jsx(
    Button$1,
    {
      "data-slot": "button",
      className: cn(buttonVariants({ variant, size, className })),
      ...props
    }
  );
}
function Label({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    "label",
    {
      "data-slot": "label",
      className: cn(
        "gap-2 text-sm leading-none font-medium group-data-[disabled=true]:opacity-50 peer-disabled:opacity-50 flex items-center select-none group-data-[disabled=true]:pointer-events-none peer-disabled:cursor-not-allowed",
        className
      ),
      ...props
    }
  );
}
function Separator({
  className,
  orientation = "horizontal",
  ...props
}) {
  return /* @__PURE__ */ jsx(
    Separator$1,
    {
      "data-slot": "separator",
      orientation,
      className: cn(
        "bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:w-px data-[orientation=vertical]:self-stretch",
        className
      ),
      ...props
    }
  );
}
function FieldGroup({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      "data-slot": "field-group",
      className: cn(
        "gap-7 data-[slot=checkbox-group]:gap-3 [&>[data-slot=field-group]]:gap-4 group/field-group @container/field-group flex w-full flex-col",
        className
      ),
      ...props
    }
  );
}
const fieldVariants = cva(
  "data-[invalid=true]:text-destructive gap-3 group/field flex w-full",
  {
    variants: {
      orientation: {
        vertical: "flex-col [&>*]:w-full [&>.sr-only]:w-auto",
        horizontal: "flex-row items-center [&>[data-slot=field-label]]:flex-auto has-[>[data-slot=field-content]]:items-start has-[>[data-slot=field-content]]:[&>[role=checkbox],[role=radio]]:mt-px",
        responsive: "flex-col [&>*]:w-full [&>.sr-only]:w-auto @md/field-group:flex-row @md/field-group:items-center @md/field-group:[&>*]:w-auto @md/field-group:[&>[data-slot=field-label]]:flex-auto @md/field-group:has-[>[data-slot=field-content]]:items-start @md/field-group:has-[>[data-slot=field-content]]:[&>[role=checkbox],[role=radio]]:mt-px"
      }
    },
    defaultVariants: {
      orientation: "vertical"
    }
  }
);
function Field({
  className,
  orientation = "vertical",
  ...props
}) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      role: "group",
      "data-slot": "field",
      "data-orientation": orientation,
      className: cn(fieldVariants({ orientation }), className),
      ...props
    }
  );
}
function FieldLabel({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    Label,
    {
      "data-slot": "field-label",
      className: cn(
        "has-data-checked:bg-primary/5 has-data-checked:border-primary dark:has-data-checked:bg-primary/10 gap-2 group-data-[disabled=true]/field:opacity-50 has-[>[data-slot=field]]:rounded-md has-[>[data-slot=field]]:border [&>*]:data-[slot=field]:p-3 group/field-label peer/field-label flex w-fit leading-snug",
        "has-[>[data-slot=field]]:w-full has-[>[data-slot=field]]:flex-col",
        className
      ),
      ...props
    }
  );
}
function FieldError({
  className,
  children,
  errors,
  ...props
}) {
  const content = useMemo(() => {
    if (children) {
      return children;
    }
    if (!errors?.length) {
      return null;
    }
    const uniqueErrors = [
      ...new Map(errors.map((error) => [error?.message, error])).values()
    ];
    if (uniqueErrors?.length == 1) {
      return uniqueErrors[0]?.message;
    }
    return /* @__PURE__ */ jsx("ul", { className: "ml-4 flex list-disc flex-col gap-1", children: uniqueErrors.map(
      (error, index) => error?.message && /* @__PURE__ */ jsx("li", { children: error.message }, index)
    ) });
  }, [children, errors]);
  if (!content) {
    return null;
  }
  return /* @__PURE__ */ jsx(
    "div",
    {
      role: "alert",
      "data-slot": "field-error",
      className: cn("text-destructive text-sm font-normal", className),
      ...props,
      children: content
    }
  );
}
function Input({ className, type, ...props }) {
  return /* @__PURE__ */ jsx(
    Input$1,
    {
      type,
      "data-slot": "input",
      className: cn(
        "dark:bg-input/30 border-input focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 h-9 rounded-md border bg-transparent px-2.5 py-1 text-base shadow-xs transition-[color,box-shadow] file:h-7 file:text-sm file:font-medium focus-visible:ring-[3px] aria-invalid:ring-[3px] md:text-sm file:text-foreground placeholder:text-muted-foreground w-full min-w-0 outline-none file:inline-flex file:border-0 file:bg-transparent disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
        className
      ),
      ...props
    }
  );
}
function Textarea({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    "textarea",
    {
      "data-slot": "textarea",
      className: cn(
        "border-input dark:bg-input/30 focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 rounded-md border bg-transparent px-2.5 py-2 text-base shadow-xs transition-[color,box-shadow] focus-visible:ring-[3px] aria-invalid:ring-[3px] md:text-sm placeholder:text-muted-foreground flex field-sizing-content min-h-16 w-full outline-none disabled:cursor-not-allowed disabled:opacity-50",
        className
      ),
      ...props
    }
  );
}
function Spinner({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    HugeiconsIcon,
    {
      icon: Loading03Icon,
      strokeWidth: 2,
      role: "status",
      "aria-label": "Loading",
      className: cn("size-4 animate-spin", className),
      ...props
    }
  );
}
function Drawer({
  ...props
}) {
  return /* @__PURE__ */ jsx(Drawer$1.Root, { "data-slot": "drawer", ...props });
}
function DrawerTrigger({
  ...props
}) {
  return /* @__PURE__ */ jsx(Drawer$1.Trigger, { "data-slot": "drawer-trigger", ...props });
}
function DrawerPortal({
  ...props
}) {
  return /* @__PURE__ */ jsx(Drawer$1.Portal, { "data-slot": "drawer-portal", ...props });
}
function DrawerClose({
  ...props
}) {
  return /* @__PURE__ */ jsx(Drawer$1.Close, { "data-slot": "drawer-close", ...props });
}
function DrawerOverlay({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    Drawer$1.Overlay,
    {
      "data-slot": "drawer-overlay",
      className: cn(
        "data-open:animate-in data-closed:animate-out data-closed:fade-out-0 data-open:fade-in-0 bg-black/10 supports-backdrop-filter:backdrop-blur-xs fixed inset-0 z-50",
        className
      ),
      ...props
    }
  );
}
function DrawerContent({
  className,
  children,
  ...props
}) {
  return /* @__PURE__ */ jsxs(DrawerPortal, { "data-slot": "drawer-portal", children: [
    /* @__PURE__ */ jsx(DrawerOverlay, {}),
    /* @__PURE__ */ jsxs(
      Drawer$1.Content,
      {
        "data-slot": "drawer-content",
        className: cn(
          "bg-background flex h-auto flex-col text-sm data-[vaul-drawer-direction=bottom]:inset-x-0 data-[vaul-drawer-direction=bottom]:bottom-0 data-[vaul-drawer-direction=bottom]:mt-24 data-[vaul-drawer-direction=bottom]:max-h-[80vh] data-[vaul-drawer-direction=bottom]:rounded-t-xl data-[vaul-drawer-direction=bottom]:border-t data-[vaul-drawer-direction=left]:inset-y-0 data-[vaul-drawer-direction=left]:left-0 data-[vaul-drawer-direction=left]:w-3/4 data-[vaul-drawer-direction=left]:rounded-r-xl data-[vaul-drawer-direction=left]:border-r data-[vaul-drawer-direction=right]:inset-y-0 data-[vaul-drawer-direction=right]:right-0 data-[vaul-drawer-direction=right]:w-3/4 data-[vaul-drawer-direction=right]:rounded-l-xl data-[vaul-drawer-direction=right]:border-l data-[vaul-drawer-direction=top]:inset-x-0 data-[vaul-drawer-direction=top]:top-0 data-[vaul-drawer-direction=top]:mb-24 data-[vaul-drawer-direction=top]:max-h-[80vh] data-[vaul-drawer-direction=top]:rounded-b-xl data-[vaul-drawer-direction=top]:border-b data-[vaul-drawer-direction=left]:sm:max-w-sm data-[vaul-drawer-direction=right]:sm:max-w-sm group/drawer-content fixed z-50",
          className
        ),
        ...props,
        children: [
          /* @__PURE__ */ jsx("div", { className: "bg-muted mx-auto mt-4 hidden h-1.5 w-[100px] shrink-0 rounded-full group-data-[vaul-drawer-direction=bottom]/drawer-content:block bg-muted mx-auto hidden shrink-0 group-data-[vaul-drawer-direction=bottom]/drawer-content:block" }),
          children
        ]
      }
    )
  ] });
}
function DrawerHeader({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      "data-slot": "drawer-header",
      className: cn(
        "gap-0.5 p-4 group-data-[vaul-drawer-direction=bottom]/drawer-content:text-center group-data-[vaul-drawer-direction=top]/drawer-content:text-center md:gap-1.5 md:text-left flex flex-col",
        className
      ),
      ...props
    }
  );
}
function DrawerFooter({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      "data-slot": "drawer-footer",
      className: cn("gap-2 p-4 mt-auto flex flex-col", className),
      ...props
    }
  );
}
function DrawerTitle({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    Drawer$1.Title,
    {
      "data-slot": "drawer-title",
      className: cn("text-foreground font-medium", className),
      ...props
    }
  );
}
function DrawerDescription({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    Drawer$1.Description,
    {
      "data-slot": "drawer-description",
      className: cn("text-muted-foreground text-sm", className),
      ...props
    }
  );
}
const MOBILE_BREAKPOINT = 768;
function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState(void 0);
  React.useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
    const onChange = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    };
    mql.addEventListener("change", onChange);
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    return () => mql.removeEventListener("change", onChange);
  }, []);
  return !!isMobile;
}
const formSchema = z.object({
  title: z.string().min(1, "Title is empty"),
  body: z.string().min(1, "Body is empty")
});
function CreatePostForm() {
  const isMobile = useIsMobile();
  const queryClient = useQueryClient();
  const [isOpen, setIsOpen] = useState(false);
  const createPostMutation = useMutation({
    mutationFn: async (data) => {
      await createPostFn({ data });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: POST_QUERY_KEYS.all
      });
    }
  });
  const form = useForm({
    defaultValues: {
      title: "",
      body: ""
    },
    validators: {
      onChange: formSchema
    },
    onSubmit: async ({ value }) => {
      try {
        await createPostMutation.mutateAsync(value);
        form.reset();
      } catch (error) {
        toast.error("Failed to create post");
      } finally {
        setTimeout(() => setIsOpen(false), 500);
        setTimeout(() => toast.success("Post created successfully"), 700);
      }
    }
  });
  return /* @__PURE__ */ jsxs(
    Drawer,
    {
      open: isOpen,
      onOpenChange: setIsOpen,
      direction: isMobile ? "bottom" : "right",
      children: [
        /* @__PURE__ */ jsx(DrawerTrigger, { asChild: true, children: /* @__PURE__ */ jsx(Button, { children: "Create post" }) }),
        /* @__PURE__ */ jsxs(DrawerContent, { className: "rounded-none!", children: [
          /* @__PURE__ */ jsxs(DrawerHeader, { className: "gap-1", children: [
            /* @__PURE__ */ jsx(DrawerTitle, { children: "Create new post" }),
            /* @__PURE__ */ jsx(DrawerDescription, { children: "Please fill all form" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-4 overflow-y-auto px-4", children: [
            /* @__PURE__ */ jsx(Separator, {}),
            /* @__PURE__ */ jsx(
              "form",
              {
                id: "create-post-form",
                className: "pb-5",
                onSubmit: (e) => {
                  e.preventDefault();
                  form.handleSubmit();
                },
                children: /* @__PURE__ */ jsxs(FieldGroup, { children: [
                  /* @__PURE__ */ jsx(
                    form.Field,
                    {
                      name: "title",
                      children: (field) => {
                        const isInvalid = field.state.meta.isTouched && !field.state.meta.isValid;
                        return /* @__PURE__ */ jsxs(Field, { "data-invalid": isInvalid, children: [
                          /* @__PURE__ */ jsx(FieldLabel, { htmlFor: field.name, children: "Title" }),
                          /* @__PURE__ */ jsx(
                            Input,
                            {
                              id: field.name,
                              name: field.name,
                              value: field.state.value,
                              onBlur: field.handleBlur,
                              onChange: (e) => field.handleChange(e.target.value),
                              "aria-invalid": isInvalid,
                              autoComplete: "off"
                            }
                          ),
                          isInvalid && /* @__PURE__ */ jsx(FieldError, { errors: field.state.meta.errors })
                        ] });
                      }
                    }
                  ),
                  /* @__PURE__ */ jsx(
                    form.Field,
                    {
                      name: "body",
                      children: (field) => {
                        const isInvalid = field.state.meta.isTouched && !field.state.meta.isValid;
                        return /* @__PURE__ */ jsxs(Field, { "data-invalid": isInvalid, children: [
                          /* @__PURE__ */ jsx(FieldLabel, { htmlFor: field.name, children: "Body" }),
                          /* @__PURE__ */ jsx(
                            Textarea,
                            {
                              id: field.name,
                              name: field.name,
                              value: field.state.value,
                              onBlur: field.handleBlur,
                              onChange: (e) => field.handleChange(e.target.value),
                              "aria-invalid": isInvalid
                            }
                          ),
                          isInvalid && /* @__PURE__ */ jsx(FieldError, { errors: field.state.meta.errors })
                        ] });
                      }
                    }
                  )
                ] })
              }
            ),
            /* @__PURE__ */ jsx(Separator, { className: "sm:sr-only" })
          ] }),
          /* @__PURE__ */ jsx(DrawerFooter, { children: /* @__PURE__ */ jsx(
            form.Subscribe,
            {
              selector: (state) => [state.canSubmit, state.isSubmitting],
              children: ([canSubmit, isSubmitting]) => /* @__PURE__ */ jsxs(Fragment, { children: [
                /* @__PURE__ */ jsx(
                  Button,
                  {
                    type: "submit",
                    form: "create-post-form",
                    disabled: !canSubmit,
                    children: isSubmitting ? /* @__PURE__ */ jsx(Spinner, {}) : "Create post"
                  }
                ),
                /* @__PURE__ */ jsx(DrawerClose, { asChild: true, children: /* @__PURE__ */ jsx(Button, { variant: "outline", children: "Cancel" }) })
              ] })
            }
          ) })
        ] })
      ]
    }
  );
}
const badgeVariants = cva(
  "h-5 gap-1 rounded-4xl border border-transparent px-2 py-0.5 text-xs font-medium transition-all has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&>svg]:size-3! inline-flex items-center justify-center w-fit whitespace-nowrap shrink-0 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-colors overflow-hidden group/badge",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground [a]:hover:bg-primary/80",
        secondary: "bg-secondary text-secondary-foreground [a]:hover:bg-secondary/80",
        destructive: "bg-destructive/10 [a]:hover:bg-destructive/20 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 text-destructive dark:bg-destructive/20",
        outline: "border-border text-foreground [a]:hover:bg-muted [a]:hover:text-muted-foreground",
        ghost: "hover:bg-muted hover:text-muted-foreground dark:hover:bg-muted/50",
        link: "text-primary underline-offset-4 hover:underline"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
function Badge({
  className,
  variant = "default",
  render,
  ...props
}) {
  return useRender({
    defaultTagName: "span",
    props: mergeProps(
      {
        className: cn(badgeVariants({ className, variant }))
      },
      props
    ),
    render,
    state: {
      slot: "badge",
      variant
    }
  });
}
function Avatar({
  className,
  size = "default",
  ...props
}) {
  return /* @__PURE__ */ jsx(
    Avatar$1.Root,
    {
      "data-slot": "avatar",
      "data-size": size,
      className: cn(
        "size-8 rounded-full after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 after:border-border group/avatar relative flex shrink-0 select-none after:absolute after:inset-0 after:border after:mix-blend-darken dark:after:mix-blend-lighten",
        className
      ),
      ...props
    }
  );
}
function AvatarImage({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    Avatar$1.Image,
    {
      "data-slot": "avatar-image",
      className: cn(
        "rounded-full aspect-square size-full object-cover",
        className
      ),
      ...props
    }
  );
}
function AvatarFallback({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    Avatar$1.Fallback,
    {
      "data-slot": "avatar-fallback",
      className: cn(
        "bg-muted text-muted-foreground rounded-full flex size-full items-center justify-center text-sm group-data-[size=sm]/avatar:text-xs",
        className
      ),
      ...props
    }
  );
}
function PostList({ posts }) {
  return /* @__PURE__ */ jsx("div", { className: "py-24 sm:py-32", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-6 lg:px-8", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between pb-16", children: [
      /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-2xl lg:mx-0", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-4xl font-semibold tracking-tight text-pretty sm:text-5xl", children: "From the blog" }),
        /* @__PURE__ */ jsx("p", { className: "mt-2 text-lg/8 text-muted-foreground", children: "Learn how to grow your business with our expert advice." })
      ] }),
      /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(CreatePostForm, {}) })
    ] }),
    /* @__PURE__ */ jsx(Separator, {}),
    /* @__PURE__ */ jsx("div", { className: "mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 pt-16 mt-6 lg:mx-0 lg:max-w-none lg:grid-cols-3", children: posts.map((post) => {
      const dateTime = format(new Date(post.createdAt), "MMMM dd, yyyy");
      return /* @__PURE__ */ jsxs(
        "article",
        {
          className: "flex max-w-xl flex-col items-start justify-between",
          children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-x-4 text-xs", children: [
              /* @__PURE__ */ jsx("time", { dateTime, className: "text-muted-foreground", children: dateTime }),
              /* @__PURE__ */ jsx(Badge, { render: /* @__PURE__ */ jsx(Link, { to: "/" }), variant: "secondary", children: "Computer" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "group relative grow", children: [
              /* @__PURE__ */ jsx("h3", { className: "mt-3 text-lg/6 font-semibold group-hover:opacity-70", children: /* @__PURE__ */ jsxs(Link, { to: "/posts/$postId", params: { postId: post.id }, children: [
                /* @__PURE__ */ jsx("span", { className: "absolute inset-0" }),
                post.title
              ] }) }),
              /* @__PURE__ */ jsx("p", { className: "mt-5 line-clamp-3 text-sm/6 text-muted-foreground", children: post.body })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "relative mt-8 flex items-center gap-x-4 justify-self-end", children: [
              /* @__PURE__ */ jsxs(Avatar, { className: "size-10! bg-neutral-200", children: [
                /* @__PURE__ */ jsx(
                  AvatarImage,
                  {
                    src: `https://robohash.org/${post.id}`,
                    alt: "Putra Adi Pradana"
                  }
                ),
                /* @__PURE__ */ jsx(AvatarFallback, { children: "A" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "text-sm/6", children: [
                /* @__PURE__ */ jsx("p", { className: "font-semibold", children: /* @__PURE__ */ jsxs(Link, { to: "/", children: [
                  /* @__PURE__ */ jsx("span", { className: "absolute inset-0" }),
                  "Putra Adi Pradana"
                ] }) }),
                /* @__PURE__ */ jsx("p", { className: "text-gray-400", children: "Owner" })
              ] })
            ] })
          ]
        },
        post.id
      );
    }) })
  ] }) });
}
function RouteComponent() {
  const {
    data: posts
  } = useSuspenseQuery(getPostsQueryOptions());
  return /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(PostList, { posts }) });
}
export {
  RouteComponent as component
};
