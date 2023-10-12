function checkOptions(value: string, target: string[]) {
  return target.includes(value) || value === "";
}

export default checkOptions;
