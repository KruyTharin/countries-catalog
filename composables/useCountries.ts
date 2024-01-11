import type { ICountriesResponse } from "~/types";

export function useCountries() {
  const config = useRuntimeConfig();

  const { data: countries } = useFetch<ICountriesResponse[]>(
    `${config.public.apiBase}/all?fields=name,flags,cca2,cca3,altSpellings,idd,capital,region`
  );

  const searchQuery = ref("");
  const sortDirection = ref<"asc" | "desc">("asc");
  const currentPage = ref(1);
  const currentCountry = ref();
  const rowsPerPage = 25;

  const filteredCountries = computed(() => {
    const query = searchQuery.value.toLowerCase();
    // if not reset currentPage data can be empty even value is contain
    currentPage.value = 1;
    return (countries.value ?? []).filter((country) =>
      country?.name?.common.toLowerCase().includes(query)
    );
  });

  const sortedCountries = computed(() => {
    const sorted = filteredCountries.value.slice();
    sorted.sort((a, b) => {
      const nameA = a.name.common.toLowerCase();
      const nameB = b.name.common.toLowerCase();
      return sortDirection.value === "asc"
        ? nameA.localeCompare(nameB)
        : nameB.localeCompare(nameA);
    });
    return sorted;
  });

  const toggleSort = () => {
    sortDirection.value = sortDirection.value === "asc" ? "desc" : "asc";
  };

  const paginatedCountries = computed(() => {
    const startIndex = (currentPage.value - 1) * rowsPerPage;
    const endIndex = startIndex + rowsPerPage;
    return sortedCountries.value.slice(startIndex, endIndex);
  });

  /**
   * @description Find details of a country
   * @param name
   * @returns
   */
  const findCountryDetails = async (name: string) => {
    currentCountry.value = (paginatedCountries.value ?? []).find(
      (country) => country.name.common === name
    );
    return currentCountry.value;
  };

  const totalPages = computed(() => {
    return Math.ceil(filteredCountries.value.length / rowsPerPage);
  });

  const prevPage = () => {
    currentPage.value = Math.max(1, currentPage.value - 1);
  };

  const nextPage = () => {
    currentPage.value = Math.min(totalPages.value, currentPage.value + 1);
  };

  return {
    paginatedCountries,
    filteredCountries,
    sortDirection,
    searchQuery,
    currentPage,
    totalPages,
    currentCountry,
    nextPage,
    prevPage,
    toggleSort,
    findCountryDetails,
  };
}
