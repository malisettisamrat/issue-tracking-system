'use client';

import { Button, TextArea, TextField } from '@radix-ui/themes'
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";

const NewIssuePage = () => {
  return (
    <div className='max-w-xl p-5 space-y-2.5'>
      <TextField.Root>
        <TextField.Input placeholder="Title" />
      </TextField.Root>
      <SimpleMDE />
      <Button>Submit New Issue</Button>
    </div>
  )
}

export default NewIssuePage