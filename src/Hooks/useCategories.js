import useFetch from './useFetch.js';
export function useCategories() {
    return useFetch(['categories'], '/categories');
}