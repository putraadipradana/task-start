import z from 'zod'
import { useForm } from '@tanstack/react-form'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useState } from 'react'
import { toast } from 'sonner'
import { createPostFn } from '../../server/functions'
import { POST_QUERY_KEYS } from '../../constant'
import { Button } from '@/components/ui/button'
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Spinner } from '@/components/ui/spinner'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer'
import { useIsMobile } from '@/hooks/use-mobile'
import { Separator } from '@/components/ui/separator'

const formSchema = z.object({
  title: z.string().min(1, 'Title is empty'),
  body: z.string().min(1, 'Body is empty'),
})

function CreatePostForm() {
  const isMobile = useIsMobile()
  const queryClient = useQueryClient()

  const [isOpen, setIsOpen] = useState(false)

  const createPostMutation = useMutation({
    mutationFn: async (data: z.infer<typeof formSchema>) => {
      await createPostFn({ data })
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: POST_QUERY_KEYS.all,
      })
    },
  })

  const form = useForm({
    defaultValues: {
      title: '',
      body: '',
    },
    validators: {
      onChange: formSchema,
    },
    onSubmit: async ({ value }) => {
      try {
        await createPostMutation.mutateAsync(value)
        form.reset()
      } catch (error) {
        toast.error('Failed to create post')
      } finally {
        setTimeout(() => setIsOpen(false), 500)
        setTimeout(() => toast.success('Post created successfully'), 700)
      }
    },
  })

  return (
    <Drawer
      open={isOpen}
      onOpenChange={setIsOpen}
      direction={isMobile ? 'bottom' : 'right'}
    >
      <DrawerTrigger asChild>
        <Button>Create post</Button>
      </DrawerTrigger>
      <DrawerContent className="rounded-none!">
        <DrawerHeader className="gap-1">
          <DrawerTitle>Create new post</DrawerTitle>
          <DrawerDescription>Please fill all form</DrawerDescription>
        </DrawerHeader>
        <div className="flex flex-col gap-4 overflow-y-auto px-4">
          <Separator />
          <form
            id="create-post-form"
            className="pb-5"
            onSubmit={(e) => {
              e.preventDefault()
              form.handleSubmit()
            }}
          >
            <FieldGroup>
              <form.Field
                name="title"
                children={(field) => {
                  const isInvalid =
                    field.state.meta.isTouched && !field.state.meta.isValid
                  return (
                    <Field data-invalid={isInvalid}>
                      <FieldLabel htmlFor={field.name}>Title</FieldLabel>
                      <Input
                        id={field.name}
                        name={field.name}
                        value={field.state.value}
                        onBlur={field.handleBlur}
                        onChange={(e) => field.handleChange(e.target.value)}
                        aria-invalid={isInvalid}
                        autoComplete="off"
                      />
                      {isInvalid && (
                        <FieldError errors={field.state.meta.errors} />
                      )}
                    </Field>
                  )
                }}
              />
              <form.Field
                name="body"
                children={(field) => {
                  const isInvalid =
                    field.state.meta.isTouched && !field.state.meta.isValid
                  return (
                    <Field data-invalid={isInvalid}>
                      <FieldLabel htmlFor={field.name}>Body</FieldLabel>
                      <Textarea
                        id={field.name}
                        name={field.name}
                        value={field.state.value}
                        onBlur={field.handleBlur}
                        onChange={(e) => field.handleChange(e.target.value)}
                        aria-invalid={isInvalid}
                      />
                      {isInvalid && (
                        <FieldError errors={field.state.meta.errors} />
                      )}
                    </Field>
                  )
                }}
              />
            </FieldGroup>
          </form>
          <Separator className="sm:sr-only" />
        </div>
        <DrawerFooter>
          <form.Subscribe
            selector={(state) => [state.canSubmit, state.isSubmitting]}
            children={([canSubmit, isSubmitting]) => (
              <>
                <Button
                  type="submit"
                  form="create-post-form"
                  disabled={!canSubmit}
                >
                  {isSubmitting ? <Spinner /> : 'Create post'}
                </Button>
                <DrawerClose asChild>
                  <Button variant="outline">Cancel</Button>
                </DrawerClose>
              </>
            )}
          />
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}

export { CreatePostForm }
