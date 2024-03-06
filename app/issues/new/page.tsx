'use client';

import { Button, TextArea, TextField } from '@radix-ui/themes'
import React from 'react'

const NewIssuePage = () => {
  return (
    <div className='max-w-xl p-5 space-y-2.5'>
      <TextField.Root>
        <TextField.Input placeholder="Title" />
      </TextField.Root>
      <TextArea size="3" placeholder="Description" />
      <Button>Submit New Issue</Button>
    </div>
  )
}

export default NewIssuePage