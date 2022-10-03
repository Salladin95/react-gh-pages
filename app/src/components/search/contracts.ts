export type SearchContainerProps = {
  onChange: (value: string) => void;
  value: string;
};

export type SearchPresentationProps = {
  onChange: (e: React.FormEvent<HTMLInputElement>) => void;
  value: string;
};
