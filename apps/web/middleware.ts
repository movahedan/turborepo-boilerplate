import { middleware } from './src/navigation';

export const config = {
  matcher: ['/', '/(en|nl)/:path*'],
};

export default middleware;
