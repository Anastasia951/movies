export const getYear = (str: string) => {
  const [year, month, day] = str.split('-')

  return { year, month, day }
}
