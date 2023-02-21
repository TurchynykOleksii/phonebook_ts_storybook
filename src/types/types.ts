export type StateObj = {
  contacts: {
    items: { id: string; name: string; number: string }[];
  };
  filter: string;
};

export type ContactStateObj = {
  id: string;
  name: string;
  number: string;
};
