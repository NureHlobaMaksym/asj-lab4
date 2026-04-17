import { ref, watch, type Ref } from 'vue';

export const useLocalStorage = <T>(storageKey: string, initialValue: T): Ref<T> => {
  const storedRaw = localStorage.getItem(storageKey);
  const state = ref<T>(initialValue) as Ref<T>;

  if (storedRaw !== null) {
    try {
      state.value = JSON.parse(storedRaw) as T;
    } catch {
      state.value = initialValue;
    }
  }

  watch(
    state,
    (value: T): void => {
      localStorage.setItem(storageKey, JSON.stringify(value));
    },
    { deep: true }
  );

  return state;
};
