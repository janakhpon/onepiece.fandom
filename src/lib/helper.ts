export const withBasePath = (val: string) => {
  return process.env.NEXT_PUBLIC_APP_ENV === "production"
    ? `/onepiece.fandom/${val}`
    : `${val}`;
};

export const withFullPath = (val: string) => {
  return process.env.NEXT_PUBLIC_APP_ENV === "production"
    ? `https://janakhpon.github.io/onepiece.fandom/${val}`
    : `${val}`;
};
