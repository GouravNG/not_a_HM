import { http, HttpResponse } from 'msw';
import { allMerchData, allProducts, mainCategories } from './data';
import type { CartType } from '@repo/types/types';

let cartDB: CartType[] = [];

export const handlers = [
  http.get('*/getAllMainCategories', () => {
    return HttpResponse.json({ categories: mainCategories });
  }),

  http.get('*/getAllMerchData/:categoryId', ({ params }) => {
    const { categoryId } = params;
    const data = allMerchData[categoryId as string];
    if (data) {
      return HttpResponse.json(data);
    }
    return HttpResponse.json({ code: 404, message: 'Not found' });
  }),

  http.get('*/getAllProducts', ({ request }) => {
    const url = new URL(request.url);
    const page = parseInt(url.searchParams.get('page') || '1');
    const size = parseInt(url.searchParams.get('size') || '10');

    const startIndex = size * (page - 1);
    const endIndex = size * page;
    const allPages = Math.ceil(allProducts.length / size);

    return HttpResponse.json({
      page: { page: page, size: size, count: allPages },
      paginatedData: allProducts.slice(startIndex, endIndex),
    });
  }),

  http.get('*/getProductById/:productId', ({ params }) => {
    const { productId } = params;
    const product = allProducts.find((p) => p.id === productId);
    if (product) {
      return HttpResponse.json(product);
    }
    return HttpResponse.json({ code: 500, message: 'something went wrong!!' });
  }),

  http.get('*/getCart', () => {
    return HttpResponse.json(cartDB);
  }),

  http.post('*/addItemToCart', async ({ request }) => {
    const item = (await request.json()) as CartType;
    cartDB.push(item);
    return HttpResponse.json({ success: true, message: 'Item added to cart' });
  }),

  http.delete('*/removeItemFromCart', async ({ request }) => {
    const { id } = (await request.json()) as { id: number };
    cartDB.splice(id, 1);
    return HttpResponse.json(cartDB);
  }),

  http.patch('*/updateItemFromCart', async ({ request }) => {
    const { id, ...props } = (await request.json()) as { id: number } & Partial<CartType>;
    if (cartDB[id]) {
      cartDB[id] = { ...cartDB[id], ...props };
    }
    return HttpResponse.json(cartDB);
  }),
];
