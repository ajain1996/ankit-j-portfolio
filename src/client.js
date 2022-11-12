import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId: '3qd516er',
  dataset: 'production',
  apiVersion: '2022-02-01',
  useCdn: true,
  token: 'skZ8RVKouwf7u89Vevzo5OpQUWqRUmqnHSDIsyU3ZuuVe4K6dIRrMDxnfvQx6SFMxNBhgOOHNtm1rgjZpT8F0c0LC4BqR0rz5A6qc2vt7bCcrtM2uEnl8oYCb9YmDc45qsqjPnXM7ZLsmYDgoh0eWDhr2mAry1O4eEGCZbDFRJAow33XZ2HZ',
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
