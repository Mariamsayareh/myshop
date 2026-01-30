import i18n from '../i18n.jsx';
import useFetch from './useFetch.js';

export function useCategory(categoryId) {
    return useFetch(
        ['productsByCategory', categoryId, i18n.language],
        `/Products/category/${categoryId}`
    );
}