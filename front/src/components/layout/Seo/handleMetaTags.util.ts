interface IHandleMetaTags {
  (metaTags: string[] | null): {
    name: string;
    content: string;
  }[];
}

export const handleMetaTags: IHandleMetaTags = (metaTags) => {
  const keywords = [
    {
      name: 'keywords',
      content: (metaTags || []).join(','),
    },
  ];

  return keywords;
};
