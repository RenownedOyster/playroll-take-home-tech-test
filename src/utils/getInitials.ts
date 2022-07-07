const removeTitleRegex = /(Mr|MR|Ms|Miss|Mrs|Dr|Sir|PhD)(\.?)\s/;

const getInitials = (name: string) =>
  name
    .replace(removeTitleRegex, "")
    .split(" ")
    .map((n) => n[0])
    .join("");

export default getInitials;
