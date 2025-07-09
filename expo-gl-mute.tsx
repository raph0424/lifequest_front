import { GLView } from 'expo-gl';

// Patch du contexte WebGL pour ignorer pixelStorei
export function suppressPixelStoreiWarnings() {
  const originalCreateContextAsync = GLView.createContextAsync;

  GLView.createContextAsync = async function (...args) {
    const gl: any = await originalCreateContextAsync.apply(this, args);

    const originalPixelStorei = gl.pixelStorei;
    gl.pixelStorei = function (...params: any[]) {
      try {
        return originalPixelStorei.apply(this, params);
      } catch (e) {
        if (__DEV__) {
          const error = e as Error;
          if (error.message.includes('pixelStorei')) {
            // Ne log pas
            return;
          }
        }
        throw e;
      }
    };

    return gl;
  };
}
