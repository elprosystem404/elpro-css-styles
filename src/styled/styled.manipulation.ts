const styledManipulation = (tag: string, children: string) => {
  return `<${tag}> ${children} <${tag}/>`;
};

export { styledManipulation };
