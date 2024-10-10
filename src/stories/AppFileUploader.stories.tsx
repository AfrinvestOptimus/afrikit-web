import React from 'react';
import { AppFileUploader } from '../molecules/AppFileUpload';

// Simulate an upload function
const mockUpload = (file: File) => {
  return new Promise<string>((resolve) => {
    setTimeout(() => {
      resolve(URL.createObjectURL(file)); // Simulate returning the file URL
    }, 1000); // Simulate a 1-second upload
  });
};

export default {
  title: 'Components/AppFileUploader',
  component: AppFileUploader,
};

// Template for the stories
const Template = (args) => <AppFileUploader {...args} />;

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
  allowedTypes: ['image/png'], // Only allow PNG
  onUpload: mockUpload,
};
