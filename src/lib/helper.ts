export const withBasePath = (val: string) => {
  return process.env.NEXT_PUBLIC_APP_ENV === "production"
    ? `/onepiece.fandom/${val}`
    : `${val}`;
};
