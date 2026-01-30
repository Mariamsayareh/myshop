import i18n from '../i18n.jsx';
import useFetch from './useFetch.js';
export function useCategories() {
    return useFetch(['categories', i18n.language], '/categories');
}