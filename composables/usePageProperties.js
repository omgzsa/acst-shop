export default function usePageProperties(data) {
  const pageTitle = computed(
    () => data[0].kapcsolodoAlKategoria.termekAlKategoriaNev
  );
  const pageDescription = computed(
    () => data[0].kapcsolodoAlKategoria.termekAlKategoriaLeiras
  );
  const pageQuantity = computed(() => data.length);
  const filteredItems = computed(() => data);

  return {
    pageTitle,
    pageDescription,
    pageQuantity,
    filteredItems,
  };
}
