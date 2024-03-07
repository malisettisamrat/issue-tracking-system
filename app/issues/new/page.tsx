'use client';

import { Button, Callout, Text, TextField } from '@radix-ui/themes'
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { useForm, Controller } from 'react-hook-form';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { createIssueSchema } from '@/app/validationSchemas';
import { z } from 'zod';
import ErrorMessage from '@/app/components/ErrorMessage';
import { Spinner } from '@/app/components';

type IssueForm = z.infer<typeof createIssueSchema>;

const NewIssuePage = () => {
  const router = useRouter();
  const { register, control, handleSubmit, formState: { errors } } = useForm<IssueForm>({
    resolver: zodResolver(createIssueSchema), // Integration of zod in client side..
  });
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const onSubmit = handleSubmit(async (data) => {
    try {
      setIsLoading(true);
      await axios.post('/api/issues', data);
      router.push('/issues');
    } catch (error) {
      setIsLoading(false);
      setError('An Unexpected Error happened.')
    }
  });

  return (
    <div className='max-w-xl'>
      {error &&
        <Callout.Root className='mb-5'>
          <Callout.Text color='red'>
            {error}
          </Callout.Text>
        </Callout.Root>
      }
      <form className='space-y-2.5' onSubmit={onSubmit}>
        <TextField.Root>
          <TextField.Input placeholder="Title" {...register('title')} />
        </TextField.Root>
        <ErrorMessage>{errors.title?.message}</ErrorMessage>
        <Controller name='description' control={control} render={({ field }) => <SimpleMDE placeholder='Description' {...field} />} />
        <ErrorMessage>{errors.description?.message}</ErrorMessage>
        <Button disabled={isLoading}>Submit New Issue {isLoading && <Spinner />}</Button>
      </form>
    </div>
  )
}

export default NewIssuePage;