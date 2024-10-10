import React from 'react';
import { StoryFn, Meta } from '@storybook/react'; // Correct imports for Storybook types
import { AppFileUploader, FileUploaderProps } from '../molecules/AppFileUpload'; // Ensure correct import for types

// Simulate an upload function
const mockUpload = (file: File): Promise<string> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(URL.createObjectURL(file)); // Simulate returning the file URL
    }, 1000); // Simulate a 1-second upload
  });
};

// Define metadata for the component
export default {
  title: 'AppFileUploader',
  component: AppFileUploader,
} as Meta<typeof AppFileUploader>; // Provide the proper type for the default export

// Template for the stories, explicitly typing `args` using `FileUploaderProps`
const Template: StoryFn<FileUploaderProps> = (args) => <AppFileUploader {...args} />;

// Default story
export const Default = Template.bind({});
Default.args = {
  onUpload: mockUpload,
};

// Valid file upload story
export const ValidFileUpload = Template.bind({});
ValidFileUpload.args = {
  onUpload: mockUpload,
};

// Exceeding file size story
export const ExceedFileSize = Template.bind({});
ExceedFileSize.args = {
  maxSize: 500 * 1024, // 500 KB limit
  onUpload: mockUpload,
};

// Invalid file type story
export const InvalidFileType = Template.bind({});
InvalidFileType.args = {
  allowedTypes: ['image/png'], // Only allow PNG files
  onUpload: mockUpload,
};
